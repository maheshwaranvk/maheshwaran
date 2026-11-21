import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, projectCategories } from "../data/site.js";
import HeroBg from "../components/HeroBg.jsx";
import SplitHeadline from "../components/SplitHeadline.jsx";

// ---------- small inline icons ----------
const svg = (children, fill = "none") => (
  <svg viewBox="0 0 24 24" fill={fill} stroke={fill === "none" ? "currentColor" : "none"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);
const GitHub = () => svg(<path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />, "currentColor");
const Arrow = () => svg(<><path d="M7 17 17 7" /><path d="M8 7h9v9" /></>);

const icons = {
  leaf: <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></>,
  bolt: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />,
  book: <><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /><path d="M9 7h7" /><path d="M9 11h5" /></>,
  checklist: <><path d="m3 17 2 2 4-4" /><path d="m3 7 2 2 4-4" /><path d="M13 6h8" /><path d="M13 12h8" /><path d="M13 18h8" /></>,
  cursor: <><rect x="2" y="3" width="20" height="15" rx="2" /><path d="M2 7h20" /><path d="m11 10 3 8 1.2-3.3L18.5 13.5z" /></>,
  swap: <><path d="m16 3 4 4-4 4" /><path d="M20 7H4" /><path d="m8 21-4-4 4-4" /><path d="M4 17h16" /></>,
};
const ProjIcon = ({ name }) => svg(icons[name] || icons.bolt);

// Card colour follows the project's first category
const catClass = (c) => "cat-" + c.toLowerCase().replace(/[^a-z]+/g, "-").replace(/-$/, "");

const anim = {
  layout: true,
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, scale: 0.97, transition: { duration: 0.2 } },
  transition: { duration: 0.45, ease: [0.2, 0.7, 0.2, 1] },
};

function ProjectCard({ p }) {
  return (
    <motion.article {...anim} className={`pcard ${catClass(p.categories[0])}`}>
      <div className="pcard-visual">
        <span className="pcard-grid" aria-hidden="true" />
        <div className="pcard-vtop">
          <span className="pcard-icon"><ProjIcon name={p.icon} /></span>
          <span className="pcard-cats">{p.categories.map((c) => <span key={c}>{c}</span>)}</span>
        </div>
        {p.highlights && (
          <div className="pcard-stats">
            {p.highlights.map((h) => (
              <div key={h.label}><b>{h.value}</b><span>{h.label}</span></div>
            ))}
          </div>
        )}
      </div>
      <div className="pcard-body">
        <span className="pcard-tag">{p.tag}</span>
        <h3>{p.title}</h3>
        <p>{p.text}</p>
        <div className="pcard-stack">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
        <div className="pcard-links">
          {p.code && <a className="btn primary" href={p.code} target="_blank" rel="noopener"><GitHub />View code</a>}
          {p.live && <a className="btn primary" href={p.live} target="_blank" rel="noopener"><Arrow />Open live app</a>}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const total = projects.length;
  const shown = filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));
  const chips = ["All", ...projectCategories].map((c) => ({
    name: c,
    count: c === "All" ? total : projects.filter((p) => p.categories.includes(c)).length,
  }));

  return (
    <>
      <section className="hero compact" style={{ paddingBottom: 40 }}>
        <HeroBg />
        <div className="wrap">
          <div className="eyebrow">Projects</div>
          <SplitHeadline text="Things I've built that" accent="run in production." />
          <motion.p className="lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            AI systems I designed and built to production, enterprise-grade standards: retrieval, agents, evaluation, guardrails and automation. The code is open on GitHub.
          </motion.p>
        </div>
      </section>

      <section style={{ paddingTop: 8 }}>
        <div className="wrap">
          <div className="proj-filter" role="toolbar" aria-label="Filter projects">
            {chips.map((c) => (
              <button key={c.name} type="button" className={`chip${filter === c.name ? " on" : ""}`} aria-pressed={filter === c.name} onClick={() => setFilter(c.name)}>
                {c.name}<i>{c.count}</i>
              </button>
            ))}
            <span className="proj-showing" aria-live="polite">Showing <b>{shown.length}</b> of {total}</span>
          </div>

          <motion.div layout className="proj-list">
            <AnimatePresence mode="popLayout">
              {shown.map((p) => <ProjectCard key={p.title} p={p} />)}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
