import { motion } from "framer-motion";

// Headline that rises in word by word; the accent word gets a green underline sweep
export default function SplitHeadline({ text, accent }) {
  const words = text.split(" ");
  const item = (i) => ({
    initial: { opacity: 0, y: "0.45em" },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.1 + i * 0.08, ease: [0.2, 0.7, 0.2, 1] },
  });
  return (
    <h1>
      {words.map((w, i) => (
        <span key={i}>
          <motion.span className="w-motion" {...item(i)}>{w}</motion.span>{" "}
        </span>
      ))}
      {accent && (
        <motion.em className="w-motion" {...item(words.length)}>{accent}</motion.em>
      )}
    </h1>
  );
}
