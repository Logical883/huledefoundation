import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import image1 from "../assets/image1.JPG";
import image2 from "../assets/image2.JPG";
import image3 from "../assets/image3.JPG";
import Hero from "../assets/Hero.jpg";
import Community from "../assets/Community.jpg";

const Home = () => {
  const heroImages = [image1, image2, image3];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [heroImages.length]);

  // IntersectionObserver to trigger smooth reveal animations
  useEffect(() => {
    const targets = document.querySelectorAll("[data-animate]");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
          else entry.target.classList.remove("in-view");
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  const featuredStories = [
    {
      title: 'The "GIVE BACK" Story',
      description:
        'I am Daniel Coffie. God being so good, I commenced my volunteering project on September 1, 2023, at the Anyaa M/A "1" Primary and Junior High School located within the Anyaa-Sowutwom constituency. After conducting an investigation, I discovered that the students had limited knowledge in computing. Therefore, I undertook the initiative to provide them with education in computer literacy, starting...',
      link: "https://www.facebook.com/people/The-Hulede-Foundation/100086620458577/",
    },
    {
      title:
        "Hulede Foundation donates mechanized borehole to new Amakom M/A cluster of schools",
      description:
        "Hulede Foundation, founded by John Hulede, a US-based non-profitable organization has donated mechanized borehole water to new Amakom cluster of schools in the Kumasi Metropolis of the Ashanti Region. The donation is to help pupils and teachers to have access to portable drinking water which will facilitate teaching, learning and enhance quality education in the school......",
      link: "https://broadcastergh.com/afa-group-donates-mechanized-borehole-to-new-amakom-m-a-cluster-of-schools/",
    },
    {
      title:
        "Hulede Foundation supports 250 needy students to clear outstanding fees",
      description:
        "The Hulede Foundation, a US-based non-governmental organization dedicated to assisting brilliant but underprivileged students in their pursuit of higher education, has provided financial support to 250 students at Kwame Nkrumah University of Science and Technology (KNUST) to settle their outstanding fees......",
      link: "https://www.graphic.com.gh/news/education/knust-hulede-foundation-supports-250-needy-students-to-clear-outstanding-fees.html",
    },
  ];

  const scholarshipData = [
    { year: "2025", recipients: 339 },
    { year: "2024", recipients: 348 },
    { year: "2023", recipients: 250 },
    { year: "2022", recipients: 102 },
    { year: "2021", recipients: 12 },
  ];

  const laptopData = [
    { year: "2025", laptops: 27 },
    { year: "2024", laptops: 27 },
  ];

  const totalRecipients = scholarshipData.reduce(
    (sum, item) => sum + item.recipients,
    0
  );
  const totalLaptops = laptopData.reduce((sum, item) => sum + item.laptops, 0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup 1 second after page load
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container">
      {/* ---------- POPUP MESSAGE ---------- */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div
            className="popup-content"
            // Prevent closing when clicking inside
          >
            <button className="popup-close" onClick={() => setShowPopup(false)}>
              ✕
            </button>
            <img
              src={Community}
              alt="Community Service"
              className="popup-image"
            />
            <h2>📋 Community Service Report Submission</h2>
            <p>
              Remember to compile all necessary documents (report, photos,
              attendance sheets, certificates, etc.) into a single{" "}
              <strong>ZIP file</strong> before submission.
            </p>{" "}
            <br />
            <a
              href="https://forms.gle/WQGC3LJrTnmkvTra7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="popup-button" data-animate>
                Submit
              </button>
            </a>
            <br />
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className="hero-section">
        {heroImages.map((src, index) => (
          <div
            key={index}
            className={`hero-background ${
              currentSlide === index ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${src})` }}
            aria-hidden={currentSlide !== index}
          />
        ))}
        <div className="hero-overlay">
          <div className="hero-content" data-animate>
            <h1 className="hero-title" data-animate>
              2025 MEET & GREET
            </h1>
            <button className="btn-primary" data-animate>
              Read More
            </button>
          </div>
          <div className="hero-dots" data-animate>
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentSlide === index ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                type="button"
              />
            ))}
          </div>
        </div>
      </section>
      <br />
      {/* Services Ticker */}
      <div className="services-ticker">
        <div className="ticker-content">
          <span>✦ Educational Excellence</span>
          <span>✦ Community Service</span>
          <span>✦ Leadership Development</span>
          <span>✦ Social Impact Projects</span>
          <span>✦ Volunteerism</span>
          <span>✦ Youth Empowerment</span>
          <span>✦ Sustainable Development</span>
          <span>✦ Mentorship Programs</span>
          <span>✦ Innovation for Change</span>
          <span>✦ Empowering Future Leaders</span>
          <span>✦ Civic Responsibility</span>
          <span>✦ Lifelong Learning</span>
        </div>
      </div>
      <br />
      {/* Application Section */}
      <section className="cta-section" data-animate>
        <h2 className="section-title white">COMMUNITY SERVICE REPORT</h2>
        <div className="section-divider white" />
        <p className="section-subtitle white">
          Take the next step toward your academic journey. Submit your Community
          Service report today and let your dreams find the support they
          deserve.
        </p>
        <a
          href="https://forms.gle/WQGC3LJrTnmkvTra7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-white" data-animate>
            Submit
          </button>
        </a>
      </section>
      {/* About Us Section */}
      <section className="about-section">
        <h2 className="section-title" data-animate>
          WHO ARE WE?
        </h2>
        <div className="section-divider" data-animate />
        <p className="section-subtitle" data-animate>
          Our strength lies not only in the words we stand by, but most
          importantly in the actions of our initiatives. We purposely create
          opportunities for the underprivileged in our society to better their
          lives. We strive to make a positive change and make a difference in
          the lives of all of our pursuits.
        </p>

        <div className="about-content">
          <div className="about-image" data-animate>
            <img src={Hero} alt="Hulede Foundation Professional" />
          </div>
          <div className="about-text" data-animate>
            <h3 className="about-heading" data-animate>
              About Hulede Foundation Scholarship
            </h3>
            <p className="about-description">
              The Hulede Foundation Scholarship is a program for "brilliant but
              needy" Ghanaian students, primarily at KNUST (Kwame Nkrumah
              University of Science and Technology), aiming to create
              opportunities for the underprivileged in society to improve their
              lives.
              <br />
              <br />
              The foundation was established by the sons of Patrick Hulede to
              honor their father and supports students in their first through
              final year. We have consistently done so over the years.
              <br />
              <br />
              This Scholarship is mainly for Ghanaian students, particularly at
              KNUST, who are both academically strong (brilliant) and
              financially disadvantaged (needy).
            </p>
            <Link to="/about">
              <button className="btn-secondary" data-animate>
                Read More
              </button>
            </Link>
          </div>
        </div>

        <h2 className="section-title" data-animate>
          COMMUNITY SERVICE: THE SPIRIT OF GIVING MULTIPLES
        </h2>
        <div className="section-divider" data-animate />
        <div className="section-subtitles" data-animate>
          <p>
            The Hulede Foundation KNUST Scholarship is built on a commitment to
            academic excellence and civic responsibility. We believe in "The
            Spirit of Giving Multiples," where our recipients pay their
            privilege forward. As a core requirement, each scholar completes{" "}
            <strong className="highlight-text">
              40 hours minimum of annual community service
            </strong>
            . This initiative is a vital contribution to society and a mandatory
            part of the scholarship renewal process.
          </p>
          <br />
          <h3>To be eligible, scholars must:</h3>
          <ul>
            <li>Wear the official Hulede Foundation T-shirt during service.</li>
            <li>
              Document their work with photos, videos, and a detailed report.
            </li>
            <li>Complete at least 40 hours of service annually.</li>
            <li>
              Submit all evidence to the designated Hulede Foundation
              Scholarship Beneficiaries platform.
            </li>
          </ul>
          <br />
          <p>
            This page showcases the impactful work of our scholars as they apply
            their knowledge to create positive change, embodying our mission of
            "Making a Difference."
          </p>
        </div>

        {/* Featured Stories Grid */}
        <div className="features-grid">
          {featuredStories.map((story, index) => (
            <div className="feature-card" key={index} data-animate>
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
              <h4 className="feature-title">{story.title}</h4>
              <p className="feature-description">{story.description}</p>
              <a
                href={story.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>
      {/* Statistics Section */}
      <section className="statistics-section">
        <div className="stat-container">
          <div className="stats-section">
            <div className="stat-card green-card" data-animate>
              <div className="stat-number">{totalRecipients}</div>
              <div className="stat-label">SCHOLARSHIP RECIPIENTS</div>
            </div>
            <div className="stat-card blue-card" data-animate>
              <div className="stat-number">{totalLaptops}</div>
              <div className="stat-label">LAPTOPS DONATED</div>
            </div>
          </div>

          <div className="tables-section">
            <div className="table-container" data-animate>
              <h2 className="table-title">Scholarship Recipients</h2>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Scholarship Year</th>
                    <th>Number of Recipients</th>
                  </tr>
                </thead>
                <tbody>
                  {scholarshipData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.year}</td>
                      <td>{item.recipients}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="table-container" data-animate>
              <h2 className="table-title">Laptops Distribution</h2>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Laptops Donated</th>
                  </tr>
                </thead>
                <tbody>
                  {laptopData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.year}</td>
                      <td>{item.laptops}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer" data-animate>
        <div className="footer-content">
          <div className="footer-section">
            <h4>Our Vision</h4>
            <p>
              THE HULEDE FOUNDATION is here to help, and we believe that change
              is possible when we put our hearts and minds to it.
            </p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
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
