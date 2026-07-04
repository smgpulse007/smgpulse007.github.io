import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ExternalLink, X } from 'lucide-react';

type WallArtifact = {
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  src?: string;
  alt?: string;
  code?: string;
};

const artifacts: WallArtifact[] = [
  {
    title: 'LLM Steering Workbench',
    eyebrow: 'Research engineering',
    description: 'Prompt-pair editor, baseline-vs-steered comparison, hook controls, and local experiment surface.',
    href: '/projects/llm-steering/',
    src: '/assets/case-studies/llm-steering/screenshots/workbench-ui-overview.gif',
    alt: 'Animated LLM steering workbench overview',
  },
  {
    title: 'AlphaQuant UI Demo',
    eyebrow: 'Agentic infrastructure',
    description: 'Local-first agentic market intelligence workbench with storage, planner, verification, and reports.',
    href: '/projects/agentic-alpha-engine/',
    src: '/assets/case-studies/alphaquant/screenshots/ui-demo.gif',
    alt: 'Animated AlphaQuant UI demo',
  },
  {
    title: 'Readmission API Response',
    eyebrow: 'FHIR ML API',
    description: 'Risk band, probability, model version, and top contributing features from a synthetic FHIR scoring contract.',
    href: '/projects/hospital-readmission-fhir-ml-api/',
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
    description: 'Historical 2024 comparison of Elo, XGBoost, logistic regression, and ensemble probability quality.',
    href: '/projects/nfl-sports-forecasting/',
    src: '/assets/case-studies/nfl/charts/model-comparison.svg',
    alt: 'NFL forecasting model comparison chart',
  },
  {
    title: 'HL7 Architecture',
    eyebrow: 'Healthcare interoperability',
    description: 'Event gateway, FHIR mapper, prediction service, care orchestration, SMART/CDS, and dashboard outputs.',
    href: '/projects/hl7-ai-challenge/',
    src: '/assets/case-studies/hl7/diagrams/architecture-high-level.png',
    alt: 'HL7 AI Challenge architecture diagram',
  },
  {
    title: 'FreshTrack OCR Output',
    eyebrow: 'OCR to JSON',
    description: 'Receipt image to cleaned entities, optional LLM parser, confidence scoring, and structured API output.',
    href: '/projects/freshtrack-ai-module/',
    src: '/assets/case-studies/freshtrack/screenshots/sample-receipt.jpg',
    alt: 'Synthetic sample receipt used in OCR extraction',
  },
  {
    title: 'Local Document AI Flow',
    eyebrow: 'Private RAG',
    description: 'PDF parsing, chunking, prompt assembly, local Ollama inference, and Streamlit review surface.',
    href: '/projects/local-document-ai-extraction/',
    src: '/assets/case-studies/document-ai/diagrams/local-document-flow.svg',
    alt: 'Local document AI extraction flow diagram',
  },
];

export default function ArtifactWall() {
  const [selected, setSelected] = useState<WallArtifact | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="artifact-wall" aria-label="Evidence artifact wall">
      <div className="wall-grid">
        {artifacts.map((artifact, index) => (
          <motion.button
            type="button"
            className="wall-card"
            key={artifact.title}
            onClick={() => setSelected(artifact)}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.32, delay: index * 0.035, ease: 'easeOut' }}
          >
            <span>{artifact.eyebrow}</span>
            <strong>{artifact.title}</strong>
            {artifact.src ? (
              <img src={artifact.src} alt="" loading="lazy" />
            ) : (
              <pre aria-hidden="true">
                <code>{artifact.code}</code>
              </pre>
            )}
            <p>{artifact.description}</p>
          </motion.button>
        ))}
      </div>

      {selected && (
        <div className="lightbox-backdrop" role="presentation" onClick={() => setSelected(null)}>
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            onClick={(event) => event.stopPropagation()}
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <header>
              <div>
                <span>{selected.eyebrow}</span>
                <h3>{selected.title}</h3>
              </div>
              <button type="button" onClick={() => setSelected(null)} aria-label="Close artifact preview">
                <X aria-hidden="true" size={20} strokeWidth={2.2} />
              </button>
            </header>
            {selected.src ? (
              <img src={selected.src} alt={selected.alt ?? selected.title} />
            ) : (
              <pre>
                <code>{selected.code}</code>
              </pre>
            )}
            <p>{selected.description}</p>
            <a href={selected.href}>
              Open case study
              <ExternalLink aria-hidden="true" size={16} strokeWidth={2.2} />
            </a>
          </motion.div>
        </div>
      )}

      <style>{`
        .artifact-wall {
          position: relative;
        }

        .wall-grid {
          columns: 3 260px;
          column-gap: 16px;
        }

        .wall-card {
          display: grid;
          width: 100%;
          break-inside: avoid;
          gap: 12px;
          margin: 0 0 16px;
          border: 1px solid rgba(191, 203, 220, 0.14);
          border-radius: 24px;
          padding: 16px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.065), rgba(255, 255, 255, 0.02)),
            rgba(7, 13, 23, 0.9);
          color: inherit;
          cursor: zoom-in;
          text-align: left;
          box-shadow: 0 18px 54px rgba(0, 0, 0, 0.22);
          transition:
            transform var(--duration) ease,
            border-color var(--duration) ease,
            box-shadow var(--duration) ease;
        }

        .wall-card:hover {
          transform: translateY(-3px);
          border-color: rgba(88, 220, 230, 0.36);
          box-shadow: 0 26px 72px rgba(0, 0, 0, 0.34);
        }

        .wall-card span,
        .lightbox span {
          color: #f1bd5c;
          font-size: 0.72rem;
          font-weight: 950;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .wall-card strong {
          color: #ffffff;
          font-size: 1.08rem;
          line-height: 1.15;
        }

        .wall-card img,
        .lightbox img {
          width: 100%;
          border: 1px solid rgba(191, 203, 220, 0.14);
          border-radius: 16px;
          background: #05070c;
        }

        .wall-card pre,
        .lightbox pre {
          overflow: auto;
          margin: 0;
          border: 1px solid rgba(88, 220, 230, 0.18);
          border-radius: 16px;
          padding: 14px;
          background: rgba(2, 6, 12, 0.72);
          color: #dffbff;
          font-size: 0.78rem;
          line-height: 1.55;
        }

        .wall-card p,
        .lightbox p {
          margin: 0;
          color: #a7b5c9;
          line-height: 1.48;
        }

        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          z-index: 80;
          display: grid;
          place-items: center;
          padding: 20px;
          background: rgba(0, 0, 0, 0.72);
          backdrop-filter: blur(10px);
        }

        .lightbox {
          display: grid;
          gap: 16px;
          width: min(960px, 100%);
          max-height: min(88vh, 900px);
          overflow: auto;
          border: 1px solid rgba(191, 203, 220, 0.18);
          border-radius: 26px;
          padding: 18px;
          background: #07101b;
          box-shadow: 0 34px 110px rgba(0, 0, 0, 0.55);
        }

        .lightbox header {
          display: flex;
          align-items: start;
          justify-content: space-between;
          gap: 18px;
        }

        .lightbox h3 {
          margin: 4px 0 0;
          color: #ffffff;
          font-size: clamp(1.4rem, 3vw, 2.4rem);
          line-height: 1.08;
        }

        .lightbox button {
          display: inline-grid;
          place-items: center;
          flex: 0 0 auto;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(191, 203, 220, 0.18);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
          cursor: pointer;
        }

        .lightbox a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          color: #dffbff;
          font-weight: 950;
        }
      `}</style>
    </section>
  );
}
