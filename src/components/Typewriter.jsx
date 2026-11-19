import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

// Types each phrase, pauses, deletes it, then moves to the next
export default function Typewriter({ words }) {
  const reduce = useReducedMotion();
  const [w, setW] = useState(0);
  const [c, setC] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const word = words[w];
    let t;
    if (!deleting && c < word.length) t = setTimeout(() => setC(c + 1), 55);
    else if (!deleting) t = setTimeout(() => setDeleting(true), 1800);
    else if (c > 0) t = setTimeout(() => setC(c - 1), 28);
    else t = setTimeout(() => { setDeleting(false); setW((w + 1) % words.length); }, 300);
    return () => clearTimeout(t);
  }, [c, deleting, w, words, reduce]);

  return (
    <span>
      <span className="typed">{reduce ? words[0] : words[w].slice(0, c)}</span>
      <span className="caret" />
    </span>
  );
}
