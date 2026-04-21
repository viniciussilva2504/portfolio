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
          minHeight: '100vh',
          gap: '16px',
          fontFamily: 'sans-serif',
          background: '#0a0c10',
          color: '#e2e8f0',
        }}
      >
        <h2 style={{ fontSize: '20px' }}>Something went wrong</h2>
        <button
          onClick={reset}
          style={{
            padding: '8px 16px',
            background: '#00e5ff',
            color: '#0a0c10',
            border: 'none',
            borderRadius: '4px',
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
