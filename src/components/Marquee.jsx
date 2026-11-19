// Endless scrolling strip of tools; pauses on hover
export default function Marquee({ label, items }) {
  const row = (hidden) =>
    items.map((t, i) => (
      <span className="item" key={`${hidden}-${i}`} aria-hidden={hidden || undefined}><i />{t}</span>
    ));
  return (
    <div className="marquee" aria-label={label}>
      <div className="label">{label}</div>
      <div className="track">{row(false)}{row(true)}</div>
    </div>
  );
}
