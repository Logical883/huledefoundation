import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import { APPLY_URL, CHECKIN_URL, REPORT_URL } from "../data/site";
import images from "../data/images";

const slides = [
  {
    kind: "Upcoming Event",
    title: "KNUST Scholars Event",
    text: "30 May 2026, 9:00 AM prompt, at Allotey Auditorium, College of Science, KNUST. Bring your HFKNUST2026 unique ID and student ID, collect your HF T-shirt, and be present for official photographs.",
    image: images.y2023,
    primary: { label: "Event Check-in", href: CHECKIN_URL },
    secondary: { label: "Application Info", to: "/application" },
  },
  {
    kind: "Past Event",
    title: "2025 Meet & Greet",
    text: "Scholars gathered to mark another year of awards, mentorship, and community service. Browse the galleries from 2022 through the 2025 graduands.",
    image: images.y2022,
    primary: { label: "Open Gallery", to: "/gallery" },
    secondary: { label: "About Us", to: "/about" },
  },
  {
    kind: "News",
    title: "1,474 scholarships, and the work continues",
    text: "From 12 awards in 2021 to 423 in 2026, the Foundation keeps opening KNUST to brilliant but needy students — with 67 laptops given alongside the fees support.",
    image: images.hero,
    primary: { label: "Apply Now", href: APPLY_URL },
    secondary: { label: "See the numbers", to: "/about" },
  },
];

const notices = [
  {
    kind: "upcoming",
    label: "Upcoming",
    date: "30 May 2026",
    title: "Hulede Foundation KNUST Scholars Event",
    text: "Attendance is required. Missing the event leads to automatic forfeiture of the 2026 scholarship. Sign in, collect your T-shirt, and stay for official photographs.",
    href: CHECKIN_URL,
    image: images.scholarship,
    cta: "Register for check-in",
  },
  {
    kind: "news",
    label: "News",
    date: "Open",
    title: "Community service reports are due",
    text: "Scholars complete at least 40 hours of annual community service, in the official T-shirt, and submit photos, video, and a written report.",
    href: REPORT_URL,
    image: images.community,
    cta: "Submit report",
  },
  {
    kind: "news",
    label: "News",
    date: "Kumasi",
    title: "Mechanized borehole for New Amakom schools",
    text: "The Foundation donated a mechanized borehole water system so pupils and teachers at the New Amakom M/A cluster have drinking water for teaching and learning.",
    href: "https://broadcastergh.com/afa-group-donates-mechanized-borehole-to-new-amakom-m-a-cluster-of-schools/",
    image: images.laptops,
    cta: "Read the report",
  },
  {
    kind: "past",
    label: "Past Event",
    date: "18 May 2025",
    title: "2025 scholarship programme gallery",
    text: "Photographs from the 2025 Hulede Foundation Scholarship programme, including the scholars who gathered that year.",
    href: "https://huledefoundation.pixieset.com/2025huledescholarshipprogram/",
    image: images.y2025,
    cta: "View album",
  },
  {
    kind: "news",
    label: "News",
    date: "KNUST",
    title: "Support for 250 students to clear fees",
    text: "Financial support helped 250 KNUST students settle outstanding fees so they could stay in school without a break in their studies.",
    href: "https://www.graphic.com.gh/news/education/knust-hulede-foundation-supports-250-needy-students-to-clear-outstanding-fees.html",
    image: images.hero,
    cta: "Read the story",
  },
  {
    kind: "past",
    label: "Past Event",
    date: "November 2025",
    title: "Graduands gallery — Hulede scholars",
    text: "A record of Hulede scholars who graduated, and of the years of support that carried them to that day.",
    href: "https://huledefoundation.pixieset.com/guaduationgalleryhuledescholars/",
    image: images.graduate,
    cta: "View album",
  },
];

const routes = [
  { kicker: "Applicants", title: "I want to apply", text: "Read who the scholarship is for, what to bring, and how the 2026 scholars event works.", to: "/application", cta: "Application Info" },
  { kicker: "Scholars", title: "I need to report service", text: "Community service of at least 40 hours is part of staying on the scholarship.", href: REPORT_URL, cta: "Submit report" },
  { kicker: "Stories", title: "I want to see the work", text: "Scholarship days, graduands, laptops, and community service albums from 2022 onward.", to: "/gallery", cta: "Open Gallery" },
  { kicker: "Questions", title: "I need to reach you", text: "Write from Kumasi, the United States, or anywhere else. We reply as soon as we can.", to: "/contact", cta: "Contact Us" },
];

const pathways = [
  { title: "KNUST Scholarships", text: "Fees support for brilliant but needy Ghanaian students, concentrated at KNUST, growing from 12 awards in 2021 to 423 in 2026." },
  { title: "Laptop Support", text: "67 laptops issued to date so scholars can study, research, and complete their work with a computer of their own." },
  { title: "Community Service", text: "Every scholar gives at least 40 hours a year — tutoring, computer lessons, mobility support, and other work in their communities." },
  { title: "Mentorship & Give-back", text: "Scholars are asked to carry the same opportunity forward: teach, volunteer, and document the difference they make." },
];

const steps = [
  { title: "Read the requirements", text: "Confirm you are a brilliant but needy student, primarily seeking support at KNUST, and note the documents you will need." },
  { title: "Submit the form", text: "Use the official Hulede application form. Do not pay an agent or a third party to submit on your behalf." },
  { title: "Keep your unique ID", text: "If you are awarded, keep your HFKNUST unique ID ready and attend the scholars event with your student ID." },
  { title: "Serve and report", text: "Complete at least 40 hours of community service in the HF T-shirt and submit your evidence for renewal." },
];

const faqs = [
  { q: "Where do I apply?", a: "Use the Apply Now button. It opens the official Hulede Foundation application form. That is the only application channel on this site." },
  { q: "Who is the scholarship for?", a: "Brilliant but needy Ghanaian students, primarily at KNUST. The Foundation was set up to create opportunities for people who are academically strong and financially disadvantaged." },
  { q: "What happens at the scholars event?", a: "The 2026 gathering is on 30 May at Allotey Auditorium, College of Science, KNUST, at 9:00 AM. Bring your unique ID and student ID, collect your T-shirt, sign in, and join the official photographs. Missing it forfeits the 2026 award." },
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
          <div className="trust-item"><strong>1,474</strong><span>KNUST scholarships awarded, 2021–2026</span></div>
          <div className="trust-item"><strong>67</strong><span>Laptops issued to date</span></div>
          <div className="trust-item"><strong>40 hrs</strong><span>Minimum community service each year</span></div>
        </div>
      </section>

      <section className="portal-section" id="notices">
        <div className="portal-container">
          <div className="section-head" data-animate>
            <p className="section-label">Latest notices</p>
            <h2 className="section-title">Upcoming events, past gatherings, and news.</h2>
            <div className="section-rule" />
            <p className="section-lede">
              The same updates scholars ask about first: the next event date, service reports, and the stories already on record.
            </p>
          </div>
          <div className="notice-grid">
            {notices.map((item) => (
              <a className="notice-card" key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" data-animate>
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
              </a>
            ))}
          </div>
          <div className="portal-actions" style={{ marginTop: 28 }}>
            <a
              className="btn btn-outline"
              href="https://drive.google.com/drive/folders/1PBSNs1xkpw-8q_5Qj_bQ9vdLde8__tVQ?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scholar stories archive
            </a>
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
            <h3>Apply only through this site.</h3>
            <p className="section-body">
              The Apply Now button opens the Hulede Foundation form. Ignore anyone who asks you to pay for a guaranteed award or to submit through a private agent.
            </p>
            <div className="portal-actions" style={{ marginTop: 20 }}>
              <a className="btn btn-primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer">Apply Now</a>
            </div>
          </div>
          <div className="checklist-card" data-animate>
            <p className="section-label">Before the scholars event</p>
            <h3>Keep these with you.</h3>
            <ul className="checklist">
              <li>Your HFKNUST unique ID, written down and easy to find</li>
              <li>Your KNUST student ID card for check-in</li>
              <li>Time to collect your HF T-shirt and sign the register</li>
              <li>Presence in the official photographs taken that day</li>
              <li>For renewal: 40 hours of service, photos, video, and a report</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="portal-section alt">
        <div className="portal-container">
          <div className="section-head center" data-animate>
            <p className="section-label">Quick answers</p>
            <h2 className="section-title">Before you apply or travel to the event.</h2>
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
            <h2>Use the official form, then keep your details close.</h2>
            <p>
              Start with the Hulede application, read the event rules for 30 May 2026, and write to us if something on the form is unclear.
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
