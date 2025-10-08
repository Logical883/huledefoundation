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
      title: "2025 HULEDE FOUNDATION SCHOLARSHIP GALLERY",
      date: "MAY 18, 2025",
      image: "/images/2025.JPG", // Replace with your image filename
      link: "https://huledefoundation.pixieset.com/2025huledescholarshipprogram/",
      size: "large",
    },
    {
      id: 2,
      title: "2024 HULEDE SCHOLARSHIP FOUNDATION GALLERY",
      date: "JUNE 6, 2024",
      image: "/images/2024.jpg", // Replace with your image filename
      link: "https://huledefoundation.pixieset.com/2024huledescholarshipfoundationgallery/",
      size: "small",
    },
    {
      id: 3,
      title: "2023 HULEDE SCHOLARSHIP FOUNDATION GALLERY",
      date: "JUNE 10, 2023",
      image: "/images/2023.jpg", // Replace with your image filename
      link: "https://huledefoundation.pixieset.com/2023huledefoundationscholarshipgallery/",
      size: "small",
    },
    {
      id: 4,
      title: "HULEDE FOUNDATION COMMUNITY SERVICE GALLERY",
      image: "/images/COM_1.jpg", // Replace with your image filename
      link: "https://huledefoundation.pixieset.com/huledefoundationcommunityservicegallery/",
      size: "small",
    },
    {
      id: 5,
      title: "HULEDE FOUNDATION SCHOLARHIP ( LAPTOP RECEPIENTS ) GALLERY",
      image: "/images/LAP_1.jpg", // Replace with your image filename
      link: "https://huledefoundation.pixieset.com/huledefoundationscholarhiplaptoprecipientsgallery/",
      size: "large",
    },
    {
      id: 6,
      title: "2022 HULEDE FOUNDATION SCHOLARSHIP GALLERY",
      date: "SEPTEMBER 05, 2024",
      image: "/images/2022.jpg", // Replace with your image filename
      link: "https://huledefoundation.pixieset.com/2022huledefoundationscholarshipgallery/",
      size: "small",
    },
    {
      id: 7,
      title: "HULEDE FOUNDATION - OTHER ACTIVITIES GALLERY",
      // date: "SEPTEMBER 02, 2024",
      image: "/images/Service.jpg", // Replace with your image filename
      link: "https://huledefoundation.pixieset.com/huledefoundationgeneralgallery/",
      size: "large",
    },
    // {
    //   id: 8,
    //   title: "SUMMER HEAVEN",
    //   date: "SEPTEMBER 01, 2024",
    //   image: "/images/image8.jpg", // Replace with your image filename
    //   link: "YOUR_LINK_HERE_8",
    //   size: "small",
    // },
    // {
    //   id: 9,
    //   title: "WEEKEND TRIP",
    //   date: "SEPTEMBER 01, 2024",
    //   image: "/images/image9.jpg", // Replace with your image filename
    //   link: "YOUR_LINK_HERE_9",
    //   size: "small",
    // },
  ];

  const handleCardClick = (link) => {
    if (link.startsWith("http://") || link.startsWith("https://")) {
      window.location.href = link;
    } else {
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

export default Gallery;
