import { useMemo, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Braces, CheckCircle2, GitBranch } from 'lucide-react';
import { getProject, type Project } from '@data/projects';
import { showroomGroups } from '@data/systems';

function requireProject(slug: string): Project {
  const project = getProject(slug);
  if (!project) {
    throw new Error(`Missing project data for ${slug}`);
  }
  return project;
}

export default function FeaturedSystemsShowroom() {
  const [activeKey, setActiveKey] = useState(showroomGroups[0].key);
  const prefersReducedMotion = useReducedMotion();
  const activeGroup = useMemo(
    () => showroomGroups.find((group) => group.key === activeKey) ?? showroomGroups[0],
    [activeKey],
  );
  const lead = requireProject(activeGroup.leadSlug);
  const supporting = activeGroup.supportingSlugs.map(requireProject).slice(0, 2);

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) {
      return;
    }

    event.preventDefault();
    const lastIndex = showroomGroups.length - 1;
    const nextIndex =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? lastIndex
          : event.key === 'ArrowRight'
            ? index === lastIndex ? 0 : index + 1
            : index === 0 ? lastIndex : index - 1;
    setActiveKey(showroomGroups[nextIndex].key);
  }

  return (
    <section className="systems-showroom" aria-label="Featured systems showroom">
      <div className="showroom-tabs" role="tablist" aria-label="Featured systems categories">
        {showroomGroups.map((group, index) => (
          <button
            key={group.key}
            id={`showroom-tab-${group.key}`}
            type="button"
            role="tab"
            aria-selected={activeKey === group.key}
            aria-controls={`showroom-panel-${group.key}`}
            tabIndex={activeKey === group.key ? 0 : -1}
            className={activeKey === group.key ? 'active' : ''}
            onClick={() => setActiveKey(group.key)}
            onKeyDown={(event) => onTabKeyDown(event, index)}
          >
            {group.label}
          </button>
        ))}
      </div>

      <motion.div
        key={activeGroup.key}
        id={`showroom-panel-${activeGroup.key}`}
        role="tabpanel"
        aria-labelledby={`showroom-tab-${activeGroup.key}`}
        className="showroom-panel"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
      >
        <article className="lead-system">
          <div className="lead-copy">
            <span>Lead system</span>
            <h3>{lead.title}</h3>
            <p>{lead.summary}</p>
            <div className="lead-meta">
              {lead.techStack.slice(0, 5).map((item) => (
                <strong key={item}>{item}</strong>
              ))}
            </div>
            <div className="showroom-actions">
              <a href={lead.caseStudyUrl ?? lead.githubUrl}>
                Case study
                <ArrowUpRight aria-hidden="true" size={15} strokeWidth={2.2} />
              </a>
              <a href={lead.githubUrl}>
                GitHub
                <GitBranch aria-hidden="true" size={15} strokeWidth={2.2} />
              </a>
            </div>
          </div>
          <div className="lead-visual" aria-hidden="true">
            <div className="terminal-strip">
              <span>system.contract</span>
              <span>validation.ready</span>
              <span>reviewable.outputs</span>
            </div>
            <img src={lead.image} alt="" />
          </div>
        </article>

        <div className="supporting-systems" aria-label="Supporting systems">
          {supporting.map((project) => (
            <a key={project.slug} href={project.caseStudyUrl ?? project.githubUrl} className="support-system">
              <span>{project.domain}</span>
              <h4>{project.shortTitle}</h4>
              <p>{project.statusNote}</p>
            </a>
          ))}
        </div>

        <aside className="proof-stack" aria-label="Evidence">
          <div>
            <Braces aria-hidden="true" size={18} strokeWidth={2.2} />
            <strong>Evidence</strong>
          </div>
          {activeGroup.proofArtifacts.slice(0, 3).map((artifact) => (
            <span key={artifact}>
              <CheckCircle2 aria-hidden="true" size={15} strokeWidth={2.2} />
              {artifact}
            </span>
          ))}
        </aside>
      </motion.div>

      <style>{`
        .systems-showroom {
          border: 1px solid rgba(191, 203, 220, 0.14);
          border-radius: 8px;
          overflow: hidden;
          background: #07101b;
        }

        .showroom-tabs {
          display: flex;
          overflow-x: auto;
          gap: 1px;
          background: rgba(191, 203, 220, 0.08);
        }

        .showroom-tabs button {
          flex: 1 0 auto;
          min-height: 48px;
          border: 0;
          border-right: 1px solid rgba(191, 203, 220, 0.11);
          padding: 10px 14px;
          background: rgba(6, 12, 21, 0.96);
          color: #a7b5c8;
          cursor: pointer;
          font-size: 0.78rem;
          font-weight: 950;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .showroom-tabs button.active {
          color: #f8fbff;
          background: rgba(241, 189, 92, 0.12);
          box-shadow: inset 0 -2px 0 #f1bd5c;
        }

        .showroom-panel {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(220px, 0.34fr);
          gap: 16px;
          padding: 16px;
          background:
            linear-gradient(rgba(255,255,255,0.026) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.026) 1px, transparent 1px),
            #07101b;
          background-size: 30px 30px, 30px 30px, auto;
        }

        .lead-system {
          display: grid;
          grid-column: 1 / -1;
          grid-template-columns: minmax(0, 0.88fr) minmax(280px, 0.72fr);
          gap: 16px;
          border: 1px solid rgba(191, 203, 220, 0.13);
          border-radius: 8px;
          padding: 18px;
          background: rgba(3, 8, 15, 0.82);
        }

        .lead-copy > span,
        .support-system span {
          color: #f1bd5c;
          font-size: 0.72rem;
          font-weight: 950;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .lead-copy h3 {
          margin: 10px 0 14px;
          color: #f8fbff;
          font-size: clamp(1.8rem, 3.6vw, 3.55rem);
          line-height: 1.02;
        }

        .lead-copy p,
        .support-system p {
          margin: 0;
          color: #aab8ca;
          line-height: 1.5;
        }

        .lead-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 22px 0;
        }

        .lead-meta strong {
          border: 1px solid rgba(191, 203, 220, 0.14);
          border-radius: 999px;
          padding: 6px 9px;
          color: #dde8f6;
          background: rgba(255, 255, 255, 0.04);
          font-size: 0.75rem;
        }

        .showroom-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .showroom-actions a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 40px;
          border: 1px solid rgba(88, 220, 230, 0.34);
          border-radius: 8px;
          padding: 8px 12px;
          color: #f8fbff;
          background: rgba(88, 220, 230, 0.095);
          font-weight: 900;
        }

        .showroom-actions a + a {
          border-color: rgba(191, 203, 220, 0.16);
          background: rgba(255, 255, 255, 0.04);
          color: #dce7f5;
        }

        .lead-visual {
          display: grid;
          align-content: center;
          gap: 12px;
        }

        .lead-visual img {
          width: 100%;
          border: 1px solid rgba(191, 203, 220, 0.13);
          border-radius: 8px;
          background: #05070c;
        }

        .terminal-strip {
          display: grid;
          gap: 6px;
          border: 1px solid rgba(141, 232, 180, 0.18);
          border-radius: 8px;
          padding: 10px;
          background: rgba(3, 8, 15, 0.9);
        }

        .terminal-strip span {
          color: #e3ffed;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.74rem;
        }

        .supporting-systems {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .support-system {
          min-height: 158px;
          border: 1px solid rgba(191, 203, 220, 0.13);
          border-radius: 8px;
          padding: 16px;
          background: rgba(6, 12, 21, 0.88);
        }

        .support-system h4 {
          margin: 10px 0 8px;
          color: #f8fbff;
          font-size: 1.18rem;
          line-height: 1.15;
        }

        .proof-stack {
          display: grid;
          align-content: start;
          gap: 10px;
          border: 1px solid rgba(191, 203, 220, 0.13);
          border-radius: 8px;
          padding: 16px;
          background: rgba(3, 8, 15, 0.82);
        }

        .proof-stack div,
        .proof-stack span {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .proof-stack div {
          color: #8de8b4;
        }

        .proof-stack strong {
          color: #f8fbff;
          font-size: 0.88rem;
        }

        .proof-stack span {
          border: 1px solid rgba(191, 203, 220, 0.13);
          border-radius: 8px;
          padding: 10px;
          color: #dce7f5;
          background: rgba(255, 255, 255, 0.035);
          font-size: 0.85rem;
          font-weight: 850;
        }

        .proof-stack span svg {
          color: #8de8b4;
          flex: 0 0 auto;
        }

        @media (max-width: 1100px) {
          .showroom-panel,
          .lead-system {
            grid-template-columns: 1fr;
          }

          .proof-stack {
            grid-row: auto;
          }
        }

        @media (max-width: 720px) {
          .supporting-systems {
            grid-template-columns: 1fr;
          }

          .showroom-actions a {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
