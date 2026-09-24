import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";

const albums = [
  { title: "2025 Hulede Foundation Scholarship Gallery", date: "18 May 2025", image: "/images/2025.JPG", href: "https://huledefoundation.pixieset.com/2025huledescholarshipprogram/", wide: true },
  { title: "2025 Graduands — Hulede Scholars", date: "November 2025", image: "/images/Graduate.jpg", href: "https://huledefoundation.pixieset.com/guaduationgalleryhuledescholars/" },
  { title: "2024 Scholarship Gallery", date: "6 June 2024", image: "/images/2024.jpg", href: "https://huledefoundation.pixieset.com/2024huledescholarshipfoundationgallery/" },
  { title: "2023 Scholarship Gallery", date: "10 June 2023", image: "/images/2023.jpg", href: "https://huledefoundation.pixieset.com/2023huledefoundationscholarshipgallery/" },
  { title: "2022 Scholarship Gallery", date: "2022", image: "/images/2022.jpg", href: "https://huledefoundation.pixieset.com/" },
  { title: "Community Service Gallery", date: "Scholars in the field", image: "/images/COM_1.jpg", href: "https://huledefoundation.pixieset.com/huledefoundationcommunityservicegallery/", wide: true },
  { title: "Laptop Recipients Gallery", date: "Scholarship laptops", image: "/images/LAP_1.jpg", href: "https://huledefoundation.pixieset.com/huledefoundationscholarhiplaptoprecipientsgallery/", wide: true },
];

export default function Gallery() {
  return (
    <PageShell>
      <header className="gallery-hero">
        <div className="gallery-hero-bg" style={{ backgroundImage: "url(/images/2024.jpg)" }} />
        <div className="gallery-hero-shade" />
        <div className="portal-container gallery-hero-grid">
          <div>
            <p className="crumbs crumbs-light"><Link to="/">Home</Link><span>/</span>Gallery</p>
            <p className="gsa-eyebrow">Albums</p>
            <h1>Gallery</h1>
            <p className="page-lede">Past scholarship days, graduands, community service, and laptop presentations. Each card opens the full Pixieset album.</p>
          </div>
          <aside className="hero-glass">
            <strong>2022 – 2025</strong>
            <span>Scholarship days, graduands, service, and laptops</span>
          </aside>
        </div>
      </header>

      <section className="portal-section">
        <div className="portal-container">
          <div className="album-grid">
            {albums.map((album) => (
              <a
                className={`album-card${album.wide ? " wide" : ""}`}
                key={album.title}
                href={album.href}
                target="_blank"
                rel="noopener noreferrer"
                data-animate
              >
                <img src={album.image} alt="" />
                <div className="album-caption">
                  <div className="album-caption-row">
                    <div>
                      <h3>{album.title}</h3>
                      {album.date && <p className="album-date">{album.date}</p>}
                    </div>
                    <span className="album-arrow" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="9 7 17 7 17 15" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
