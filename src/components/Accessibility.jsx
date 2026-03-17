import { useState, useEffect } from 'react';

export default function NeurodiverseToggle() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-reduced-motion', reducedMotion);
  }, [reducedMotion]);

  return (
    <div className="accessibility-panel">
      <button 
        onClick={() => setReducedMotion(!reducedMotion)}
        className={`toggle-btn ${reducedMotion ? 'active' : ''}`}
        aria-pressed={reducedMotion}
      >
        <span className="dot"></span>
        {reducedMotion ? 'Motion Off' : 'Motion On'}
      </button>

      <style jsx>{`
        .accessibility-panel {
          position: fixed;
          bottom: 2rem;
          left: 2rem;
          z-index: 10001;
        }
        .toggle-btn {
          background: var(--bg-color);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border-color);
          color: var(--text-color);
          padding: 0.5rem 1rem;
          border-radius: 100px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .toggle-btn.active {
          border-color: var(--accent-warm);
          color: var(--accent-warm);
        }
        .dot {
          width: 8px;
          height: 8px;
          background: currentColor;
          border-radius: 50%;
        }
        .toggle-btn:hover {
          background: var(--border-subtle);
        }
      `}</style>
    </div>
  );
}
