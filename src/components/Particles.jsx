import { useEffect, useRef } from "react";

// Light "snow" of tiny dots drifting gently upward across the whole site.
// Kept deliberately sparse and faint. Turn it off by removing <Particles /> in App.jsx.
const COLORS = ["34,197,94", "134,239,172", "245,158,11"]; // green, light green, amber
const DENSITY = 26000; // larger number = fewer dots (one dot per this many square pixels)

export default function Particles() {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let w, h, dots = [], raf, running = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const make = (anywhere) => ({
      x: Math.random() * w,
      y: anywhere ? Math.random() * h : h + 10,
      r: 0.8 + Math.random() * 1.8,
      vy: 0.12 + Math.random() * 0.28,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: 0.004 + Math.random() * 0.008,
      alpha: 0.18 + Math.random() * 0.3,
      color: COLORS[Math.random() < 0.6 ? 0 : Math.random() < 0.7 ? 1 : 2],
    });

    const resize = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round((w * h) / DENSITY);
      dots = Array.from({ length: count }, () => make(true));
    };

    const tick = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        d.y -= d.vy;
        d.sway += d.swaySpeed;
        const x = d.x + Math.sin(d.sway) * 12;
        // fade in near the bottom, fade out near the top
        const edge = Math.min(1, d.y / (h * 0.15), (h - d.y) / (h * 0.15));
        ctx.beginPath();
        ctx.arc(x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${d.color},${d.alpha * Math.max(0, edge)})`;
        ctx.fill();
        if (d.y < -10) Object.assign(d, make(false));
      }
      raf = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      running = !document.hidden;
      if (running) raf = requestAnimationFrame(tick);
      else cancelAnimationFrame(raf);
    };

    resize();
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} className="particles" aria-hidden="true" />;
}
