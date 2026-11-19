import { useState } from "react";

// One logo; if its file isn't in public/assets/logos yet, shows the college name instead
function Logo({ item, hidden }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="logo-item" aria-hidden={hidden || undefined} title={item.name}>
      {failed ? (
        <span className="logo-fallback">{item.short}</span>
      ) : (
        <>
          <img src={`/assets/logos/${item.file}`} alt={hidden || item.caption ? "" : item.name} loading="lazy" onError={() => setFailed(true)} />
          {item.caption && (
            <span className="logo-caption">
              <b>{item.caption[0]}</b>
              {item.caption[1] && <small>{item.caption[1]}</small>}
            </span>
          )}
        </>
      )}
    </div>
  );
}

// Slow, endless scroll of college logos: "Lectured & trained at"
export default function LogoStrip({ label, items }) {
  // repeat the list so the strip is always wider than the screen
  const row = [...items, ...items];
  return (
    <section className="logo-strip" aria-label={label}>
      <div className="wrap logo-head">
        <span className="logo-label">{label}</span>
        <span className="logo-rule" />
      </div>
      <div className="logo-viewport">
        <div className="logo-track">
          {row.map((it, i) => <Logo key={`a${i}`} item={it} />)}
          {row.map((it, i) => <Logo key={`b${i}`} item={it} hidden />)}
        </div>
      </div>
    </section>
  );
}
