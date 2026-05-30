import React, { useEffect } from "react";
import "./team.css";

const ceo = {
  name: "Mr. John Hulede",
  title: "CEO & Founder",
  description: "I was born on KNUST campus to Mr. Patrick Hulede, then KNUST Printing Manager and Mrs. Mary Clara Araba Tachie-Mensah-Hulede. I attended University Primary, OWASS, and then KNUST for one year. I am an IT engineer by Profession and worked at DHS-USCIS, DHS-OBIM, Department of Energy, and others. At Department of Transportation - FHWA, I designed and implemented a nationwide Microsoft Active Directory and Mail system.",
  experience: [
    "Former President Akatakyie DMV, USA",
    "Current President Akatakyie Z Group, GLOBAL",
    "Current President AFA-DMV, USA",
  ],
  image: "/images/jhulede.png",
};

const boardMembers = [
  { name: "Mrs. Irene Hulede",      title: "Board Member",      image: "/images/Irene.png" },
  { name: "Mr. Patrick Hulede",     title: "Board Member",      image: "/images/Patrick.png" },
  { name: "Mr. Eric Anane Antwi",   title: "Board Member",      image: "/images/Eric.png" },
  { name: "Prof. Rudolph Steiner",  title: "Board Member",      image: "/images/Steiner.png" },
  { name: "Mary Hulede",            title: "Member",            image: "/images/Mary.png" },
  { name: "John Hulede Jnr.",       title: "Member",            image: "/images/John.png" },
  { name: "Mauduana A. Menyah",     title: "General Secretary", image: "/images/Mauduana.png" },
  { name: "Hulede Family",          title: "Mr. Hulede with Family", image: "/images/WithFam.png" },
];

const Team = () => {
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
    <div className="team-page">
      <div className="team-hero">
        <p className="section-label" data-animate>The People Behind the Mission</p>
        <h1 className="section-title" data-animate data-delay="1">Our Team</h1>
        <div className="section-rule" style={{margin:"14px auto 0"}} data-animate data-delay="2"></div>
      </div>

      <section className="ceo-section">
        <div className="ceo-grid">
          <div data-animate>
            <img src={ceo.image} alt={ceo.name} className="ceo-img" />
          </div>
          <div data-animate data-delay="2">
            <p className="ceo-role">{ceo.title}</p>
            <h2>{ceo.name}</h2>
            <div className="section-rule" style={{margin:"14px 0 24px"}}></div>
            <p>{ceo.description}</p>
            <ul className="ceo-exp">
              {ceo.experience.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="board-section">
        <div className="board-inner">
          <p className="section-label" data-animate>Leadership</p>
          <h2 className="section-title" data-animate data-delay="1">Board Members</h2>
          <div className="section-rule" data-animate data-delay="2"></div>
          <div className="board-grid">
            {boardMembers.map((m, i) => (
              <div className="board-card" key={i} data-animate data-delay={String(i % 4)}>
                <LazyImage src={m.image} alt={m.name} />
                <div className="board-card-info">
                  <h3>{m.name}</h3>
                  <p>{m.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
};

export default Team;
