import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import heroPhoto from "../assets/Hero.jpg";

const ceo = {
  name: "Mr. John Hulede",
  title: "CEO & Founder",
  description:
    "I was born on KNUST campus to Mr. Patrick Hulede, then KNUST Printing Manager, and Mrs. Mary Clara Araba Tachie-Mensah-Hulede. I attended University Primary, OWASS, and then KNUST for one year. I am an IT engineer by profession and worked at DHS-USCIS, DHS-OBIM, Department of Energy, and others. At the Department of Transportation — FHWA, I designed and implemented a nationwide Microsoft Active Directory and mail system.",
  experience: [
    "Former President, Akatakyie DMV, USA",
    "Current President, Akatakyie Z Group, Global",
    "Current President, AFA-DMV, USA",
  ],
  image: "/images/jhulede.png",
};

const board = [
  { name: "Mrs. Irene Hulede", title: "Board Member", image: "/images/Irene.png" },
  { name: "Mr. Patrick Hulede", title: "Board Member", image: "/images/Patrick.png" },
  { name: "Mr. Eric Anane Antwi", title: "Board Member", image: "/images/Eric.png" },
  { name: "Prof. Rudolph Steiner", title: "Board Member", image: "/images/Steiner.png" },
  { name: "Mary Hulede", title: "Member", image: "/images/Mary.png" },
  { name: "John Hulede Jnr.", title: "Member", image: "/images/John.png" },
  { name: "Mauduana A. Menyah", title: "General Secretary", image: "/images/Mauduana.jpg" },
  { name: "Hulede Family", title: "Mr. Hulede with family", image: "/images/WithFam.png" },
];

export default function Management() {
  return (
    <PageShell>
      <header className="app-hero">
        <div className="app-hero-bg" style={{ backgroundImage: `url(${heroPhoto})` }} />
        <div className="app-hero-shade" />
        <div className="portal-container app-hero-grid">
          <div>
            <p className="crumbs crumbs-light"><Link to="/">Home</Link><span>/</span>Management</p>
            <p className="gsa-eyebrow">Leadership</p>
            <h1>Management</h1>
            <p className="page-lede">
              The people who carry the Foundation day to day: the founder who set the scholarship in motion, and the board and officers around him.
            </p>
            <div className="gsa-actions">
              <a className="gsa-btn primary" href="#founder">Founder</a>
              <a className="gsa-btn ghost" href="#board">Board</a>
            </div>
          </div>
          <aside className="hero-glass">
            <strong>Mr. John Hulede</strong>
            <span>CEO and Founder</span>
          </aside>
        </div>
      </header>

      <section className="portal-section" id="founder">
        <div className="portal-container leader-grid">
          <div className="leader-photo" data-animate>
            <img src={ceo.image} alt={ceo.name} />
          </div>
          <div className="leader-copy" data-animate>
            <p className="leader-role">{ceo.title}</p>
            <h2>{ceo.name}</h2>
            <div className="section-rule" />
            <p>{ceo.description}</p>
            <ul className="exp-list">
              {ceo.experience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="portal-section alt" id="board">
        <div className="portal-container">
          <div className="section-head" data-animate>
            <p className="section-label">Board and officers</p>
            <h2 className="section-title">Oversight from the family and the people who serve with them.</h2>
            <div className="section-rule" />
            <p className="section-lede">
              Board members, family, and the General Secretary who also edits the Foundation’s stories.
            </p>
          </div>
          <div className="board-grid">
            {board.map((member) => (
              <article className="board-card" key={member.name} data-animate>
                <img src={member.image} alt={member.name} />
                <div>
                  <h3>{member.name}</h3>
                  <p>{member.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
