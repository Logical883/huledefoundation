import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const toggleMenu = () => setMobileMenu((prev) => !prev);
  const closeMenu = () => setMobileMenu(false);
  return (
    <nav className="container navbar-root">
      <Link to="/" onClick={closeMenu}>
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      <ul className={mobileMenu ? "mobile-menu-open" : "hide-mobile-menu"}>
        <li>
          <Link to="/home" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/team" onClick={closeMenu}>
            Our Team
          </Link>
        </li>
        <li>
          <Link to="/gallery" onClick={closeMenu}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/support" onClick={closeMenu}>
            Support Us
          </Link>
        </li>
        <li>
          <Link to="/editor" onClick={closeMenu}>
            Editor
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>
            <button className="btn">Contact Us</button>
          </Link>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt="Menu"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
