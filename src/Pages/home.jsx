import React, { useState, useEffect } from "react";
import "./home.css";
import image1 from "../assets/image1.JPG";
import image2 from "../assets/image2.JPG";
import image3 from "../assets/image3.JPG";
import Hero from "../assets/Hero.jpg";

const Home = () => {
  // Hero Images
  const heroImages = [image1, image2, image3];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample data - replace with your actual data
  const scholarshipData = [
    { year: "2019", recipients: 75 },
    { year: "2020", recipients: 84 },
    { year: "2021", recipients: 87 },
    { year: "2022", recipients: 87 },
    { year: "2023", recipients: 83 },
  ];

  const laptopData = [
    { year: "2019", laptops: 50 },
    { year: "2020", laptops: 60 },
    { year: "2021", laptops: 75 },
    { year: "2022", laptops: 80 },
    { year: "2023", laptops: 70 },
  ];

  const totalRecipients = scholarshipData.reduce(
    (sum, item) => sum + item.recipients,
    0
  );
  const totalLaptops = laptopData.reduce((sum, item) => sum + item.laptops, 0);

  // Auto-slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

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
            <br />
            <br />
            <h1 className="hero-title">2025 MEET & GREET</h1>
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

      {/* Statistics Section */}
      <section className="statistics-section">
        <div className="stat-container">
          {/* Stats Cards */}
          <div className="stats-section">
            <div className="stat-card green-card">
              <div className="stat-number">{totalRecipients}</div>
              <div className="stat-label">SCHOLARSHIP RECIPIENTS</div>
            </div>
            <div className="stat-card blue-card">
              <div className="stat-number">{totalLaptops}</div>
              <div className="stat-label">LAPTOPS RECEIVED</div>
            </div>
          </div>

          {/* Tables Section */}
          <div className="tables-section">
            {/* Scholarship Table */}
            <div className="table-container">
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

            {/* Laptops Table */}
            <div className="table-container">
              <h2 className="table-title">Laptops Distribution</h2>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Laptops Received</th>
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
      <br />
      <br />

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2 className="section-title white">APPLY FOR SCHOLARSHIP</h2>
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
