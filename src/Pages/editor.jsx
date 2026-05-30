import React, { useEffect } from "react";
import "./editor.css";
import LazyImage from "../components/LazyImage";
import Mauduana from "../assets/Mauduana.jpg";
import Whyte from "../assets/Whyte.png";
import Comfort from "../assets/Comfort.png";
import Hannah from "../assets/Hannah.png";
import Jane from "../assets/Jane.png";
import Patrick from "../assets/Patrick.png";
import Students from "../assets/Students.png";

const newsletters = [
  {
    image: Whyte,
    title: "Building Hope: New School Facilities",
    date: "November 28, 2024",
    excerpt: "See how we're creating safe learning environments for children in underserved areas.",
    link: "https://drive.google.com/file/d/1jzlooyZCAKz98sOpr_DKImWAbq9oiTtS/view?usp=sharing",
  },
  {
    image: Comfort,
    title: "Mentorship Program Success Stories",
    date: "November 15, 2024",
    excerpt: "Celebrating the achievements of students who found guidance through our mentorship initiatives.",
    link: "https://drive.google.com/file/d/1XEbOS6vFyCBHGi5k58SzkckFx0l6DNFg/view?usp=sharing",
  },
  {
    image: Hannah,
    title: "Scholarship Recipients Share Their Journey",
    date: "October 30, 2024",
    excerpt: "Meet the inspiring individuals whose lives have been changed through educational support.",
    link: "https://drive.google.com/file/d/1wNhBAPcJlJjRzvoul5wQJtq-E5gC5DsJ/view?usp=sharing",
  },
  {
    image: Jane,
    title: "Community Outreach: Making a Difference",
    date: "October 12, 2024",
    excerpt: "Discover how our volunteers are bringing positive change to local communities.",
    link: "https://drive.google.com/file/d/1xjsi1dVhi9_CUmQmW_KFIH8AMZ0bnqEN/view?usp=sharing",
  },
  {
    image: Patrick,
    title: "Annual Impact Report 2024",
    date: "September 20, 2024",
    excerpt: "A comprehensive look at our achievements and the lives we've touched this year.",
    link: "https://drive.google.com/file/d/1RW6ZTWJWObpKIY4pZokeiaAh4XAq_T4y/view?usp=sharing",
  },
  {
    image: Students,
    title: "Partnership for Progress",
    date: "September 5, 2024",
    excerpt: "Learn about our collaborations with local organizations to expand our reach.",
    link: "https://drive.google.com/file/d/1laGlY1NVK82eOd3bIxetEJZSMLqr6AuX/view?usp=sharing",
  },
];

const Editor = () => {
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

  return (
    <div className="editor-page">

      {/* Page Hero */}
      <div className="editor-hero">
        <p className="section-label" data-animate>Our Voice</p>
        <h1 className="section-title" data-animate data-delay="1">Editor's Corner</h1>
        <div className="section-rule" style={{ margin: "14px auto 0" }} data-animate data-delay="2"></div>
      </div>

      {/* Editor in Chief */}
      <section className="editor-feature-section">
        <div className="editor-feature-inner">
          <div data-animate>
            <p className="section-label">Meet Our Editor</p>
            <h2 className="section-title" style={{ fontSize: "1.6rem" }}>About Our Editor-in-Chief</h2>
            <div className="section-rule"></div>
            <p className="section-body">
              Discover more about Miss Mauduana, our dedicated Editor-in-Chief at the Hulede Foundation,
              and her passion for making a difference through storytelling.
            </p>
          </div>

          <div className="editor-feature-grid" data-animate data-delay="1">
            <LazyImage
              src={Mauduana}
              alt="Miss Mauduana"
              wrapperStyle={{ height: "420px", borderRadius: "4px", boxShadow: "var(--shadow-md)" }}
            />
            <div className="editor-feature-text">
              <p className="section-label">Editor-in-Chief</p>
              <h3 className="section-title" style={{ fontSize: "1.5rem" }}>Miss Mauduana</h3>
              <div className="section-rule"></div>
              <p className="section-body">
                Join us as we share the incredible journey of how educational support has transformed
                lives in rural communities. Through scholarships, mentorship, and resources, we're
                building a brighter future for the next generation.
              </p>
              <br />
              <a href="#" className="story-link">Read Full Story</a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletters */}
      <section className="editor-newsletters-section">
        <div className="editor-newsletters-inner">
          <div style={{ marginBottom: "48px" }} data-animate>
            <p className="section-label">Stay Informed</p>
            <h2 className="section-title" style={{ fontSize: "1.6rem" }}>Our Newsletters</h2>
            <div className="section-rule"></div>
            <p className="section-body">
              Discover the lives we've touched and the communities we've transformed.
              Read our newsletters to know more about our impact.
            </p>
          </div>

          <div className="newsletters-grid">
            {newsletters.map((item, i) => (
              <div className="newsletter-card" key={i} data-animate data-delay={String(i % 4)}>
                <LazyImage
                  src={item.image}
                  alt={item.title}
                  wrapperStyle={{ height: "200px" }}
                />
                <div className="newsletter-card-body">
                  <span className="newsletter-date">{item.date}</span>
                  <h4>{item.title}</h4>
                  <p>{item.excerpt}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="story-link">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }} data-animate>
            <a
              href="https://drive.google.com/drive/folders/1PBSNs1xkpw-8q_5Qj_bQ9vdLde8__tVQ?usp=drive_link"
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <button className="btn btn-primary">View All Stories</button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer full-bleed">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Hulede Foundation</h3>
            <p>Making a difference in lives across Ghana and beyond.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <p>huledefoundation@gmail.com</p>
            <p>+1 (240) 708-0664</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Hulede Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Editor;