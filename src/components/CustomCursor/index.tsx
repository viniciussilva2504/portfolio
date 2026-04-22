'use client'

import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const CursorWrapper = styled.div`
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  mix-blend-mode: difference;
`

const Dot = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  background: #ffffff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`

const Ring = styled.div`
  position: absolute;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease, height 0.2s ease, border-color 0.2s ease;
`

const CrossH = styled.div`
  position: absolute;
  width: 12px;
  height: 1px;
  background: rgba(255, 255, 255, 0.4);
  transform: translate(-50%, -50%);
`

const CrossV = styled.div`
  position: absolute;
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.4);
  transform: translate(-50%, -50%);
`

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const crossHRef = useRef<HTMLDivElement>(null)
  const crossVRef = useRef<HTMLDivElement>(null)

  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }

    let rafId: number
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12

      if (dotRef.current) {
        dotRef.current.style.left = `${mouse.current.x}px`
        dotRef.current.style.top = `${mouse.current.y}px`
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`
        ringRef.current.style.top = `${ring.current.y}px`
      }
      if (crossHRef.current) {
        crossHRef.current.style.left = `${mouse.current.x}px`
        crossHRef.current.style.top = `${mouse.current.y}px`
      }
      if (crossVRef.current) {
        crossVRef.current.style.left = `${mouse.current.x}px`
        crossVRef.current.style.top = `${mouse.current.y}px`
      }
      rafId = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <CursorWrapper>
      <Ring ref={ringRef} />
      <CrossH ref={crossHRef} />
      <CrossV ref={crossVRef} />
      <Dot ref={dotRef} />
    </CursorWrapper>
  )
}
