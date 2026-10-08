import puppeteer from 'puppeteer'
import { mkdir, mkdtemp } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'

const viewports = [
  { width: 320, height: 800 },
  { width: 375, height: 812 },
  { width: 430, height: 932 },
  { width: 768, height: 1024 },
  { width: 1024, height: 768 },
  { width: 1280, height: 800 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
]
const screenshotWidths = new Set([320, 768, 1280, 1440])
const baseUrl = process.env.PORTFOLIO_URL ?? 'http://localhost:3000'
const outputDir = await mkdtemp(path.join(tmpdir(), 'portfolio-responsive-'))
const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })

try {
  const page = await browser.newPage()
  await page.goto(baseUrl, { waitUntil: 'networkidle0', timeout: 30000 })
  for (const viewport of viewports) {
    await page.setViewport(viewport)
    await new Promise((resolve) => setTimeout(resolve, 100))
    const layout = await page.evaluate(() => {
      const overflowing = [...document.querySelectorAll('body *')]
        .filter((element) => {
          const style = getComputedStyle(element)
          const hidden = ['hidden', 'clip'].includes(style.overflowY)
          return hidden && element.scrollHeight > element.clientHeight + 1
        })
        .map((element) => `${element.tagName.toLowerCase()}${element.id ? `#${element.id}` : ''}`)
        .slice(0, 8)
      return {
        viewport: window.innerWidth,
        documentWidth: document.documentElement.scrollWidth,
        horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth,
        clippedContent: overflowing,
        brokenImages: [...document.images]
          .filter((image) => image.complete && image.naturalWidth === 0)
          .map((image) => image.currentSrc),
      }
    })
    if (screenshotWidths.has(viewport.width)) {
      await page.screenshot({ path: path.join(outputDir, `${viewport.width}.png`), fullPage: true })
    }
    console.log(JSON.stringify(layout))
  }
  await page.setViewport({ width: 320, height: 800 })
  const links = await page.evaluate(() => {
    const anchors = [...document.querySelectorAll('a')]
    return {
      unnamedLinks: anchors.filter((anchor) => !(anchor.getAttribute('aria-label') || anchor.textContent?.trim() || anchor.querySelector('img[alt]'))).length,
      missingAnchorTargets: anchors
        .filter((anchor) => anchor.hash && anchor.origin === location.origin && !document.getElementById(decodeURIComponent(anchor.hash.slice(1))))
        .map((anchor) => anchor.getAttribute('href')),
      projectCards: document.querySelectorAll('#projects article').length,
    }
  })
  await page.keyboard.press('Tab')
  const firstTab = await page.evaluate(() => ({
    tag: document.activeElement?.tagName,
    href: document.activeElement?.getAttribute('href') ?? '',
    outlineStyle: document.activeElement ? getComputedStyle(document.activeElement).outlineStyle : 'none',
  }))
  const resumeStatus = await page.evaluate(async () => (await fetch('/CV_Vinicius_Silva_Frontend.pdf')).status)
  console.log(JSON.stringify({ links, firstTab, resumeStatus }))
  console.log(`Screenshots: ${outputDir}`)
} finally {
  await browser.close()
}
