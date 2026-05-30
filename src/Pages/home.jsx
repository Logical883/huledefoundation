import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import image1 from "../assets/image1.JPG";
import image2 from "../assets/image2.JPG";
import image3 from "../assets/image3.JPG";
import HeroImg from "../assets/Hero.jpg";
import Scholarship from "../assets/Scholarship.jpg";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
  </svg>
);

const heroImages = [image1, image2, image3];

const featuredStories = [
  {
    title: "James Dankwah Amoako – Making a Difference Through Compassion",
    description: "James, a Hulede Foundation Scholar, dedicates his time to assist a physically challenged woman in Akim Osiem, providing mobility support and companionship to church. His act of compassion is inspiring others to serve with empathy and humility.",
    link: "https://drive.google.com/file/d/1sDKU_kSPNlhLtiLrNEk7rSEkhWOFXzE7/view?usp=sharing",
  },
  {
    title: "Hon. Asare Freduah Edmond Senior – Empowering Minds Through Education",
    description: "Asare devoted 54 hours to tutor children in his community, helping them build confidence, improve academically, and develop an entrepreneurial mindset. His leadership and problem-solving skills continue to shine through impactful community teaching.",
    link: "https://drive.google.com/file/d/1ew-ytvSqDdn0UmwqHic08do_n8bt-Ofs/view?usp=sharing",
  },
  {
    title: 'The "Give Back" Story',
    description: 'Daniel Coffie commenced his volunteering project at Anyaa M/A "1" Primary and JHS. After discovering students had limited computing knowledge, he undertook a computer literacy initiative — a model of giving back with purpose.',
    link: "https://www.facebook.com/people/The-Hulede-Foundation/100086620458577/",
  },
  {
    title: "Hulede Foundation Donates Mechanized Borehole",
    description: "Hulede Foundation donated a mechanized borehole water system to New Amakom M/A cluster of schools in Kumasi, providing pupils and teachers with portable drinking water to facilitate teaching, learning, and quality education.",
    link: "https://broadcastergh.com/afa-group-donates-mechanized-borehole-to-new-amakom-m-a-cluster-of-schools/",
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

const tickerItems = [
  "Educational Excellence","Community Service","Leadership Development",
  "Social Impact Projects","Volunteerism","Youth Empowerment",
  "Sustainable Development","Mentorship Programs","Innovation for Change",
  "Empowering Future Leaders","Civic Responsibility","Lifelong Learning",
];

const Home = () => {
  const [slide, setSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroImages.length), 5500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setShowPopup(true), 1200);
    return () => clearTimeout(t);
  }, []);

  // Scroll reveal
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

  const totalRecipients = scholarshipData.reduce((s, i) => s + i.recipients, 0);
  const totalLaptops = laptopData.reduce((s, i) => s + i.laptops, 0);
  const doubled = [...tickerItems, ...tickerItems];

  return (
    <div>
      {/* ── POPUP ─────────────────────────────────────── */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setShowPopup(false)}>✕</button>
            <img src={Scholarship} alt="Scholarship Update" className="popup-img" />
            <div className="popup-body">
              <h2>Scholarship Application Update</h2>
              <p>
                Thank you to all students who applied for the <strong>Hulede Foundation Scholarship</strong>. We appreciate your interest and the effort you put into your applications.
                <br /><br />
                We are currently reviewing all submissions. You will receive a response by <strong>15th April, 2026</strong>. Please keep an eye on your email.
                <br /><br />
                Questions? Reach us at <strong>0243426670</strong>.
              </p>
            </div>
            <div className="popup-footer">
              <button onClick={() => setShowPopup(false)}>OK, Got It!</button>
            </div>
          </div>
        </div>
      )}

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="hero-section">
        {heroImages.map((src, i) => (
          <div
            key={i}
            className={`hero-bg${slide === i ? " active" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="hero-overlay">
          <p className="hero-eyebrow">Hulede Foundation · KNUST Scholarship</p>
          <h1 className="hero-title">2025 Meet &amp; Greet</h1>
          <div className="hero-actions">
            <a href="https://forms.gle/WQGC3LJrTnmkvTra7" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary">Submit Report</button>
            </a>
            <Link to="/about">
              <button className="btn btn-outline" style={{ borderColor:"rgba(255,255,255,0.7)", color:"#fff" }}>
                Learn More
              </button>
            </Link>
          </div>
          <div className="hero-dots">
            {heroImages.map((_, i) => (
              <button
                key={i}
                className={`hero-dot${slide === i ? " active" : ""}`}
                onClick={() => setSlide(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="scroll-cue">Scroll</div>
        </div>
      </section>

      {/* ── TICKER ────────────────────────────────────── */}
      <div className="ticker-bar">
        <div className="ticker-track" aria-hidden="true">
          {doubled.map((item, i) => (
            <span key={i}>✦ {item}</span>
          ))}
        </div>
      </div>

      {/* ── CTA BANNER ────────────────────────────────── */}
      <section className="cta-banner" data-animate>
        <h2>Community Service Report</h2>
        <p>
          Take the next step toward your academic journey. Submit your Community Service report today and let your dreams find the support they deserve.
        </p>
        <a href="https://forms.gle/WQGC3LJrTnmkvTra7" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-white">Submit Now</button>
        </a>
      </section>

      {/* ── ABOUT ─────────────────────────────────────── */}
      <section className="about-section">
        <div className="about-inner">
          <div data-animate>
            <p className="section-label">Who We Are</p>
            <h2 className="section-title">Transforming Lives Through Education</h2>
            <div className="section-rule"></div>
            <p className="section-body">
              Our strength lies not only in the words we stand by, but most importantly in the actions of our initiatives. We purposely create opportunities for the underprivileged in our society to better their lives.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-img-wrap" data-animate>
              <img src={HeroImg} alt="Hulede Foundation" />
              <div className="about-img-accent" />
            </div>
            <div className="about-text" data-animate data-delay="2">
              <p className="section-label">Our Scholarship</p>
              <h3 className="section-title" style={{fontSize:"1.7rem"}}>About Hulede Foundation Scholarship</h3>
              <div className="section-rule"></div>
              <p className="section-body">
                The Hulede Foundation Scholarship supports "brilliant but needy" Ghanaian students — primarily at KNUST — creating opportunities for those who are both academically strong and financially disadvantaged.
              </p>
              <br />
              <p className="section-body">
                Since 2021, we've awarded over 1,000 scholarships and donated 54 laptops, and we're just getting started.
              </p>
              <br />
              <Link to="/about">
                <button className="btn btn-primary">Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY SERVICE ─────────────────────────── */}
      <section className="service-section">
        <div className="service-header" data-animate>
          <p className="section-label">The Spirit of Giving Multiples</p>
          <h2 className="section-title">Community Service</h2>
          <div className="section-rule"></div>
          <p className="section-body">
            Each scholar completes <strong>40 hours minimum of annual community service</strong> as a core requirement. This initiative is a vital contribution to society and a mandatory part of the scholarship renewal process.
          </p>
        </div>

        <div className="service-requirements" data-animate data-delay="1">
          <h3>To be eligible, scholars must:</h3>
          <ul>
            <li>Wear the official Hulede Foundation T-shirt during service</li>
            <li>Document their work with photos, videos, and a detailed report</li>
            <li>Complete at least 40 hours of service annually</li>
            <li>Submit all evidence to the designated platform</li>
          </ul>
        </div>

        <div className="story-grid">
          {featuredStories.map((story, i) => (
            <div className="story-card" key={i} data-animate data-delay={String(i % 4)}>
              <div className="story-icon"><CheckIcon /></div>
              <h4>{story.title}</h4>
              <p>{story.description}</p>
              <a href={story.link} target="_blank" rel="noopener noreferrer" className="story-link">
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATISTICS ────────────────────────────────── */}
      <section className="stats-section">
        <div className="stats-inner">
          <div style={{textAlign:"center", marginBottom:"48px"}} data-animate>
            <p className="section-label">Our Impact</p>
            <h2 className="section-title">Numbers That Speak</h2>
            <div className="section-rule center"></div>
          </div>

          <div className="stats-cards">
            <div className="stat-card green" data-animate>
              <div className="stat-num">{totalRecipients}</div>
              <div className="stat-label">Scholarship Recipients</div>
            </div>
            <div className="stat-card blue" data-animate data-delay="2">
              <div className="stat-num">{totalLaptops}</div>
              <div className="stat-label">Laptops Donated</div>
            </div>
          </div>

          <div className="tables-grid">
            <div className="table-wrap" data-animate>
              <div className="table-head">Scholarship Recipients by Year</div>
              <table className="data-table">
                <thead><tr><th>Year</th><th>Recipients</th></tr></thead>
                <tbody>
                  {scholarshipData.map((r, i) => (
                    <tr key={i}><td>{r.year}</td><td>{r.recipients}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="table-wrap" data-animate data-delay="2">
              <div className="table-head">Laptop Distribution</div>
              <table className="data-table">
                <thead><tr><th>Year</th><th>Laptops</th></tr></thead>
                <tbody>
                  {laptopData.map((r, i) => (
                    <tr key={i}><td>{r.year}</td><td>{r.laptops}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────── */}
      <footer className="site-footer full-bleed">
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

export default Home;
