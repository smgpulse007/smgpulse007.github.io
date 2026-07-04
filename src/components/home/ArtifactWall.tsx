import { useState, type CSSProperties } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ExternalLink, Maximize2, X } from 'lucide-react';

type WallArtifact = {
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  accent: string;
  stack: string[];
  signal: string;
  src?: string;
  alt?: string;
  code?: string;
};

const artifacts: WallArtifact[] = [
  {
    title: 'LLM Steering Workbench',
    eyebrow: 'Local model lab',
    description:
      'Prompt-pair editor, baseline-vs-steered comparison, hook controls, and local experiment surface for activation-space research.',
    href: '/projects/llm-steering/',
    accent: '#b9a7ff',
    stack: ['Ollama', 'PyTorch', 'FastAPI', 'React'],
    signal: 'Local open-model experimentation with reviewable controls.',
    src: '/assets/case-studies/llm-steering/screenshots/workbench-ui-overview.gif',
    alt: 'Animated LLM steering workbench overview',
  },
  {
    title: 'AlphaQuant UI Demo',
    eyebrow: 'Agentic infrastructure',
    description:
      'Local-first market intelligence workbench with planner state, storage fabric, verification, and structured reports.',
    href: '/projects/agentic-alpha-engine/',
    accent: '#f1bd5c',
    stack: ['Agents', 'Postgres', 'Qdrant', 'Docker'],
    signal: 'Finance as an architecture testbed for evidence-aware agents.',
    src: '/assets/case-studies/alphaquant/screenshots/ui-screenshot.png',
    alt: 'AlphaQuant UI screenshot',
  },
  {
    title: 'Readmission API Response',
    eyebrow: 'FHIR ML API',
    description:
      'Risk band, probability, model version, and top contributing features from a synthetic FHIR scoring contract.',
    href: '/projects/hospital-readmission-fhir-ml-api/',
    accent: '#58dce6',
    stack: ['FHIR R4', 'FastAPI', 'XGBoost shape', 'Model card'],
    signal: 'Healthcare interoperability tied to typed API outputs.',
    code: `{
  "risk_band": "high",
  "readmission_risk_probability": 0.98,
  "top_features": [
    "prior_admissions_180d",
    "comorbidity_count",
    "abnormal_labs"
  ]
}`,
  },
  {
    title: 'NFL Model Comparison',
    eyebrow: 'Forecasting evidence',
    description:
      'Historical comparison of Elo, XGBoost, logistic regression, and ensemble probability quality with Brier-score framing.',
    href: '/projects/nfl-sports-forecasting/',
    accent: '#8de8b4',
    stack: ['Elo', 'XGBoost', 'Backtests', 'Calibration'],
    signal: 'Baseline-first modeling with probability-quality checks.',
    src: '/assets/case-studies/nfl/charts/model-comparison.svg',
    alt: 'NFL forecasting model comparison chart',
  },
  {
    title: 'HL7 Architecture',
    eyebrow: 'Interoperability',
    description:
      'Event gateway, FHIR mapper, prediction service, care orchestration, SMART/CDS, and dashboard outputs.',
    href: '/projects/hl7-ai-challenge/',
    accent: '#58dce6',
    stack: ['HL7 v2', 'FHIR R4', 'RabbitMQ', 'SMART/CDS'],
    signal: 'Challenge-winning standards-first healthcare architecture.',
    src: '/assets/case-studies/hl7/diagrams/architecture-high-level.png',
    alt: 'HL7 AI Challenge architecture diagram',
  },
  {
    title: 'FreshTrack OCR Output',
    eyebrow: 'Document AI',
    description:
      'Receipt image to cleaned entities, optional LLM parser, confidence scoring, and structured API output.',
    href: '/projects/freshtrack-ai-module/',
    accent: '#f0a0bd',
    stack: ['OCR', 'Tesseract', 'LLM parser', 'JSON contract'],
    signal: 'Document-to-data pattern transferable to claims and review queues.',
    src: '/assets/case-studies/freshtrack/screenshots/sample-receipt.jpg',
    alt: 'Synthetic sample receipt used in OCR extraction',
  },
  {
    title: 'Local Document AI Flow',
    eyebrow: 'Private RAG',
    description:
      'PDF parsing, chunking, prompt assembly, local Ollama inference, and Streamlit review surface.',
    href: '/projects/local-document-ai-extraction/',
    accent: '#cbd5e1',
    stack: ['PDF parsing', 'Chunking', 'Ollama', 'Streamlit'],
    signal: 'Privacy-preserving local inference pattern for document review.',
    src: '/assets/case-studies/document-ai/diagrams/local-document-flow.svg',
    alt: 'Local document AI extraction flow diagram',
  },
];

function ArtifactPreview({ artifact, className = '' }: { artifact: WallArtifact; className?: string }) {
  return artifact.src ? (
    <img className={className} src={artifact.src} alt={artifact.alt ?? artifact.title} loading="lazy" />
  ) : (
    <pre className={className}>
      <code>{artifact.code}</code>
    </pre>
  );
}

export default function ArtifactWall() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [selected, setSelected] = useState<WallArtifact | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const active = artifacts[activeIndex];
  const activeStyle = { '--artifact-accent': active.accent } as CSSProperties;

  return (
    <section className="artifact-dossier" aria-label="Sequential evidence dossier">
      <div className="dossier-layout">
        <motion.article
          key={active.title}
          className="active-artifact"
          style={activeStyle}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
        >
          <header>
            <span>{active.eyebrow}</span>
            <h3>{active.title}</h3>
            <p>{active.description}</p>
          </header>

          <div className="active-preview">
            <ArtifactPreview artifact={active} />
          </div>

          <footer>
            <div className="active-stack" aria-label={`${active.title} stack`}>
              {active.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="active-actions">
              <button type="button" onClick={() => setSelected(active)}>
                Preview
                <Maximize2 aria-hidden="true" size={15} strokeWidth={2.3} />
              </button>
              <a href={active.href}>
                Case study
                <ExternalLink aria-hidden="true" size={15} strokeWidth={2.3} />
              </a>
            </div>
          </footer>
        </motion.article>

        <div className="artifact-sequence" aria-label="Evidence sequence">
          {artifacts.map((artifact, index) => {
            const style = { '--artifact-accent': artifact.accent } as CSSProperties;

            return (
              <motion.button
                type="button"
                key={artifact.title}
                className={index === activeIndex ? 'sequence-card active' : 'sequence-card'}
                style={style}
                onClick={() => setActiveIndex(index)}
                initial={false}
                transition={{ duration: 0.34, delay: index * 0.045, ease: 'easeOut' }}
                aria-pressed={index === activeIndex}
              >
                <span className="sequence-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="sequence-copy">
                  <em>{artifact.eyebrow}</em>
                  <strong>{artifact.title}</strong>
                  <small>{artifact.signal}</small>
                </span>
                <ArrowRight aria-hidden="true" size={17} strokeWidth={2.4} />
              </motion.button>
            );
          })}
        </div>
      </div>

      {selected && (
        <div className="lightbox-backdrop" role="presentation" onClick={() => setSelected(null)}>
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            style={{ '--artifact-accent': selected.accent } as CSSProperties}
            onClick={(event) => event.stopPropagation()}
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <header>
              <div>
                <span>{selected.eyebrow}</span>
                <h3>{selected.title}</h3>
                <p>{selected.signal}</p>
              </div>
              <button type="button" onClick={() => setSelected(null)} aria-label="Close artifact preview">
                <X aria-hidden="true" size={20} strokeWidth={2.2} />
              </button>
            </header>

            <div className="lightbox-body">
              <ArtifactPreview artifact={selected} />
              <aside>
                <p>{selected.description}</p>
                <div className="active-stack">
                  {selected.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <a href={selected.href}>
                  Open case study
                  <ExternalLink aria-hidden="true" size={16} strokeWidth={2.2} />
                </a>
              </aside>
            </div>
          </motion.div>
        </div>
      )}

      <style>{`
        .artifact-dossier {
          position: relative;
        }

        .dossier-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.28fr) minmax(360px, 0.72fr);
          gap: 18px;
          align-items: start;
        }

        .active-artifact,
        .sequence-card,
        .lightbox {
          --artifact-accent: #58dce6;
          border: 1px solid rgba(191, 203, 220, 0.15);
          background:
            radial-gradient(circle at 16% 0%, color-mix(in srgb, var(--artifact-accent) 14%, transparent), transparent 18rem),
            linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.022)),
            rgba(7, 13, 23, 0.93);
          box-shadow: 0 24px 78px rgba(0, 0, 0, 0.3);
        }

        .active-artifact {
          position: sticky;
          top: 88px;
          display: grid;
          gap: 18px;
          min-height: 680px;
          overflow: hidden;
          border-top: 4px solid var(--artifact-accent);
          border-radius: 28px;
          padding: 22px;
        }

        .active-artifact::after {
          position: absolute;
          inset: 0;
          pointer-events: none;
          content: '';
          background:
            linear-gradient(rgba(255, 255, 255, 0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.022) 1px, transparent 1px);
          background-size: 34px 34px;
          opacity: 0.7;
        }

        .active-artifact > * {
          position: relative;
          z-index: 1;
        }

        .active-artifact header {
          display: grid;
          gap: 10px;
        }

        .active-artifact header span,
        .sequence-copy em,
        .lightbox header span {
          color: var(--artifact-accent);
          font-size: 0.72rem;
          font-style: normal;
          font-weight: 950;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .active-artifact h3,
        .lightbox h3 {
          margin: 0;
          color: #ffffff;
          font-size: clamp(1.9rem, 4vw, 3.85rem);
          line-height: 0.98;
          letter-spacing: 0;
        }

        .active-artifact p,
        .lightbox p {
          max-width: 820px;
          margin: 0;
          color: #b6c5d8;
          font-size: 1rem;
          line-height: 1.55;
        }

        .active-preview {
          display: grid;
          place-items: center;
          min-height: 420px;
          overflow: hidden;
          border: 1px solid rgba(191, 203, 220, 0.14);
          border-radius: 22px;
          background:
            radial-gradient(circle at 50% 12%, color-mix(in srgb, var(--artifact-accent) 12%, transparent), transparent 18rem),
            #05070c;
        }

        .active-preview img,
        .lightbox-body img {
          display: block;
          width: 100%;
          height: 100%;
          max-height: 560px;
          object-fit: contain;
        }

        .active-preview pre,
        .lightbox-body pre {
          width: 100%;
          height: 100%;
          min-height: 360px;
          overflow: auto;
          margin: 0;
          padding: 22px;
          color: #dffbff;
          background: rgba(2, 6, 12, 0.86);
          font-size: clamp(0.84rem, 1.4vw, 1.02rem);
          line-height: 1.62;
        }

        .active-artifact footer {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 16px;
          margin-top: auto;
        }

        .active-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .active-stack span {
          border: 1px solid color-mix(in srgb, var(--artifact-accent) 36%, rgba(255, 255, 255, 0.08));
          border-radius: 999px;
          padding: 5px 10px;
          background: color-mix(in srgb, var(--artifact-accent) 10%, transparent);
          color: #f5fbff;
          font-size: 0.76rem;
          font-weight: 900;
        }

        .active-actions {
          display: flex;
          flex: 0 0 auto;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 9px;
        }

        .active-actions button,
        .active-actions a,
        .lightbox a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          min-height: 38px;
          border: 1px solid color-mix(in srgb, var(--artifact-accent) 36%, rgba(255, 255, 255, 0.12));
          border-radius: 12px;
          padding: 8px 11px;
          background: color-mix(in srgb, var(--artifact-accent) 12%, rgba(255, 255, 255, 0.05));
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 950;
          cursor: pointer;
        }

        .artifact-sequence {
          display: grid;
          gap: 12px;
        }

        .sequence-card {
          position: relative;
          display: grid;
          grid-template-columns: 48px minmax(0, 1fr) auto;
          gap: 14px;
          align-items: center;
          width: 100%;
          min-height: 118px;
          border-left: 4px solid transparent;
          border-radius: 22px;
          padding: 16px;
          color: inherit;
          cursor: pointer;
          text-align: left;
          transition:
            transform var(--duration) ease,
            border-color var(--duration) ease,
            box-shadow var(--duration) ease;
        }

        .sequence-card:hover,
        .sequence-card.active {
          transform: translateY(-2px);
          border-left-color: var(--artifact-accent);
          border-color: color-mix(in srgb, var(--artifact-accent) 46%, rgba(191, 203, 220, 0.15));
          box-shadow:
            0 28px 88px rgba(0, 0, 0, 0.36),
            0 0 36px color-mix(in srgb, var(--artifact-accent) 12%, transparent);
        }

        .sequence-index {
          display: grid;
          place-items: center;
          width: 42px;
          height: 42px;
          border: 1px solid color-mix(in srgb, var(--artifact-accent) 42%, rgba(255, 255, 255, 0.1));
          border-radius: 999px;
          background: rgba(2, 6, 12, 0.72);
          color: var(--artifact-accent);
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.78rem;
          font-weight: 950;
        }

        .sequence-copy {
          display: grid;
          gap: 5px;
          min-width: 0;
        }

        .sequence-copy strong {
          color: #ffffff;
          font-size: clamp(1.02rem, 1.55vw, 1.22rem);
          line-height: 1.08;
        }

        .sequence-copy small {
          color: #aab9cc;
          font-size: 0.84rem;
          line-height: 1.35;
        }

        .sequence-card svg {
          color: var(--artifact-accent);
        }

        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          z-index: 80;
          display: grid;
          place-items: center;
          padding: 24px;
          background: rgba(0, 0, 0, 0.76);
          backdrop-filter: blur(12px);
        }

        .lightbox {
          display: grid;
          gap: 18px;
          width: min(1180px, 100%);
          max-height: min(90vh, 940px);
          overflow: auto;
          border-top: 4px solid var(--artifact-accent);
          border-radius: 28px;
          padding: 20px;
        }

        .lightbox header {
          display: flex;
          align-items: start;
          justify-content: space-between;
          gap: 18px;
        }

        .lightbox h3 {
          margin-top: 6px;
          font-size: clamp(1.75rem, 4vw, 3.4rem);
        }

        .lightbox header button {
          display: inline-grid;
          place-items: center;
          flex: 0 0 auto;
          width: 42px;
          height: 42px;
          border: 1px solid rgba(191, 203, 220, 0.18);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.065);
          color: #ffffff;
          cursor: pointer;
        }

        .lightbox-body {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(260px, 0.36fr);
          gap: 18px;
          align-items: stretch;
        }

        .lightbox-body > img,
        .lightbox-body > pre {
          overflow: hidden;
          border: 1px solid rgba(191, 203, 220, 0.14);
          border-radius: 20px;
          background: #05070c;
        }

        .lightbox-body aside {
          display: grid;
          align-content: start;
          gap: 16px;
          border: 1px solid rgba(191, 203, 220, 0.12);
          border-radius: 20px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.045);
        }

        .lightbox a {
          width: fit-content;
        }

        @media (max-width: 1080px) {
          .dossier-layout,
          .lightbox-body {
            grid-template-columns: 1fr;
          }

          .active-artifact {
            position: relative;
            top: auto;
            min-height: auto;
          }
        }

        @media (max-width: 720px) {
          .active-artifact {
            border-radius: 24px;
            padding: 17px;
          }

          .active-preview {
            min-height: 250px;
          }

          .active-preview pre,
          .lightbox-body pre {
            min-height: 260px;
            font-size: 0.78rem;
          }

          .active-artifact footer {
            display: grid;
            align-items: start;
          }

          .active-actions {
            justify-content: stretch;
          }

          .active-actions button,
          .active-actions a {
            width: 100%;
          }

          .sequence-card {
            grid-template-columns: 40px minmax(0, 1fr);
            min-height: auto;
            padding: 14px;
          }

          .sequence-card > svg {
            display: none;
          }

          .lightbox-backdrop {
            padding: 12px;
          }
        }
      `}</style>
    </section>
  );
}
