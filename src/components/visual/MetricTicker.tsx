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
      {metrics.map((metric) => (
        <article
          className="ticker-metric"
          key={metric.label}
        >
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
          {metric.detail && <p>{metric.detail}</p>}
        </article>
      ))}
    </div>
  );
}
