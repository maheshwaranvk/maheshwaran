import { useRef } from "react";
import { useInView } from "framer-motion";

// Four-step "demo to production" pipeline: the rail fills and the dots light up in sequence
export default function Pipeline({ steps }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <div ref={ref} className={`pipeline${inView ? " in" : ""}`}>
      <div className="rail"><span className="fill" /><span className="packet" /></div>
      {steps.map((s, i) => (
        <div className="node" key={s.title}>
          <span className="dot">{String(i + 1).padStart(2, "0")}</span>
          <div className="body">
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <span className="kw">{s.kw}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
