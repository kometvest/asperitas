import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Microscope, Layers, Shield, Globe } from 'lucide-react';
import './Research.css';

// ── DATA ─────────────────────────────────────────────────────────────────────

const PIPELINE_STEPS = [
  {
    id: 'develop',
    label: 'Develop',
    icon: <Microscope size={32} />,
    color: 'var(--accent-cyan)',
    glow: 'rgba(88,216,255,0.25)',
    desc: 'Biological discovery & synthetic biology circuit design',
  },
  {
    id: 'manufacture',
    label: 'Manufacture',
    icon: <Layers size={32} />,
    color: 'var(--accent-green)',
    glow: 'rgba(124,255,155,0.25)',
    desc: 'Scale-up via microbial chassis & biofoundry automation',
  },
  {
    id: 'ip',
    label: 'IP',
    icon: <Shield size={32} />,
    color: 'var(--accent-violet)',
    glow: 'rgba(155,109,255,0.25)',
    desc: 'Patent protection & proprietary technology licensing',
  },
  {
    id: 'commercial',
    label: 'Commercial',
    icon: <Globe size={32} />,
    color: 'var(--accent-gold)',
    glow: 'rgba(216,185,106,0.25)',
    desc: 'Global market delivery of premium bio-products',
  },
];

const PROJECTS = [
  {
    id: 'vitraya',
    title: 'Project VITRAYA™ — Autoluminescent Plant',
    subtitle: 'World-First Multicolor Autoluminescent plant Using Synthetic Ciruits.',
    image: '/glow.jpeg',
    tags: ['Synthetic Biology', 'Bioluminescence', 'IP'],
    description: 'First autoluminescent plant developed with Asperitas proprietary technology. A breakthrough in sustainable biological lighting.',
  },
  {
    id: 'dart-frog',
    title: 'Poison Dart Frog Therapeutics Project',
    subtitle: 'Biodiversity-derived neurotoxin research for non-addictive therapeutics',
    image: '/frog.png',
    tags: ['Therapeutics', 'Alkaloids', 'Neuroscience'],
    description: 'Developing non-addictive analgesics, local anesthetics, and antimicrobial peptides upcycled from poison dart frog alkaloids.',
  },
  {
    id: 'bio-patch',
    title: 'Alginate-Based Eco-Friendly Hydrogel Patch Development',
    subtitle: 'Biodegradable skin patch platform',
    image: '/biopatch.png',
    tags: ['Medical', 'Patent Pending', 'Therapeutics'],
    description: 'Developing alginate-based plant extract platforms for advanced therapeutic applications. Currently under patent processing.',
  },
  {
    id: 'epigenome',
    title: 'Enhancing the precision of targeted epigenetic engineering through a degron system',
    subtitle: 'Pepper RNA-tDeg Conditional Epigenome Editor Platform',
    image: '/epigenome.png',
    tags: ['KAIST', 'Epigenomics', 'Gene Editing'],
    description: 'Next-generation epigenome editor with minimal off-target effects using the tDeg-Degron system, developed in collaboration with KAIST.',
  },
  {
    id: 'lunar-soil',
    title: 'Plant the Moon — Lunar Regolith Cultivation',
    subtitle: 'Engineered rhizosphere microbiomes for space farming and extreme environments',
    image: '/lunar.png',
    tags: ['Space Biology', 'Microbiome', 'Astroagriculture'],
    description: 'Rhizosphere microbial consortia designed to optimize nutrient uptake and mitigate heavy metal toxicity in lunar regolith.',
  },
];

const PARTNERS = [
  { name: 'KAIST', logo: '/kaist.png' },
  { name: '한국과학영재학교', logo: '/ksa.png' },
  { name: 'UC Berkeley', logo: '/berkeley.svg' }
];

// ── PIPELINE COMPONENT ────────────────────────────────────────────────────────

function PipelineStep({ step, index, total }) {
  return (
    <div className="rs-pipeline-step">
      <div className="rs-pipeline-node" style={{ '--step-color': step.color, '--step-glow': step.glow }}>
        <div className="rs-pipeline-icon">{step.icon}</div>
        <div className="rs-pipeline-label" style={{ color: step.color }}>{step.label}</div>
      </div>
      <div className="rs-pipeline-desc">{step.desc}</div>
      {index < total - 1 && (
        <div className="rs-pipeline-arrow">
          <svg viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 8 H34 M28 2 L36 8 L28 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </div>
  );
}

// ── PROJECT CARD ─────────────────────────────────────────────────────────────

function ProjectCard({ project }) {
  const navigate = useNavigate();
  return (
    <div className="rs-project-card" onClick={() => navigate(`/research/project/${project.id}`)}>
      <div className="rs-project-image">
        <img src={project.image} alt={project.title} />
        <div className="rs-project-image-overlay" />
      </div>
      <div className="rs-project-info">
        <div className="rs-project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="rs-project-tag">{tag}</span>
          ))}
        </div>
        <h3 className="rs-project-title">{project.title}</h3>
        <p className="rs-project-subtitle">{project.subtitle}</p>
        <p className="rs-project-desc">{project.description}</p>
        <div className="rs-project-cta">
          View Details <span>→</span>
        </div>
      </div>
    </div>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

const Research = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="rs-page">

      {/* ── HERO ── */}
      <section className="rs-hero">
        <div className="rs-hero-bg" />
        <h1 className={`rs-hero-title${visible ? ' rs-hero-visible' : ''}`}>Research</h1>
        <p className={`rs-hero-sub${visible ? ' rs-hero-visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          Engineering biological functions into programmable bio-products.
        </p>
      </section>

      {/* ── OVERVIEW: PIPELINE ── */}
      <section className="section rs-overview-section">
        <div className="container">
          <div className="rs-section-label">OVERVIEW</div>
          <h2 className="rs-section-heading">From Discovery to Market</h2>
          <p className="rs-section-sub">
            Our integrated pipeline transforms biodiversity-derived discoveries into commercially viable bio-products through four key stages.
          </p>
          <div className="rs-pipeline">
            {PIPELINE_STEPS.map((step, i) => (
              <PipelineStep key={step.id} step={step} index={i} total={PIPELINE_STEPS.length} />
            ))}
          </div>
          {/* Pipeline connecting line */}
          <div className="rs-pipeline-track" />
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="section rs-projects-section">
        <div className="container">
          <div className="rs-section-label">PROJECTS</div>
          <h2 className="rs-section-heading">Research Projects</h2>
          <p className="rs-section-sub">Click any project to explore detailed research information.</p>
          <div className="rs-projects-grid">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="section rs-partners-section">
        <div className="container">
          <div className="rs-section-label">PARTNERS</div>
          <h2 className="rs-section-heading">Research Partners</h2>
          <p className="rs-section-sub">Collaborating with leading institutions worldwide.</p>
          <div className="rs-partners-gallery">
            {PARTNERS.map((p) => (
              <div key={p.name} className="rs-partner-card">
                <img src={p.logo} alt={p.name} className="rs-partner-logo" />
                <span className="rs-partner-name">{p.name}</span>
              </div>
            ))}
            {/* Placeholder slots */}
            {[...Array(3)].map((_, i) => (
              <div key={`ph-${i}`} className="rs-partner-card rs-partner-placeholder">
                <div className="rs-partner-ph-icon">+</div>
                <span className="rs-partner-name">Coming Soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Research;
