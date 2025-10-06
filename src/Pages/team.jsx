import "./team.css";
import React from "react";

const Team = () => {
  const ceo = {
    name: "MR. JOHN HULEDE",
    title: "CEO & Founder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipis cingi lan vpurar elt. In ut elit tara telus tuctus nal amat mar tis pulvinar pibus leo dota In ut las tuo cimoo vitae, lamos daps, lermos por dodt amet taren.",
    experience: [
      "Over 15 years of experience in the technology industry",
      "Before founding the company, Founder A served as a Manager",
      "Holds patents for technological innovations that led the industry",
    ],
    image: "/images/jhulede.png",
  };

  const boardMembers = [
    {
      name: "MRS. IRENE HULEDE",
      title: "Board Member",
      description:
        "Lorem ipsum dolor sit amet, consectetur teral incididunt ut labore et dolore aliqua",
      image: "/public/images/Irene.png",
    },
    {
      name: "Linda Rose",
      title: "VP of Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur teral incididunt ut labore et dolore aliqua",
      image: "/public/images/jhulede.png",
    },
    {
      name: "Jessica Janet",
      title: "Project Manager",
      description:
        "Lorem ipsum dolor sit amet, consectetur teral incididunt ut labore et dolore aliqua",
      image: "/public/images/jhulede.png",
    },
    {
      name: "Samuel Lane",
      title: "Creative Director",
      description:
        "Lorem ipsum dolor sit amet, consectetur teral incididunt ut labore et dolore aliqua",
      image: "/public/images/jhulede.png",
    },
    {
      name: "Laurel Schaalia",
      title: "Supervisor",
      description:
        "Lorem ipsum dolor sit amet, consectetur teral incididunt ut labore et dolore aliqua",
      image: "/public/images/jhulede.png",
    },
    {
      name: "Justin Hubner",
      title: "Coordinator",
      description:
        "Lorem ipsum dolor sit amet, consectetur teral incididunt ut labore et dolore aliqua",
      image: "/public/images/jhulede.png",
    },
  ];

  return (
    <div className="team-container">
      {/* Meet Our Team Section */}
      <section className="team-header">
        <h1>Meet Our Team</h1>
        <p>
          This Dynamic team believes that each person has special talents and
          gifts and our purpose is to promote an environment where everyone can
          thrive. No one is immune to the vicissitudes of live and we seek to
          assist as best as we can. Together we form the formidable and Dynamic
          Team.
        </p>
      </section>

      {/* CEO Section */}
      <section className="ceo-section">
        <div className="ceo-card">
          <div className="ceo-image-container">
            <span className="ceo-badge">{ceo.title}</span>
            <img src={ceo.image} alt={ceo.name} className="ceo-image" />
          </div>
          <div className="ceo-content">
            <h2>{ceo.name}</h2>
            <p className="ceo-description">{ceo.description}</p>

            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>

            <div className="experience-section">
              <h3>{ceo.name} Experience</h3>
              <p className="experience-description">
                Lorem ipsum dolor sit amet, consectetur adipis cingi lan vpurar
                elt. In ut elit tara telus tuctus nal amat mar tis pulvinar
                pibus leo.
              </p>
              <ul className="experience-list">
                {ceo.experience.map((exp, index) => (
                  <li key={index}>
                    <span className="checkmark">✓</span>
                    {exp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="board-section">
        <div className="board-header">
          <h2>Board of Directors</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipis cingi lan vpurar elt.
            Ut elit tara telus tuctus nal amat mar tis pulvinar pibus ledo.
          </p>
        </div>

        <div className="board-grid">
          {boardMembers.map((member, index) => (
            <div key={index} className="board-card">
              <div className="board-image-container">
                <span className="board-badge">{member.title}</span>
                <img
                  src={member.image}
                  alt={member.name}
                  className="board-image"
                />
              </div>
              <div className="board-info">
                <h3>{member.name}</h3>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <h2 className="section-title">WAYS WE HELP</h2>
        <h4 className="section-titles">The Focus of Our Efforts</h4>
        <div className="section-divider"></div>
        <p className="section-subtitles">
          At The Hulede Foundation we believe that each person is a special seed
          and if properly nurtured will bear fruits and beget multiple seeds.
          #Everyone matters.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
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

export default Team;
