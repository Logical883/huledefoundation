import React from "react";
import "./support.css";

const donationMethods = [
  { name: "ZELLE", detail: "+1 (301) 325-8760" },
  { name: "CASHAPP", detail: "+1 (301) 325-8760" },
];

const Support = () => {
  return (
    <div className="page-wrapper">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-logo">Hulede Foundation</div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/programs">Programs</a>
          </li>
          <li>
            <a href="/support" className="active">
              Support
            </a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

      <header className="support-hero">
        <h1>Support Us</h1>
        <p>
          To give is to gain. Join us as we touch lives and make a difference.
        </p>
      </header>

      <section className="why-donate">
        <h2>Why Donate to the Hulede Foundation</h2>
        <p>
          Donating to us helps impoverished people around the world by
          empowering, reforming, and improving their standards of living.
        </p>
        <p>❣️ No amount is too small ❣️</p>
        <p>All donations earn you a US Tax Credit.</p>
      </section>

      <section className="donation-methods">
        <h2>To Donate:</h2>
        <div className="methods-list">
          {donationMethods.map((m, idx) => (
            <div key={idx} className="method-item">
              <h3>{m.name}</h3>
              <p>{m.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="support-image">
        <img src="/images/support-hero.jpg" alt="Support illustration" />
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>Thank You for Donating</p>
          <p>
            Email:{" "}
            <a href="mailto:HuledeFoundation@gmail.com">
              HuledeFoundation@gmail.com
            </a>
          </p>
          <p>
            &copy; {new Date().getFullYear()} Hulede Foundation. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Support;
