import { useState } from "react";
import { Stagger, StaggerItem } from "./Reveal.jsx";
import Lightbox from "./Lightbox.jsx";

// Row 1: conferences (large) · Row 2: universities (featured) · Row 3: other sessions
const sizeClass = {
  conf: "c6 r3 full-m",
  uni: "c4 r2 wide-m",
  other: "c4 r1",
};

export default function Mosaic({ items }) {
  const [index, setIndex] = useState(null);
  return (
    <>
      <Stagger className="mosaic" gap={0.07}>
        {items.map((s, i) => (
          <StaggerItem as="figure" key={s.img}
            className={`shot ${sizeClass[s.size]}${i === items.length - 1 ? " wide-m" : ""}`}
            onClick={() => setIndex(i)} role="button" tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setIndex(i)}
            aria-label={`Enlarge photo: ${s.title}`}>
            <span className={`badge ${s.style}`}>{s.badge}</span>
            <img src={`/assets/sessions/${s.img}`} alt={s.alt} loading="lazy" style={s.pos ? { objectPosition: s.pos } : undefined} />
            <figcaption>{s.title}<span>{s.sub}</span></figcaption>
          </StaggerItem>
        ))}
      </Stagger>
      <Lightbox items={items} index={index} onClose={() => setIndex(null)} onIndex={setIndex} />
    </>
  );
}
