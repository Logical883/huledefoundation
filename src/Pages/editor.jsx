import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Twitter, Tag, ArrowRight } from "lucide-react";
import PageShell from "../components/PageShell";
import { EDITOR, STORIES, MORE_STORIES_URL } from "../data/editor";

const socialIcons = [
  { key: "facebook", label: "Facebook", Icon: Facebook },
  { key: "instagram", label: "Instagram", Icon: Instagram },
  { key: "x", label: "X", Icon: Twitter },
  { key: "linkedin", label: "LinkedIn", Icon: Linkedin },
  { key: "email", label: "Email", Icon: Mail },
];

export default function Editor() {
  const [featured, ...rest] = STORIES;
  const side = rest.slice(0, 3);
  const grid = rest.slice(3);

  return (
    <PageShell>
      <header className="gallery-hero">
        <div className="gallery-hero-bg" style={{ backgroundImage: "url(/images/stories/editor-hero.jpg)" }} />
        <div className="gallery-hero-shade" />
        <div className="portal-container gallery-hero-grid">
          <div>
            <p className="crumbs crumbs-light"><Link to="/">Home</Link><span>/</span>Editor's Corner</p>
            <p className="gsa-eyebrow">Newsletters</p>
            <h1>Editor's Corner</h1>
            <p className="page-lede">Stories, updates and newsletters from the Hulede Foundation, curated by our Editor in Chief.</p>
            <div className="gsa-actions">
              <a className="gsa-btn primary" href="#editor">Meet the Editor</a>
              <a className="gsa-btn ghost" href="#newsletters">Read Stories</a>
            </div>
          </div>
        </div>
      </header>

      <section className="portal-section" id="editor">
        <div className="portal-container leader-grid">
          <div className="leader-photo" data-animate>
            <img src={EDITOR.image} alt={EDITOR.name} />
          </div>
          <div className="leader-copy" data-animate>
            <p className="leader-role">{EDITOR.title}</p>
            <h2>{EDITOR.name}</h2>
            <div className="section-rule" />
            {EDITOR.bio.map((p) => <p key={p}>{p}</p>)}
            <ul className="editor-socials" aria-label="Social links">
              {socialIcons.map(({ key, label, Icon }) => {
                const v = EDITOR.socials[key];
                if (!v) return null;
                const href = key === "email" ? `mailto:${v}` : v;
                return (
                  <li key={key}>
                    <a href={href} target={key === "email" ? undefined : "_blank"} rel="noopener noreferrer" aria-label={label}>
                      <Icon size={18} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="portal-section alt" id="newsletters">
        <div className="portal-container">
          <div className="section-head center">
            <p className="section-label">From the Editor</p>
            <h2 className="section-title">Scholar Stories</h2>
            <div className="section-rule" />
            <p className="section-lede">Real service, told by the scholars who lived it. Open a story to read it in full.</p>
          </div>

          {featured && (
            <div className="nl-top">
              <Link className="nl-feature" to={`/editor/${featured.slug}`} data-animate>
                <img src={featured.cover} alt="" />
                <div className="nl-feature-body">
                  <h3>{featured.title}</h3>
                  <p className="nl-date"><Tag size={14} /> {featured.tag} · {featured.name}</p>
                  {featured.summary && <p className="nl-summary">{featured.summary}</p>}
                </div>
              </Link>
              <div className="nl-side">
                {side.map((n) => (
                  <Link className="nl-row" key={n.slug} to={`/editor/${n.slug}`} data-animate>
                    <img src={n.cover} alt="" />
                    <div>
                      <h3>{n.title}</h3>
                      <p className="nl-date"><Tag size={13} /> {n.tag}</p>
                      <span className="nl-more">Read More <ArrowRight size={14} /></span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {grid.length > 0 && (
            <>
              <h3 className="nl-subhead">More Stories</h3>
              <div className="nl-grid">
                {grid.map((n) => (
                  <Link className="nl-card" key={n.slug} to={`/editor/${n.slug}`} data-animate>
                    <img src={n.cover} alt="" />
                    <div className="nl-card-body">
                      <h3>{n.title}</h3>
                      <p className="nl-date"><Tag size={13} /> {n.tag}</p>
                      <span className="nl-more">Read More <ArrowRight size={14} /></span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}

          <div className="nl-more-cta" data-animate>
            <p>Want to see more stories? Browse the full collection of scholar stories in our shared folder.</p>
            <a className="gsa-btn dark" href={MORE_STORIES_URL} target="_blank" rel="noopener noreferrer">
              See More Stories <ArrowRight size={16} style={{ marginLeft: 8 }} />
            </a>
          </div>
        </div>
      </section>

      <section className="portal-section">
        <div className="portal-container section-head center">
          <h2 className="section-title">Have a story to share?</h2>
          <div className="section-rule" />
          <p className="section-lede">Scholars, alumni and supporters are welcome to send stories, photos and news for upcoming editions.</p>
          <div className="gsa-actions">
            <Link className="gsa-btn dark" to="/contact">Contact the Editor</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
