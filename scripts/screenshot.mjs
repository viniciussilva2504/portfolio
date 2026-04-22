/**
 * screenshot.mjs
 *
 * Generates desktop and mobile screenshots of the portfolio
 * and saves them to public/screenshots/.
 *
 * Usage:
 *   npm run screenshot              # connects to http://localhost:3000
 *   PORTFOLIO_URL=https://portfolio-ebon-nine-95.vercel.app npm run screenshot
 *
 * Requirements: dev server must be running (npm run dev) or provide a live URL.
 */

import puppeteer from 'puppeteer'
import { mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const OUT_DIR = path.join(ROOT, 'public', 'screenshots')

const BASE_URL = process.env.PORTFOLIO_URL ?? 'http://localhost:3000'

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900, fullPage: false },
  { name: 'mobile', width: 390, height: 844, fullPage: true },
]

async function takeScreenshots() {
  if (!existsSync(OUT_DIR)) {
    await mkdir(OUT_DIR, { recursive: true })
  }

  console.log(`Connecting to: ${BASE_URL}\n`)

  const browser = await puppeteer.launch({ headless: true })

  try {
    const page = await browser.newPage()

    for (const viewport of VIEWPORTS) {
      await page.setViewport({ width: viewport.width, height: viewport.height })
      await page.goto(BASE_URL, { waitUntil: 'networkidle0', timeout: 30000 })

      // Allow time for the canvas Starfield animation and fonts to render
      await new Promise((resolve) => setTimeout(resolve, 2500))

      const outputPath = path.join(OUT_DIR, `${viewport.name}.png`)
      await page.screenshot({ path: outputPath, fullPage: viewport.fullPage })

      console.log(`✓ ${viewport.name} (${viewport.width}×${viewport.height}) → ${outputPath}`)
    }
  } finally {
    await browser.close()
  }

  console.log('\nDone. Screenshots saved to public/screenshots/')
  console.log('Commit and push to update the README preview.')
}

takeScreenshots().catch((err) => {
  console.error('\n✗ Error taking screenshots:', err.message)
  console.error('Make sure the dev server is running: npm run dev')
  process.exit(1)
})
