import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, Tag } from "lucide-react";
import PageShell from "../components/PageShell";
import { EDITOR, STORIES, NEWS } from "../data/editor";

export default function Story({ news = false }) {
  const { slug } = useParams();
  const story = (news ? NEWS : STORIES).find((s) => s.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!story) return <Navigate to={news ? "/" : "/editor"} replace />;

  const more = STORIES.filter((s) => s.slug !== slug).slice(0, 3);
  const moreHeading = news ? "Stories From Our Scholars" : "More Stories";

  return (
    <PageShell>
      <header className="story-hero">
        <div className="story-hero-bg" style={{ backgroundImage: `url(${story.heroImage || story.cover})`, backgroundPosition: story.focus || "center 30%" }} />
        <div className="story-hero-shade" />
        <div className="portal-container story-hero-inner">
          <p className="crumbs crumbs-light">
            <Link to="/">Home</Link><span>/</span>{news ? <>News</> : <><Link to="/editor">Editor's Corner</Link><span>/</span>Story</>}
          </p>
          <span className="story-tag"><Tag size={14} /> {story.tag}</span>
          <h1>{story.title}</h1>
          <p className="story-byline">
            <strong>{story.name}</strong> · {story.role}
          </p>
        </div>
      </header>

      <section className="story-wrap">
        <div className="portal-container">
          <dl className="story-facts" data-animate>
            {story.facts.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>

          <article className="story-article">
            <p className="story-lede" data-animate>{story.lede}</p>

            {story.body.map((b, i) => {
              if (b.p) return <p key={i} data-animate>{b.p}</p>;
              if (b.quote) return <blockquote key={i} data-animate>{b.quote}</blockquote>;
              const img = story.images[b.img];
              return (
                <figure key={i} data-animate>
                  <img src={img.src} alt={img.alt} loading="lazy" />
                  {b.caption && <figcaption>{b.caption}</figcaption>}
                </figure>
              );
            })}

            {story.gallery.length > 0 && (
              <div className={`story-gallery${story.gallery.length === 4 ? " four" : ""}`} data-animate>
                {story.gallery.map((n) => (
                  <img key={n} src={story.images[n].src} alt={story.images[n].alt} loading="lazy" />
                ))}
              </div>
            )}

            <div className="story-cta" data-animate>
              <div>
                <h3>See the original post</h3>
                <p>Read the full story, view more photos and join the conversation on Facebook.</p>
              </div>
              <a className="gsa-btn primary" href={story.href} target="_blank" rel="noopener noreferrer">
                View on Facebook <ExternalLink size={16} style={{ marginLeft: 8 }} />
              </a>
            </div>

            {!news && <p className="story-sign">Words from the desk of {EDITOR.name}, {EDITOR.title}.</p>}
          </article>
        </div>
      </section>

      <section className="portal-section alt">
        <div className="portal-container">
          <div className="story-more-head">
            <h2 className="section-title">{moreHeading}</h2>
            <Link to="/editor#newsletters" className="nl-more">All stories <ArrowRight size={14} /></Link>
          </div>
          <div className="nl-grid">
            {more.map((n) => (
              <Link className="nl-card" key={n.slug} to={`/editor/${n.slug}`}>
                <img src={n.cover} alt="" />
                <div className="nl-card-body">
                  <h3>{n.title}</h3>
                  <p className="nl-date"><Tag size={13} /> {n.tag}</p>
                  <span className="nl-more">Read Story <ArrowRight size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: 32 }}>
            <Link to={news ? "/" : "/editor"} className="nl-more"><ArrowLeft size={14} /> {news ? "Back to Home" : "Back to Editor's Corner"}</Link>
          </p>
        </div>
      </section>
    </PageShell>
  );
}
