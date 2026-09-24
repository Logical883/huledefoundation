import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import HeroImg from "../assets/Hero.jpg";
import heroPhoto from "../assets/image1.JPG";

const stats = [
  { num: "1,474", lbl: "Scholarships, 2021–2026" },
  { num: "423", lbl: "Awards in 2026" },
  { num: "54", lbl: "Laptops donated" },
  { num: "2018", lbl: "Year the Foundation began" },
];

const yearly = [
  { year: "2026", recipients: 423 },
  { year: "2025", recipients: 339 },
  { year: "2024", recipients: 348 },
  { year: "2023", recipients: 250 },
  { year: "2022", recipients: 102 },
  { year: "2021", recipients: 12 },
];

const pillars = [
  { title: "Access", text: "Open KNUST and further study to students who are academically strong and financially held back." },
  { title: "Opportunity", text: "Pair fees support with laptops, mentorship, and a community of scholars who are expected to serve." },
  { title: "Service", text: "Ask every scholar for at least 40 hours of community service a year, documented and reported." },
];

const values = [
  { title: "Dignity", text: "Help is given so a student can stay in school with their head up, not as a favour that has to be hidden." },
  { title: "Give-back", text: "Scholars tutor, teach computer skills, and show up for neighbours. The award is meant to travel further than one person." },
  { title: "Honesty", text: "Numbers on this site are the Foundation’s own counts. Stories link out to the original report or album." },
  { title: "Care", text: "Success is read in faces and feedback as much as in the scholarship table." },
];

export default function About() {
  return (
    <PageShell>
      <header className="app-hero">
        <div className="app-hero-bg" style={{ backgroundImage: `url(${heroPhoto})` }} />
        <div className="app-hero-shade" />
        <div className="portal-container app-hero-grid">
          <div>
            <p className="crumbs crumbs-light"><Link to="/">Home</Link><span>/</span>About Us</p>
            <p className="gsa-eyebrow">Institutional profile</p>
            <h1>About Us</h1>
            <p className="page-lede">
              A family foundation, begun in 2018 in the name of Mr. Patrick Hulede, focused on scholarships, tools, and service for brilliant but needy students — primarily at KNUST.
            </p>
            <div className="gsa-actions">
              <Link className="gsa-btn primary" to="/application">Application Info</Link>
              <Link className="gsa-btn ghost" to="/contact">Contact</Link>
            </div>
          </div>
          <aside className="hero-glass">
            <strong>Since 2018</strong>
            <span>In memory of Mr. Patrick Hulede</span>
          </aside>
        </div>
      </header>

      <section className="portal-section">
        <div className="portal-container feature-split">
          <div className="feature-photo" data-animate>
            <img src={HeroImg} alt="Hulede Foundation gathering" />
          </div>
          <div className="feature-copy" data-animate>
            <p className="section-label">Origin and purpose</p>
            <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 2.7rem)" }}>
              Built in memory of the first head of the KNUST Printing Press.
            </h2>
            <div className="section-rule" />
            <p className="section-body">
              Since our launch in 2018, the team at the Hulede Foundation has worked to promote the cause. The Foundation was set up in the name of Mr. Patrick Hulede of blessed memory — once the founder and first head of the KNUST Printing Press — by his two sons, Patrick and John.
            </p>
            <p className="section-body">
              Volunteers and staff come from many walks of life. We do not measure success through figures alone, but through happy faces and heartwarming feedback.
            </p>
          </div>
        </div>
      </section>

      <section className="portal-section alt">
        <div className="portal-container">
          <div className="stat-row">
            {stats.map((item) => (
              <div className="stat-tile" key={item.lbl} data-animate>
                <strong>{item.num}</strong>
                <span>{item.lbl}</span>
              </div>
            ))}
          </div>
          <div className="tables-grid">
            <div className="table-wrap" data-animate>
              <div className="table-head">Scholarship recipients by year</div>
              <table className="data-table">
                <thead><tr><th>Year</th><th>Recipients</th></tr></thead>
                <tbody>
                  {yearly.map((row) => (
                    <tr key={row.year}><td>{row.year}</td><td>{row.recipients}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="table-wrap" data-animate>
              <div className="table-head">Laptop distribution</div>
              <table className="data-table">
                <thead><tr><th>Year</th><th>Laptops</th></tr></thead>
                <tbody>
                  <tr><td>2025</td><td>27</td></tr>
                  <tr><td>2024</td><td>27</td></tr>
                  <tr><td>Total</td><td>54</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="portal-section">
        <div className="portal-container">
          <div className="section-head" data-animate>
            <p className="section-label">What the work is for</p>
            <h2 className="section-title">Education, a tool to study with, and a habit of service.</h2>
            <div className="section-rule" />
          </div>
          <div className="faq-grid">
            {pillars.map((item) => (
              <article className="faq-card" key={item.title} data-animate>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portal-section alt">
        <div className="portal-container pathway-grid">
          <article className="pathway-card" data-animate>
            <p className="section-label">Vision</p>
            <h3>Every young person, able to learn and lead.</h3>
            <p>
              A world where every child and young person — regardless of background or circumstance — has equitable access to education, technology, and the support needed to reach their full potential and become agents of positive change in their communities.
            </p>
          </article>
          <article className="pathway-card" data-animate>
            <p className="section-label">Mission</p>
            <h3>Break the cycle by investing in people.</h3>
            <p>
              Hulede Foundation exists to transform lives by expanding access to education, empowering vulnerable children and families, and restoring hope through sustainable support, mentorship, and opportunity — so every child can learn, thrive, and lead a purposeful future.
            </p>
          </article>
        </div>
      </section>

      <section className="portal-section">
        <div className="portal-container">
          <div className="section-head" data-animate>
            <p className="section-label">How we carry it</p>
            <h2 className="section-title">Standards we try to keep in public.</h2>
            <div className="section-rule" />
          </div>
          <div className="value-grid">
            {values.map((item) => (
              <article className="value-card" key={item.title} data-animate>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="portal-actions" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary" to="/management">Meet management</Link>
            <Link className="btn btn-outline" to="/application">Application Info</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
