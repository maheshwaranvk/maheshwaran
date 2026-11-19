import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Full-screen photo viewer with previous/next and keyboard support
export default function Lightbox({ items, index, onClose, onIndex }) {
  const open = index !== null;
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((index + 1) % items.length);
      if (e.key === "ArrowLeft") onIndex((index - 1 + items.length) % items.length);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, index, items.length, onClose, onIndex]);

  const it = open ? items[index] : null;
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="lightbox show" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={(e) => e.target === e.currentTarget && onClose()}>
          <button className="lb-close" aria-label="Close" onClick={onClose}>×</button>
          <button className="lb-prev" aria-label="Previous" onClick={() => onIndex((index - 1 + items.length) % items.length)}>‹</button>
          <button className="lb-next" aria-label="Next" onClick={() => onIndex((index + 1) % items.length)}>›</button>
          <motion.img key={it.img} src={`/assets/sessions/${it.img}`} alt={it.alt}
            initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} />
          <div className="lb-cap">{it.title}<span>{it.sub}</span></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
