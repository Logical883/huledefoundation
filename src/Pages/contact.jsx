import { useState } from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import { CONTACT, FORMSPREE_URL } from "../data/site";
import HeroImg from "../assets/Hero.jpg";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(event.target),
      });
      if (response.ok) {
        setStatus("sent");
        event.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <PageShell>
      <header className="contact-hero-band">
        <div className="contact-hero-bg" style={{ backgroundImage: `url(${HeroImg})` }} />
        <div className="contact-hero-shade" />
        <div className="portal-container contact-hero-grid">
          <div>
            <p className="crumbs crumbs-light"><Link to="/">Home</Link><span>/</span>Contact</p>
            <p className="gsa-eyebrow">Get in touch</p>
            <h1>Contact</h1>
            <p className="page-lede">Questions about the scholarship, the 30 May scholars event, or a story you want to share. Use the route that matches the enquiry.</p>
            <div className="gsa-actions">
              <a className="gsa-btn primary" href={`mailto:${CONTACT.email}`}>Email us</a>
              <a className="gsa-btn ghost" href={CONTACT.phoneHref}>Call</a>
            </div>
          </div>
          <aside className="contact-stat">
            <span className="contact-kicker">Phone</span>
            <strong>{CONTACT.phone}</strong>
            <p>{CONTACT.location}</p>
          </aside>
        </div>
      </header>

      <section className="portal-section">
        <div className="portal-container">
          <div className="contact-cards">
            <a className="contact-card" href={CONTACT.phoneHref}>
              <span className="section-label">Phone</span>
              <strong>{CONTACT.phone}</strong>
              <small>Call or message the Foundation</small>
            </a>
            <a className="contact-card" href={`mailto:${CONTACT.email}`}>
              <span className="section-label">Email</span>
              <strong>{CONTACT.email}</strong>
              <small>For applications questions and general mail</small>
            </a>
            <div className="contact-card">
              <span className="section-label">Location</span>
              <strong>{CONTACT.location}</strong>
              <small>Scholars events are held on campus</small>
            </div>
          </div>

          <div className="contact-layout">
            <div className="contact-panel" data-animate>
              <h2>Send the right details the first time.</h2>
              <div className="section-rule" />
              <p className="section-body">
                Include your name, a phone number, and — if you are already a scholar — your HFKNUST unique ID. That lets us find the right record.
              </p>
              <div className="social-row">
                <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href={CONTACT.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
              </div>
            </div>

            <div className="form-panel" data-animate>
              <h2>Send a message</h2>
              {status === "sent" ? (
                <p className="form-note ok">Thank you. Your message is with the Hulede Foundation. We will reply as soon as we can.</p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input id="name" name="name" type="text" required placeholder="Your name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input id="phone" name="phone" type="tel" placeholder="+233 XX XXX XXXX" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required placeholder="you@email.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input id="subject" name="subject" type="text" placeholder="Application, event, or something else" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required placeholder="Your message" />
                  </div>
                  <button className="form-submit" type="submit" disabled={status === "sending"}>
                    {status === "sending" ? "Sending…" : "Send Message"}
                  </button>
                  {status === "error" && (
                    <p className="form-note err">The message did not send. Try again, or email {CONTACT.email} directly.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
