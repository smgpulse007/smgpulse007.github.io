import { useMemo, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Activity, Bot, Database, Goal, RadioTower, ScanLine, ShieldCheck } from 'lucide-react';
import { domainModules, type DomainKey } from '@data/domains';

const layerIcons = [Database, ScanLine, Bot, ShieldCheck, RadioTower, Goal];

export default function AppliedSystemsConsole() {
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
    const last = domainModules.length - 1;
    const nextIndex =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? last
          : event.key === 'ArrowRight'
            ? index === last ? 0 : index + 1
            : index === 0 ? last : index - 1;
    setActiveKey(domainModules[nextIndex].key);
  }

  return (
    <section className={`applied-console accent-${activeDomain.accent}`} aria-label="Applied AI systems console">
      <div className="console-chrome">
        <span />
        <span />
        <span />
        <strong>{activeDomain.title}</strong>
      </div>

      <div className="console-tabs" role="tablist" aria-label="Applied AI domains">
        {domainModules.map((domain, index) => (
          <button
            key={domain.key}
            id={`hero-tab-${domain.key}`}
            type="button"
            role="tab"
            aria-selected={activeKey === domain.key}
            aria-controls={`hero-panel-${domain.key}`}
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
        id={`hero-panel-${activeDomain.key}`}
        role="tabpanel"
        aria-labelledby={`hero-tab-${activeDomain.key}`}
        className="console-surface"
        initial={prefersReducedMotion ? false : { opacity: 0.55, y: 12 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.34, ease: 'easeOut' }}
      >
        <svg className="console-connectors" viewBox="0 0 860 520" aria-hidden="true" preserveAspectRatio="none">
          <motion.path
            d="M120 76 C260 72 276 142 424 138 S620 142 744 206 S660 314 768 384"
            initial={false}
            animate={prefersReducedMotion ? undefined : { strokeDashoffset: [0, -120] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
          />
          <motion.path
            d="M110 402 C234 346 304 430 420 360 S582 222 752 250"
            initial={false}
            animate={prefersReducedMotion ? undefined : { strokeDashoffset: [0, -100] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: 'linear' }}
          />
        </svg>

        <div className="architecture-stack">
          {activeDomain.layers.map((layer, index) => {
            const Icon = layerIcons[index] ?? Activity;
            return (
              <motion.article
                className="architecture-layer"
                key={layer.label}
                initial={prefersReducedMotion ? false : { opacity: 0, x: -12 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                transition={{ duration: 0.28, delay: index * 0.035, ease: 'easeOut' }}
              >
                <div className="layer-index">
                  <Icon aria-hidden="true" size={18} strokeWidth={2.2} />
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h3>{layer.label}</h3>
                  <p>{layer.detail}</p>
                </div>
                <div className="signal-cluster" aria-label={`${layer.label} signals`}>
                  {layer.signals.map((signal) => (
                    <span key={signal}>{signal}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <aside className="domain-proof" aria-label={`${activeDomain.label} proof artifacts`}>
          <p>{activeDomain.thesis}</p>
          <div>
            <strong>Related systems</strong>
            {activeDomain.relatedSystems.map((system) => (
              <a key={system.href} href={system.href}>
                {system.label}
              </a>
            ))}
          </div>
          <div>
            <strong>Proof artifacts</strong>
            {activeDomain.proofArtifacts.map((artifact) => (
              <span key={artifact}>{artifact}</span>
            ))}
          </div>
        </aside>
      </motion.div>

      <style>{`
        .applied-console {
          border: 1px solid rgba(191, 203, 220, 0.18);
          border-radius: 8px;
          background:
            linear-gradient(180deg, rgba(245, 248, 255, 0.075), rgba(245, 248, 255, 0.028)),
            #07101b;
          box-shadow: 0 28px 90px rgba(0, 0, 0, 0.38);
          overflow: hidden;
          --console-accent: #58dce6;
          --console-accent-soft: rgba(88, 220, 230, 0.12);
        }

        .applied-console.accent-emerald {
          --console-accent: #8de8b4;
          --console-accent-soft: rgba(141, 232, 180, 0.12);
        }

        .applied-console.accent-violet {
          --console-accent: #b9a7ff;
          --console-accent-soft: rgba(185, 167, 255, 0.13);
        }

        .applied-console.accent-amber {
          --console-accent: #f1bd5c;
          --console-accent-soft: rgba(241, 189, 92, 0.13);
        }

        .applied-console.accent-rose {
          --console-accent: #f0a0bd;
          --console-accent-soft: rgba(240, 160, 189, 0.12);
        }

        .applied-console.accent-slate {
          --console-accent: #cbd5e1;
          --console-accent-soft: rgba(203, 213, 225, 0.12);
        }

        .console-chrome {
          display: flex;
          align-items: center;
          gap: 8px;
          min-height: 42px;
          border-bottom: 1px solid rgba(191, 203, 220, 0.12);
          padding: 0 14px;
          background: rgba(255, 255, 255, 0.04);
        }

        .console-chrome span {
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: rgba(191, 203, 220, 0.42);
        }

        .console-chrome span:first-child {
          background: #f0a0bd;
        }

        .console-chrome span:nth-child(2) {
          background: #f1bd5c;
        }

        .console-chrome span:nth-child(3) {
          background: #8de8b4;
        }

        .console-chrome strong {
          margin-left: auto;
          color: #d8e4f2;
          font-size: 0.74rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .console-tabs {
          display: flex;
          gap: 1px;
          overflow-x: auto;
          border-bottom: 1px solid rgba(191, 203, 220, 0.12);
          background: rgba(191, 203, 220, 0.07);
          scrollbar-width: thin;
        }

        .console-tabs button {
          flex: 1 0 auto;
          min-height: 42px;
          border: 0;
          border-right: 1px solid rgba(191, 203, 220, 0.1);
          padding: 9px 12px;
          background: rgba(7, 16, 27, 0.88);
          color: #a8b7ca;
          cursor: pointer;
          font-size: 0.76rem;
          font-weight: 900;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .console-tabs button.active {
          background: var(--console-accent-soft);
          color: #f8fbff;
          box-shadow: inset 0 -2px 0 var(--console-accent);
        }

        .console-surface {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(220px, 0.38fr);
          gap: 18px;
          padding: 18px;
          background:
            linear-gradient(rgba(255, 255, 255, 0.032) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.032) 1px, transparent 1px),
            linear-gradient(135deg, rgba(7, 16, 27, 0.92), rgba(13, 19, 34, 0.92));
          background-size: 28px 28px, 28px 28px, auto;
          overflow: hidden;
        }

        .console-connectors {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .console-connectors path {
          fill: none;
          stroke: var(--console-accent);
          stroke-width: 1.6;
          stroke-dasharray: 7 11;
          opacity: 0.32;
        }

        .architecture-stack {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          align-content: start;
        }

        .architecture-layer {
          display: grid;
          grid-template-columns: 60px minmax(0, 1fr);
          gap: 12px;
          align-items: start;
          min-height: 138px;
          border: 1px solid rgba(191, 203, 220, 0.14);
          border-left: 3px solid var(--console-accent);
          border-radius: 8px;
          padding: 13px;
          background: rgba(4, 10, 18, 0.9);
        }

        .layer-index {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          color: var(--console-accent);
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.8rem;
          font-weight: 900;
        }

        .architecture-layer h3 {
          margin: 0;
          color: #f8fbff;
          font-size: 0.98rem;
          line-height: 1.16;
        }

        .architecture-layer p {
          margin: 5px 0 0;
          color: #9fb0c4;
          font-size: 0.84rem;
          line-height: 1.42;
        }

        .signal-cluster {
          grid-column: 1 / -1;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .signal-cluster span,
        .domain-proof span {
          border: 1px solid rgba(191, 203, 220, 0.14);
          border-radius: 999px;
          padding: 5px 8px;
          background: rgba(255, 255, 255, 0.035);
          color: #dce7f5;
          font-size: 0.72rem;
          font-weight: 800;
        }

        .domain-proof {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 14px;
          align-content: start;
          border: 1px solid rgba(191, 203, 220, 0.14);
          border-radius: 8px;
          padding: 15px;
          background: rgba(3, 8, 15, 0.82);
        }

        .domain-proof p {
          margin: 0;
          color: #dbe7f6;
          font-size: 0.92rem;
          line-height: 1.5;
        }

        .domain-proof div {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .domain-proof strong {
          flex: 0 0 100%;
          color: var(--console-accent);
          font-size: 0.72rem;
          font-weight: 950;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .domain-proof a {
          display: inline-flex;
          border: 1px solid rgba(191, 203, 220, 0.14);
          border-radius: 8px;
          padding: 8px 10px;
          background: rgba(255, 255, 255, 0.045);
          color: #f8fbff;
          font-size: 0.8rem;
          font-weight: 850;
        }

        @media (max-width: 1120px) {
          .console-surface {
            grid-template-columns: 1fr;
            min-height: auto;
          }
        }

        @media (max-width: 620px) {
          .console-tabs button {
            flex-basis: auto;
          }

          .console-surface {
            padding: 12px;
          }

          .architecture-layer {
            grid-template-columns: 1fr;
          }

          .architecture-stack {
            grid-template-columns: 1fr;
          }

          .layer-index {
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
