import "./about.css";
const Home = () => {
  return (
    <div className="home-container">
      {/* About Us Section */}
      <section className="about-section">
        <h2 className="section-title">
          HULEDE FOUNDATION KNUST SCHOLARSHIP & LAPTOP DISTRIBUTION STATISTICS
        </h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Scholarships Awarded Per Year
          <br /> A breakdown of scholarships awarded to students each year:{" "}
          <br />
          <li>2021: 12 scholarships</li>
          <li>2022: 102 scholarships</li>
          <li>2023: 250 scholarships</li>
          <li>2024: 348 scholarships</li>
          <li>2025: 339 scholarships</li>
          <strong>Total Scholarships Awarded to Date: 1,051</strong>
          <br />
          <br />
          Laptops Distributed to Hulede Foundation KNUST Students Annual
          distribution of laptops to support academic excellence:
          <li>2024: 27 laptops</li>
          <li>2025: 27 laptops</li>
          <strong>Total Laptops Distributed to Date: 54</strong>
        </p>

        <h2 className="section-title">ABOUT US</h2>
        <div className="section-divider"></div>
        <p className="section-subtitles">
          Since our launch in 2018, the team at THE HULEDE FOUNDATION has worked
          tirelessly to promote our cause. The Foundation was set up in the name
          of Mr. Patrick Hulede of blessed memory, once the Founder and first
          head of the KNUST Printing Press, by his two sons, Patrick and John.
          We are fortunate to have volunteers and staff from all walks of life
          who bring their unique expertise and resources into everything we do.
          This is what enables us to achieve our goals year after year. While
          there is always more that can be done, there is no doubt that we are
          making a significant impact. We don’t measure our success through just
          facts and figures, but through happy faces and heartwarming feedback.
          See how you can become part of the difference
        </p>
        <h2 className="section-title">OUR VISION</h2>
        <div className="section-divider"></div>
        <p className="section-subtitles">
          A world where every child and young person—regardless of background or
          circumstance—has equitable access to education, technology, and the
          support needed to reach their full potential and become agents of
          positive change in their communities.
        </p>
        <h2 className="section-title">OUR MISSION</h2>
        <div className="section-divider"></div>
        <p className="section-subtitles">
          Hulede Foundation exists to transform lives by expanding access to
          education, empowering vulnerable children and families, and restoring
          hope through sustainable support, mentorship, and opportunity. We are
          committed to breaking cycles of poverty by investing in human
          potential, promoting dignity, and inspiring collective
          responsibility—so every child, regardless of circumstance, can learn,
          thrive, and lead a purposeful future.
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
