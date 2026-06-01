import { useState, useEffect } from "react";
import { Calendar, Globe, Award, FileText } from "lucide-react";
import "./News.css";

const PRESS_FEATURES = [
  { name: "동아사이언스", logo: "/dongascience.svg", label: "Media Feature" }
];

const ARTICLES = [
  {
    id: 1,
    category: "Research Updates",
    title: "Asperitas Prepares SEED 2026 Presentation",
    date: "June 15, 2026",
    timestamp: 20260615,
    excerpt: "Our research team is finalizing the data for our upcoming presentation at SEED 2026, focusing on circadian-gated control in synthetic biology and cellular lights.",
    icon: <Globe size={18} />,
    link: "#"
  },
  {
    id: 2,
    category: "Conferences",
    title: "Asperitas to Present VITRAYA™ at SynBioBeta 2026",
    date: "May 5, 2026",
    timestamp: 20260505,
    excerpt: "Join us at SynBioBeta 2026 in San Jose where our CEO will unveil the latest advancements in our autoluminescent plant platform, VITRAYA™, for urban lighting.",
    icon: <Award size={18} />,
    link: "#"
  },
  {
    id: 3,
    category: "DONGASCIENCE",
    title: "Asperitas Develops Autoluminescent using synthetic circuits",
    date: "June 20, 2026",
    timestamp: 20260620,
    excerpt: "In a world-first achievement, Asperitas has successfully developed proprietary autoluminescent plants, marking a new era in sustainable biological lighting platforms.",
    icon: <FileText size={18} />,
    link: "https://www.dongascience.com/ko/news/64950"
  },
  {
    id: 4,
    category: "Company Announcements",
    title: "Asperitas Inc. Incorporated as a Delaware C Corporation",
    date: "Apr. 15, 2026",
    timestamp: 20260415,
    excerpt: "We are proud to announce the official incorporation of Asperitas Inc. as a Delaware C Corporation, marking a major milestone in our global biotech commercialization.",
    icon: <Award size={18} />,
    link: "#"
  }
];

const News = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Sort by date (latest first)
  const sortedArticles = [...ARTICLES].sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div className="ne-page">
      
      {/* ── CENTRAL HERO HEADER ── */}
      <section className="ne-hero">
        <div className="ne-hero-bg" />
        <div className="container ne-hero-container">
          <div className="ne-hero-content">
            <h1 className={`ne-hero-title${visible ? ' ne-hero-visible' : ''}`}>
              News
            </h1>
            <p className={`ne-hero-sub${visible ? ' ne-hero-visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
              Press releases, media publications, conferences, and company breakthroughs.
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURES LOGO GRID ── */}
      <section className="section ne-features-section">
        <div className="container">
          <p className="ne-features-label">As Featured In</p>
          <div className="ne-features-grid">
            {PRESS_FEATURES.map((press, i) => (
              <div key={i} className="ne-feature-card">
                <div className="ne-feature-logo-wrap">
                  <img src={press.logo} alt={press.name} className="ne-feature-logo" />
                  <span className="ne-feature-name">{press.name}</span>
                </div>
                <span className="ne-feature-tag">{press.label}</span>
              </div>
            ))}
            {/* Removed placeholders */}
          </div>
        </div>
      </section>

      {/* ── ARTICLES LIST ── */}
      <section className="section ne-articles-section">
        <div className="container">
          <div className="ne-section-header">
            <h2 className="ne-section-title">Latest Updates</h2>
            <p className="ne-section-sub">Chronological feed of Asperitas milestones</p>
          </div>
          
          <div className="ne-articles-list">
            {sortedArticles.map((article) => (
              <article key={article.id} className="ne-article-card">
                <div className="ne-article-meta">
                  <div className="ne-article-category-wrap">
                    <span className="ne-article-icon">{article.icon}</span>
                    <span className="ne-article-category">{article.category}</span>
                  </div>
                  <div className="ne-article-date">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                </div>
                
                <h3 className="ne-article-title">{article.title}</h3>
                <p className="ne-article-excerpt">{article.excerpt}</p>
                
                <div className="ne-article-footer">
                  {article.link.startsWith("http") ? (
                    <a href={article.link} target="_blank" rel="noopener noreferrer" className="ne-article-btn">
                      Read External Article <span>↗</span>
                    </a>
                  ) : (
                    <button className="ne-article-btn" style={{ cursor: "default" }}>
                      Internal Document Only <span>•</span>
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default News;
