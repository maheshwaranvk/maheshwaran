import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { site, sessions, programs, topics, coachingSteps } from "../data/site.js";
import HeroBg from "../components/HeroBg.jsx";
import SplitHeadline from "../components/SplitHeadline.jsx";
import SectionHead from "../components/SectionHead.jsx";
import SpotlightCard from "../components/SpotlightCard.jsx";
import Mosaic from "../components/Mosaic.jsx";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal.jsx";

export default function WorkWithMe() {
  const l = site.links;
  return (
    <>
      <section className="hero" style={{ paddingBottom: 40 }}>
        <HeroBg />
        <div className="wrap">
          <div className="eyebrow">Work with me</div>
          <SplitHeadline text="Let's build something that" accent="holds up." />
          <motion.p className="lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            I work with enterprise teams, working professionals and colleges. Pick what fits and send me a note. I reply personally.
          </motion.p>
        </div>
      </section>

      <section style={{ paddingTop: 24 }}>
        <div className="wrap">
          <Stagger className="cards">
            <StaggerItem><SpotlightCard id="consulting">
              <span className="num">For teams</span><h3>AI consulting</h3>
              <p>Architecture and design reviews, proposal support, and a clear path from proof of concept to a production-ready, compliant system.</p>
              <div className="tags"><span className="tag">Architecture</span><span className="tag">RAG &amp; agents</span><span className="tag">Evaluation</span></div>
              <a className="btn primary" href={l.email}>Start a conversation</a>
            </SpotlightCard></StaggerItem>
            <StaggerItem><SpotlightCard>
              <span className="num">For professionals</span><h3>One-to-one coaching</h3>
              <p>For engineers moving into AI or leading AI work: a skills roadmap, portfolio projects worth showing, and interview and career strategy.</p>
              <div className="tags"><span className="tag">Career moves</span><span className="tag">Hands-on projects</span></div>
              <Link className="btn primary" to="/work-with-me#coaching">How coaching works</Link>
            </SpotlightCard></StaggerItem>
            <StaggerItem><SpotlightCard>
              <span className="num">For colleges</span><h3>Masterclasses &amp; bootcamps</h3>
              <p>Practical AI that goes beyond the demo, taught with real industry examples to help students get hired.</p>
              <div className="tags"><span className="tag">Masterclass</span><span className="tag">Bootcamps</span><span className="tag">Mentorship</span></div>
              <Link className="btn primary" to="/work-with-me#training">See the programs</Link>
            </SpotlightCard></StaggerItem>
          </Stagger>
        </div>
      </section>

      <section className="tint" id="training">
        <div className="wrap">
          <SectionHead eyebrow="Training for colleges & teams" title="Most AI training stops at the demo." accent="Mine starts there."
            lead="Every session uses real examples from industry AI projects, so students learn how AI is actually built and shipped, not just how to use a chatbot." />
          <Stagger className="programs">
            {programs.map((p) => (
              <StaggerItem key={p.title}>
                <SpotlightCard className={`program${p.featured ? " featured" : ""}`}>
                  <span className="len">{p.len}</span><h3>{p.title}</h3><p>{p.text}</p>
                  <ul>{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="bonus">
            <b>+ Bonus</b>
            <p>Every program can include a separate career-prep session: LinkedIn optimisation, resume and ATS, interviews, talking to HR and salary negotiation.</p>
          </Reveal>
          <Reveal style={{ marginTop: 48 }}>
            <h3 style={{ marginBottom: 16 }}>Topics I teach</h3>
            <div className="topics">{topics.map((t) => <span className="topic" key={t}>{t}</span>)}</div>
          </Reveal>
          <Reveal className="btn-row"><a className="btn primary" href={l.email}>Invite me to your campus</a></Reveal>
        </div>
      </section>

      <section className="showcase" id="sessions">
        <div className="wrap">
          <SectionHead eyebrow="In the room" title="Sessions, talks &" accent="workshops"
            lead="Four years of lectures, conference talks and workshops, reaching more than 1,000 students and professionals." />
          <Mosaic items={sessions} />
        </div>
      </section>

      <section className="tint" id="coaching">
        <div className="wrap coach-grid">
          <Reveal>
            <div className="eyebrow">One-to-one coaching</div>
            <h2>From "learning AI" to <em>working in AI.</em></h2>
            <p className="lead">For working professionals who want to move into an AI role, or lead AI work in the role they have.</p>
            <p>You get guidance from someone who has made the move into AI architecture and builds production AI systems every day: what to learn, what to skip, and what hiring managers actually look for.</p>
            <div className="btn-row"><a className="btn primary" href={l.email}>Book a first call</a></div>
          </Reveal>
          <Stagger as="ol" className="coach-steps" gap={0.15}>
            {coachingSteps.map((s) => (
              <StaggerItem as="li" key={s.title}><h3>{s.title}</h3><p>{s.text}</p></StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <SectionHead eyebrow="Find me" title="Say" accent="hello" lead="LinkedIn is where I'm most active. For anything formal, email is best." />
          <Stagger className="socials">
            <StaggerItem as="a" className="social" href={l.linkedin} target="_blank" rel="noopener"><span className="net">LinkedIn</span><b>/in/maheshwaranvk</b><span>Daily posts on AI</span></StaggerItem>
            <StaggerItem as="a" className="social" href={l.substack} target="_blank" rel="noopener"><span className="net">Substack</span><b>@maheshwaranvk</b><span>Long-form and weekly picks</span></StaggerItem>
            <StaggerItem as="a" className="social" href={l.x} target="_blank" rel="noopener"><span className="net">X</span><b>@maheshwaranvk</b><span>Quick takes</span></StaggerItem>
            <StaggerItem as="a" className="social" href={l.email}><span className="net">Email</span><b>vkmaheshwaran@gmail.com</b><span>Consulting &amp; sessions</span></StaggerItem>
          </Stagger>
        </div>
      </section>
    </>
  );
}
