import './Home.css';

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const Company = () => {
  const team = [
    {
      name: 'Minseo Kim',
      title: 'Founder & CEO',
      linkedin: 'https://www.linkedin.com/in/piloesnim/',
      image: '/ceo.jpg'
    },
    {
      name: 'Eunseong Lee',
      title: 'CFO',
      linkedin: 'https://www.linkedin.com/in/caustic',
      image: '/cfo.jpeg'
    },
    {
      name: 'Beomseok Oh',
      title: 'COO & AI Manager',
      linkedin: '',
      image: '/coo.png'
    }
  ];

  return (
    <div className="company-page">
      <section className="hero section">
        <div className="container hero-container" style={{ textAlign: 'center', justifyContent: 'center' }}>
          <div className="hero-content" style={{ maxWidth: '800px' }}>
            <h1 className="hero-title text-gradient">Company</h1>
            <p className="hero-subtitle" style={{ fontSize: '1.4rem' }}>
              Asperitas Inc. is a Delaware C Corporation specializing in synthetic biology and biodiversity-based biotechnology.
            </p>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="card glow-box" style={{ width: '100%' }}>
            <h2 style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }}>Who We Are</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Asperitas Inc. is building a vertically integrated biotechnology platform that connects global biodiversity resources with synthetic biology product development. We believe that nature is the largest unexplored library of biotechnology, and that conservation, discovery, and engineering should work together rather than separately.
            </p>
          </div>

          <div className="card glow-box" style={{ width: '100%' }}>
            <h2 style={{ color: 'var(--accent-green)', marginBottom: '1rem' }}>Mission</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>To transform biodiversity into biotechnology.</p>
          </div>

          <div className="card glow-box" style={{ width: '100%' }}>
            <h2 style={{ color: 'var(--accent-violet)', marginBottom: '1rem' }}>Vision</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>To build a world-leading biotechnology company connecting conservation, discovery, and synthetic biology.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '4rem' }}>Team</h2>
          <div className="cards-grid grid-2">
            {team.map((member) => (
              <div key={member.name} className="card glow-box" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'var(--bg-secondary)', overflow: 'hidden', flexShrink: 0 }}>
                  <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{member.name}</h3>
                  <p style={{ color: 'var(--accent-cyan)', marginBottom: '1rem', fontWeight: 500 }}>{member.title}</p>
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                      <LinkedInIcon />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
