import { motion } from 'motion/react';

type Metric = {
  value: string;
  label: string;
  detail?: string;
};

type Props = {
  metrics: Metric[];
};

export default function MetricTicker({ metrics }: Props) {
  return (
    <div className="metric-ticker" aria-label="Selected applied AI impact metrics">
      {metrics.map((metric, index) => (
        <motion.article
          className="ticker-metric"
          key={metric.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, delay: index * 0.05 }}
        >
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
          {metric.detail && <p>{metric.detail}</p>}
        </motion.article>
      ))}
    </div>
  );
}
