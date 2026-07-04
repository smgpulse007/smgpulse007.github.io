import { motion } from 'motion/react';
import { Activity, Bot, FileText, GitBranch, LineChart, ShieldCheck } from 'lucide-react';

const nodes = [
  { label: 'FHIR / HL7', detail: 'event + bundle contracts', Icon: Activity, tone: 'cyan' },
  { label: 'Claims + Quality', detail: 'HEDIS, FWA, readmission', Icon: ShieldCheck, tone: 'green' },
  { label: 'Document AI', detail: 'OCR, RAG, JSON extraction', Icon: FileText, tone: 'violet' },
  { label: 'Agent Planner', detail: 'tools, state, verification', Icon: Bot, tone: 'cyan' },
  { label: 'Forecasting', detail: 'Elo, ensembles, calibration', Icon: LineChart, tone: 'amber' },
  { label: 'MLOps Loop', detail: 'tests, Docker, observability', Icon: GitBranch, tone: 'green' },
];

export default function AnimatedHeroConsole() {
  return (
    <motion.div
      className="hero-console"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="console-topbar">
        <span />
        <span />
        <span />
        <strong>AI Systems Console</strong>
      </div>
      <div className="console-canvas" aria-label="Animated applied AI systems console">
        <motion.div
          className="console-flow-line primary"
          animate={{ opacity: [0.35, 0.85, 0.35] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="console-flow-line secondary"
          animate={{ opacity: [0.2, 0.65, 0.2] }}
          transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        />
        <div className="console-node-grid">
          {nodes.map(({ label, detail, Icon, tone }, index) => (
            <motion.div
              className={`console-node ${tone}`}
              key={label}
              animate={{ y: [0, index % 2 === 0 ? -6 : 6, 0] }}
              transition={{ duration: 4.2 + index * 0.16, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Icon aria-hidden="true" size={18} strokeWidth={2.2} />
              <div>
                <strong>{label}</strong>
                <span>{detail}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="console-trace">
          <span>ingest.validated</span>
          <span>agent.plan.ready</span>
          <span>risk.score.high</span>
          <span>report.verified</span>
        </div>
      </div>
    </motion.div>
  );
}
