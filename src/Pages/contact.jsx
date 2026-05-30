import React, { useState, useEffect } from "react";
import "./Contact.css";

const MapPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const Mail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);
const Phone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.71 3.38 2 2 0 0 1 3.68 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const Facebook = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const Youtube = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", subject: "", message: "" });

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("in-view");
        else e.target.classList.remove("in-view");
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll("[data-animate]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    e.target.submit();
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <p className="section-label" data-animate>Get In Touch</p>
        <h1 className="section-title" data-animate data-delay="1">Contact Us</h1>
        <div className="section-rule" style={{margin:"14px auto 0"}} data-animate data-delay="2"></div>
      </div>

      <div className="contact-layout">
        {/* Info */}
        <div className="contact-info" data-animate>
          <h2>We'd love to hear from you</h2>
          <div className="section-rule"></div>
          <p>Reach out with any questions, comments, or suggestions and we will respond to you as soon as possible.</p>

          <div className="contact-detail">
            <div className="contact-detail-icon"><MapPin /></div>
            <div className="contact-detail-text">
              <strong>Location</strong>
              <span>KNUST Campus, Kumasi, Ghana</span>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-detail-icon"><Mail /></div>
            <div className="contact-detail-text">
              <strong>Email</strong>
              <span>huledefoundation@gmail.com</span>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-detail-icon"><Phone /></div>
            <div className="contact-detail-text">
              <strong>Phone</strong>
              <span>+1 (240) 708-0664</span>
            </div>
          </div>

          <div className="contact-social">
            <a href="https://www.facebook.com/people/The-Hulede-Foundation/100086620458577/" target="_blank" rel="noopener noreferrer" className="social-btn"><Facebook /></a>
            <a href="https://www.youtube.com/@huledefoundation" target="_blank" rel="noopener noreferrer" className="social-btn"><Youtube /></a>
          </div>
        </div>

        {/* Form */}
        <div className="contact-form-wrap" data-animate data-delay="2">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit} action="https://formspree.io/f/your-form-id" method="POST">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+233 XX XXX XXXX" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="What's this about?" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your message..." required />
            </div>
            <button type="submit" className="form-submit">Send Message</button>
          </form>
        </div>
      </div>

      <footer className="site-footer full-bleed">
        <div className="footer-grid">
          <div className="footer-brand"><h3>Hulede Foundation</h3><p>Making a difference in lives across Ghana and beyond.</p></div>
          <div className="footer-col"><h4>Quick Links</h4><ul><li><a href="/home">Home</a></li><li><a href="/about">About</a></li><li><a href="/gallery">Gallery</a></li><li><a href="/contact">Contact</a></li></ul></div>
          <div className="footer-col"><h4>Contact</h4><p>huledefoundation@gmail.com</p><p>+1 (240) 708-0664</p></div>
        </div>
        <div className="footer-bottom"><p>© 2026 Hulede Foundation. All rights reserved.</p></div>
      </footer>
    </div>
  );
}
