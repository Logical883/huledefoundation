import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import { APPLY_URL, APPLICATION, REPORT_URL } from "../data/site";
import images from "../data/images";

const requirements = [
  "Endorsed academic transcript",
  "A one-page write-up on your financial need, under the topic: \"Why Do You Think You Should Be Considered for This Scholarship?\"",
  "At least one recommendation letter",
  "Other relevant awards and certificates",
];

const important = [
  "Applicants who follow the Hulede Foundation on its social media platforms will be prioritised.",
  "All write-ups must be typed in Times New Roman, font size 12, and double-spaced.",
  "Only shortlisted applicants will be invited for an interview.",
];

const steps = [
  { title: "Confirm you fit", text: "Check the eligibility rules for fresh applicants or former applicants (scholars) below." },
  { title: "Prepare your documents", text: "Get your endorsed transcript, one-page write-up, recommendation letter and any awards or certificates ready." },
  { title: "Apply within the window", text: `Applications open on ${APPLICATION.opens} and close on ${APPLICATION.closes}.` },
  { title: "Follow the guidelines", text: "Read the official guidelines carefully and format your write-up exactly as required before you submit." },
  { title: "Attend the interview if shortlisted", text: "Only shortlisted applicants are invited for an interview." },
  { title: "Serve, then report", text: "Scholars complete their community service hours and submit photos, video and a written report." },
];

const statuses = ["Applied", "Shortlisted", "Interview", "Awarded", "Service report submitted"];

const faqs = [
  { q: "When can I apply?", a: `Applications for the ${APPLICATION.year} Academic Year open on ${APPLICATION.opens} and close on ${APPLICATION.closes}.` },
  { q: "Who can apply as a fresh applicant?", a: "Prospective regular students from second year to final year with a CWA of 65 or higher." },
  { q: "How many service hours do former applicants need?", a: "Final-year scholars must have completed a minimum of 80 hours of community service, with submissions. All other scholars must have completed a minimum of 40 hours, with submissions." },
  { q: "Does submitting an application guarantee an award?", a: "No. Applying is how you ask to be considered. Only shortlisted applicants are invited for an interview, and an award is a separate decision by the Foundation." },
  { q: "How should my write-up be formatted?", a: "Typed in Times New Roman, font size 12, double-spaced, and one page long." },
  { q: "Can someone else apply for me?", a: "Use the official channel yourself. Ignore requests for payment in exchange for a guaranteed place." },
];

export default function Application() {
  return (
    <PageShell>
      <header className="app-hero">
        <div className="app-hero-bg" style={{ backgroundImage: `url(${images.y2025})` }} />
        <div className="app-hero-shade" />
        <div className="portal-container app-hero-grid">
          <div>
            <p className="crumbs crumbs-light"><Link to="/">Home</Link><span>/</span>Application Info</p>
            <p className="gsa-eyebrow">{APPLICATION.year} Scholarship</p>
            <h1>Applications for {APPLICATION.year} are opening.</h1>
            <p className="page-lede">The Hulede Foundation, in partnership with KNUST, offers a one-year scholarship to brilliant but needy students. See who can apply, what to submit and when.</p>
            <div className="gsa-actions">
              <a className="gsa-btn primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer">Apply Now</a>
              <a className="gsa-btn ghost" href="#requirements">Requirements</a>
            </div>
          </div>
          <aside className="hero-glass">
            <strong>{APPLICATION.opensShort} – {APPLICATION.closesShort}</strong>
            <span>Application period · {APPLICATION.year} Academic Year</span>
          </aside>
        </div>
      </header>

      <section className="portal-section">
        <div className="portal-container feature-split">
          <div data-animate>
            <p className="section-label">Who it is for</p>
            <h2 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
              Brilliant but needy students, principally at KNUST.
            </h2>
            <div className="section-rule" />
            <p className="section-body">
              The Hulede Foundation, in partnership with the Kwame Nkrumah University of Science and Technology (KNUST), offers a one-year scholarship to brilliant but needy students to support them in pursuing their university education. Since 2021, 1,447 scholarships have been awarded and 61 laptops issued.
            </p>
            <p className="section-body">
              Applicants are advised to carefully read and follow the official application guidelines before submitting.
            </p>
            <div className="portal-actions" style={{ marginTop: 22 }}>
              <a className="btn btn-primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer">Apply Now</a>
              <Link className="btn btn-outline" to="/contact">Ask a question</Link>
            </div>
          </div>
          <div className="checklist-card" data-animate>
            <p className="section-label">Who can apply</p>
            <h3>Read this before you apply.</h3>
            <ul className="checklist">
              <li><span><strong>Fresh applicants:</strong> prospective regular students from second year to final year with a CWA of 65 or higher</span></li>
              <li><span><strong>Former applicants, final-year scholars:</strong> a minimum of 80 hours of community service, with submissions</span></li>
              <li><span><strong>Former applicants, all other scholars:</strong> a minimum of 40 hours of community service, with submissions</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="portal-section alt" id="requirements">
        <div className="portal-container prep-grid">
          <div className="checklist-card" data-animate>
            <p className="section-label">Application requirements</p>
            <h3>Provide the following.</h3>
            <ol className="checklist">
              {requirements.map((r) => <li key={r}>{r}</li>)}
            </ol>
          </div>
          <div className="safety-card" data-animate>
            <p className="section-label">Important information</p>
            <h3>Please note.</h3>
            <ul className="checklist">
              {important.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="portal-section">
        <div className="portal-container">
          <div className="section-head" data-animate>
            <p className="section-label">What support has included</p>
            <h2 className="section-title">Fees support, and laptops for a smaller group.</h2>
            <div className="section-rule" />
          </div>
          <div className="faq-grid">
            <article className="faq-card" data-animate>
              <h3>Scholarship awards</h3>
              <p>A one-year scholarship toward studies at KNUST. In one published case, 250 students were helped to clear outstanding fees so they could continue.</p>
            </article>
            <article className="faq-card" data-animate>
              <h3>Laptops</h3>
              <p>7 laptops in 2026, 27 in 2025, and 27 in 2024 — 61 in total. Laptop gifts are separate from the fee awards and are not promised to every scholar.</p>
            </article>
            <article className="faq-card" data-animate>
              <h3>A community of scholars</h3>
              <p>Meet-and-greet gatherings, a shared T-shirt, and an expectation that scholars teach, volunteer, and report what they did. <Link to="/editor">Read their stories.</Link></p>
            </article>
          </div>
        </div>
      </section>

      <section className="portal-section alt">
        <div className="portal-container">
          <div className="section-head" data-animate>
            <p className="section-label">The path</p>
            <h2 className="section-title">From application to service report.</h2>
            <div className="section-rule" />
          </div>
          <div className="process-list">
            {steps.map((step, i) => (
              <article className="process-item" key={step.title} data-animate>
                <b>{i + 1}</b>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portal-section">
        <div className="portal-container">
          <div className="section-head" data-animate>
            <p className="section-label">{APPLICATION.year} window</p>
            <h2 className="section-title">The dates applicants must not miss.</h2>
            <div className="section-rule" />
            <p className="section-lede">
              Opening date: {APPLICATION.opens}. Closing date: {APPLICATION.closes}.
            </p>
          </div>
          <div className="prep-grid">
            <div className="checklist-card" data-animate>
              <h3>Before you submit</h3>
              <ul className="checklist">
                <li>Your transcript is endorsed</li>
                <li>Your write-up is one page, Times New Roman, size 12, double-spaced</li>
                <li>You have at least one recommendation letter</li>
                <li>You have attached relevant awards and certificates</li>
                <li>You follow the Foundation on social media to be prioritised</li>
              </ul>
            </div>
            <div className="safety-card" data-animate>
              <p className="section-label">After you apply</p>
              <h3>A simple status path.</h3>
              <div className="status-row" style={{ margin: "16px 0" }}>
                {statuses.map((item) => (
                  <span className="status-pill" key={item}>{item}</span>
                ))}
              </div>
              <p className="section-body">
                Former applicants submit community service evidence on the designated report form. Renewal depends on that record.
              </p>
              <div className="portal-actions" style={{ marginTop: 18 }}>
                <a className="btn btn-primary" href={REPORT_URL} target="_blank" rel="noopener noreferrer">Submit service report</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portal-section alt">
        <div className="portal-container">
          <div className="section-head center" data-animate>
            <p className="section-label">Quick answers</p>
            <h2 className="section-title">Questions applicants actually ask.</h2>
            <div className="section-rule center" />
          </div>
          <div className="pathway-grid">
            {faqs.map((item) => (
              <article className="faq-card" key={item.q} data-animate>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portal-section">
        <div className="portal-container">
          <div className="closing-cta" data-animate>
            <p className="section-label" style={{ color: "#e6cf7a" }}>Start here</p>
            <h2>We encourage all eligible students to apply.</h2>
            <p>Read the guidelines, prepare your documents and apply between {APPLICATION.opensShort} and {APPLICATION.closesShort}. The contact page is for questions we haven't answered.</p>
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
