import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if required fields are filled
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      return;
    }

    // Let the form submit naturally to Formspree
    e.target.submit();
  };

  return (
    <div className="contact-page">
      <div className="background-overlay"></div>

      <div className="decorative-circle-1"></div>
      <div className="decorative-circle-2"></div>

      <div className="container">
        <div className="header">
          <h1>Contact us</h1>
          <p>
            Reach out with any questions, comments or suggestions and we will
            respond to you as soon as possible. <br />
            #We are here for you!
          </p>
        </div>

        <div className="main-card">
          <div className="content-grid">
            <div className="contact-info">
              <h2>Get in touch</h2>
              <p className="description">
                Every great connection starts with a simple message. Tell us a
                little about yourself, your needs, or your ideas in the form —
                we can't wait to connect and make something meaningful together
              </p>

              <div className="contact-items">
                <div className="contact-item">
                  <div className="icon-circle">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-details">
                    <h3>Head Office</h3>
                    <p>
                      Mitchellevile MD, USA <br />
                      KNUST, Kumasi, Ghana
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-circle">
                    <Mail size={24} />
                  </div>
                  <div className="contact-details">
                    <h3>Email Us</h3>
                    <p>huledefoundation@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-circle">
                    <Phone size={24} />
                  </div>
                  <div className="contact-details">
                    <h3>Call Us</h3>
                    <p>Phone: +1 (240) 708-0664</p>
                  </div>
                </div>
              </div>

              <div className="social-media">
                <h3>Follow our social media</h3>
                <div className="social-icons">
                  <a href="https://www.facebook.com/people/The-Hulede-Foundation/100086620458577/">
                    <button className="social-icon facebook">
                      <Facebook size={20} />
                    </button>
                  </a>
                  <a href="https://x.com/TheHulede_F">
                    <button className="social-icon twitter">
                      <Twitter size={20} />
                    </button>
                  </a>
                  <a href="linkedin.com/in/the-hulede-foundation-9b6623255/">
                    <button className="social-icon linkedin">
                      <Linkedin size={20} />
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h2>Send us a message</h2>
              <form
                action="https://formspree.io/f/xwprvjaa"
                method="POST"
                className="form-container"
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <div className="form-group full-width">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group full-width">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group full-width">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    rows={5}
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
