import { Link } from "react-router-dom";
import { CONTACT, DEVELOPER_URL, navItems } from "../../data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-accent" aria-hidden="true" />
      <div className="footer-contact-row">
        <a className="footer-contact-card" href={CONTACT.phoneHref}>
          <span className="footer-kicker">Call the Foundation</span>
          <strong>{CONTACT.phone}</strong>
        </a>
        <a className="footer-contact-card" href={`mailto:${CONTACT.email}`}>
          <span className="footer-kicker">Email address</span>
          <strong>{CONTACT.email}</strong>
        </a>
        <div className="footer-contact-card">
          <span className="footer-kicker">Office location</span>
          <strong>{CONTACT.location}</strong>
        </div>
      </div>

      <div className="footer-grid">
        <div className="footer-brand">
          <h3>Hulede Foundation</h3>
          <p>
            The Hulede Foundation creates opportunities for brilliant but needy students,
            primarily at KNUST, through scholarships, laptops, mentorship, and community service.
          </p>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Applicants</h4>
          <ul>
            <li><Link to="/application">Application Info</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li>
              <a href={CONTACT.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Hulede Foundation. All rights reserved.{" "}
          Developed by{" "}
          <a href={DEVELOPER_URL} target="_blank" rel="noopener noreferrer">
            Logical
          </a>
        </p>
      </div>
    </footer>
  );
}
