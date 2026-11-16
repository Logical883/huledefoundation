import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import { APPLY_URL, APPLICATION, REPORT_URL } from "../data/site";
import { STORIES, NEWS } from "../data/editor";
import images from "../data/images";

const slides = [
  {
    kind: "Applications",
    title: "2026/2027 Scholarship Applications",
    text: `Applications open on ${APPLICATION.opens} and close on ${APPLICATION.closes}. A one-year scholarship, in partnership with KNUST, for brilliant but needy students.`,
    image: images.y2023,
    primary: { label: "Application Info", to: "/application" },
    secondary: { label: "Apply Now", href: APPLY_URL },
  },
  {
    kind: "Stories",
    title: "Stories from our scholars",
    text: "Read how Hulede scholars teach, research and serve their communities, in their own words and photos, from the Editor's Corner.",
    image: images.community,
    primary: { label: "Editor's Corner", to: "/editor" },
    secondary: { label: "Open Gallery", to: "/gallery" },
  },
  {
    kind: "News",
    title: "1,447 scholarships, and the work continues",
    text: "From 12 awards in 2021 to 396 in 2026, the Foundation keeps opening KNUST to brilliant but needy students, with 61 laptops given alongside the fees support.",
    image: images.hero,
    primary: { label: "Apply Now", href: APPLY_URL },
    secondary: { label: "See the numbers", to: "/about" },
  },
];

const notices = STORIES.slice(0, 4).map((st) => ({
  kind: "news",
  label: "Scholar Story",
  date: st.name,
  title: st.title,
  text: st.summary,
  to: `/editor/${st.slug}`,
  image: st.cover,
  cta: "Read the story",
}));

const routes = [
  { kicker: "Applicants", title: "I want to apply", text: "Read who can apply, what to submit, and the 2026/2027 application dates.", to: "/application", cta: "Application Info" },
  { kicker: "Scholars", title: "I need to report service", text: "Scholars complete at least 40 hours of community service (80 for final-year scholars).", href: REPORT_URL, cta: "Submit report" },
  { kicker: "Stories", title: "I want to read the stories", text: "Scholars on community service, research and mentorship, told in the Editor's Corner.", to: "/editor", cta: "Editor's Corner" },
  { kicker: "Questions", title: "I need to reach you", text: "Write from Kumasi, the United States, or anywhere else. We reply as soon as we can.", to: "/contact", cta: "Contact Us" },
];

const pathways = [
  { title: "KNUST Scholarships", text: "Fees support for brilliant but needy Ghanaian students, concentrated at KNUST, growing from 12 awards in 2021 to 396 in 2026." },
  { title: "Laptop Support", text: "61 laptops issued to date — 7 in 2026, 27 in 2025, and 27 in 2024 — so scholars can study, research, and complete their work with a computer of their own." },
  { title: "Community Service", text: "Scholars give at least 40 hours a year, and final-year scholars 80 — tutoring, research support, outreach, and other work in their communities." },
  { title: "Mentorship & Give-back", text: "Scholars are asked to carry the same opportunity forward: teach, volunteer, and document the difference they make." },
];

const steps = [
  { title: "Check who can apply", text: "Fresh applicants need a CWA of 65 or higher (second year to final year). Former applicants need 40 service hours, or 80 for final-year scholars." },
  { title: "Prepare your documents", text: "An endorsed transcript, a one-page write-up on your financial need, at least one recommendation letter, and relevant awards and certificates." },
  { title: "Apply in the window", text: `Applications open on ${APPLICATION.opens} and close on ${APPLICATION.closes}. Follow the official guidelines carefully.` },
  { title: "Interview and award", text: "Only shortlisted applicants are invited for an interview. Scholars then serve their community and report on it." },
];

const faqs = [
  { q: "When can I apply?", a: `Applications for the ${APPLICATION.year} Academic Year open on ${APPLICATION.opens} and close on ${APPLICATION.closes}.` },
  { q: "Who is the scholarship for?", a: "Brilliant but needy students, supported through a one-year scholarship offered in partnership with KNUST." },
  { q: "What are the application requirements?", a: "An endorsed academic transcript, a one-page write-up on your financial need, at least one recommendation letter, and other relevant awards and certificates. Write-ups must be in Times New Roman, size 12, double-spaced." },
];

function ActionLink({ item, className, children }) {
  if (item.href) {
    return (
      <a className={className} href={item.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link className={className} to={item.to}>
      {children}
    </Link>
  );
}

export default function Home() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % slides.length), 7000);
    return () => clearInterval(id);
  }, []);

  const go = (dir) => setSlide((s) => (s + dir + slides.length) % slides.length);

  return (
    <PageShell>
      <section className="gsa-hero" aria-roledescription="carousel" aria-label="News and events">
        <div className="gsa-hero-slider" aria-hidden="true">
          {slides.map((item, i) => (
            <div
              key={item.title}
              className={`gsa-hero-slide${i === slide ? " is-active" : ""}`}
              style={{ backgroundImage: `url(${item.image})` }}
            />
          ))}
        </div>
        <div className="gsa-hero-overlay" />
        <div className="gsa-hero-inner">
          <div className="gsa-hero-copy">
            <span className="gsa-eyebrow">Hulede Foundation</span>
            {slides.map((item, i) => (
              <div className={`gsa-hero-content${i === slide ? " is-active" : ""}`} key={item.title}>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
                <div className="gsa-actions">
                  <ActionLink item={item.primary} className="gsa-btn primary">{item.primary.label}</ActionLink>
                  <ActionLink item={item.secondary} className="gsa-btn ghost">{item.secondary.label}</ActionLink>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="gsa-hero-controls" aria-label="Banner slider controls">
          <button className="gsa-hero-arrow" type="button" onClick={() => go(-1)} aria-label="Previous banner">‹</button>
          <div className="gsa-hero-dots">
            {slides.map((item, i) => (
              <button
                key={item.kind}
                type="button"
                className={`gsa-hero-dot${i === slide ? " is-active" : ""}`}
                aria-label={`Show ${item.kind}`}
                aria-current={i === slide}
                onClick={() => setSlide(i)}
              />
            ))}
          </div>
          <button className="gsa-hero-arrow" type="button" onClick={() => go(1)} aria-label="Next banner">›</button>
        </div>
      </section>

      <section className="trust-strip" aria-label="Foundation highlights">
        <div className="trust-grid portal-container">
          <div className="trust-item"><strong>2018</strong><span>Founded in memory of Mr. Patrick Hulede</span></div>
          <div className="trust-item"><strong>1,447</strong><span>KNUST scholarships awarded, 2021–2026</span></div>
          <div className="trust-item"><strong>61</strong><span>Laptops issued to date</span></div>
          <div className="trust-item"><strong>40–80 hrs</strong><span>Community service each year</span></div>
        </div>
      </section>

      <section className="portal-section news-section" id="news">
        <div className="portal-container">
          <div className="section-head" data-animate>
            <p className="section-label">Latest news</p>
            <h2 className="section-title">News from the Foundation.</h2>
            <div className="section-rule" />
          </div>
          <div className="news-list">
            {NEWS.map((n) => (
              <Link className="news-card" key={n.slug} to={`/news/${n.slug}`} data-animate>
                <img src={n.cover} alt="" style={{ objectPosition: n.focus }} />
                <div className="news-body">
                  <div className="notice-meta">
                    <span className="chip news">News</span>
                    <span className="notice-date">{n.date}</span>
                  </div>
                  <h3>{n.title}</h3>
                  <p>{n.summary}</p>
                  <span className="read-more">Read more</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="portal-section" id="notices">
        <div className="portal-container">
          <div className="section-head" data-animate>
            <p className="section-label">Scholar stories</p>
            <h2 className="section-title">Stories from our scholars.</h2>
            <div className="section-rule" />
            <p className="section-lede">
              How Hulede scholars serve their communities, told in the Editor's Corner.
            </p>
          </div>
          <div className="notice-grid four">
            {notices.map((item) => (
              <Link className="notice-card" key={item.title} to={item.to} data-animate>
                <img src={item.image} alt="" />
                <div className="notice-body">
                  <div className="notice-meta">
                    <span className={`chip ${item.kind}`}>{item.label}</span>
                    <span className="notice-date">{item.date}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="read-more">{item.cta}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="portal-actions" style={{ marginTop: 28, justifyContent: "center" }}>
            <Link className="btn btn-primary" to="/editor">Visit the Editor's Corner</Link>
          </div>
        </div>
      </section>

      <section className="portal-section alt">
        <div className="portal-container">
          <div className="section-head" data-animate>
            <p className="section-label">Find your route</p>
            <h2 className="section-title">Start with the page that matches what you need.</h2>
            <div className="section-rule" />
          </div>
          <div className="route-grid">
            {routes.map((item) => (
              <ActionLink item={item} className="route-card" key={item.title}>
                <span className="route-index">{item.kicker}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="read-more">{item.cta}</span>
              </ActionLink>
            ))}
          </div>
        </div>
      </section>

      <section className="portal-section">
        <div className="portal-container">
          <div className="section-head center" data-animate>
            <p className="section-label">How support is organised</p>
            <h2 className="section-title">Scholarships, tools, service, and mentorship.</h2>
            <div className="section-rule center" />
          </div>
          <div className="pathway-grid">
            {pathways.map((item) => (
              <article className="pathway-card" key={item.title} data-animate>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portal-section alt">
        <div className="portal-container feature-split">
          <div className="feature-photo" data-animate>
            <img src={images.hero} alt="Hulede Foundation scholars and community" />
          </div>
          <div className="feature-copy" data-animate>
            <p className="section-label">About the Foundation</p>
            <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
              Set up in a father’s name, carried by his sons.
            </h2>
            <div className="section-rule" />
            <p className="section-body">
              Since 2018, the Hulede Foundation has worked in the name of Mr. Patrick Hulede of blessed memory — founder and first head of the KNUST Printing Press — established by his sons, Patrick and John.
            </p>
            <p className="section-body">
              The scholarship supports brilliant but needy Ghanaian students, primarily at KNUST. Success is counted in people who stay in school, and in the service they give back.
            </p>
            <div className="portal-actions" style={{ marginTop: 22 }}>
              <Link className="btn btn-primary" to="/about">About Us</Link>
              <Link className="btn btn-outline" to="/management">Management</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="portal-section dark">
        <div className="portal-container">
          <div className="section-head center" data-animate>
            <p className="section-label">Application journey</p>
            <h2 className="section-title">Four steps from interest to renewal.</h2>
            <div className="section-rule center" />
          </div>
          <div className="steps">
            {steps.map((step, i) => (
              <article className="step" key={step.title} data-animate>
                <span>{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portal-section">
        <div className="portal-container prep-grid">
          <div className="safety-card" data-animate>
            <p className="section-label">Official channel</p>
            <h3>Apply only through official channels.</h3>
            <p className="section-body">
              For details, visit www.huledefoundation.org. Ignore anyone who asks you to pay for a guaranteed award or to submit through a private agent.
            </p>
            <div className="portal-actions" style={{ marginTop: 20 }}>
              <a className="btn btn-primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer">Apply Now</a>
            </div>
          </div>
          <div className="checklist-card" data-animate>
            <p className="section-label">Application requirements</p>
            <h3>Have these ready.</h3>
            <ul className="checklist">
              <li>Endorsed academic transcript</li>
              <li>One-page write-up: "Why Do You Think You Should Be Considered for This Scholarship?"</li>
              <li>At least one recommendation letter</li>
              <li>Other relevant awards and certificates</li>
              <li>Follow the Foundation on social media to be prioritised</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="portal-section alt">
        <div className="portal-container">
          <div className="section-head center" data-animate>
            <p className="section-label">Quick answers</p>
            <h2 className="section-title">Before you apply.</h2>
            <div className="section-rule center" />
          </div>
          <div className="faq-grid">
            {faqs.map((item) => (
              <article className="faq-card" key={item.q} data-animate>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
          <div className="portal-actions" style={{ justifyContent: "center", marginTop: 28 }}>
            <Link className="btn btn-outline" to="/application">Full application info</Link>
          </div>
        </div>
      </section>

      <section className="portal-section">
        <div className="portal-container">
          <div className="closing-cta" data-animate>
            <p className="section-label" style={{ color: "#e6cf7a" }}>Ready to apply?</p>
            <h2>Applications for 2026/2027 open soon.</h2>
            <p>
              Applications run from 25 December 2026 to 13 February 2027. Read the guidelines, prepare your documents, and write to us if anything is unclear.
            </p>
            <div className="portal-actions">
              <a className="btn btn-white" href={APPLY_URL} target="_blank" rel="noopener noreferrer">Apply Now</a>
              <Link className="btn btn-ghost" to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
