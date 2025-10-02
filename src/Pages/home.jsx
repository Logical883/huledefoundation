import React, { useState, useEffect } from "react";
import "./home.css";
import image1 from "../assets/image1.JPG";
import image2 from "../assets/image2.JPG";
import image3 from "../assets/image3.JPG";
import Hero from "../assets/Hero.jpg";

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
            <br />
            <br /> <br />
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
        <h2 className="section-title">WHO ARE WE ?</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Our strength lies not only in the words we stand by, but most
          importantly in the actions of our initiatives. We purposely create
          opportunities for the underprivileged in our society to better their
          lives. We strive to make a positive change and make a difference in
          the lives of all of our pursuits.
        </p>

        <div className="about-content">
          <div className="about-image">
            <img src={Hero} alt="Professional" />
          </div>
          <div className="about-text">
            <h3 className="about-heading">
              About Hulede Foundation Scholarship
            </h3>
            <p className="about-description">
              The Hulede Foundation Scholarship is a program for "brilliant but
              needy" Ghanaian students, primarily at KNUST (Kwame Nkrumah
              University of Science and Technology), aiming to create
              opportunities for the underprivileged in society to improve their
              lives. <br />
              The foundation was established by the sons of Patrick Hulede to
              honor their father and supports students in their first, second,
              and third years through a fully-funded program.
              <br />
              This Scholarship is mainly for Ghanaian students, particularly at
              KNUST, who are both academically strong (brilliant) and
              financially disadvantaged (needy).
            </p>
            <button className="btn-secondary">Read More</button>
          </div>
        </div>

        <h2 className="section-title">
          CELEBRATING COMMUNITY, ONE STORY AT A TIME
        </h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Through our articles, we highlight the power of service, unity, and
          compassion. Each story reflects the voices, experiences, and efforts
          of individuals and groups who dedicate themselves to making a
          difference. By sharing these inspiring journeys, we aim to encourage
          more people to join hands in creating lasting impact and building
          stronger, more resilient communities.
        </p>

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
            <h4 className="feature-title">The "GIVE BACK" Story</h4>
            <p className="feature-description">
              I am Daniel Coffie. God being so good, I commenced my volunteering
              project on September 1, 2023, at the Anyaa M/A "1" Primary and
              Junior High School located within the Anyaa-Sowutwom constituency.
              After conducting an investigation, I discovered that the students
              had limited knowledge in computing. Therefore, I undertook the
              initiative to provide them with education in computer literacy,
              starting...
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
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
            </div>
            <h4 className="feature-title">Strength in Service</h4>
            <p className="feature-description">
              My name is Prince Fosu, offering GEOGRAPHY AND RURAL DEVELOPMENT.
              As part of giving back to the community, I decided to find a
              place(community) that indeed deserves such a voluntary service and
              will always have such an experience in memory. So I traveled from
              Kumasi to a small neighborhood in one of the newly created
              districts (AMANSIE SOUTH DISTRICT). Manso Apenimadi is a
              community......
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
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
            </div>
            <h4 className="feature-title">The Power of Giving</h4>
            <p className="feature-description">
              I am Ama Serwaa, a passionate youth committed to empowering young
              girls in my community. On October 15, 2024, I officially launched
              my mentorship initiative at the Koforidua Methodist Junior High
              School. Through my observations, I realized that many of the girls
              lacked guidance and motivation regarding education and career
              opportunities. To address this, I introduced a series of
              mentorship and personal development....
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
      </section>{" "}
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
      <br />
      <br />
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Our Vision</h4>
            <p>
              It is so easy to fall into a pattern of apathy as we go through
              our lives. Our organization was born out of a commitment to stop
              passing over the real issues of society and deal with them head
              on. We have set out to aid those who need it most. THE HULEDE
              FOUNDATION is here to help, and we believe that change is possible
              when we put our hearts and minds to it.
            </p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/About">About</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: huledefoundation@gmail.com</p>
            <p>Phone: +1 (240) 708-0664</p>
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
