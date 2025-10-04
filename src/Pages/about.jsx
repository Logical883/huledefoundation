import "./about.css";
const Home = () => {
  return (
    <div className="home-container">
      {/* About Us Section */}
      <section className="about-section">
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
          It is so easy to fall into a pattern of apathy as we go through our
          lives. Our organization was born out of a commitment to stop passing
          over the real issues of society and deal with them head on. We have
          set out to aid those who need it most. THE HULEDE FOUNDATION is here
          to help, and we believe that change is possible when we put our hearts
          and minds to it.
        </p>
        <h2 className="section-title">OUR MISSION</h2>
        <div className="section-divider"></div>
        <p className="section-subtitles">
          To create opportunities for the underprivileged in our global society
          to better their lives. <br /> <br />
          <li>
            We assist Primary and elementary schools with much-needed facilities
            to augment their teaching and learning experience. We provide items
            such as desks, chairs, and mechanised borehole systems. Some
            judiciary challenged students receiving mobility aids and laptops.
          </li>
          <li>
            We enrich the lives of widows by empowering them to become
            self-sufficient through financial support and mentoring.{" "}
          </li>
          <li>
            The Hulede Foundation KNUST scholarship seeks to identify brilliant
            students who are genuinely underprivileged and assist them in their
            pursuit of higher education.
          </li>{" "}
          <br />
          We are not just interested in giving out the money but rather in
          cultivating a relationship with the recipients with the view to
          assisting them through mentorship, career development and life
          opportunities. Ultimately, the Foundation desires to train and
          encourage its beneficiaries to develop and maintain the culture of
          giving back to society.
        </p>
      </section>

      {/* Footer */}
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

export default Home;
