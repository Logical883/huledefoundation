import "./projects.css";

// Featured stories data
const featuredStories = [
  {
    title: "ASSISTING COMMUNITY PUBLIC SCHOOLS",
    description:
      'I am Daniel Coffie. God being so good, I commenced my volunteering project on September 1, 2023, at the Anyaa M/A "1" Primary and Junior High School located within the Anyaa-Sowutwom constituency. After conducting an investigation, I discovered that the students had limited knowledge in computing. Therefore, I undertook the initiative to provide them with education in computer literacy, starting...',
    link: "https://www.facebook.com/permalink.php?story_fbid=pfbid0KHEEPaSDjnMPbbxTP3zWVhism81qNNJm7d1iFXAixr4gA6oWDdm7tQVrCBCGwSXJl&id=100086620458577",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop",
  },
  {
    title: "Strength in Service",
    description:
      "My name is Prince Fosu, offering GEOGRAPHY AND RURAL DEVELOPMENT. As part of giving back to the community, I decided to find a place(community) that indeed deserves such a voluntary service and will always have such an experience in memory. So I traveled from Kumasi to a small neighborhood in one of the newly created districts (AMANSIE SOUTH DISTRICT). Manso Apenimadi is a community......",
    link: "https://drive.google.com/drive/folders/1PBSNs1xkpw-8q_5Qj_bQ9vdLde8__tVQ?usp=drive_link",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
  },
  // {
  //   title: "The Power of Giving",
  //   description:
  //     "I am Ama Serwaa, a passionate youth committed to empowering young girls in my community. On October 15, 2024, I officially launched my mentorship initiative at the Koforidua Methodist Junior High School. Through my observations, I realized that many of the girls lacked guidance and motivation regarding education and career opportunities. To address this, I introduced a series of mentorship and personal development....",
  //   link: "https://huledefoundation.org/the-power-of-giving/",
  //   image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
  // },
  {
    title: "THE T3 STORY",
    description:
      "Hulede Foundation,founded by John Hulede,a US – based non profitable organization has donated mechanized borehole water to new Amakom cluster of schools in the Kumasi Metropolis of the Ashanti Region. The donation is to help pupils and teachers to have access to portable drinking water which will facilitate teaching, learning and enhance quality education in the school......",
    link: "https://broadcastergh.com/afa-group-donates-mechanized-borehole-to-new-amakom-m-a-cluster-of-schools/ ",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop",
  },
  {
    title:
      "Hulede Foundation supports 250 needy students to clear outstanding fees",
    description:
      "The Hulede Foundation, a US-based non-governmental organization dedicated to assisting brilliant but underprivileged students in their pursuit of higher education, has provided financial support to 250 students at Kwame Nkrumah University of Science and Technology (KNUST) to settle their outstanding fees......",
    link: "https://www.graphic.com.gh/news/education/knust-hulede-foundation-supports-250-needy-students-to-clear-outstanding-fees.html ",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop",
  },
];

const Home = () => {
  return (
    <div className="home-container">
      <section className="about-sections">
        <h2 className="section-title">COMMUNITY SERVICE REPORTS</h2>
        <h4 className="section-titles">Empowering Change Through Service</h4>
        <div className="section-divider"></div>
        <p className="section-subtitles">
          At the Hulede Foundation, community service is at the heart of our
          mission. We empower scholars and volunteers to create lasting
          impact—supporting education through improved learning facilities,
          uplifting communities through compassionate action, and transforming
          lives by providing scholarships to deserving students.
        </p>
      </section>

      <br />
      <br />

      {/* Featured Stories Grid */}
      <section>
        <div className="features-grid">
          {featuredStories.map((story, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-image">
                <img src={story.image} alt={story.title} />
              </div>
              <h4 className="feature-title">{story.title}</h4>
              <p className="feature-description">{story.description}</p>
              <button className="btn-secondary">
                <a href={story.link}>Read More</a>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-sections">
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
