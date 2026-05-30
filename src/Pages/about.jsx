import React, { useEffect } from "react";
import "./about.css";

const About = () => {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("in-view");
        else e.target.classList.remove("in-view");
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll("[data-animate]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="about-page">
      {/* Page hero */}
      <div className="page-hero">
        <p className="section-label" data-animate>Who We Are</p>
        <h1 className="section-title" data-animate data-delay="1">About Hulede Foundation</h1>
        <div className="section-rule center" data-animate data-delay="2"></div>
        <p style={{color:"var(--text-muted)", maxWidth:600, margin:"0 auto", lineHeight:1.8}} data-animate data-delay="3">
          Transforming lives through education, empowerment, and opportunity since 2018.
        </p>
      </div>

      <div className="about-blocks">
        {/* Stats */}
        <div className="about-block" data-animate>
          <p className="section-label">Impact Numbers</p>
          <h2 className="section-title" style={{fontSize:"1.6rem"}}>KNUST Scholarship &amp; Laptop Statistics</h2>
          <div className="section-rule"></div>
          <div className="stats-inline">
            {[
              { num: "12", lbl: "Scholarships in 2021" },
              { num: "102", lbl: "Scholarships in 2022" },
              { num: "250", lbl: "Scholarships in 2023" },
              { num: "348", lbl: "Scholarships in 2024" },
              { num: "339", lbl: "Scholarships in 2025" },
              { num: "423", lbl: "Scholarships in 2026" },
              { num: "1,051", lbl: "Total Scholarships" },
              { num: "27", lbl: "Laptops in 2024" },
              { num: "27", lbl: "Laptops in 2025" },
              { num: "54", lbl: "Total Laptops" },
            ].map((s, i) => (
              <div className="stat-inline-card" key={i}>
                <div className="num">{s.num}</div>
                <div className="lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* About Us */}
        <div className="about-block" data-animate>
          <p className="section-label">Our Story</p>
          <h2 className="section-title" style={{fontSize:"1.6rem"}}>About Us</h2>
          <div className="section-rule"></div>
          <p>
            Since our launch in 2018, the team at THE HULEDE FOUNDATION has worked tirelessly to promote our cause. The Foundation was set up in the name of Mr. Patrick Hulede of blessed memory — once the Founder and first head of the KNUST Printing Press — by his two sons, Patrick and John.
          </p>
          <br />
          <p>
            We are fortunate to have volunteers and staff from all walks of life who bring their unique expertise and resources into everything we do. We don't measure our success through just facts and figures, but through happy faces and heartwarming feedback.
          </p>
        </div>

        {/* Vision */}
        <div className="about-block" data-animate>
          <p className="section-label">Looking Ahead</p>
          <h2 className="section-title" style={{fontSize:"1.6rem"}}>Our Vision</h2>
          <div className="section-rule"></div>
          <p>
            A world where every child and young person — regardless of background or circumstance — has equitable access to education, technology, and the support needed to reach their full potential and become agents of positive change in their communities.
          </p>
        </div>

        {/* Mission */}
        <div className="about-block" data-animate>
          <p className="section-label">Why We Exist</p>
          <h2 className="section-title" style={{fontSize:"1.6rem"}}>Our Mission</h2>
          <div className="section-rule"></div>
          <p>
            Hulede Foundation exists to transform lives by expanding access to education, empowering vulnerable children and families, and restoring hope through sustainable support, mentorship, and opportunity. We are committed to breaking cycles of poverty by investing in human potential, promoting dignity, and inspiring collective responsibility — so every child can learn, thrive, and lead a purposeful future.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="site-footer full-bleed" style={{marginTop:80}}>
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Hulede Foundation</h3>
            <p>THE HULEDE FOUNDATION is here to help, and we believe that change is possible when we put our hearts and minds to it.</p>
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

export default About;
