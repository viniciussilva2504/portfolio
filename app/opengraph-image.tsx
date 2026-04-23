import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Vinicius J. Silva — Frontend Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '64px 72px',
          background: '#0a0c10',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid decoration */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(0,229,255,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Label */}
        <div
          style={{
            display: 'flex',
            fontSize: '13px',
            letterSpacing: '4px',
            color: '#00e5ff',
            textTransform: 'uppercase',
            marginBottom: '20px',
            fontFamily: 'monospace',
          }}
        >
          // Frontend Developer
        </div>

        {/* Name */}
        <div
          style={{
            display: 'flex',
            fontSize: '72px',
            fontWeight: 700,
            color: '#e2e8f0',
            lineHeight: 1.1,
            marginBottom: '20px',
            letterSpacing: '-1px',
          }}
        >
          Vinicius J. Silva
        </div>

        {/* Stack pills */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '40px',
          }}
        >
          {['React', 'TypeScript', 'Redux', 'Next.js', 'Cypress'].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  padding: '6px 16px',
                  borderRadius: '6px',
                  background: 'rgba(0,229,255,0.10)',
                  border: '1px solid rgba(0,229,255,0.25)',
                  color: '#00e5ff',
                  fontSize: '15px',
                  fontFamily: 'monospace',
                  letterSpacing: '0.5px',
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>

        {/* Location + status */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            color: '#64748b',
            fontSize: '16px',
            fontFamily: 'monospace',
          }}
        >
          <span>📍 Porto, Portugal</span>
          <span style={{ color: '#10b981' }}>● Available for work</span>
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            right: '72px',
            color: '#2a3344',
            fontSize: '14px',
            fontFamily: 'monospace',
            letterSpacing: '1px',
          }}
        >
          portfolio-ebon-nine-95.vercel.app
        </div>
      </div>
    ),
    { ...size }
  )
}
