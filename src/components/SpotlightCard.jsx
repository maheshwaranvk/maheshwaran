// A card with a soft green spotlight that follows the mouse
export default function SpotlightCard({ className = "card", children, ...rest }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div className={className} onPointerMove={onMove} {...rest}>
      {children}
    </div>
  );
}
