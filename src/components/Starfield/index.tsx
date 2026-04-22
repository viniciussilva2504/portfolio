'use client'

import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`

type Column = {
  x: number
  y: number
  speed: number
  chars: string[]
  charIndex: number
  opacity: number
  color: string
}

const CHARS = '01アイウエオカキクケコサシスセソタチツテトナニヌネノABCDEFGHIJKLMN0123456789'
const BAUHAUS_COLORS = ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#e8001c', '#0033cc', '#f5d800']

const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const COL_WIDTH = 18
    const FONT_SIZE = 11
    let columns: Column[] = []
    let animationId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initColumns()
    }

    const initColumns = () => {
      const count = Math.floor(canvas.width / COL_WIDTH)
      columns = Array.from({ length: count }, (_, i) => {
        const chars: string[] = Array.from(
          { length: Math.floor(Math.random() * 12) + 4 },
          () => CHARS[Math.floor(Math.random() * CHARS.length)]
        )
        return {
          x: i * COL_WIDTH,
          y: Math.random() * -canvas.height,
          speed: Math.random() * 0.8 + 0.3,
          chars,
          charIndex: 0,
          opacity: Math.random() * 0.25 + 0.04,
          color: BAUHAUS_COLORS[Math.floor(Math.random() * BAUHAUS_COLORS.length)],
        }
      })
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.04)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${FONT_SIZE}px "Space Mono", monospace`

      for (const col of columns) {
        col.y += col.speed

        col.charIndex = (col.charIndex + 1) % col.chars.length
        col.chars[col.charIndex] = CHARS[Math.floor(Math.random() * CHARS.length)]

        for (let j = 0; j < col.chars.length; j++) {
          const y = col.y - j * (FONT_SIZE + 4)
          if (y < 0 || y > canvas.height) continue

          const fade = 1 - j / col.chars.length
          const alpha = col.opacity * fade

          if (j === 0) {
            ctx.fillStyle = `rgba(255,255,255,${Math.min(alpha * 3, 0.9)})`
          } else {
            const isColor = col.color !== '#ffffff'
            if (isColor) {
              const r = parseInt(col.color.slice(1, 3), 16)
              const g = parseInt(col.color.slice(3, 5), 16)
              const b = parseInt(col.color.slice(5, 7), 16)
              ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`
            } else {
              ctx.fillStyle = `rgba(255,255,255,${alpha})`
            }
          }

          ctx.fillText(col.chars[j], col.x, y)
        }

        if (col.y - col.chars.length * (FONT_SIZE + 4) > canvas.height) {
          col.y = Math.random() * -200 - 50
          col.speed = Math.random() * 0.8 + 0.3
          col.opacity = Math.random() * 0.25 + 0.04
          col.color = BAUHAUS_COLORS[Math.floor(Math.random() * BAUHAUS_COLORS.length)]
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <Canvas ref={canvasRef} />
}

export default Starfield

