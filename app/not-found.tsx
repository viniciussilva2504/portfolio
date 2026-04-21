export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: '12px',
        fontFamily: 'sans-serif',
        background: '#0a0c10',
        color: '#e2e8f0',
      }}
    >
      <span
        style={{
          fontFamily: 'monospace',
          fontSize: '11px',
          letterSpacing: '3px',
          color: '#00e5ff',
          textTransform: 'uppercase',
        }}
      >
        404 // NOT FOUND
      </span>
      <a
        href="/"
        style={{ color: '#00e5ff', fontSize: '14px', textDecoration: 'none' }}
      >
        ← Back to portfolio
      </a>
    </div>
  )
}
