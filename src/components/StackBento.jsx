import { Stagger, StaggerItem } from "./Reveal.jsx";

// Capability matrix: a clean, evenly aligned 3 × 2 grid with hairline dividers.
// Each cell: index, title, one-line description, and the tools used.
export default function StackBento({ items }) {
  return (
    <Stagger className="cap-grid" gap={0.06}>
      {items.map((e, i) => (
        <StaggerItem key={e.key || e.title} className="cap">
          <div className="cap-top">
            <span className="cap-idx">{String(i + 1).padStart(2, "0")}</span>
            <span className="cap-line" />
          </div>
          <h3>{e.title}</h3>
          <p>{e.text}</p>
          <div className="cap-tools">
            <span className="cap-tools-label">Tools</span>
            <span className="cap-tools-list">{e.tags.map((t) => <span key={t}>{t}</span>)}</span>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
