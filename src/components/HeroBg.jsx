// Soft drifting colour blobs over a faint grid, used behind page heroes
export default function HeroBg({ third = false }) {
  return (
    <div className="hero-bg" aria-hidden="true">
      <span className="grid-bg" />
      <span className="blob b1" />
      <span className="blob b2" />
      {third && <span className="blob b3" />}
    </div>
  );
}
