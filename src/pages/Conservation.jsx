import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import InteractiveGlobe from '../components/InteractiveGlobe';
import { SPECIES_DATA } from '../data/speciesData';
import './Conservation.css';

// ── IUCN SPECIES BARS ─────────────────────────────────────────────────────
const iucnCounts = SPECIES_DATA.reduce((acc, s) => {
  acc[s.iucn] = (acc[s.iucn] || 0) + 1;
  return acc;
}, {});

const IUCN_CATEGORIES = [
  { code: 'EW', label: 'Extinct in Wild',        color: '#5C2D91', count: iucnCounts['EW'] || 0 },
  { code: 'CR', label: 'Critically Endangered',  color: '#D7191C', count: iucnCounts['CR'] || 0 },
  { code: 'EN', label: 'Endangered',             color: '#F17C20', count: iucnCounts['EN'] || 0 },
  { code: 'VU', label: 'Vulnerable',             color: '#FECC02', count: iucnCounts['VU'] || 0 },
];

function IUCNBars() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);
  const maxCount = Math.max(...IUCN_CATEGORIES.map((c) => c.count));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="cn-iucn" ref={ref}>
      {IUCN_CATEGORIES.map((cat) => (
        <div key={cat.code} className="cn-iucn-row">
          <div className="cn-iucn-meta">
            <span className="cn-iucn-code" style={{ color: cat.color }}>{cat.code}</span>
            <span className="cn-iucn-label">{cat.label}</span>
          </div>
          <div className="cn-iucn-track">
            <div
              className="cn-iucn-bar"
              style={{
                background: cat.color,
                width: animated ? `${(cat.count / maxCount) * 100}%` : '0%',
                boxShadow: `0 0 12px ${cat.color}66`,
              }}
            />
          </div>
          <span className="cn-iucn-count">{cat.count}</span>
        </div>
      ))}
    </div>
  );
}

// ── SLIDE GALLERY ─────────────────────────────────────────────────────────
function SlideGallery() {
  const [randomItems, setRandomItems] = useState([]);
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    // Pick 10 random items from SPECIES_DATA
    const shuffled = [...SPECIES_DATA].sort(() => 0.5 - Math.random());
    setRandomItems(shuffled.slice(0, 10));
  }, []);

  const go = (idx) => {
    if (randomItems.length === 0) return;
    clearTimeout(timerRef.current);
    setCurrent((idx + randomItems.length) % randomItems.length);
  };

  useEffect(() => {
    if (randomItems.length === 0) return;
    timerRef.current = setTimeout(() => {
      setCurrent((p) => (p + 1) % randomItems.length);
    }, 4000);
    return () => clearTimeout(timerRef.current);
  }, [current, randomItems]);

  if (randomItems.length === 0) {
    return <div className="cn-gallery-loading">Loading featured species...</div>;
  }

  return (
    <div className="cn-gallery">
      <div className="cn-gallery-stage">
        {randomItems.map((item, i) => (
          <div
            key={i}
            className={`cn-gallery-slide${i === current ? ' cn-slide-active' : ''}`}
          >
            {item.image === 'preparing' ? (
              <div className="cn-gallery-placeholder">
                <div className="cn-gallery-placeholder-text">{item.name}</div>
                <div className="cn-gallery-placeholder-sub">Photo Preparing</div>
              </div>
            ) : (
              <img src={item.image} alt={item.name} />
            )}
            <div className="cn-gallery-caption">
              <span className="cn-gallery-name">{item.name}</span>
              <span className="cn-gallery-sci">{item.scientific}</span>
            </div>
          </div>
        ))}
        <button className="cn-gallery-btn cn-btn-prev" onClick={() => go(current - 1)}>‹</button>
        <button className="cn-gallery-btn cn-btn-next" onClick={() => go(current + 1)}>›</button>
      </div>
      <div className="cn-gallery-dots">
        {randomItems.map((_, i) => (
          <button
            key={i}
            className={`cn-dot${i === current ? ' cn-dot-active' : ''}`}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </div>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────
const PARTNERS = [
  { name: 'KAIST', logo: '/kaist.png' },
  { name: 'KSA',   logo: '/ksa.png'   },
  { name: 'KAIST', logo: '/kaist.png' },
  { name: 'KSA',   logo: '/ksa.png'   },
  { name: 'KAIST', logo: '/kaist.png' },
  { name: 'KSA',   logo: '/ksa.png'   },
  { name: 'KAIST', logo: '/kaist.png' },
  { name: 'KSA',   logo: '/ksa.png'   },
];

const Conservation = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="cn-page">

      {/* ── HERO ── */}
      <section className="cn-hero section">
        {/* Animated title */}
        <div className="cn-hero-title-wrap">
          <h1 className={`cn-hero-title text-gradient${visible ? ' cn-hero-visible' : ''}`}>
            Conservation
          </h1>
        </div>

        {/* Stat + globe row */}
        <div className="cn-hero-body">
          {/* Left: stat + description */}
          <div className="cn-hero-left">
            <div className="cn-hero-stat">
              <span className="cn-stat-number">1M+</span>
              <span className="cn-stat-unit">species</span>
            </div>
            <p className="cn-hero-stat-label">are endangered worldwide</p>
            <p className="cn-hero-desc">
              Biodiversity loss is accelerating at an unprecedented rate. Over one million animal
              and plant species now face extinction — many within decades. Asperitas works to
              reverse this trajectory through conservation-oriented breeding, responsible
              propagation, and biotechnology research.
            </p>
            <div style={{ marginTop: '1rem', display: 'flex' }}>
              <Link to="/conservation/farms" className="cn-more-btn">
                Explore Farms <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right: Interactive Globe */}
          <div className="cn-hero-right">
            <InteractiveGlobe />
          </div>
        </div>
      </section>

      {/* ── SPECIES LIST ── */}
      <section className="section cn-species-section">
        <div className="container">
          <div className="cn-species-header">
            <div>
              <h2 className="cn-section-heading">Species by IUCN Status</h2>
              <p className="cn-species-sub">Species under our active conservation program</p>
            </div>
          </div>

          <IUCNBars />

          <div className="cn-restoration-row">
            <div className="cn-restoration-text">
              <p>
                Asperitas currently maintains active conservation breeding programs for over{' '}
                <strong style={{ color: 'var(--accent-green)' }}>{SPECIES_DATA.length} species</strong> across
                IUCN threat categories, with dedicated husbandry protocols, genetic tracking,
                and international CITES compliance across 18+ partner farms worldwide.
              </p>
            </div>
            <Link to="/species-list" className="cn-more-btn">
              More <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SLIDE GALLERY ── */}
      <section className="section cn-gallery-section">
        <div className="container">
          <h2 className="cn-section-heading" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            Featured Species
          </h2>
          <SlideGallery />
        </div>
      </section>

      {/* ── OUR PARTNERS ── */}
      <section className="cn-partners-section">
        <div className="container">
          <p className="cn-partners-label">Our Partners</p>
        </div>
        <div className="cn-marquee-wrap">
          <div className="cn-marquee-track">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <img key={i} src={p.logo} alt={p.name} className="cn-partner-logo" />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Conservation;
