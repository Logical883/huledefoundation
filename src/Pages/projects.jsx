import "./projects.css";
const Home = () => {
  return (
    <div className="home-container">
      {/* About Us Section */}
      <section className="about-section">
        <h2 className="section-title">WAYS WE HELP</h2>
        <h4 className="section-titles">The Focus of Our Efforts</h4>
        <div className="section-divider"></div>
        <p className="section-subtitles">
          We create opportunities in several ways; assisting primary and
          elementary schools with much needed facilities to aid in their
          teaching and learning experience, transforming lives and giving
          scholarships to the brilliant but needy students.
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

export default Home;
