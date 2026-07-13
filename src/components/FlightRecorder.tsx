import { useState } from 'react';

const scenarios = [
  {
    id: 'claim', label: 'Claim packet', trace: 'trace.claim_packet.042', signal: 'review_required',
    artifact: '{ "doc_type": "EOB", "pages": 9, "contract": "claim_fact.v3" }',
    states: ['packet accepted', 'pages classified', 'facts extracted', 'date rule failed', 'reviewer routed', 'trace persisted'],
  },
  {
    id: 'fhir', label: 'FHIR care event', trace: 'trace.fhir_event.118', signal: 'validated',
    artifact: '{ "resourceType": "Encounter", "status": "finished", "synthetic": true }',
    states: ['event received', 'profile matched', 'fields mapped', 'schema valid', 'action prepared', 'latency recorded'],
  },
  {
    id: 'extract', label: 'Document review', trace: 'trace.document.207', signal: 'human_confirmed',
    artifact: '{ "field": "effective_date", "value": "2026-04-01", "confidence": 0.81 }',
    states: ['scan ingested', 'OCR complete', 'field extracted', 'conflict found', 'review confirmed', 'version logged'],
  },
  {
    id: 'rag', label: 'Local RAG', trace: 'trace.local_rag.319', signal: 'citation_attached',
    artifact: '{ "source": "synthetic-policy-17.pdf", "page": 4, "score": 0.84 }',
    states: ['local intake', 'chunks indexed', 'evidence retrieved', 'answer bounded', 'citation shown', 'quality sampled'],
  },
] as const;

export default function FlightRecorder() {
  const [activeId, setActiveId] = useState<(typeof scenarios)[number]['id']>('claim');
  const active = scenarios.find((scenario) => scenario.id === activeId) ?? scenarios[0];

  return (
    <section className="flight-recorder" aria-label="Interactive synthetic system flight recorder">
      <div className="recorder-head">
        <div><span className="live-dot" /> System flight recorder</div>
        <code>{active.trace}</code>
      </div>
      <div className="scenario-tabs" role="group" aria-label="Choose synthetic scenario">
        {scenarios.map((scenario) => (
          <button key={scenario.id} type="button" aria-pressed={scenario.id === active.id} onClick={() => setActiveId(scenario.id)}>
            {scenario.label}
          </button>
        ))}
      </div>
      <div className="trace-board">
        <p className="synthetic-label">Synthetic artifact · no private data</p>
        <pre aria-live="polite"><code>{active.artifact}</code></pre>
        <ol>
          {['Ingest', 'Classify', 'Extract', 'Validate', 'Human review', 'Observe'].map((stage, index) => (
            <li key={stage} className={index === 3 && active.signal.includes('review') ? 'caution' : ''}>
              <span>{String(index + 1).padStart(2, '0')}</span><strong>{stage}</strong><small>{active.states[index]}</small>
            </li>
          ))}
        </ol>
      </div>
      <footer><span>final state</span><strong>{active.signal}</strong><span>contract + reason + trace</span></footer>
    </section>
  );
}

