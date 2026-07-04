import type { CSSProperties } from 'react';
import { motion } from 'motion/react';
import {
  Activity,
  ArrowUpRight,
  Bot,
  Database,
  FileText,
  GitBranch,
  LineChart,
  ShieldCheck,
  TestTube2,
  type LucideIcon,
} from 'lucide-react';

type DomainSystem = {
  index: string;
  label: string;
  title: string;
  description: string;
  href: string;
  example: string;
  result: string;
  accent: string;
  icon: LucideIcon;
  stack: string[];
  flow: string[];
};

const systems: DomainSystem[] = [
  {
    index: '01',
    label: 'Healthcare AI',
    title: 'Healthcare & Interoperability AI',
    description:
      'FHIR R4, HL7 event flows, readmission risk, LOS, ED utilization, care gaps, quality programs, and reviewable risk outputs.',
    href: '/projects/hospital-readmission-fhir-ml-api/',
    example: 'Hospital Readmission FHIR ML API',
    result: 'Synthetic FHIR input to typed risk response',
    accent: '#58dce6',
    icon: Activity,
    stack: ['FHIR R4', 'HL7 ADT/ORU/MDM', 'HEDIS', 'FastAPI'],
    flow: ['FHIR / HL7 event', 'Feature contract', 'Risk API', 'Reviewable response'],
  },
  {
    index: '02',
    label: 'Claims automation',
    title: 'Claims & Document Automation',
    description:
      'OCR, structured extraction, validation gates, confidence scoring, exception routing, and document-to-data workflows.',
    href: '/projects/freshtrack-ai-module/',
    example: 'FreshTrack AI + sanitized claims patterns',
    result: 'Noisy document inputs routed into structured review',
    accent: '#8de8b4',
    icon: FileText,
    stack: ['OCR', 'Tesseract', 'LangChain', 'Review queues'],
    flow: ['Image / PDF', 'OCR cleanup', 'Validation gates', 'Analyst queue'],
  },
  {
    index: '03',
    label: 'Agentic AI',
    title: 'Agentic AI & LLMOps',
    description:
      'LangGraph-style orchestration, tool calling, local LLMs, activation steering, evaluation gates, and observability surfaces.',
    href: '/projects/llm-steering/',
    example: 'LLM Steering Lab',
    result: 'Workbench traces for steering and evaluation',
    accent: '#b9a7ff',
    icon: Bot,
    stack: ['LangGraph', 'Ollama', 'PyTorch', 'React'],
    flow: ['Prompt pair', 'Tool route', 'Eval gate', 'Workbench trace'],
  },
  {
    index: '04',
    label: 'Forecasting',
    title: 'Quant, Forecasting & Backtesting',
    description:
      'AlphaQuant, sports forecasting, Elo, XGBoost, calibration, model comparison, Brier score, and historical backtesting.',
    href: '/quant-forecasting/',
    example: 'AlphaQuant + Sports Forecasting Lab',
    result: 'Historical model comparison with calibration notes',
    accent: '#f1bd5c',
    icon: LineChart,
    stack: ['XGBoost', 'Elo', 'Brier score', 'Backtests'],
    flow: ['Signal history', 'Baselines', 'Model comparison', 'Backtest report'],
  },
  {
    index: '05',
    label: 'MLOps',
    title: 'MLOps & Infrastructure',
    description:
      'Dockerized APIs, CI checks, MLflow-style delivery, Azure patterns, Kubernetes readiness, health checks, and deployment discipline.',
    href: '/systems/',
    example: 'Systems Library',
    result: 'Deployable patterns, tests, and health evidence',
    accent: '#cbd5e1',
    icon: ShieldCheck,
    stack: ['Docker', 'CI/CD', 'Azure', 'MLflow'],
    flow: ['API contract', 'Container build', 'CI check', 'Health surface'],
  },
  {
    index: '06',
    label: 'Research foundations',
    title: 'Research & Data Science Foundations',
    description:
      'Biomedical informatics, visualization, GPU planning, scientific ML, time-series analysis, and earlier experimental systems.',
    href: '/research-archive/',
    example: 'Research Archive',
    result: 'Foundational experiments organized by technical theme',
    accent: '#f0a0bd',
    icon: TestTube2,
    stack: ['scikit-learn', 'Visualization', 'GPU planning', 'RAG'],
    flow: ['Research question', 'Dataset shape', 'Model or view', 'Reusable note'],
  },
];

export default function DomainSystemsList() {
  return (
    <section className="domain-systems-list" aria-label="Applied AI domains and systems">
      <div className="domain-sequence">
        {systems.map((system, index) => {
          const Icon = system.icon;
          const style = { '--domain-accent': system.accent } as CSSProperties;

          return (
            <motion.a
              key={system.title}
              href={system.href}
              className="domain-system-row"
              style={style}
              initial={false}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
            >
              <span className="domain-row-index">{system.index}</span>

              <div className="domain-row-copy">
                <span className="domain-row-kicker">
                  <Icon aria-hidden="true" size={17} strokeWidth={2.2} />
                  {system.label}
                </span>
                <h3>{system.title}</h3>
                <p>{system.description}</p>
                <div className="domain-stack" aria-label={`${system.title} stack`}>
                  {system.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <div className="domain-row-system" aria-label={`${system.title} system path`}>
                <div className="domain-example">
                  <span>
                    <Database aria-hidden="true" size={16} strokeWidth={2.2} />
                    Example system
                  </span>
                  <strong>{system.example}</strong>
                  <ArrowUpRight aria-hidden="true" size={17} strokeWidth={2.4} />
                </div>

                <div className="domain-flow">
                  {system.flow.map((step, stepIndex) => (
                    <motion.span
                      key={step}
                      initial={false}
                      transition={{ duration: 0.32, delay: index * 0.08 + stepIndex * 0.075, ease: 'easeOut' }}
                    >
                      {step}
                    </motion.span>
                  ))}
                </div>

                <div className="domain-result">
                  <GitBranch aria-hidden="true" size={16} strokeWidth={2.2} />
                  <strong>{system.result}</strong>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>

      <style>{`
        .domain-systems-list {
          position: relative;
        }

        .domain-sequence {
          position: relative;
          display: grid;
          gap: 16px;
        }

        .domain-sequence::before {
          position: absolute;
          top: 18px;
          bottom: 18px;
          left: 38px;
          width: 1px;
          content: '';
          background: linear-gradient(180deg, transparent, rgba(88, 220, 230, 0.42), rgba(241, 189, 92, 0.26), transparent);
        }

        .domain-system-row {
          --domain-accent: #58dce6;
          position: relative;
          display: grid;
          grid-template-columns: 78px minmax(0, 0.82fr) minmax(360px, 1.18fr);
          gap: 22px;
          align-items: stretch;
          min-height: 222px;
          overflow: hidden;
          border: 1px solid rgba(191, 203, 220, 0.14);
          border-left: 4px solid var(--domain-accent);
          border-radius: 22px;
          padding: 22px;
          background:
            radial-gradient(circle at 8% 0%, color-mix(in srgb, var(--domain-accent) 18%, transparent), transparent 18rem),
            linear-gradient(135deg, rgba(255, 255, 255, 0.072), rgba(255, 255, 255, 0.022) 54%, rgba(255, 255, 255, 0.045)),
            rgba(7, 13, 23, 0.91);
          box-shadow: 0 18px 54px rgba(0, 0, 0, 0.24);
          transition:
            transform var(--duration) ease,
            border-color var(--duration) ease,
            box-shadow var(--duration) ease,
            background var(--duration) ease;
        }

        .domain-system-row::after {
          position: absolute;
          inset: 0;
          pointer-events: none;
          content: '';
          background:
            linear-gradient(90deg, color-mix(in srgb, var(--domain-accent) 12%, transparent), transparent 38%),
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: auto, 32px 32px, 32px 32px;
          opacity: 0.62;
        }

        .domain-system-row:hover {
          transform: translateY(-3px);
          border-color: color-mix(in srgb, var(--domain-accent) 60%, white 10%);
          box-shadow:
            0 24px 78px rgba(0, 0, 0, 0.34),
            0 0 42px color-mix(in srgb, var(--domain-accent) 16%, transparent);
        }

        .domain-system-row > * {
          position: relative;
          z-index: 1;
        }

        .domain-row-index {
          display: grid;
          place-items: center;
          align-self: start;
          width: 46px;
          height: 46px;
          border: 1px solid color-mix(in srgb, var(--domain-accent) 48%, rgba(255, 255, 255, 0.1));
          border-radius: 999px;
          background: rgba(4, 10, 18, 0.86);
          color: var(--domain-accent);
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.82rem;
          font-weight: 950;
          box-shadow: 0 0 32px color-mix(in srgb, var(--domain-accent) 16%, transparent);
        }

        .domain-row-copy,
        .domain-row-system {
          display: grid;
          align-content: center;
        }

        .domain-row-copy {
          gap: 13px;
        }

        .domain-row-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          color: var(--domain-accent);
          font-size: 0.76rem;
          font-weight: 950;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .domain-row-copy h3 {
          margin: 0;
          color: #ffffff;
          font-size: clamp(1.45rem, 2.8vw, 2.5rem);
          line-height: 1;
          letter-spacing: 0;
        }

        .domain-row-copy p {
          max-width: 620px;
          margin: 0;
          color: #b8c7da;
          font-size: clamp(0.98rem, 1.35vw, 1.1rem);
          line-height: 1.5;
        }

        .domain-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .domain-stack span {
          border: 1px solid color-mix(in srgb, var(--domain-accent) 35%, rgba(255, 255, 255, 0.1));
          border-radius: 999px;
          padding: 5px 10px;
          background: color-mix(in srgb, var(--domain-accent) 10%, transparent);
          color: #f6fbff;
          font-size: 0.76rem;
          font-weight: 900;
          line-height: 1.15;
        }

        .domain-row-system {
          gap: 14px;
          min-width: 0;
        }

        .domain-example {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 6px 12px;
          align-items: center;
          border: 1px solid rgba(191, 203, 220, 0.13);
          border-radius: 16px;
          padding: 14px;
          background: rgba(4, 10, 18, 0.62);
        }

        .domain-example span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--domain-accent);
          font-size: 0.72rem;
          font-weight: 950;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .domain-example strong {
          grid-column: 1;
          color: #ffffff;
          font-size: clamp(1rem, 1.8vw, 1.2rem);
          line-height: 1.2;
        }

        .domain-example > svg {
          grid-row: 1 / span 2;
          grid-column: 2;
          color: var(--domain-accent);
        }

        .domain-flow {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 8px;
        }

        .domain-flow span {
          position: relative;
          display: flex;
          align-items: center;
          min-height: 48px;
          border: 1px solid rgba(191, 203, 220, 0.12);
          border-radius: 14px;
          padding: 9px 10px;
          background:
            linear-gradient(180deg, color-mix(in srgb, var(--domain-accent) 9%, transparent), transparent),
            rgba(255, 255, 255, 0.045);
          color: #dce8f7;
          font-size: 0.78rem;
          font-weight: 820;
          line-height: 1.2;
        }

        .domain-flow span:not(:last-child)::after {
          position: absolute;
          right: -9px;
          width: 9px;
          height: 1px;
          content: '';
          background: var(--domain-accent);
          opacity: 0.52;
        }

        .domain-result {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #e9f2ff;
          font-size: 0.9rem;
          line-height: 1.3;
        }

        .domain-result svg {
          flex: 0 0 auto;
          color: var(--domain-accent);
        }

        .domain-result strong {
          font-weight: 900;
        }

        @media (max-width: 1050px) {
          .domain-system-row {
            grid-template-columns: 58px minmax(0, 1fr);
          }

          .domain-row-system {
            grid-column: 2;
          }
        }

        @media (max-width: 720px) {
          .domain-sequence::before {
            left: 24px;
          }

          .domain-system-row {
            grid-template-columns: 42px minmax(0, 1fr);
            gap: 14px;
            min-height: auto;
            border-radius: 18px;
            padding: 16px;
          }

          .domain-row-index {
            width: 34px;
            height: 34px;
            font-size: 0.72rem;
          }

          .domain-row-copy h3 {
            font-size: 1.48rem;
            line-height: 1.04;
          }

          .domain-row-system {
            grid-column: 1 / -1;
          }

          .domain-flow {
            grid-template-columns: 1fr;
          }

          .domain-flow span:not(:last-child)::after {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
