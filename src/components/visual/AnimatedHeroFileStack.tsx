import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Activity, Bot, Database, FileText, GitBranch, LineChart, ShieldCheck } from 'lucide-react';

type DomainKey = 'healthcare' | 'claims' | 'agentic' | 'document' | 'forecasting' | 'mlops';

type StackFile = {
  name: string;
  detail: string;
  icon: 'file' | 'activity' | 'bot' | 'chart' | 'shield' | 'database' | 'branch';
};

const iconMap = {
  activity: Activity,
  bot: Bot,
  branch: GitBranch,
  chart: LineChart,
  database: Database,
  file: FileText,
  shield: ShieldCheck,
};

const domains: Array<{ key: DomainKey; label: string; tone: string; files: StackFile[] }> = [
  {
    key: 'healthcare',
    label: 'Healthcare',
    tone: 'cyan',
    files: [
      { name: 'fhir_bundle.json', detail: 'synthetic patient + encounter contract', icon: 'activity' },
      { name: 'hl7_adt_event.hl7', detail: 'event-driven intake boundary', icon: 'database' },
      { name: 'risk_score_response.json', detail: 'probability, band, top factors', icon: 'chart' },
      { name: 'model_card.md', detail: 'demo limits and validation notes', icon: 'file' },
      { name: 'pytest_results.txt', detail: 'contract tests and smoke checks', icon: 'branch' },
    ],
  },
  {
    key: 'claims',
    label: 'Claims / Insurance',
    tone: 'green',
    files: [
      { name: 'claims_document.pdf', detail: 'sanitized document intake surface', icon: 'file' },
      { name: 'hedis_evidence.trace', detail: 'quality evidence extraction path', icon: 'shield' },
      { name: 'exception_queue.json', detail: 'human review and routing state', icon: 'database' },
      { name: 'adjudication_graph.yaml', detail: 'agentic workflow gates', icon: 'bot' },
      { name: 'audit_log.json', detail: 'latency, tool, and validation events', icon: 'activity' },
    ],
  },
  {
    key: 'agentic',
    label: 'Agentic AI',
    tone: 'violet',
    files: [
      { name: 'agent_graph.yaml', detail: 'planner, tools, state, verification', icon: 'bot' },
      { name: 'tool_trace.json', detail: 'observable tool-call path', icon: 'activity' },
      { name: 'fusion_report.json', detail: 'structured synthesis output', icon: 'file' },
      { name: 'verifier_rules.md', detail: 'guardrails before reporting', icon: 'shield' },
      { name: 'memory_index.json', detail: 'retrieval and storage fabric', icon: 'database' },
    ],
  },
  {
    key: 'document',
    label: 'Document AI',
    tone: 'rose',
    files: [
      { name: 'claims_document.pdf', detail: 'local document review input', icon: 'file' },
      { name: 'ocr_extraction.trace', detail: 'OCR, chunks, prompt assembly', icon: 'activity' },
      { name: 'extracted_schema.json', detail: 'confidence-scored output', icon: 'database' },
      { name: 'review_notes.md', detail: 'analyst validation surface', icon: 'shield' },
      { name: 'docker-compose.yml', detail: 'local runtime boundary', icon: 'branch' },
    ],
  },
  {
    key: 'forecasting',
    label: 'Quant / Forecasting',
    tone: 'amber',
    files: [
      { name: 'calibration_metrics.csv', detail: 'Brier, accuracy, log loss', icon: 'chart' },
      { name: 'backtest_2024.json', detail: 'historical model comparison', icon: 'database' },
      { name: 'fusion_report.json', detail: 'verified research narrative', icon: 'file' },
      { name: 'model_comparison.csv', detail: 'Elo, XGBoost, logistic, ensemble', icon: 'chart' },
      { name: 'elo_baseline.py', detail: 'interpretable baseline first', icon: 'branch' },
    ],
  },
  {
    key: 'mlops',
    label: 'MLOps',
    tone: 'cyan',
    files: [
      { name: 'docker-compose.yml', detail: 'service graph and local replay', icon: 'branch' },
      { name: 'pytest_results.txt', detail: 'contract and regression checks', icon: 'activity' },
      { name: 'model_card.md', detail: 'scope, limits, validation', icon: 'shield' },
      { name: 'ci_workflow.yml', detail: 'build and deploy automation', icon: 'branch' },
      { name: 'observability_trace.json', detail: 'latency and tool metadata', icon: 'database' },
    ],
  },
];

export default function AnimatedHeroFileStack() {
  const [active, setActive] = useState<DomainKey>('healthcare');
  const prefersReducedMotion = useReducedMotion();
  const selected = useMemo(() => domains.find((domain) => domain.key === active) ?? domains[0], [active]);

  return (
    <section className={`file-stack-shell ${selected.tone}`} aria-label="Interactive portfolio artifact stack">
      <div className="file-stack-tabs" role="tablist" aria-label="Portfolio domains">
        {domains.map((domain) => (
          <button
            key={domain.key}
            type="button"
            role="tab"
            aria-selected={active === domain.key}
            className={active === domain.key ? 'active' : ''}
            onClick={() => setActive(domain.key)}
          >
            {domain.label}
          </button>
        ))}
      </div>

      <motion.div
        className="file-stack-stage"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18, rotateX: 5 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <svg className="file-stack-connectors" viewBox="0 0 640 440" aria-hidden="true" preserveAspectRatio="none">
          <path d="M94 90 C210 50 260 150 354 120 S500 88 586 142" />
          <path d="M86 302 C208 230 288 330 404 284 S512 254 588 318" />
          <path d="M142 196 C250 178 348 220 488 186" />
        </svg>

        <div className="file-stack-orbit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="file-stack-cards">
          {selected.files.map((file, index) => {
            const Icon = iconMap[file.icon];
            const offset = index - 2;
            return (
              <motion.article
                key={`${selected.key}-${file.name}`}
                className="file-card"
                style={{ ['--stack-index' as string]: index, ['--offset' as string]: offset }}
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        y: [0, offset % 2 === 0 ? -7 : 6, 0],
                        rotate: [-0.5 * offset, 0.45 * offset, -0.5 * offset],
                      }
                }
                transition={{ duration: 5.4 + index * 0.28, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="file-card-top">
                  <Icon aria-hidden="true" size={18} strokeWidth={2.2} />
                  <span>{file.name}</span>
                </div>
                <p>{file.detail}</p>
                <div className="file-card-meter" />
              </motion.article>
            );
          })}
        </div>

        <div className="file-stack-proof">
          <span>validated contracts</span>
          <span>repo artifacts</span>
          <span>sanitized evidence</span>
        </div>
      </motion.div>
    </section>
  );
}
