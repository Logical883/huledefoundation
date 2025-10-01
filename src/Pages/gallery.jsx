import React, { useState, useEffect } from "react";
import "./gallery.css";

const Gallery = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const galleryItems = [
    {
      id: 1,
      title: "LAST LONDON VLOG",
      date: "SEPTEMBER 28, 2024",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
      link: "https://gesaknustmedia.pixieset.com/inspireconference/", // Replace with your actual link
      size: "large",
    },
    {
      id: 2,
      title: "MIDNIGHT SNACK",
      date: "SEPTEMBER 16, 2024",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      link: "YOUR_LINK_HERE_2", // Replace with your actual link
      size: "small",
    },
    {
      id: 3,
      title: "AUTUMN ROADTRIP",
      date: "SEPTEMBER 12, 2024",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
      link: "YOUR_LINK_HERE_3", // Replace with your actual link
      size: "small",
    },
    {
      id: 4,
      title: "NOTHING IS PROMISED",
      date: "SEPTEMBER 10, 2024",
      image:
        "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&q=80",
      link: "YOUR_LINK_HERE_4", // Replace with your actual link
      size: "small",
    },
    {
      id: 5,
      title: "LAPOINT VINNARE",
      date: "SEPTEMBER 08, 2024",
      image:
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80",
      link: "YOUR_LINK_HERE_5", // Replace with your actual link
      size: "large",
    },
    {
      id: 6,
      title: "LAST NIGHT WAS REAL",
      date: "SEPTEMBER 05, 2024",
      image:
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80",
      link: "YOUR_LINK_HERE_6", // Replace with your actual link
      size: "small",
    },
    {
      id: 7,
      title: "FESTIVAL READY",
      date: "SEPTEMBER 02, 2024",
      image:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
      link: "YOUR_LINK_HERE_7", // Replace with your actual link
      size: "large",
    },
    {
      id: 8,
      title: "SUMMER HEAVEN",
      date: "SEPTEMBER 01, 2024",
      image:
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
      link: "YOUR_LINK_HERE_8", // Replace with your actual link
      size: "small",
    },
    {
      id: 9,
      title: "WEEKEND TRIP",
      date: "SEPTEMBER 01, 2024",
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80",
      link: "YOUR_LINK_HERE_9", // Replace with your actual link
      size: "small",
    },
  ];

  const handleCardClick = (link) => {
    // For external links (starts with http:// or https://)
    if (link.startsWith("http://") || link.startsWith("https://")) {
      window.location.href = link;
    } else {
      // For internal routes, uncomment ONE of the following:

      // Option 1: If using React Router, uncomment these lines:
      // import { useNavigate } from 'react-router-dom';
      // const navigate = useNavigate();
      // navigate(link);

      // Option 2: For simple navigation without React Router:
      window.location.href = link;
    }
  };

  return (
    <div className="gallery-container">
      <div className={`gallery-grid ${isVisible ? "visible" : ""}`}>
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className={`gallery-card ${item.size} ${
              hoveredCard === item.id ? "hovered" : ""
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
            onMouseEnter={() => setHoveredCard(item.id)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick(item.link)}
          >
            <div className="card-image-wrapper">
              <img src={item.image} alt={item.title} className="card-image" />
              <div className="card-overlay"></div>
            </div>
            <div className="card-content">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-date">{item.date}</p>
              <button
                className="view-more-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(item.link);
                }}
              >
                View More
                <svg
                  className="arrow-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              condimentum rutrum ligula.
            </p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@example.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Hulede Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;
