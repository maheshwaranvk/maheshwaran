import { motion } from "framer-motion";
import { site, expertise } from "../data/site.js";
import HeroBg from "../components/HeroBg.jsx";
import SplitHeadline from "../components/SplitHeadline.jsx";
import SectionHead from "../components/SectionHead.jsx";
import StackBento from "../components/StackBento.jsx";

const fade = (d) => ({ initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d } });

export default function About() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: 72 }}>
        <HeroBg />
        <div className="wrap grid">
          <div>
            <motion.div className="eyebrow" {...fade(0)}>About</motion.div>
            <SplitHeadline text="Fifteen years of making software" accent="prove itself." />
            <motion.div {...fade(0.8)}>
              <p className="lead">I'm Maheshwaran, a Solution AI Architect at Virtusa in Chennai. I've spent my career building systems that have to work under real conditions, and today I bring that discipline to agentic AI and LLM platforms.</p>
              <p>My work spans banking, healthcare and linguistics. I design hybrid RAG architectures, multi-stage retrieval and agent orchestration with evaluation, guardrails and compliance built in, and I help shape AI proposals for enterprise clients.</p>
              <p>Outside client work, I teach. For four years I've been in college classrooms and on conference stages, helping engineers go past "how to use AI" to how to build it properly.</p>
            </motion.div>
          </div>
          <motion.div className="portrait" {...fade(0.4)}>
            <div className="photo"><span className="aurora" aria-hidden="true" /><div className="frame"><img src="/assets/mahesh.png" alt={site.name} /></div></div>
            <div className="caption"><span className="dot" /><span><b>Most Valuable Professional</b> · Elixr Labs</span></div>
          </motion.div>
        </div>
      </section>


      <section className="cap-section">
        <div className="wrap">
          <SectionHead eyebrow="Expertise" title="The stack I" accent="work in"
            lead="Six areas I design, build and ship, from the agents that do the work to the pipeline that keeps them accountable." />
          <StackBento items={expertise} />
        </div>
      </section>

    </>
  );
}
