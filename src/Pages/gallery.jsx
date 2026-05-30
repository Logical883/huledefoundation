import React, { useEffect } from "react";
import "./gallery.css";
import LazyImage from "../components/LazyImage";

const galleryItems = [
  { title: "2025 Hulede Foundation Scholarship Gallery", date: "MAY 18, 2025", image: "/images/2025.JPG", link: "https://huledefoundation.pixieset.com/2025huledescholarshipprogram/", size: "large" },
  { title: "2025 Graduands Gallery – Hulede Scholars", date: "NOVEMBER 2025", image: "/images/Graduate.jpg", link: "https://huledefoundation.pixieset.com/guaduationgalleryhuledescholars/", size: "small" },
  { title: "2024 Hulede Scholarship Foundation Gallery", date: "JUNE 6, 2024", image: "/images/2024.jpg", link: "https://huledefoundation.pixieset.com/2024huledescholarshipfoundationgallery/", size: "small" },
  { title: "2023 Hulede Scholarship Foundation Gallery", date: "JUNE 10, 2023", image: "/images/2023.jpg", link: "https://huledefoundation.pixieset.com/2023huledefoundationscholarshipgallery/", size: "small" },
  { title: "Community Service Gallery", date: "", image: "/images/COM_1.jpg", link: "https://huledefoundation.pixieset.com/huledefoundationcommunityservicegallery/", size: "small" },
  { title: "Scholarship – Laptop Recipients Gallery", date: "", image: "/images/LAP_1.jpg", link: "https://huledefoundation.pixieset.com/huledefoundationscholarhiplaptoprecipientsgallery/", size: "large" },
  { title: "2022 Hulede Scholarship Foundation Gallery", date: "2022", image: "/images/2022.jpg", link: "https://huledefoundation.pixieset.com/", size: "small" },
];

const Gallery = () => {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("in-view");
        else e.target.classList.remove("in-view");
      }),
      { threshold: 0.08 }
    );
    document.querySelectorAll("[data-animate]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="gallery-page">
      <div className="gallery-hero">
        <p className="section-label" data-animate>Our Moments</p>
        <h1 className="section-title" data-animate data-delay="1">Gallery</h1>
        <div className="section-rule" style={{margin:"14px auto 0"}} data-animate data-delay="2"></div>
      </div>

      <section className="gallery-grid-section">
        <div className="gallery-mosaic">
          {galleryItems.map((item, i) => (
            <div
              className={`gallery-card${item.size === "large" ? " large" : ""}`}
              key={i}
              data-animate
            >
              <LazyImage src={item.image} alt={item.title} className="gallery-card-img" />
              <div className="gallery-card-overlay">
                <h3>{item.title}</h3>
                {item.date && <span>{item.date}</span>}
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  View Gallery
                </a>
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

export default Gallery;
