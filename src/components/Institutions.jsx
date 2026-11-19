import { useState } from "react";
import { Stagger, StaggerItem, Reveal } from "./Reveal.jsx";
import Lightbox from "./Lightbox.jsx";

const Pin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z" /><circle cx="12" cy="10" r="2.5" />
  </svg>
);

// One photo card per institution, plus a wider row for conference stages
export default function Institutions({ institutions, conferences }) {
  const all = [
    ...institutions.map((x) => ({ ...x, title: x.name, sub: `${x.place} · ${x.type}`, alt: `${x.type} at ${x.name}` })),
    ...conferences.map((x) => ({ ...x, title: x.name, sub: x.place, alt: `Speaking at ${x.name}` })),
  ];
  const [index, setIndex] = useState(null);

  return (
    <>
      <Stagger className="inst-grid" gap={0.08}>
        {institutions.map((x, i) => (
          <StaggerItem key={x.name + x.place} className={`inst${x.featured ? " featured" : ""}`}>
            <button className="inst-photo" onClick={() => setIndex(i)} aria-label={`Enlarge photo: ${x.name}`}>
              <img src={`/assets/sessions/${x.img}`} alt="" loading="lazy" style={x.pos ? { objectPosition: x.pos } : undefined} />
              <span className="inst-type">{x.type}</span>
              {x.featured && <span className="inst-star">★</span>}
            </button>
            <div className="inst-body">
              <h3>{x.name}</h3>
              <span className="inst-place"><Pin />{x.place}</span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="inst-subhead"><span>Conference stages</span></Reveal>
      <Stagger className="conf-grid" gap={0.1}>
        {conferences.map((x, i) => (
          <StaggerItem key={x.name} className="conf">
            <button className="conf-photo" onClick={() => setIndex(institutions.length + i)} aria-label={`Enlarge photo: ${x.name}`}>
              <img src={`/assets/sessions/${x.img}`} alt="" loading="lazy" style={x.pos ? { objectPosition: x.pos } : undefined} />
            </button>
            <div className="conf-body">
              <span className="conf-tag">Speaker</span>
              <h3>{x.name}</h3>
              <span className="inst-place"><Pin />{x.place}</span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <Lightbox items={all} index={index} onClose={() => setIndex(null)} onIndex={setIndex} />
    </>
  );
}
