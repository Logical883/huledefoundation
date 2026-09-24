import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import { APPLY_URL, CHECKIN_URL, REPORT_URL } from "../data/site";
import images from "../data/images";

const steps = [
  { title: "Confirm you fit", text: "The scholarship is for brilliant but needy Ghanaian students, primarily at KNUST." },
  { title: "Open the official form", text: "Apply Now goes to the Hulede Foundation form. That is the application channel published on this website." },
  { title: "Submit your details", text: "Complete the form yourself. Do not hand the process, or any payment, to an unofficial agent." },
  { title: "Keep your unique ID", text: "Awarded scholars receive an HFKNUST ID. Keep it written down and available." },
  { title: "Attend the scholars event", text: "30 May 2026, 9:00 AM prompt, Allotey Auditorium, College of Science, KNUST. Bring your student ID." },
  { title: "Serve, then report", text: "Complete at least 40 hours of community service and submit photos, video, and a written report." },
  { title: "Stay eligible for renewal", text: "Missing the scholars event forfeits the 2026 award. Service evidence is part of continuing." },
];

const statuses = ["Applied", "Awarded", "Event check-in", "Service in progress", "Report submitted"];

const faqs = [
  { q: "Does submitting the form guarantee an award?", a: "No. The form is how you ask to be considered. An award is a separate decision by the Foundation." },
  { q: "Where is the 2026 scholars event?", a: "Allotey Auditorium, College of Science, KNUST, on 30 May 2026 at 9:00 AM prompt." },
  { q: "What if I miss the event?", a: "Failure to attend leads to automatic forfeiture of the Hulede Foundation 2026 scholarship." },
  { q: "What does community service require?", a: "At least 40 hours a year, in the official Hulede Foundation T-shirt, with photos, video, and a detailed report submitted on the service form." },
  { q: "Can someone else apply for me?", a: "Use the official form yourself. Ignore requests for payment in exchange for a guaranteed place." },
  { q: "Where do I check in?", a: "Scholars use the Hulede check-in page linked from this site, and sign in again in person at the event." },
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
            <p className="gsa-eyebrow">Applicants</p>
            <h1>Apply locally. Study with support.</h1>
            <p className="page-lede">Who the KNUST scholarship is for, what the 30 May 2026 scholars event requires, and how community service fits renewal.</p>
            <div className="gsa-actions">
              <a className="gsa-btn primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer">Apply Now</a>
              <a className="gsa-btn ghost" href={CHECKIN_URL} target="_blank" rel="noopener noreferrer">Event check-in</a>
            </div>
          </div>
          <aside className="hero-glass">
            <strong>30 May 2026</strong>
            <span>9:00 AM · Allotey Auditorium, College of Science, KNUST</span>
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
              The Hulede Foundation Scholarship creates room for Ghanaian students who are academically strong and financially disadvantaged. Since 2021 the awards have been concentrated at KNUST: 1,474 scholarships in total, and 67 laptops issued to date.
            </p>
            <p className="section-body">
              This page collects the rules already published to scholars. If a detail is not listed here, ask through the contact form rather than through an intermediary.
            </p>
            <div className="portal-actions" style={{ marginTop: 22 }}>
              <a className="btn btn-primary" href={APPLY_URL} target="_blank" rel="noopener noreferrer">Apply Now</a>
              <a className="btn btn-outline" href={CHECKIN_URL} target="_blank" rel="noopener noreferrer">Event check-in</a>
            </div>
          </div>
          <div className="checklist-card" data-animate>
            <p className="section-label">Eligibility, as published</p>
            <h3>Read this before you open the form.</h3>
            <ul className="checklist">
              <li>You are a brilliant but needy Ghanaian student</li>
              <li>Your studies are primarily at KNUST</li>
              <li>You can attend the scholars event if awarded</li>
              <li>You can complete 40 hours of annual community service</li>
              <li>You will document that service with photos, video, and a report</li>
              <li>You will wear the official HF T-shirt while serving</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="portal-section alt">
        <div className="portal-container">
          <div className="section-head" data-animate>
            <p className="section-label">What support has included</p>
            <h2 className="section-title">Fees support, and laptops for a smaller group.</h2>
            <div className="section-rule" />
          </div>
          <div className="faq-grid">
            <article className="faq-card" data-animate>
              <h3>Scholarship awards</h3>
              <p>Financial support toward studies at KNUST. In one published case, 250 students were helped to clear outstanding fees so they could continue.</p>
            </article>
            <article className="faq-card" data-animate>
              <h3>Laptops</h3>
              <p>67 laptops have been issued to date. Laptop gifts are separate from the fee awards and are not promised to every scholar.</p>
            </article>
            <article className="faq-card" data-animate>
              <h3>A community of scholars</h3>
              <p>Meet-and-greet gatherings, a shared T-shirt, and an expectation that scholars teach, volunteer, and report what they did.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="portal-section">
        <div className="portal-container">
          <div className="section-head" data-animate>
            <p className="section-label">The path</p>
            <h2 className="section-title">From the form to the service report.</h2>
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

      <section className="portal-section alt">
        <div className="portal-container">
          <div className="section-head" data-animate>
            <p className="section-label">2026 window</p>
            <h2 className="section-title">The date scholars must not miss.</h2>
            <div className="section-rule" />
            <p className="section-lede">
              Date: 30 May 2026. Time: 9:00 AM prompt. Venue: Allotey Auditorium, College of Science, KNUST.
            </p>
          </div>
          <div className="prep-grid">
            <div className="checklist-card" data-animate>
              <h3>On the day</h3>
              <ul className="checklist">
                <li>Know and carry your HFKNUST2026 unique ID</li>
                <li>Bring your student ID card for verification</li>
                <li>Collect your HF T-shirt and sign in</li>
                <li>Be present in the official photographs</li>
                <li>Arrive on time so check-in can finish cleanly</li>
              </ul>
            </div>
            <div className="safety-card" data-animate>
              <p className="section-label">After you are on the programme</p>
              <h3>A simple status path.</h3>
              <div className="status-row" style={{ margin: "16px 0" }}>
                {statuses.map((item) => (
                  <span className="status-pill" key={item}>{item}</span>
                ))}
              </div>
              <p className="section-body">
                Community service evidence goes to the designated report form. Renewal depends on that record, and on having attended the scholars event.
              </p>
              <div className="portal-actions" style={{ marginTop: 18 }}>
                <a className="btn btn-primary" href={REPORT_URL} target="_blank" rel="noopener noreferrer">Submit service report</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portal-section">
        <div className="portal-container prep-grid">
          <div className="checklist-card" data-animate>
            <p className="section-label">Before you apply</p>
            <h3>Have these ready.</h3>
            <ul className="checklist">
              <li>Your full name and a working email and phone number</li>
              <li>Your KNUST student details, if you already have them</li>
              <li>A clear note of why you need support</li>
              <li>Time to read the event rules before you submit</li>
            </ul>
          </div>
          <div className="safety-card" data-animate>
            <p className="section-label">Mistakes that cost the award</p>
            <h3>Avoid these.</h3>
            <ul className="checklist">
              <li>Paying someone who promises a guaranteed scholarship</li>
              <li>Skipping the 30 May 2026 event after you are awarded</li>
              <li>Forgetting your unique ID or student ID at check-in</li>
              <li>Serving without the HF T-shirt, or without a report</li>
              <li>Leaving the 40 hours unfinished before renewal</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="portal-section alt">
        <div className="portal-container">
          <div className="section-head center" data-animate>
            <p className="section-label">Quick answers</p>
            <h2 className="section-title">Questions scholars actually ask.</h2>
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
            <h2>Open the form, or write if you are stuck.</h2>
            <p>The application lives on the official form. The contact page is for questions the form does not answer.</p>
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
