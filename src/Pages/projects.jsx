import React, { useEffect } from "react";
import "./projects.css";

const featuredStories = [
  {
    title: "Assisting Community Public Schools",
    description: "Daniel Coffie commenced his volunteering project at Anyaa M/A Primary and JHS, providing computer literacy education after discovering students had limited computing knowledge.",
    link: "https://www.facebook.com/permalink.php?story_fbid=pfbid0KHEEPaSDjnMPbbxTP3zWVhism81qNNJm7d1iFXAixr4gA6oWDdm7tQVrCBCGwSXJl&id=100086620458577",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop",
    tag: "Education",
  },
  {
    title: "Strength in Service",
    description: "Prince Fosu traveled from Kumasi to Amansie South District, offering voluntary service to a remote community that truly needed it, leaving a lasting impact.",
    link: "https://drive.google.com/drive/folders/1PBSNs1xkpw-8q_5Qj_bQ9vdLde8__tVQ?usp=drive_link",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
    tag: "Community",
  },
  {
    title: "Mechanized Borehole Donation",
    description: "Hulede Foundation donated a mechanized borehole water system to New Amakom M/A cluster of schools in Kumasi, improving access to portable drinking water.",
    link: "https://broadcastergh.com/afa-group-donates-mechanized-borehole-to-new-amakom-m-a-cluster-of-schools/",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop",
    tag: "Infrastructure",
  },
  {
    title: "Supporting 250 Needy Students",
    description: "Hulede Foundation provided financial support to 250 KNUST students to settle outstanding fees, ensuring they could continue their education without disruption.",
    link: "https://www.graphic.com.gh/news/education/knust-hulede-foundation-supports-250-needy-students-to-clear-outstanding-fees.html",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
    tag: "Scholarship",
  },
];

const Projects = () => {
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
    <div className="projects-page">
      <div className="projects-hero">
        <p className="section-label" data-animate>What We Do</p>
        <h1 className="section-title" data-animate data-delay="1">Our Projects</h1>
        <div className="section-rule" style={{margin:"14px auto 0"}} data-animate data-delay="2"></div>
      </div>

      <section className="projects-section">
        <div data-animate>
          <p className="section-label">Impact Stories</p>
          <h2 className="section-title" style={{fontSize:"1.6rem"}}>Community Service Highlights</h2>
          <div className="section-rule"></div>
          <p className="section-body">Each scholar's story is a testament to our belief that education and service go hand in hand.</p>
        </div>

        <div className="projects-grid">
          {featuredStories.map((s, i) => (
            <div className="project-card" key={i} data-animate data-delay={String(i % 4)}>
              <img src={s.image} alt={s.title} loading="lazy" />
              <div className="project-card-body">
                <span className="project-tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <a href={s.link} target="_blank" rel="noopener noreferrer" className="project-link">Read Story</a>
              </div>
            </div>
          ))}
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

export default Projects;
