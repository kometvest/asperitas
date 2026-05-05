import { Calendar } from 'lucide-react';
import './Home.css';

const News = () => {
  const newsItems = [
    {
      id: 1,
      category: 'Research Updates',
      title: 'Asperitas prepares SEED 2026 presentation',
      date: 'June 15, 2026',
      timestamp: 20260615,
      excerpt: 'Our research team is finalizing the data for our upcoming presentation at SEED 2026, focusing on circadian-gated control in synthetic biology.',
      link: '#'
    },
    {
      id: 2,
      category: 'Conferences',
      title: 'Asperitas to present VITRAYA™ at SynBioBeta 2026',
      date: 'May 5, 2026',
      timestamp: 20260505,
      excerpt: 'Join us at SynBioBeta 2026 where our CEO will unveil the latest advancements in our autoluminescent plant platform, VITRAYA™.',
      link: '#'
    },
    {
      id: 3,
      category: 'Scientific Achievement',
      title: 'Asperitas develops first Autoluminescent plant with proprietary technology',
      date: 'Apr. 20, 2024',
      timestamp: 20240420,
      excerpt: 'In a world-first achievement, Asperitas has successfully developed proprietary autoluminescent plants, marking a new era in sustainable biological lighting.',
      link: 'https://www.dongascience.com/ko/news/64950'
    },
    {
      id: 4,
      category: 'Company Announcements',
      title: 'Asperitas Inc. incorporated as a Delaware C Corporation',
      date: 'Apr. 15, 2026',
      timestamp: 20260415,
      excerpt: 'We are proud to announce the official incorporation of Asperitas Inc. as a Delaware C Corporation, marking a major milestone in our company\'s growth.',
      link: '#'
    }
  ];

  // Sort by date (latest first)
  const sortedItems = [...newsItems].sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div className="news-page">
      <section className="hero section" style={{ minHeight: '50vh' }}>
        <div className="container hero-container" style={{ textAlign: 'center', justifyContent: 'center' }}>
          <div className="hero-content">
            <h1 className="hero-title text-gradient">News & Updates</h1>
            <p className="hero-subtitle">
              Press, Conferences, Research Updates, Partnerships, and Company Announcements.
            </p>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <div className="news-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {sortedItems.map((item) => (
              <article key={item.id} className="card glow-box" style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>{item.category}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </div>
                </div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: '1.4' }}>{item.title}</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>{item.excerpt}</p>
                <a href={item.link} target={item.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem', borderRadius: '50px' }}>
                  Read More
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
