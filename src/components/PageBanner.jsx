import { Link } from "react-router-dom";

export default function PageBanner({ eyebrow, title, lede }) {
  return (
    <header className="page-banner">
      <div className="portal-container">
        <p className="crumbs">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          {title}
        </p>
        <p className="section-label">{eyebrow}</p>
        <h1 className="section-title">{title}</h1>
        {lede && <p className="page-lede">{lede}</p>}
      </div>
    </header>
  );
}
