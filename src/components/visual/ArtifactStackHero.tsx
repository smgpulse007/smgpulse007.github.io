import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Activity,
  ArrowUpRight,
  Braces,
  FileJson,
  FileText,
  GitBranch,
  LineChart,
  ServerCog,
  ShieldCheck,
  TestTube2,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@lib/utils';

type ArtifactCard = {
  domain: string;
  system: string;
  href: string;
  title: string;
  subtitle: string;
  tone: 'cyan' | 'emerald' | 'amber' | 'violet' | 'rose' | 'slate';
  icon: LucideIcon;
  snippet: string[];
  stack: string[];
};

const artifacts: ArtifactCard[] = [
  {
    domain: 'Healthcare AI',
    system: 'FHIR readmission API',
    href: '/projects/hospital-readmission-fhir-ml-api/',
    title: 'fhir_bundle.json',
    subtitle: 'Synthetic care episode',
    tone: 'cyan',
    icon: FileJson,
    snippet: ['"resourceType": "Bundle",', '"encounters_180d": 3,', '"discharge": "SNF"'],
    stack: ['FHIR R4', 'HL7', 'FastAPI'],
  },
  {
    domain: 'Claims automation',
    system: 'OCR review route',
    href: '/projects/freshtrack-ai-module/',
    title: 'claims_document.pdf',
    subtitle: 'Document to data workflow',
    tone: 'emerald',
    icon: FileText,
    snippet: ['claim_type: medical_review', 'confidence_gate: enabled', 'route: analyst_queue'],
    stack: ['OCR', 'LLM parser', 'Review queue'],
  },
  {
    domain: 'Agentic AI',
    system: 'LLM steering workbench',
    href: '/projects/llm-steering/',
    title: 'agent_trace.yaml',
    subtitle: 'Tool workflow state',
    tone: 'violet',
    icon: GitBranch,
    snippet: ['route: extract -> verify', 'tool_calls: 6', 'citation_check: passed'],
    stack: ['LangGraph', 'Ollama', 'Evaluations'],
  },
  {
    domain: 'Forecasting',
    system: 'Backtest report',
    href: '/quant-forecasting/',
    title: 'forecast_backtest.json',
    subtitle: 'Calibration and model comparison',
    tone: 'amber',
    icon: LineChart,
    snippet: ['"games": "1999-2024",', '"baseline": "elo",', '"metric": "brier_score"'],
    stack: ['XGBoost', 'Elo', 'Backtests'],
  },
  {
    domain: 'Responsible AI',
    system: 'Reviewable model contract',
    href: '/professional-systems/',
    title: 'model_card.md',
    subtitle: 'Governance boundary',
    tone: 'rose',
    icon: ShieldCheck,
    snippet: ['Synthetic demo only', 'No PHI or PII', 'Human review required'],
    stack: ['Model card', 'Risk notes', 'Audit trail'],
  },
  {
    domain: 'MLOps',
    system: 'Deployable API discipline',
    href: '/systems/',
    title: 'pytest_results.log',
    subtitle: 'Build and health evidence',
    tone: 'slate',
    icon: TestTube2,
    snippet: ['pytest: 42 passed', 'docker: build ok', 'health: status=ok'],
    stack: ['Docker', 'CI checks', 'MLflow'],
  },
];

const toneClasses: Record<ArtifactCard['tone'], string> = {
  cyan: 'tone-cyan',
  emerald: 'tone-emerald',
  amber: 'tone-amber',
  violet: 'tone-violet',
  rose: 'tone-rose',
  slate: 'tone-slate',
};

export default function ArtifactStackHero() {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = artifacts[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section className="artifact-hero" aria-label="Animated portfolio systems stack">
      <div className="artifact-orbit" aria-hidden="true">
        <motion.span
          animate={prefersReducedMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <nav className="artifact-domain-rail" aria-label="Portfolio domains">
        {artifacts.map((artifact, index) => (
          <a
            key={artifact.domain}
            className={cn('domain-rail-link', toneClasses[artifact.tone], index === activeIndex && 'active')}
            href={artifact.href}
            onFocus={() => setActiveIndex(index)}
            onMouseEnter={() => setActiveIndex(index)}
            aria-current={index === activeIndex ? 'page' : undefined}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{artifact.domain}</strong>
          </a>
        ))}
      </nav>

      <div className="artifact-status">
        <Activity aria-hidden="true" size={18} strokeWidth={2.2} />
        <strong>{active.domain}</strong>
        <span>{active.system}</span>
      </div>

      <div className="artifact-stage">
        <div className="artifact-stack">
          {artifacts.map((artifact, index) => {
            const Icon = artifact.icon;
            const isActive = index === activeIndex;
            const offset = index - activeIndex;
            return (
              <motion.a
                key={artifact.title}
                className={cn('artifact-card', toneClasses[artifact.tone], isActive && 'active')}
                href={artifact.href}
                onFocus={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                initial={false}
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        y: Math.abs(offset) * 7,
                        x: offset * 22,
                        rotate: offset * 1.35,
                        scale: isActive ? 1.025 : 0.965,
                      }
                }
                transition={{ duration: 0.36, delay: index * 0.035, ease: 'easeOut' }}
                style={{ zIndex: artifacts.length + (isActive ? 12 : -Math.abs(offset)) }}
                aria-label={`${artifact.domain}: ${artifact.system}`}
              >
                <span className="artifact-card-header">
                  <span>
                    <Icon aria-hidden="true" size={17} strokeWidth={2.2} />
                    {artifact.title}
                  </span>
                  <i>{artifact.domain}</i>
                </span>
                <span className="artifact-card-subtitle">{artifact.subtitle}</span>
                <code>
                  {artifact.snippet.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </code>
              </motion.a>
            );
          })}
        </div>

        <aside className={cn('artifact-context', toneClasses[active.tone])} aria-label={`${active.domain} context`}>
          <span className="context-kicker">
            <ActiveIcon aria-hidden="true" size={17} strokeWidth={2.2} />
            Active domain
          </span>
          <h3>{active.domain}</h3>
          <p>{active.subtitle} connected to a concrete portfolio system, route, and implementation stack.</p>
          <div className="context-stack" aria-label={`${active.domain} stack`}>
            {active.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <a href={active.href}>
            Open system
            <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2.4} />
          </a>
        </aside>
      </div>

      <svg className="artifact-connectors" viewBox="0 0 740 520" aria-hidden="true" preserveAspectRatio="none">
        <motion.path
          d="M92 142 C214 86 286 198 402 162 S548 102 666 218"
          animate={prefersReducedMotion ? undefined : { strokeDashoffset: [0, -150] }}
          transition={{ duration: 7.2, repeat: Infinity, ease: 'linear' }}
        />
        <motion.path
          d="M78 386 C222 294 344 430 476 326 S604 282 672 386"
          animate={prefersReducedMotion ? undefined : { strokeDashoffset: [0, -126] }}
          transition={{ duration: 8.8, repeat: Infinity, ease: 'linear' }}
        />
      </svg>

      <div className="artifact-evidence" aria-label="Portfolio stack summary">
        <span>
          <Braces aria-hidden="true" size={16} strokeWidth={2.2} />
          <strong>Contracts</strong>
          FHIR, API, model, and response schemas
        </span>
        <span>
          <GitBranch aria-hidden="true" size={16} strokeWidth={2.2} />
          <strong>Workflows</strong>
          extraction, agents, review, and evaluation
        </span>
        <span>
          <ServerCog aria-hidden="true" size={16} strokeWidth={2.2} />
          <strong>Delivery</strong>
          Docker, tests, health checks, and public demos
        </span>
      </div>

      <style>{`
        .artifact-hero {
          position: relative;
          min-height: 642px;
          overflow: hidden;
          border: 1px solid rgba(191, 203, 220, 0.16);
          border-radius: 28px;
          padding: 20px;
          background:
            radial-gradient(circle at 22% 18%, rgba(88, 220, 230, 0.2), transparent 17rem),
            radial-gradient(circle at 82% 72%, rgba(241, 189, 92, 0.14), transparent 18rem),
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            rgba(5, 10, 18, 0.92);
          background-size: auto, auto, 30px 30px, 30px 30px, auto;
          box-shadow: 0 34px 110px rgba(0, 0, 0, 0.38);
        }

        .artifact-orbit {
          position: absolute;
          inset: 72px 36px 102px;
          pointer-events: none;
        }

        .artifact-orbit span {
          display: block;
          width: 100%;
          height: 100%;
          border: 1px dashed rgba(88, 220, 230, 0.15);
          border-radius: 999px;
        }

        .artifact-domain-rail {
          position: relative;
          z-index: 6;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 8px;
          margin-bottom: 14px;
        }

        .domain-rail-link {
          --artifact-accent: #58dce6;
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 7px;
          align-items: center;
          min-height: 38px;
          border: 1px solid rgba(191, 203, 220, 0.13);
          border-radius: 14px;
          padding: 8px 10px;
          background: rgba(255, 255, 255, 0.04);
          color: #dfe8f5;
          transition:
            transform var(--duration) ease,
            border-color var(--duration) ease,
            background var(--duration) ease,
            color var(--duration) ease;
        }

        .domain-rail-link:hover,
        .domain-rail-link.active {
          transform: translateY(-1px);
          border-color: color-mix(in srgb, var(--artifact-accent) 55%, white 8%);
          background: color-mix(in srgb, var(--artifact-accent) 12%, rgba(255, 255, 255, 0.04));
          color: #ffffff;
        }

        .domain-rail-link span {
          color: var(--artifact-accent);
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.7rem;
          font-weight: 950;
        }

        .domain-rail-link strong {
          overflow: hidden;
          font-size: 0.72rem;
          font-weight: 950;
          line-height: 1.05;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .artifact-status {
          position: relative;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 10px;
          width: fit-content;
          max-width: 100%;
          border: 1px solid rgba(88, 220, 230, 0.22);
          border-radius: 999px;
          padding: 9px 12px;
          background: rgba(4, 10, 18, 0.78);
          color: #dffbff;
          backdrop-filter: blur(16px);
        }

        .artifact-status strong,
        .artifact-status span {
          font-size: 0.78rem;
          line-height: 1;
        }

        .artifact-status strong {
          color: #ffffff;
          font-weight: 950;
        }

        .artifact-status span {
          color: #98ebf2;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }

        .artifact-stage {
          position: relative;
          z-index: 2;
          min-height: 392px;
          margin-top: 18px;
        }

        .artifact-stack {
          position: relative;
          min-height: 392px;
        }

        .artifact-card {
          --artifact-accent: #58dce6;
          position: absolute;
          left: 4%;
          top: calc(8px + var(--stack-top, 0px));
          display: grid;
          gap: 10px;
          width: min(394px, 74%);
          min-height: 150px;
          border: 1px solid rgba(191, 203, 220, 0.16);
          border-left: 4px solid var(--artifact-accent);
          border-radius: 20px;
          padding: 14px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.025)),
            rgba(5, 10, 18, 0.9);
          color: #f8fbff;
          text-align: left;
          box-shadow: 0 22px 52px rgba(0, 0, 0, 0.34);
          backdrop-filter: blur(18px);
        }

        .artifact-card:nth-child(1) { --stack-top: 0px; }
        .artifact-card:nth-child(2) { --stack-top: 52px; left: 26%; }
        .artifact-card:nth-child(3) { --stack-top: 104px; left: 9%; }
        .artifact-card:nth-child(4) { --stack-top: 156px; left: 31%; }
        .artifact-card:nth-child(5) { --stack-top: 208px; left: 16%; }
        .artifact-card:nth-child(6) { --stack-top: 260px; left: 39%; }

        .artifact-card.active {
          border-color: color-mix(in srgb, var(--artifact-accent) 62%, white 10%);
          box-shadow:
            0 26px 70px rgba(0, 0, 0, 0.44),
            0 0 42px color-mix(in srgb, var(--artifact-accent) 25%, transparent);
        }

        .tone-cyan { --artifact-accent: #58dce6; }
        .tone-emerald { --artifact-accent: #8de8b4; }
        .tone-amber { --artifact-accent: #f1bd5c; }
        .tone-violet { --artifact-accent: #b9a7ff; }
        .tone-rose { --artifact-accent: #f0a0bd; }
        .tone-slate { --artifact-accent: #cbd5e1; }

        .artifact-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          color: var(--artifact-accent);
          font-size: 0.78rem;
          font-weight: 950;
        }

        .artifact-card-header span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
          overflow-wrap: anywhere;
        }

        .artifact-card-header i {
          color: #9fb0c7;
          font-size: 0.68rem;
          font-style: normal;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          white-space: nowrap;
        }

        .artifact-card-subtitle {
          color: #eef6ff;
          font-size: 0.98rem;
          font-weight: 900;
        }

        .artifact-card code {
          display: grid;
          gap: 3px;
          overflow: hidden;
          border: 1px solid rgba(191, 203, 220, 0.12);
          border-radius: 14px;
          padding: 10px;
          background: rgba(2, 6, 12, 0.68);
          color: #dbeafe;
          font-size: 0.72rem;
          line-height: 1.38;
        }

        .artifact-context {
          --artifact-accent: #58dce6;
          position: absolute;
          right: 2px;
          bottom: 8px;
          z-index: 20;
          display: grid;
          gap: 9px;
          width: min(268px, 42%);
          border: 1px solid color-mix(in srgb, var(--artifact-accent) 34%, rgba(191, 203, 220, 0.14));
          border-radius: 18px;
          padding: 14px;
          background:
            radial-gradient(circle at 20% 0%, color-mix(in srgb, var(--artifact-accent) 14%, transparent), transparent 9rem),
            rgba(5, 10, 18, 0.9);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.32);
          backdrop-filter: blur(18px);
        }

        .context-kicker {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--artifact-accent);
          font-size: 0.72rem;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .artifact-context h3 {
          margin: 0;
          color: #ffffff;
          font-size: clamp(1.05rem, 1.8vw, 1.35rem);
          line-height: 1.05;
          letter-spacing: 0;
        }

        .artifact-context p {
          margin: 0;
          color: #b8c7da;
          font-size: 0.78rem;
          line-height: 1.42;
        }

        .context-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .context-stack span {
          border: 1px solid color-mix(in srgb, var(--artifact-accent) 35%, rgba(255, 255, 255, 0.08));
          border-radius: 999px;
          padding: 4px 8px;
          background: color-mix(in srgb, var(--artifact-accent) 9%, transparent);
          color: #f5fbff;
          font-size: 0.66rem;
          font-weight: 900;
        }

        .artifact-context a {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          width: fit-content;
          color: var(--artifact-accent);
          font-size: 0.76rem;
          font-weight: 950;
        }

        .artifact-connectors {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .artifact-connectors path {
          fill: none;
          stroke: rgba(88, 220, 230, 0.3);
          stroke-width: 2;
          stroke-dasharray: 8 12;
        }

        .artifact-evidence {
          position: relative;
          z-index: 5;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          margin-top: 14px;
        }

        .artifact-evidence span {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 4px 8px;
          align-items: start;
          border: 1px solid rgba(191, 203, 220, 0.14);
          border-radius: 16px;
          padding: 11px;
          background: rgba(255, 255, 255, 0.045);
          color: #a9b7c9;
          font-size: 0.72rem;
          line-height: 1.25;
        }

        .artifact-evidence svg {
          grid-row: span 2;
          color: #58dce6;
        }

        .artifact-evidence strong {
          color: #f8fbff;
          font-size: 0.78rem;
          line-height: 1;
        }

        @media (max-width: 1180px) {
          .artifact-hero {
            min-height: 620px;
          }

          .artifact-domain-rail {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 680px) {
          .artifact-hero {
            min-height: auto;
            padding: 16px;
          }

          .artifact-domain-rail,
          .artifact-evidence {
            grid-template-columns: 1fr;
          }

          .artifact-status {
            width: 100%;
            border-radius: 16px;
            flex-wrap: wrap;
          }

          .artifact-stage,
          .artifact-stack {
            min-height: auto;
          }

          .artifact-stack {
            display: grid;
            gap: 12px;
            margin-top: 16px;
          }

          .artifact-card,
          .artifact-context {
            position: relative;
            left: auto !important;
            right: auto;
            top: auto;
            bottom: auto;
            width: 100%;
            min-height: 144px;
            transform: none !important;
          }

          .artifact-context {
            margin-top: 12px;
          }
        }
      `}</style>
    </section>
  );
}
