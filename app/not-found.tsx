export default function NotFound() {
  return (
    <main style={{ minHeight: '100svh', display: 'grid', placeItems: 'center', padding: '2rem', background: '#FAFAF7', color: '#111111', fontFamily: 'Inter, Arial, sans-serif' }}>
      <section aria-labelledby="not-found-title" style={{ width: 'min(100%, 36rem)', borderTop: '1px solid #111111', paddingTop: '1.5rem' }}>
        <p style={{ color: '#D64541', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em' }}>404 / PAGE NOT FOUND</p>
        <h1 id="not-found-title" style={{ fontSize: 'clamp(2rem, 7vw, 3.5rem)', lineHeight: 1.1 }}>This page isn’t available.</h1>
        <a href="/" style={{ fontWeight: 700, textUnderlineOffset: '0.25em' }}>Return to the portfolio →</a>
      </section>
    </main>
  )
}
