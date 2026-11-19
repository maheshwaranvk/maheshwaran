import { Reveal } from "./Reveal.jsx";

// Eyebrow label + heading (with an italic green accent) + optional lead text
export default function SectionHead({ eyebrow, title, accent, lead, className = "" }) {
  return (
    <Reveal className={`section-head ${className}`}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>
        {title} {accent && <em>{accent}</em>}
      </h2>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  );
}
