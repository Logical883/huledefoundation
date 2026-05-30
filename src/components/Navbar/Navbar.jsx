import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const navItems = [
  { label: "Home", to: "/home" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Our Team", to: "/team" },
  { label: "Gallery", to: "/gallery" },
  { label: "Editor", to: "/editor" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const { theme, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <nav className={`navbar-root${scrolled ? " scrolled" : ""}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <NavLink to="/" className="navbar-logo" onClick={close}>
          <img src={logo} alt="Hulede Foundation" />
        </NavLink>

        {/* Desktop links */}
        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => isActive ? "active" : undefined}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="navbar-controls">
          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label="Toggle theme"
            title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>

          <a
            href="https://forms.gle/5fv4RGFL9gX95QYQ9"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-apply"
            style={{
              display: "inline-block",
              padding: "8px 20px",
              background: "var(--green)",
              color: "#fff",
              borderRadius: "30px",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              transition: "background 0.22s, transform 0.22s",
            }}
          >
            Apply Now
          </a>

          {/* Hamburger */}
          <button
            className={`hamburger${mobileOpen ? " open" : ""}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <ul className={`mobile-menu${mobileOpen ? " open" : ""}`}>
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) => isActive ? "active" : undefined}
              onClick={close}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
        <li className="apply-mobile">
          <a
            href="https://forms.gle/5fv4RGFL9gX95QYQ9"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            Apply Now
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
