import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

type Metric = {
  value: string;
  label: string;
  detail: string;
};

type Props = {
  metrics: Metric[];
};

function parseMetric(value: string) {
  const match = value.match(/^([^0-9]*)([0-9]+)(.*)$/);
  if (!match) {
    return { prefix: '', target: 0, suffix: value };
  }
  return {
    prefix: match[1] ?? '',
    target: Number(match[2]),
    suffix: match[3] ?? '',
  };
}

export default function AnimatedMetricStrip({ metrics }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(prefersReducedMotion ? 1 : 0);
  const parsed = useMemo(() => metrics.map((metric) => parseMetric(metric.value)), [metrics]);

  useEffect(() => {
    if (!rootRef.current) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.24 },
    );
    observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || prefersReducedMotion) {
      setProgress(visible ? 1 : progress);
      return undefined;
    }

    let frame = 0;
    const started = performance.now();
    const duration = 1050;
    const tick = (time: number) => {
      const next = Math.min(1, (time - started) / duration);
      const eased = 1 - Math.pow(1 - next, 3);
      setProgress(eased);
      if (next < 1) {
        frame = requestAnimationFrame(tick);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, prefersReducedMotion]);

  return (
    <div ref={rootRef} className="metric-strip" aria-label="Selected delivery outcomes">
      {metrics.map((metric, index) => {
        const current = Math.round(parsed[index].target * progress);
        return (
          <motion.article
            key={metric.label}
            className="metric-card"
            initial={false}
            animate={visible && !prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.36, delay: index * 0.055, ease: 'easeOut' }}
          >
            <strong>
              {parsed[index].prefix}
              {current}
              {parsed[index].suffix}
            </strong>
            <span>{metric.label}</span>
            <p>{metric.detail}</p>
          </motion.article>
        );
      })}

      <style>{`
        .metric-strip {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          overflow: hidden;
          border: 1px solid rgba(191, 203, 220, 0.14);
          border-radius: 26px;
          background:
            linear-gradient(90deg, rgba(241, 189, 92, 0.12), rgba(141, 232, 180, 0.08), rgba(88, 220, 230, 0.1)),
            rgba(191, 203, 220, 0.1);
          box-shadow: 0 28px 86px rgba(0, 0, 0, 0.3);
        }

        .metric-card {
          position: relative;
          overflow: hidden;
          min-height: 156px;
          padding: 20px;
          background:
            radial-gradient(circle at 50% 0%, rgba(141, 232, 180, 0.1), transparent 10rem),
            linear-gradient(180deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.032)),
            rgba(8, 13, 25, 0.94);
        }

        .metric-card::before {
          position: absolute;
          inset: 0 0 auto;
          height: 3px;
          content: '';
          background: var(--metric-accent, #8de8b4);
          opacity: 0.82;
        }

        .metric-card:nth-child(1) { --metric-accent: #f1bd5c; }
        .metric-card:nth-child(2) { --metric-accent: #8de8b4; }
        .metric-card:nth-child(3) { --metric-accent: #58dce6; }
        .metric-card:nth-child(4) { --metric-accent: #b9a7ff; }
        .metric-card:nth-child(5) { --metric-accent: #f0a0bd; }
        .metric-card:nth-child(6) { --metric-accent: #cbd5e1; }

        .metric-card + .metric-card {
          border-left: 1px solid rgba(191, 203, 220, 0.1);
        }

        .metric-card strong {
          display: block;
          color: var(--metric-accent, #8de8b4);
          font-size: clamp(2rem, 3.2vw, 3.18rem);
          line-height: 1;
        }

        .metric-card span {
          display: block;
          margin-top: 11px;
          color: #ffffff;
          font-weight: 950;
          line-height: 1.15;
        }

        .metric-card p {
          margin: 8px 0 0;
          color: #8da0b9;
          font-size: 0.82rem;
          line-height: 1.35;
        }

        @media (max-width: 1120px) {
          .metric-strip {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .metric-card:nth-child(4) {
            border-left: 0;
          }
        }

        @media (max-width: 680px) {
          .metric-strip {
            grid-template-columns: 1fr;
          }

          .metric-card + .metric-card {
            border-left: 0;
            border-top: 1px solid rgba(191, 203, 220, 0.1);
          }
        }
      `}</style>
    </div>
  );
}
