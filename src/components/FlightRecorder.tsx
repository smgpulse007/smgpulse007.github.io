import { useEffect, useRef, useState } from 'react';

const scenarios = [
  {
    id: 'claim',
    label: 'Claim packet',
    source: ['EOB · p.04', 'Claim form · p.05', 'Note · p.09'],
    field: 'service date',
    left: '04 / 18',
    right: '04 / 19',
    reason: 'service dates conflict',
    evidence: 'pages 4–5',
    next: 'reviewer confirmation',
  },
  {
    id: 'clinical',
    label: 'Clinical document',
    source: ['Visit note · p.02', 'Medication list · p.04', 'Discharge · p.07'],
    field: 'dose instruction',
    left: 'once daily',
    right: 'twice daily',
    reason: 'instructions conflict',
    evidence: 'pages 4 and 7',
    next: 'clinical review',
  },
  {
    id: 'fhir',
    label: 'FHIR event',
    source: ['Encounter', 'Observation', 'CarePlan'],
    field: 'effective time',
    left: 'profile valid',
    right: 'timezone absent',
    reason: 'required context missing',
    evidence: 'event bundle',
    next: 'integration review',
  },
  {
    id: 'retrieval',
    label: 'Local retrieval',
    source: ['Policy · p.03', 'Addendum · p.04', 'Index · local'],
    field: 'effective date',
    left: 'Apr 01',
    right: 'Apr 11',
    reason: 'citations disagree',
    evidence: 'pages 3–4',
    next: 'reviewer confirmation',
  },
] as const;

const stages = ['Packet received', 'Pages identified', 'Fields extracted', 'Dates conflict', 'Reviewer sees evidence', 'Trace closes'];

export default function FlightRecorder() {
  const [scenarioId, setScenarioId] = useState<(typeof scenarios)[number]['id']>('claim');
  const [step, setStep] = useState(5);
  const [paused, setPaused] = useState(true);
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLElement>(null);
  const scenario = scenarios.find((item) => item.id === scenarioId) ?? scenarios[0];

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce && !sessionStorage.getItem('packet-trace-played')) {
      sessionStorage.setItem('packet-trace-played', 'true');
      setStep(0);
      setPaused(false);
    }
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.25 });
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !visible || step >= stages.length - 1) return;
    const timer = window.setTimeout(() => setStep((current) => Math.min(current + 1, stages.length - 1)), 950);
    return () => window.clearTimeout(timer);
  }, [paused, step, visible]);

  useEffect(() => {
    if (step === stages.length - 1) setPaused(true);
  }, [step]);

  const chooseScenario = (id: (typeof scenarios)[number]['id']) => {
    setScenarioId(id);
    setStep(5);
    setPaused(true);
  };

  const move = (delta: number) => {
    setPaused(true);
    setStep((current) => Math.max(0, Math.min(stages.length - 1, current + delta)));
  };

  return (
    <section
      className="packet-decision"
      aria-label="A packet becomes a decision"
      ref={rootRef}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight') move(1);
        if (event.key === 'ArrowLeft') move(-1);
      }}
    >
      <header className="packet-decision-head">
        <div><span>Trace replay · illustrative example</span><h2>A packet becomes a decision</h2></div>
        <div className="trace-controls">
          <button type="button" onClick={() => move(-1)} aria-label="Previous decision step">←</button>
          <button type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? 'Play decision trace' : 'Pause decision trace'}>{paused ? 'Play' : 'Pause'}</button>
          <button type="button" onClick={() => move(1)} aria-label="Next decision step">→</button>
        </div>
      </header>

      <div className="scenario-tabs" role="tablist" aria-label="Trace scenario">
        {scenarios.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={item.id === scenario.id}
            tabIndex={item.id === scenario.id ? 0 : -1}
            onClick={() => chooseScenario(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="packet-story">
        <div className="story-input" aria-label="Input pages">
          <span className="story-label">Input</span>
          <div className="story-pages">
            {scenario.source.map((source, index) => <span key={source} className={index === 1 ? 'active' : ''}><small>{String(index + 1).padStart(2, '0')}</small><strong>{source}</strong></span>)}
          </div>
        </div>

        <div className="story-control" aria-label="Interpretation and control">
          <span className="story-label">Interpretation + control</span>
          <div className="field-compare">
            <span><small>{scenario.field}</small><strong>{scenario.left}</strong><i>page 04</i></span>
            <b aria-hidden="true">≠</b>
            <span className={step >= 3 ? 'conflict' : ''}><small>{scenario.field}</small><strong>{scenario.right}</strong><i>page 05</i></span>
          </div>
          <p className={step >= 3 ? 'rule failed' : 'rule'}><span>Validation rule</span><strong>{step >= 3 ? 'Conflict found' : 'Comparing source fields'}</strong></p>
        </div>

        <div className="story-action" aria-label="Action">
          <span className="story-label">Action</span>
          <div className={step >= 4 ? 'action-card ready' : 'action-card'} aria-live="polite">
            <span>{step >= 4 ? 'Review required' : 'Waiting for control'}</span>
            <strong>{step >= 4 ? scenario.reason : 'No route selected'}</strong>
            <dl><div><dt>Evidence</dt><dd>{step >= 4 ? scenario.evidence : '—'}</dd></div><div><dt>Next</dt><dd>{step >= 4 ? scenario.next : '—'}</dd></div></dl>
          </div>
        </div>
      </div>

      <ol className="trace-sequence" aria-label="Complete decision sequence">
        {stages.map((stage, index) => (
          <li key={stage} className={index < step ? 'complete' : index === step ? 'current' : ''} aria-current={index === step ? 'step' : undefined}>
            <span>{String(index + 1).padStart(2, '0')}</span><strong>{stage}</strong>
          </li>
        ))}
      </ol>
    </section>
  );
}
