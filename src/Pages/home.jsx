import React, { useState, useEffect } from "react";
import "./home.css";
import image1 from "../assets/image1.JPG";
import image2 from "../assets/image2.JPG";
import image3 from "../assets/image3.JPG";

const Home = () => {
  // Hero Images - Replace these URLs with your own images
  const heroImages = [image1, image2, image3];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [heroImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div
          className="hero-background"
          style={{ backgroundImage: `url(${heroImages[currentSlide]})` }}
        ></div>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">2025 MEET & GREET</h1>
            {/* <p className="hero-description">
              Our Meet & Greet was an inspiring success! The Hulede Foundation
              brought together bright minds, passionate hearts, and a shared
              vision of impact. It was more than just a gathering—it was a
              chance to connect, exchange ideas, and build lasting bonds that
              will drive positive change. Thank you to everyone who joined us
              and made this event truly memorable
            </p> */}
            <button className="btn-primary">Read More</button>
          </div>
          <div className="hero-dots">
            {heroImages.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentSlide === index ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <h2 className="section-title">ABOUT US</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Maecenas vel turpis quis lorem aliquam tempus eun non mi. Pellentesque
          habitant morbi tristique senectus et netus ac malesuada fames ac
          turpis egestas.
        </p>

        <div className="about-content">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=400&fit=crop"
              alt="Professional"
            />
          </div>
          <div className="about-text">
            <h3 className="about-heading">Welcome to Our Site</h3>
            <p className="about-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              condimentum rutrum ligula, integer ac porttitor mi. In finibus
              vehicula aliquet. Vestibulum ut velit placerat, pretium turna ut,
              gravida ex. Aliquam tristique.
            </p>
            <button className="btn-secondary">Read More</button>
          </div>
        </div>

        {/* Mission, Vision, Objective */}
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
            </div>
            <h4 className="feature-title">Our Mission</h4>
            <p className="feature-description">
              Aenean volutpat, dolor eu finibus rhoncus, ant felis vehicula
              nunc, ut posuere ex enim nec lacus. Phasellus id amet mauris
              turpis. Aenean tristique auctor arcula, ac sodales sapien
              sagittis.
            </p>
            <button className="btn-secondary">Read More</button>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h4 className="feature-title">Our Vision</h4>
            <p className="feature-description">
              Aenean volutpat, dolor eu finibus rhoncus, ant felis vehicula
              nunc, ut posuere ex enim nec lacus. Phasellus id amet mauris
              turpis. Aenean tristique auctor arcula, ac sodales sapien
              sagittis.
            </p>
            <button className="btn-secondary">Read More</button>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h4 className="feature-title">Our Objective</h4>
            <p className="feature-description">
              Aenean volutpat, dolor eu finibus rhoncus, ant felis vehicula
              nunc, ut posuere ex enim nec lacus. Phasellus id amet mauris
              turpis. Aenean tristique auctor arcula, ac sodales sapien
              sagittis.
            </p>
            <button className="btn-secondary">Read More</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="section-title">SERVICES</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Integer sollicitudin sed nulla non consequat. Nullam vitae erat quis
          leo accumsan ullamcorper. Suspendisse hac porttis, pellentesque
          posuere.
        </p>

        <div className="services-grid">
          {[
            { title: "Web Design", icon: "monitor" },
            { title: "Web Development", icon: "laptop" },
            { title: "App Design", icon: "tablet" },
            { title: "App Development", icon: "smartphone" },
            { title: "Web Design", icon: "monitor" },
            { title: "Web Development", icon: "laptop" },
            { title: "App Design", icon: "tablet" },
            { title: "App Development", icon: "smartphone" },
          ].map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon === "monitor" && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect
                      x="2"
                      y="3"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                )}
                {service.icon === "laptop" && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect
                      x="2"
                      y="3"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="2" y1="20" x2="22" y2="20"></line>
                  </svg>
                )}
                {service.icon === "tablet" && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect
                      x="4"
                      y="2"
                      width="16"
                      height="20"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                )}
                {service.icon === "smartphone" && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect
                      x="5"
                      y="2"
                      width="14"
                      height="20"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                )}
              </div>
              <h4 className="service-title">{service.title}</h4>
              <p className="service-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesenterium.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2 className="section-title white">CALL TO ACTION</h2>
        <div className="section-divider white"></div>
        <p className="section-subtitle white">
          Integer sollicitudin sed nulla non consequat. Nullam vitae erat quis
          leo accumsan ullamcorper. Suspendisse hac porttis, pellentesque
          posuere.
        </p>
        <button className="btn-white">CALL TO ACTION</button>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <h2 className="section-title">OUR PRICING</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Nulla in est tincidunt, volutpat nisl quis, gravida tortor.
          Suspendisse potenti. Nullam ornare, dui a vulputate mollis, est lorem
          rutrum urna.
        </p>

        <div className="pricing-grid">
          <div className="pricing-card">
            <h3 className="pricing-plan">Silver</h3>
            <div className="pricing-amount">
              <span className="currency">$</span>
              <span className="price">0</span>
            </div>
            <ul className="pricing-features">
              <li>Feature One</li>
              <li>Feature Two</li>
              <li>Feature Three</li>
              <li>Feature Four</li>
            </ul>
            <button className="btn-pricing">CHOOSE PLAN</button>
          </div>

          <div className="pricing-card featured">
            <h3 className="pricing-plan">Gold</h3>
            <div className="pricing-amount">
              <span className="currency">$</span>
              <span className="price">19</span>
              <span className="period">.99</span>
            </div>
            <ul className="pricing-features">
              <li>Feature One</li>
              <li>Feature Two</li>
              <li>Feature Three</li>
              <li>Feature Four</li>
            </ul>
            <button className="btn-pricing">CHOOSE PLAN</button>
          </div>

          <div className="pricing-card">
            <h3 className="pricing-plan">Platinum</h3>
            <div className="pricing-amount">
              <span className="currency">$</span>
              <span className="price">39</span>
              <span className="period">.99</span>
            </div>
            <ul className="pricing-features">
              <li>Feature One</li>
              <li>Feature Two</li>
              <li>Feature Three</li>
              <li>Feature Four</li>
            </ul>
            <button className="btn-pricing">CHOOSE PLAN</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              condimentum rutrum ligula.
            </p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@example.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Hulede Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
