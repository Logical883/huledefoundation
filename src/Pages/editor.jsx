import "./editor.css";
const Home = () => {
  return (
    <div className="home-container">
      {/* Blog Section */}
      <section className="blog-section">
        <div className="blog-header">
          <h2 className="blog-title">About Our Editor-in-Chief</h2>
          <p className="blog-subtitle">
            Discover the lives we've touched and the communities we've
            transformed through our programs and initiatives
          </p>
        </div>

        {/* Featured Article */}
        <div className="featured-article">
          <div className="featured-image">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800"
              alt="Featured story"
            />
          </div>
          <div className="featured-content">
            <h3>Empowering Communities Through Education</h3>
            <p className="featured-date">December 15, 2024</p>
            <p className="featured-excerpt">
              Join us as we share the incredible journey of how educational
              support has transformed lives in rural communities. Through
              scholarships, mentorship, and resources, we're building a brighter
              future for the next generation.
            </p>
            <a href="#" className="read-more-btn">
              Read Full Story →
            </a>
          </div>
        </div>

        {/* Recent Stories Grid */}
        <div className="stories-grid">
          <div className="story-card">
            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400"
                alt="Story"
              />
            </div>
            <div className="story-content">
              <h4>Building Hope: New School Facilities</h4>
              <p className="story-date">November 28, 2024</p>
              <p className="story-excerpt">
                See how we're creating safe learning environments for children
                in underserved areas
              </p>
              <a href="#" className="story-link">
                Read More →
              </a>
            </div>
          </div>

          <div className="story-card">
            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=400"
                alt="Story"
              />
            </div>
            <div className="story-content">
              <h4>Mentorship Program Success Stories</h4>
              <p className="story-date">November 15, 2024</p>
              <p className="story-excerpt">
                Celebrating the achievements of students who found guidance
                through our mentorship initiatives
              </p>
              <a href="#" className="story-link">
                Read More →
              </a>
            </div>
          </div>

          <div className="story-card">
            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400"
                alt="Story"
              />
            </div>
            <div className="story-content">
              <h4>Scholarship Recipients Share Their Journey</h4>
              <p className="story-date">October 30, 2024</p>
              <p className="story-excerpt">
                Meet the inspiring individuals whose lives have been changed
                through educational support
              </p>
              <a href="#" className="story-link">
                Read More →
              </a>
            </div>
          </div>

          <div className="story-card">
            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400"
                alt="Story"
              />
            </div>
            <div className="story-content">
              <h4>Community Outreach: Making a Difference</h4>
              <p className="story-date">October 12, 2024</p>
              <p className="story-excerpt">
                Discover how our volunteers are bringing positive change to
                local communities
              </p>
              <a href="#" className="story-link">
                Read More →
              </a>
            </div>
          </div>

          <div className="story-card">
            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400"
                alt="Story"
              />
            </div>
            <div className="story-content">
              <h4>Annual Impact Report 2024</h4>
              <p className="story-date">September 20, 2024</p>
              <p className="story-excerpt">
                A comprehensive look at our achievements and the lives we've
                touched this year
              </p>
              <a href="#" className="story-link">
                Read More →
              </a>
            </div>
          </div>

          <div className="story-card">
            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400"
                alt="Story"
              />
            </div>
            <div className="story-content">
              <h4>Partnership for Progress</h4>
              <p className="story-date">September 5, 2024</p>
              <p className="story-excerpt">
                Learn about our collaborations with local organizations to
                expand our reach
              </p>
              <a href="#" className="story-link">
                Read More →
              </a>
            </div>
          </div>
        </div>

        <div className="view-all-container">
          <button className="view-all-btn">View All Stories</button>
        </div>
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
