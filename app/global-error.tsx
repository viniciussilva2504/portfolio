'use client'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100svh',
          gap: '1rem',
          padding: '2rem',
          fontFamily: 'Inter, Arial, sans-serif',
          background: '#FAFAF7',
          color: '#111111',
        }}
      >
        <h1 style={{ fontSize: 'clamp(1.75rem, 6vw, 2.5rem)' }}>Something went wrong</h1>
        <button
          onClick={reset}
          style={{
            padding: '0.7rem 1rem',
            background: '#111111',
            color: '#FAFAF7',
            border: '1px solid #111111',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          Try again
        </button>
      </body>
    </html>
  )
}
