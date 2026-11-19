import { motion } from "framer-motion";
import { site } from "../data/site.js";
import HeroBg from "../components/HeroBg.jsx";
import SplitHeadline from "../components/SplitHeadline.jsx";
import SubscribeForm from "../components/SubscribeForm.jsx";

export default function Newsletter() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: 56 }}>
        <HeroBg />
        <div className="wrap" style={{ maxWidth: 860 }}>
          <div className="eyebrow">The weekly newsletter</div>
          <SplitHeadline text="I read the noise." accent="You get the signal." />
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
            <p className="lead">Every week I work through dozens of AI articles, papers and podcasts. Each week you get the few that matter, summarised in plain language, with my take as someone who builds these systems for a living.</p>
            <SubscribeForm label="Subscribe free" style={{ marginTop: 30, maxWidth: 560 }} />
            <p className="small" style={{ marginTop: 12 }}>Delivered via Substack. One email a week. Unsubscribe any time.</p>
            <p style={{ marginTop: 24 }}><a className="btn ghost" href={site.links.substack} target="_blank" rel="noopener">Read past issues on Substack →</a></p>
          </motion.div>
        </div>
      </section>

    </>
  );
}
