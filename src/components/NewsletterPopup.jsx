import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "../data/site.js";
import SubscribeForm from "./SubscribeForm.jsx";

const get = (k) => { try { return localStorage.getItem(k); } catch (_) { return null; } };
const set = (k, v) => { try { localStorage.setItem(k, v); } catch (_) {} };

// Appears once the visitor has spent N seconds AND scrolled some way down.
// Hidden for `hideDays` after closing; never shown again after subscribing.
export default function NewsletterPopup() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (pathname === "/newsletter") return;
    if (get("mvk_subscribed")) return;
    if (Date.now() < Number(get("mvk_popup_hidden_until") || 0)) return;

    let timeUp = false, scrolled = false, shown = false;
    const tryShow = () => { if (timeUp && scrolled && !shown) { shown = true; setOpen(true); } };
    const timer = setTimeout(() => { timeUp = true; tryShow(); }, site.popup.delaySeconds * 1000);
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0 || (window.scrollY / max) * 100 >= site.popup.scrollPercent) { scrolled = true; tryShow(); }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { clearTimeout(timer); window.removeEventListener("scroll", onScroll); };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && dismiss();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const dismiss = () => {
    set("mvk_popup_hidden_until", String(Date.now() + site.popup.hideDays * 864e5));
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="popup-backdrop show" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={(e) => e.target === e.currentTarget && dismiss()}>
          <motion.div className="popup" role="dialog" aria-modal="true" aria-labelledby="popup-title"
            initial={{ y: 30, scale: 0.96, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }} exit={{ y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}>
            <button className="close" aria-label="Close" onClick={dismiss}>×</button>
            <div className="top">
              <img src="/assets/avatar.jpg" alt={site.name} />
              <div className="who"><b>{site.name}</b>{site.role}</div>
            </div>
            <div className="body">
              <h3 id="popup-title">Get one useful AI email a week</h3>
              <p>The best articles and podcasts I read each week, summarised, with what they mean for people building with AI. Free, and you can leave any time.</p>
              <SubscribeForm onDone={() => setOpen(false)} />
              <button className="later" type="button" onClick={dismiss}>Maybe later</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
