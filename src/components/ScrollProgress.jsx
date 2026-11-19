import { motion, useScroll, useSpring } from "framer-motion";

// Thin green-to-amber bar at the top showing how far down the page you are
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  return <motion.div className="progress" style={{ scaleX }} />;
}
