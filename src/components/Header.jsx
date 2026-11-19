import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { site, nav } from "../data/site.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site${scrolled ? " scrolled" : ""}`}>
      <div className="wrap">
        <Link className="brand" to="/">
          <img src="/assets/avatar.jpg" alt="" />
          <b>{site.name}</b>
        </Link>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu">
          {open ? "Close" : "Menu"}
        </button>
        <nav className={`main${open ? " open" : ""}`}>
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === "/"} className={({ isActive }) => (isActive ? "active" : "")}>
              {n.label}
            </NavLink>
          ))}
          <Link className="btn primary" to="/newsletter">Subscribe</Link>
        </nav>
      </div>
    </header>
  );
}
