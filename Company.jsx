import { useState, useEffect, useRef } from 'react';
import './Company.css';

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// ── DATA ─────────────────────────────────────────────────────────────────────

const LEADERSHIP = [
  {
    name: 'Minseo Kim',
    title: 'Founder & CEO',
    linkedin: 'https://www.linkedin.com/in/piloesnim/',
    image: '/IMG_1286.jpeg',
    description: 'Senior at Korea Science Academy of KAIST, specializing in synthetic biology.',
  },
  {
    name: 'Minjae Kim',
    title: 'CTO',
    linkedin: 'https://www.linkedin.com/in/rninjae-kim',
    image: '/minjae.jpeg',
    description: 'Senior at Seoul Science High School specializing in biology & engineering. President of student community. Korea National Representative, 37th International Biology Olympiad.',
  },
  {
    name: 'Beomseok Oh',
    title: 'COO & AI Manager',
    linkedin: 'https://www.linkedin.com/in/범석-오-66154340a/',
    image: '/coo.png',
    description: 'Freshman at Harbin Institute of Technology specializing in AI, and Electrical & Information Engineering.',
  },
  {
    name: 'Eunseong Lee',
    title: 'CFO',
    linkedin: 'https://www.linkedin.com/in/caustic',
    image: '/cfo.jpeg',
    description: 'Senior at Korea Science Academy of KAIST specializing in Numerical Analysis & Computational Physics (Simulation).',
  },
];

const FACULTY = [
  {
    name: 'Juwon Ham',
    title: 'Faculty',
    linkedin: 'https://www.linkedin.com/in/주원-함-0b7905412?',
    image: '/cso.png',
    description: 'Senior at Korea Science Academy of KAIST, specializing in biology. Won 2026 ISEF special prize.',
  },
  {
    name: 'Junsoo Bae',
    title: 'Faculty',
    linkedin: '',
    image: 'junsoo.jpeg',
    description: 'Senior at Gyeonggi Science High School for the Gifted specializing in biology. Korea National Representative, 37th International Biology Olympiad. ',
  },
];

const ADVISORY = [];

const TIMELINE = [
  {
    date: '2026.06.',
    title: 'Asperitas Is Fundraising',
    description: 'Preparing for our SEED round investment to accelerate the construction of our automated biofoundry and expand our global biodiversity library.',
    side: 'left',
  },
  {
    date: '2026.04.15',
    title: 'Asperitas Incorporated in Delaware',
    description: 'Asperitas Inc. was officially incorporated as a Delaware C Corporation, marking the founding of a biodiversity-driven biotechnology company.',
    side: 'right',
  },
];

// ── SUB-COMPONENTS ────────────────────────────────────────────────────────────

function MemberCard({ member, onClick }) {
  return (
    <div className="co-member-card" onClick={() => onClick(member)}>
      <div className="co-member-photo">
        <img src={member.image} alt={member.name} />
      </div>
      <div className="co-member-info">
        <h4 className="co-member-name">{member.name}</h4>
        <p className="co-member-title">{member.title}</p>
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="co-member-linkedin"
            onClick={(e) => e.stopPropagation()}
          >
            <LinkedInIcon />
          </a>
        )}
      </div>
    </div>
  );
}

function MemberModal({ member, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div className="co-modal-backdrop" onClick={onClose}>
      <div className="co-modal" onClick={(e) => e.stopPropagation()}>
        <button className="co-modal-close" onClick={onClose}><CloseIcon /></button>
        <div className="co-modal-inner">
          <div className="co-modal-photo">
            <img src={member.image} alt={member.name} />
          </div>
          <div className="co-modal-details">
            <h2 className="co-modal-name">{member.name}</h2>
            <p className="co-modal-role">{member.title}</p>
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="co-modal-linkedin">
                <LinkedInIcon /> LinkedIn
              </a>
            )}
            <p className="co-modal-desc">{member.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── TABS ──────────────────────────────────────────────────────────────────────

function OverviewTab() {
  return (
    <div className="co-overview">
      {/* Vision */}
      <div className="co-overview-vision">
        <div className="co-overview-label">VISION</div>
        <h2 className="co-overview-headline">
          <div className="co-headline-line">To build a world-leading biotechnology company</div>
          <div className="co-headline-line">
            connecting <span className="grad-green">conservation</span>,{' '}
            <span className="grad-cyan">discovery</span>, and{' '}
            <span className="grad-violet">synthetic biology</span>.
          </div>
        </h2>
        <p className="co-overview-sub">
          Asperitas Inc. is a Delaware C Corporation specializing in synthetic biology and
          biodiversity-based biotechnology. We believe that nature is the largest unexplored
          library of biotechnology.
        </p>
      </div>

      {/* Model cards */}
      <div className="co-model-grid">
        <div className="co-model-card co-model-green">
          <div className="co-model-number">01</div>
          <h3>Conservation Platform</h3>
          <p>Legal acquisition, breeding, conservation, and research access for rare and endangered species across 18+ overseas farms.</p>
        </div>
        <div className="co-model-card co-model-cyan">
          <div className="co-model-number">02</div>
          <h3>Discovery Engine</h3>
          <p>Identifying novel biological functions — enzymes, drugs, toxins, signaling systems — from underexplored organisms.</p>
        </div>
        <div className="co-model-card co-model-violet">
          <div className="co-model-number">03</div>
          <h3>Synthetic Biology</h3>
          <p>AI-assisted design, genetic circuits, metabolic engineering, and DBTL bio-product development pipeline.</p>
        </div>
        <div className="co-model-card co-model-gold">
          <div className="co-model-number">04</div>
          <h3>Commercialization</h3>
          <p>Premium bio-products, licensing, partnerships, research organisms, and living materials reaching global markets.</p>
        </div>
      </div>

      {/* Mission strip */}
      <div className="co-mission-strip">
        <span className="co-mission-label">MISSION</span>
        <p className="co-mission-text">Biodiversity-derived Synthetic Biology Platform</p>
      </div>
    </div>
  );
}

function TimelineTab() {
  return (
    <div className="co-timeline">
      <div className="co-timeline-line" />
      {TIMELINE.map((item, i) => (
        <div key={i} className={`co-timeline-item co-tl-${item.side}`}>
          <div className="co-timeline-card">
            <span className="co-tl-date">{item.date}</span>
            <h3 className="co-tl-title">{item.title}</h3>
            <p className="co-tl-desc">{item.description}</p>
          </div>
          <div className="co-timeline-dot" />
        </div>
      ))}
    </div>
  );
}

function TeamTab() {
  const [selected, setSelected] = useState(null);

  const Column = ({ title, members, accent }) => (
    <div className="co-team-col">
      <div className="co-team-col-header" style={{ borderColor: accent, color: accent }}>
        {title}
      </div>
      {members.length === 0 ? (
        <div className="co-team-empty">Coming Soon</div>
      ) : (
        members.map((m) => (
          <MemberCard key={m.name} member={m} onClick={setSelected} />
        ))
      )}
    </div>
  );

  return (
    <>
      {/* ── CAREER BANNER ── */}
      <div className="co-career-banner">
        <div className="co-career-banner-left">
          <span className="co-career-label">CAREERS</span>
          <h2 className="co-career-heading">Join Our Team</h2>
          <p className="co-career-sub">
            We're looking for passionate scientists, engineers, and visionaries to help build
            the future of biodiversity-driven biotechnology.
          </p>
        </div>
        <a
          href="https://bca87jmu.ninehire.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="co-career-cta"
        >
          View Open Positions
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div className="co-team-grid">
        <Column title="Leadership" members={LEADERSHIP} accent="var(--accent-cyan)" />
        <Column title="Faculty" members={FACULTY} accent="var(--accent-green)" />
        <Column title="Advisory" members={ADVISORY} accent="var(--accent-violet)" />
      </div>
      {selected && <MemberModal member={selected} onClose={() => setSelected(null)} />}
    </>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

const TABS = ['Overview', 'Timeline', 'Team'];

const Company = () => {
  const [tab, setTab] = useState('Overview');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="co-page">
      {/* ── HERO ── */}
      <section className="co-hero">
        <h1 className={`co-hero-title${visible ? ' co-hero-visible' : ''}`}>Company</h1>

        {/* Tab buttons */}
        <div className="co-tabs">
          {TABS.map((t) => (
            <button
              key={t}
              className={`co-tab-btn${tab === t ? ' co-tab-active' : ''}`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="co-content section">
        <div className="container">
          {tab === 'Overview' && <OverviewTab />}
          {tab === 'Timeline' && <TimelineTab />}
          {tab === 'Team' && <TeamTab />}
        </div>
      </section>
    </div>
  );
};

export default Company;
