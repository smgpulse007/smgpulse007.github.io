import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Activity, Braces, FileJson, FileText, GitBranch, ShieldCheck, TestTube2 } from 'lucide-react';
import { cn } from '@lib/utils';

type ArtifactCard = {
  title: string;
  subtitle: string;
  tone: 'cyan' | 'emerald' | 'amber' | 'violet' | 'rose' | 'slate';
  icon: typeof FileJson;
  snippet: string[];
};

const artifacts: ArtifactCard[] = [
  {
    title: 'fhir_bundle.json',
    subtitle: 'Synthetic care episode',
    tone: 'cyan',
    icon: FileJson,
    snippet: ['"resourceType": "Bundle",', '"encounters_180d": 3,', '"discharge": "SNF"'],
  },
  {
    title: 'claims_document.pdf',
    subtitle: 'OCR + exception routing',
    tone: 'emerald',
    icon: FileText,
    snippet: ['claim_type: medical_review', 'confidence_gate: enabled', 'route: analyst_queue'],
  },
  {
    title: 'agent_trace.yaml',
    subtitle: 'Tool workflow state',
    tone: 'violet',
    icon: GitBranch,
    snippet: ['route: extract -> verify', 'tool_calls: 6', 'citation_check: passed'],
  },
  {
    title: 'risk_score_response.json',
    subtitle: 'API output contract',
    tone: 'amber',
    icon: Braces,
    snippet: ['"risk_band": "high",', '"probability": 0.82,', '"top_features": ["prior_admit"]'],
  },
  {
    title: 'model_card.md',
    subtitle: 'Responsible use',
    tone: 'rose',
    icon: ShieldCheck,
    snippet: ['Synthetic demo only', 'No PHI or PII', 'Human review required'],
  },
  {
    title: 'pytest_results.log',
    subtitle: 'Build evidence',
    tone: 'slate',
    icon: TestTube2,
    snippet: ['pytest: 42 passed', 'docker: build ok', 'health: status=ok'],
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

  const statusItems = useMemo(
    () => [
      { label: 'FHIR / HL7', value: 'healthcare contracts' },
      { label: 'LangGraph / RAG', value: 'workflow control' },
      { label: 'FastAPI / MLflow', value: 'deployable systems' },
    ],
    [],
  );

  return (
    <section className="artifact-hero" aria-label="Animated portfolio artifact stack">
      <div className="artifact-orbit" aria-hidden="true">
        <motion.span
          animate={prefersReducedMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="artifact-status">
        <Activity aria-hidden="true" size={18} strokeWidth={2.2} />
        <strong>{active.subtitle}</strong>
        <span>{active.title}</span>
      </div>

      <div className="artifact-stack">
        {artifacts.map((artifact, index) => {
          const Icon = artifact.icon;
          const isActive = index === activeIndex;
          const offset = index - activeIndex;
          return (
            <motion.button
              key={artifact.title}
              type="button"
              className={cn('artifact-card', toneClasses[artifact.tone], isActive && 'active')}
              onFocus={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              initial={false}
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: Math.abs(offset) * 8,
                      x: offset * 24,
                      rotate: offset * 1.8,
                      scale: isActive ? 1.03 : 0.96,
                    }
              }
              transition={{ duration: 0.38, delay: index * 0.045, ease: 'easeOut' }}
              style={{ zIndex: artifacts.length + (isActive ? 10 : -Math.abs(offset)) }}
              aria-pressed={isActive}
            >
              <span className="artifact-card-header">
                <span>
                  <Icon aria-hidden="true" size={17} strokeWidth={2.2} />
                  {artifact.title}
                </span>
                <i>{String(index + 1).padStart(2, '0')}</i>
              </span>
              <span className="artifact-card-subtitle">{artifact.subtitle}</span>
              <code>
                {artifact.snippet.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </code>
            </motion.button>
          );
        })}
      </div>

      <svg className="artifact-connectors" viewBox="0 0 740 520" aria-hidden="true" preserveAspectRatio="none">
        <motion.path
          d="M104 120 C250 82 288 190 402 168 S552 122 654 224"
          animate={prefersReducedMotion ? undefined : { strokeDashoffset: [0, -140] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
        />
        <motion.path
          d="M88 392 C230 308 338 444 468 344 S602 286 666 384"
          animate={prefersReducedMotion ? undefined : { strokeDashoffset: [0, -120] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: 'linear' }}
        />
      </svg>

      <div className="artifact-evidence">
        {statusItems.map((item) => (
          <span key={item.label}>
            <strong>{item.label}</strong>
            {item.value}
          </span>
        ))}
      </div>

      <style>{`
        .artifact-hero {
          position: relative;
          min-height: 572px;
          overflow: hidden;
          border: 1px solid rgba(191, 203, 220, 0.16);
          border-radius: 28px;
          padding: 22px;
          background:
            radial-gradient(circle at 24% 20%, rgba(88, 220, 230, 0.18), transparent 16rem),
            radial-gradient(circle at 78% 76%, rgba(241, 189, 92, 0.13), transparent 18rem),
            linear-gradient(rgba(255, 255, 255, 0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.028) 1px, transparent 1px),
            rgba(5, 10, 18, 0.92);
          background-size: auto, auto, 30px 30px, 30px 30px, auto;
          box-shadow: 0 34px 110px rgba(0, 0, 0, 0.38);
        }

        .artifact-orbit {
          position: absolute;
          inset: 40px;
          pointer-events: none;
        }

        .artifact-orbit span {
          display: block;
          width: 100%;
          height: 100%;
          border: 1px dashed rgba(88, 220, 230, 0.16);
          border-radius: 999px;
        }

        .artifact-status {
          position: relative;
          z-index: 4;
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

        .artifact-stack {
          position: relative;
          z-index: 2;
          min-height: 416px;
          margin-top: 24px;
        }

        .artifact-card {
          position: absolute;
          left: 8%;
          top: calc(24px + var(--stack-top, 0px));
          display: grid;
          gap: 10px;
          width: min(390px, 84%);
          min-height: 162px;
          border: 1px solid rgba(191, 203, 220, 0.16);
          border-left: 4px solid var(--artifact-accent);
          border-radius: 20px;
          padding: 15px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.025)),
            rgba(5, 10, 18, 0.88);
          color: #f8fbff;
          text-align: left;
          cursor: pointer;
          box-shadow: 0 22px 52px rgba(0, 0, 0, 0.34);
          backdrop-filter: blur(18px);
        }

        .artifact-card:nth-child(1) { --stack-top: 0px; }
        .artifact-card:nth-child(2) { --stack-top: 64px; left: 26%; }
        .artifact-card:nth-child(3) { --stack-top: 128px; left: 13%; }
        .artifact-card:nth-child(4) { --stack-top: 192px; left: 32%; }
        .artifact-card:nth-child(5) { --stack-top: 256px; left: 18%; }
        .artifact-card:nth-child(6) { --stack-top: 320px; left: 39%; }

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
          color: #8797ae;
          font-style: normal;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }

        .artifact-card-subtitle {
          color: #eef6ff;
          font-size: 1rem;
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
          font-size: 0.74rem;
          line-height: 1.4;
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
          stroke: rgba(88, 220, 230, 0.34);
          stroke-width: 2;
          stroke-dasharray: 8 12;
        }

        .artifact-evidence {
          position: relative;
          z-index: 5;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          margin-top: 20px;
        }

        .artifact-evidence span {
          display: grid;
          gap: 3px;
          border: 1px solid rgba(191, 203, 220, 0.14);
          border-radius: 16px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.045);
          color: #a9b7c9;
          font-size: 0.78rem;
        }

        .artifact-evidence strong {
          color: #f8fbff;
          font-size: 0.84rem;
        }

        @media (max-width: 1120px) {
          .artifact-hero {
            min-height: 540px;
          }
        }

        @media (max-width: 680px) {
          .artifact-hero {
            min-height: auto;
            padding: 16px;
          }

          .artifact-status {
            width: 100%;
            border-radius: 16px;
            flex-wrap: wrap;
          }

          .artifact-stack {
            display: grid;
            gap: 12px;
            min-height: auto;
          }

          .artifact-card {
            position: relative;
            left: auto !important;
            top: auto;
            width: 100%;
            min-height: 150px;
          }

          .artifact-evidence {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
