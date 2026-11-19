import { Link } from "react-router-dom";
import { site } from "../data/site.js";

export default function Footer() {
  const l = site.links;
  return (
    <footer className="site">
      <div className="wrap">
        <Link className="brand" to="/"><img src="/assets/avatar.jpg" alt="" /><b>{site.name}</b></Link>
        <div className="links">
          <a href={l.linkedin} target="_blank" rel="noopener">LinkedIn</a>
          <a href={l.substack} target="_blank" rel="noopener">Substack</a>
          <a href={l.x} target="_blank" rel="noopener">X</a>
          <a href={l.github} target="_blank" rel="noopener">GitHub</a>
          <a href={l.email}>Email</a>
        </div>
        <div className="copy">© {new Date().getFullYear()} {site.name} · {site.role} · {site.location}</div>
      </div>
    </footer>
  );
}
