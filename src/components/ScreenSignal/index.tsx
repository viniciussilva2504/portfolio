import styled from 'styled-components'

const SignalLayer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  overflow: hidden;
  pointer-events: none;

  span {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    opacity: 0;
    will-change: transform, opacity;
  }

  .red {
    top: 0.65rem;
    left: 0;
    background: var(--color-red);
    animation: red-crossing 16s ease-in-out infinite;
  }

  .blue {
    top: 0.65rem;
    right: 0;
    background: var(--color-blue);
    animation: blue-crossing 16s ease-in-out infinite;
  }

  .red-vertical {
    top: 0;
    left: 0.65rem;
    background: var(--color-red);
    animation: red-vertical-crossing 16s ease-in-out infinite;
  }

  .blue-vertical {
    bottom: 0;
    left: 50%;
    background: var(--color-blue);
    animation: blue-vertical-crossing 16s ease-in-out infinite;
  }

  .yellow {
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
    width: 3px;
    height: 3px;
    background: var(--color-yellow);
    animation: yellow-flash 16s ease-in-out infinite;
  }

  @keyframes red-crossing {
    0% { opacity: 0; transform: translate3d(-4px, 0, 0); }
    1% { opacity: 0.65; }
    8% { transform: translate3d(16.5vw, 1px, 0); }
    15% { transform: translate3d(36vw, -1px, 0); }
    22% { transform: translate3d(55.5vw, 1px, 0); }
    28.125% { opacity: 0.65; transform: translate3d(75vw, 0, 0); }
    29.375%, 100% { opacity: 0; transform: translate3d(75vw, 0, 0); }
  }

  @keyframes blue-crossing {
    0%, 41.25% { opacity: 0; transform: translate3d(4px, 0, 0); }
    42.25% { opacity: 0.65; }
    49.25% { transform: translate3d(-22vw, -1px, 0); }
    56.25% { transform: translate3d(-48vw, 1px, 0); }
    63.25% { transform: translate3d(-74vw, -1px, 0); }
    69.375% { opacity: 0.65; transform: translate3d(-100vw, 0, 0); }
    70.625%, 100% { opacity: 0; transform: translate3d(-100vw, 0, 0); }
  }

  @keyframes red-vertical-crossing {
    0% { opacity: 0; transform: translate3d(0, -4px, 0); }
    1% { opacity: 0.65; }
    8% { transform: translate3d(1px, 22vh, 0); }
    15% { transform: translate3d(-1px, 48vh, 0); }
    22% { transform: translate3d(1px, 74vh, 0); }
    28.125% { opacity: 0.65; transform: translate3d(0, 100vh, 0); }
    29.375%, 100% { opacity: 0; transform: translate3d(0, 100vh, 0); }
  }

  @keyframes blue-vertical-crossing {
    0%, 41.25% { opacity: 0; transform: translate3d(-2px, 4px, 0); }
    42.25% { opacity: 0.65; }
    49.25% { transform: translate3d(-3px, -22vh, 0); }
    56.25% { transform: translate3d(-1px, -48vh, 0); }
    63.25% { transform: translate3d(-3px, -74vh, 0); }
    69.375% { opacity: 0.65; transform: translate3d(-2px, -100vh, 0); }
    70.625%, 100% { opacity: 0; transform: translate3d(-2px, -100vh, 0); }
  }

  @keyframes yellow-flash {
    0%, 82.5% { opacity: 0; }
    83.5%, 84.5% { opacity: 0.7; }
    85.5%, 100% { opacity: 0; }
  }

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`

export default function ScreenSignal() {
  return (
    <SignalLayer aria-hidden="true">
      <span className="red" />
      <span className="blue" />
      <span className="red-vertical" />
      <span className="blue-vertical" />
      <span className="yellow" />
    </SignalLayer>
  )
}
