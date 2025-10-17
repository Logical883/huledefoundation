import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const toggleMenu = () => setMobileMenu((prev) => !prev);
  const closeMenu = () => setMobileMenu(false);
  const location = useLocation();
  // Hide menu icon only on the Hero page ("/")
  const hideMenuIcon = location.pathname === "/";
  return (
    <nav className="container navbar-root">
      <Link to="/" onClick={closeMenu}>
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      <ul className={mobileMenu ? "mobile-menu-open" : "hide-mobile-menu"}>
        <li>
          <NavLink
            to="/home"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/team"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Our Team
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/editor"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Editor
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Contact
          </NavLink>
        </li>

        <li>
          <a
            href="https://forms.gle/5fv4RGFL9gX95QYQ9"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <button className="btn">Apply Now</button>
          </a>
        </li>
      </ul>
      {!hideMenuIcon && (
        <div
          className={`hamburger-menu ${mobileMenu ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
