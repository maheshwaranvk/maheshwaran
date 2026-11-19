import { Stagger, StaggerItem } from "./Reveal.jsx";
import CountUp from "./CountUp.jsx";
import Icon from "./Icon.jsx";

// Dark green highlight panel with animated border and count-up numbers
export default function StatPanel({ stats }) {
  return (
    <Stagger className="stat-panel" gap={0.12}>
      {stats.map((s) => (
        <StaggerItem className="stat-card" key={s.label}>
          <div className="s-icon"><Icon name={s.icon} /></div>
          <div className="s-num"><CountUp value={s.value} suffix={s.suffix} /></div>
          <div className="s-label">{s.label}</div>
          <div className="s-sub">{s.sub}</div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
