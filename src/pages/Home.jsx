import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { site, stats, tools, sessions, services, pipeline, nowWorkingOn, collegeLogos } from "../data/site.js";
import HeroBg from "../components/HeroBg.jsx";
import SplitHeadline from "../components/SplitHeadline.jsx";
import Typewriter from "../components/Typewriter.jsx";
import StatPanel from "../components/StatPanel.jsx";
import Marquee from "../components/Marquee.jsx";
import LogoStrip from "../components/LogoStrip.jsx";
import Mosaic from "../components/Mosaic.jsx";
import Pipeline from "../components/Pipeline.jsx";
import SectionHead from "../components/SectionHead.jsx";
import SpotlightCard from "../components/SpotlightCard.jsx";
import SubscribeForm from "../components/SubscribeForm.jsx";
import Icon from "../components/Icon.jsx";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal.jsx";

const fade = (delay) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.2, 0.7, 0.2, 1] },
});

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <HeroBg third />
        <div className="wrap grid">
          <div>
            <motion.div className="eyebrow" {...fade(0)}>{site.role} · {site.location}</motion.div>
            <SplitHeadline text="I build AI that goes from demo to" accent="production." />
            <motion.p className="lead" {...fade(0.9)}>
              I design agentic AI and hybrid RAG systems for enterprises in regulated industries, with evaluation,
              guardrails and compliance designed in from day one, not bolted on at the end.
            </motion.p>
            <motion.div className="btn-row" {...fade(1.1)}>
              <Link className="btn primary" to="/work-with-me">Work with me</Link>
              <Link className="btn ghost" to="/newsletter">Read the newsletter →</Link>
            </motion.div>
            <motion.div className="now" {...fade(1.3)}>
              <span className="pulse" /><span>Working on: <Typewriter words={nowWorkingOn} /></span>
            </motion.div>
          </div>

          <motion.div className="portrait" {...fade(0.4)}>
            <div className="photo"><span className="aurora" aria-hidden="true" /><div className="frame"><img src="/assets/mahesh.png" alt={site.name} /></div></div>
            <div className="caption"><span className="dot" /><span><b>{site.name}</b> · {site.role}</span></div>
          </motion.div>
        </div>

        <div className="wrap">
          <StatPanel stats={stats} />
        </div>
      </section>

      <Marquee label="Tools & techniques I work with" items={tools} />

      <LogoStrip label="Lectured & trained at" items={collegeLogos} />

      {/* IN THE ROOM */}
      <section className="showcase">
        <div className="wrap">
          <div className="showcase-head">
            <SectionHead eyebrow="In the room" title="Four years of teaching." accent="Here's what it looks like."
              lead="Guest lectures, conference stages, hands-on workshops and online mentoring, across colleges and industry events." />
            <Reveal className="btn-row" style={{ marginTop: 0 }}>
              <Link className="btn primary" to="/work-with-me#training">Training programs</Link>
              <Link className="btn ghost" to="/work-with-me#coaching">1:1 coaching</Link>
            </Reveal>
          </div>
          <Mosaic items={sessions} />
        </div>
      </section>

      {/* WHAT I DO */}
      <section>
        <div className="wrap">
          <SectionHead eyebrow="What I do" title="Three ways I can" accent="help"
            lead="Whether you are shipping an AI product, adopting AI in your team, or starting your own AI career." />
          <Stagger className="cards">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <SpotlightCard>
                  <div className="icon"><Icon name={s.icon} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <Link className="more" to={s.link}>{s.linkText} <span>→</span></Link>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="quote tint">
        <Reveal className="wrap">
          <blockquote>Process builds systems. Systems build scale. <em>Scale builds impact.</em></blockquote>
          <cite>How I approach every engagement</cite>
        </Reveal>
      </section>

      {/* DEMO TO PRODUCTION */}
      <section>
        <div className="wrap">
          <SectionHead eyebrow="From demo to production" title="What separates a prototype from a" accent="platform" />
          <Pipeline steps={pipeline} />
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="news-band">
            {[12, 34, 58, 82].map((l, i) => (
              <span key={l} className="spark" style={{ left: `${l}%`, bottom: 0, animationDelay: `${-i * 2.4}s` }} />
            ))}
            <div>
              <div className="eyebrow">The weekly newsletter</div>
              <h2>I read the noise. <em>You get the signal.</em></h2>
              <p>Every week I go through the articles, papers and podcasts on AI so you don't have to.</p>
            </div>
            <div>
              <ul>
                <li>The week's most useful reads, summarised</li>
                <li>My take on what it means for builders</li>
                <li>One email a week, free</li>
              </ul>
              <SubscribeForm style={{ marginTop: 20 }} />
              <p className="small">Delivered via Substack. Unsubscribe any time.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
