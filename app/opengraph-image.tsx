import { ImageResponse } from 'next/og'

export const alt = 'Vinicius Jesus da Silva — QA Analyst, Software Testing and Test Automation'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '72px', background: '#FAFAF7', color: '#111111', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#D64541', fontSize: '18px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>
        <span style={{ width: '14px', height: '14px', background: '#D64541' }} /> QA ANALYST · SOFTWARE QUALITY
      </div>
      <div style={{ display: 'flex', marginTop: '30px', fontSize: '66px', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-3px' }}>Vinicius Jesus da Silva</div>
      <div style={{ display: 'flex', marginTop: '24px', fontSize: '29px', color: '#4A4A4A' }}>Software Testing · Test Automation</div>
      <div style={{ display: 'flex', marginTop: '50px', borderTop: '2px solid #111111', paddingTop: '20px', fontSize: '18px', color: '#4A4A4A' }}>Porto, Portugal <span style={{ color: '#356AE6', margin: '0 14px' }}>/</span> Cypress · Python · API quality</div>
    </div>,
    { ...size }
  )
}
