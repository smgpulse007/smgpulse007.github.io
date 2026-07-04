import { useMemo, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Layers, ShieldCheck } from 'lucide-react';
import { domainModules, type DomainKey } from '@data/domains';

export default function InteractiveDomainExplorer() {
  const [activeKey, setActiveKey] = useState<DomainKey>('healthcare');
  const prefersReducedMotion = useReducedMotion();
  const activeDomain = useMemo(
    () => domainModules.find((domain) => domain.key === activeKey) ?? domainModules[0],
    [activeKey],
  );

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) {
      return;
    }

    event.preventDefault();
    const lastIndex = domainModules.length - 1;
    const nextIndex =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? lastIndex
          : event.key === 'ArrowRight'
            ? index === lastIndex ? 0 : index + 1
            : index === 0 ? lastIndex : index - 1;
    setActiveKey(domainModules[nextIndex].key);
  }

  return (
    <section className={`domain-explorer accent-${activeDomain.accent}`} aria-label="Interactive domain explorer">
      <div className="domain-tabs" role="tablist" aria-label="Domain modules">
        {domainModules.map((domain, index) => (
          <button
            key={domain.key}
            id={`domain-tab-${domain.key}`}
            type="button"
            role="tab"
            aria-selected={activeKey === domain.key}
            aria-controls={`domain-panel-${domain.key}`}
            tabIndex={activeKey === domain.key ? 0 : -1}
            className={activeKey === domain.key ? 'active' : ''}
            onClick={() => setActiveKey(domain.key)}
            onKeyDown={(event) => onTabKeyDown(event, index)}
          >
            {domain.label}
          </button>
        ))}
      </div>

      <motion.div
        key={activeDomain.key}
        id={`domain-panel-${activeDomain.key}`}
        role="tabpanel"
        aria-labelledby={`domain-tab-${activeDomain.key}`}
        className="domain-panel"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
      >
        <aside className="domain-brief">
          <span>{activeDomain.label}</span>
          <h3>{activeDomain.title}</h3>
          <p>{activeDomain.thesis}</p>
          <div className="stack-list">
            {activeDomain.stack.map((item) => (
              <strong key={item}>{item}</strong>
            ))}
          </div>
        </aside>

        <div className="architecture-map" aria-label={`${activeDomain.label} architecture`}>
          <svg viewBox="0 0 760 340" preserveAspectRatio="none" aria-hidden="true">
            <motion.path
              d="M62 76 C210 30 272 116 384 92 S562 116 700 56"
              animate={prefersReducedMotion ? undefined : { strokeDashoffset: [0, -120] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: 'linear' }}
            />
            <motion.path
              d="M66 272 C204 214 294 302 426 242 S590 184 704 250"
              animate={prefersReducedMotion ? undefined : { strokeDashoffset: [0, -120] }}
              transition={{ duration: 8.5, repeat: Infinity, ease: 'linear' }}
            />
          </svg>
          {activeDomain.layers.map((layer, index) => (
            <article className="map-layer" key={layer.label}>
              <div>
                <Layers aria-hidden="true" size={16} strokeWidth={2.1} />
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h4>{layer.label}</h4>
              <p>{layer.detail}</p>
            </article>
          ))}
        </div>

        <aside className="proof-rail">
          <div>
            <ShieldCheck aria-hidden="true" size={18} strokeWidth={2.2} />
            <strong>Proof artifacts</strong>
          </div>
          {activeDomain.proofArtifacts.map((artifact) => (
            <span key={artifact}>{artifact}</span>
          ))}
          <div className="related-links">
            {activeDomain.relatedSystems.map((system) => (
              <a key={system.href} href={system.href}>
                {system.label}
                <ArrowUpRight aria-hidden="true" size={14} strokeWidth={2.2} />
              </a>
            ))}
          </div>
        </aside>
      </motion.div>

      <style>{`
        .domain-explorer {
          --domain-accent: #58dce6;
          --domain-soft: rgba(88, 220, 230, 0.12);
          border: 1px solid rgba(191, 203, 220, 0.14);
          border-radius: 8px;
          overflow: hidden;
          background: #07101b;
        }

        .domain-explorer.accent-emerald {
          --domain-accent: #8de8b4;
          --domain-soft: rgba(141, 232, 180, 0.12);
        }

        .domain-explorer.accent-violet {
          --domain-accent: #b9a7ff;
          --domain-soft: rgba(185, 167, 255, 0.13);
        }

        .domain-explorer.accent-amber {
          --domain-accent: #f1bd5c;
          --domain-soft: rgba(241, 189, 92, 0.13);
        }

        .domain-explorer.accent-rose {
          --domain-accent: #f0a0bd;
          --domain-soft: rgba(240, 160, 189, 0.12);
        }

        .domain-explorer.accent-slate {
          --domain-accent: #cbd5e1;
          --domain-soft: rgba(203, 213, 225, 0.12);
        }

        .domain-tabs {
          display: flex;
          flex-wrap: nowrap;
          overflow-x: auto;
          gap: 1px;
          background: rgba(191, 203, 220, 0.08);
        }

        .domain-tabs button {
          flex: 1 0 auto;
          min-height: 48px;
          border: 0;
          border-right: 1px solid rgba(191, 203, 220, 0.11);
          padding: 10px 14px;
          background: rgba(6, 12, 21, 0.96);
          color: #a7b5c8;
          cursor: pointer;
          font-size: 0.78rem;
          font-weight: 950;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .domain-tabs button.active {
          color: #f8fbff;
          background: var(--domain-soft);
          box-shadow: inset 0 -2px 0 var(--domain-accent);
        }

        .domain-panel {
          display: grid;
          grid-template-columns: minmax(220px, 0.38fr) minmax(0, 1fr) minmax(220px, 0.34fr);
          gap: 16px;
          padding: 16px;
          background:
            linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px),
            #07101b;
          background-size: 30px 30px, 30px 30px, auto;
        }

        .domain-brief,
        .proof-rail {
          border: 1px solid rgba(191, 203, 220, 0.13);
          border-radius: 8px;
          padding: 16px;
          background: rgba(3, 8, 15, 0.82);
        }

        .domain-brief > span {
          color: var(--domain-accent);
          font-size: 0.72rem;
          font-weight: 950;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .domain-brief h3 {
          margin: 10px 0 12px;
          color: #f8fbff;
          font-size: clamp(1.45rem, 2.4vw, 2.25rem);
          line-height: 1.05;
        }

        .domain-brief p {
          margin: 0;
          color: #aab8ca;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .stack-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 18px;
        }

        .stack-list strong,
        .proof-rail > span {
          border: 1px solid rgba(191, 203, 220, 0.14);
          border-radius: 999px;
          padding: 6px 9px;
          background: rgba(255, 255, 255, 0.04);
          color: #dde8f6;
          font-size: 0.75rem;
          font-weight: 850;
        }

        .architecture-map {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          min-height: 420px;
          border: 1px solid rgba(191, 203, 220, 0.13);
          border-radius: 8px;
          padding: 16px;
          overflow: hidden;
          background: rgba(4, 10, 18, 0.76);
        }

        .architecture-map svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .architecture-map path {
          fill: none;
          stroke: var(--domain-accent);
          stroke-width: 1.8;
          stroke-dasharray: 7 12;
          opacity: 0.28;
        }

        .map-layer {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 180px;
          border: 1px solid rgba(191, 203, 220, 0.14);
          border-top: 3px solid var(--domain-accent);
          border-radius: 8px;
          padding: 14px;
          background: rgba(6, 12, 21, 0.92);
        }

        .map-layer div {
          display: flex;
          justify-content: space-between;
          color: var(--domain-accent);
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.78rem;
          font-weight: 900;
        }

        .map-layer h4 {
          margin: 22px 0 8px;
          color: #f8fbff;
          font-size: 0.96rem;
          line-height: 1.15;
        }

        .map-layer p {
          margin: 0;
          color: #9fb0c4;
          font-size: 0.82rem;
          line-height: 1.42;
        }

        .proof-rail {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .proof-rail > div:first-child {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--domain-accent);
        }

        .proof-rail strong {
          color: #f8fbff;
          font-size: 0.86rem;
        }

        .related-links {
          display: grid;
          gap: 8px;
          margin-top: 8px;
        }

        .related-links a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          border: 1px solid rgba(191, 203, 220, 0.13);
          border-radius: 8px;
          padding: 10px;
          color: #f7fbff;
          background: rgba(255, 255, 255, 0.035);
          font-size: 0.84rem;
          font-weight: 850;
        }

        @media (max-width: 1120px) {
          .domain-panel {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 760px) {
          .architecture-map {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .map-layer {
            min-height: 150px;
          }
        }
      `}</style>
    </section>
  );
}
