import { motion } from "framer-motion";
import { projects } from "../data/site.js";
import HeroBg from "../components/HeroBg.jsx";
import SplitHeadline from "../components/SplitHeadline.jsx";
import { Stagger, StaggerItem } from "../components/Reveal.jsx";

const GitHub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" /></svg>
);
const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg>
);

export default function Projects() {
  return (
    <>
      <section className="hero compact" style={{ paddingBottom: 32 }}>
        <HeroBg />
        <div className="wrap">
          <div className="eyebrow">Projects</div>
          <SplitHeadline text="Things I've built that" accent="run in production." />
          <motion.p className="lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            AI systems I designed and shipped: retrieval, agents, evaluation and automation. The code is open on GitHub.
          </motion.p>
        </div>
      </section>

      <section style={{ paddingTop: 24 }}>
        <div className="wrap">
          <Stagger className="proj-grid" gap={0.08}>
            {projects.map((p, i) => (
              <StaggerItem key={p.title} className="proj">
                <div className="proj-top">
                  <span className="proj-idx">{String(i + 1).padStart(2, "0")}</span>
                  <span className="proj-tag">{p.tag}</span>
                  <span className="proj-live" title="In production"><i />Live</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <div className="proj-stack">{p.stack.join(" · ")}</div>
                <div className="proj-links">
                  {p.code && <a href={p.code} target="_blank" rel="noopener"><GitHub />Code</a>}
                  {p.live && <a href={p.live} target="_blank" rel="noopener"><Arrow />Open live</a>}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
