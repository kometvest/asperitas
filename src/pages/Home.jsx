import { Link } from 'react-router-dom';
import { Leaf, Network, FlaskConical, Globe, Zap, Dna, Lightbulb, TrendingUp } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero-bg-overlay" />
        <div className="home-hero-glow-1" />
        <div className="home-hero-glow-2" />
        
        <div className="container home-hero-container">
          <h1 className="home-hero-title">
            <span className="home-title-word word-1">Turning</span>{' '}
            <span className="home-title-word word-2 grad-green">Biodiversity</span> <br/>
            <span className="home-title-word word-3">into</span>{' '}
            <span className="home-title-word word-4 grad-cyan-violet">Biotechnology.</span>
          </h1>
          <p className="home-hero-subtitle">
            Asperitas is a synthetic biology company building a vertically integrated platform<br/>
            that connects biodiversity conservation, biological discovery, and high-value bio-product development.
          </p>
          <div className="home-hero-cta">
            <Link to="/company" className="home-btn home-btn-primary">Explore</Link>
            <Link to="/contact" className="home-btn home-btn-secondary">Partner with Us</Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem section" style={{ position: 'relative', backgroundImage: 'url("/mountain.webp")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h2 className="section-title">Biodiversity is disappearing before it is understood.</h2>
          <p className="section-desc">
            Every year, countless species decline before their biology is studied.<br />
            Many organisms contain unexplored enzymes, pigments, toxins, signaling systems, and metabolic pathways that could become the foundation of future biotechnology.<br />
            Yet biodiversity conservation and biotechnology development remain largely disconnected.
          </p>
          <div className="cards-grid grid-3">
            <div className="card glow-box" style={{ background: 'rgba(32, 39, 52, 0.7)', backdropFilter: 'blur(10px)' }}>
              <Leaf size={32} color="var(--accent-rose)" className="card-icon" />
              <h3>Unstudied Life</h3>
              <p>Most species remain biologically underexplored.</p>
            </div>
            <div className="card glow-box" style={{ background: 'rgba(32, 39, 52, 0.7)', backdropFilter: 'blur(10px)' }}>
              <Globe size={32} color="var(--accent-gold)" className="card-icon" />
              <h3>Weak Conservation Infrastructure</h3>
              <p>Many biodiversity-rich regions lack funding, education, and long-term conservation systems.</p>
            </div>
            <div className="card glow-box" style={{ background: 'rgba(32, 39, 52, 0.7)', backdropFilter: 'blur(10px)' }}>
              <FlaskConical size={32} color="var(--accent-cyan)" className="card-icon" />
              <h3>Limited Biological Inputs</h3>
              <p>Modern biotechnology depends on a narrow set of model organisms and known pathways.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution section dark-section">
        <div className="container">
          <h2 className="section-title">A biodiversity-to-bioproduct platform.</h2>
          <p className="section-desc">
            Asperitas connects legal biodiversity resource development with synthetic biology.<br />
            We establish conservation-oriented breeding networks, study rare biological functions, and convert them into high-value bio-products through the Design–Build–Test–Learn cycle.
          </p>

          <div className="flow-diagram">
            <div className="flow-step">Global Biodiversity</div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">Conservation & Breeding</div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">Biological Discovery</div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">DBTL Synthetic Biology</div>
            <div className="flow-arrow">→</div>
            <div className="flow-step highlight-step">High-Value Bio-products</div>
          </div>

          <div className="cards-grid grid-3 mt-4">
            <div className="card glow-box">
              <h3>Conservation Platform</h3>
              <p>Legal acquisition, breeding, conservation, and research access for rare and endangered species.</p>
            </div>
            <div className="card glow-box">
              <h3>Synthetic Biology Platform</h3>
              <p>AI-assisted design, genetic circuits, metabolic engineering, and bio-product development.</p>
            </div>
            <div className="card glow-box">
              <h3>Commercialization Platform</h3>
              <p>Premium bio-products, licensing, partnerships, research organisms, and living materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Section */}
      <section className="market section dark-section" style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2 className="section-title">Market Reach & Impact</h2>
          <div className="cards-grid grid-4" style={{ marginTop: '3rem' }}>
            <div className="card text-center glow-box" style={{ padding: '2.5rem 1.5rem' }}>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--accent-green)', marginBottom: '0.5rem' }}>280K+</div>
              <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', fontWeight: '600' }}>Korean Members</p>
            </div>
            <div className="card text-center glow-box" style={{ padding: '2.5rem 1.5rem' }}>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>50K+</div>
              <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', fontWeight: '600' }}>Active Subscribers</p>
            </div>
            <div className="card text-center glow-box" style={{ padding: '2.5rem 1.5rem' }}>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--accent-rose)', marginBottom: '0.5rem' }}>18+</div>
              <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', fontWeight: '600' }}>Exclusive Global Farms</p>
            </div>
            <div className="card text-center glow-box" style={{ padding: '2.5rem 1.5rem' }}>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>30K+</div>
              <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', fontWeight: '600' }}>Species Bred</p>
            </div>
          </div>
          
          <div className="card glow-box" style={{ marginTop: '3rem', textAlign: 'center', background: 'linear-gradient(90deg, rgba(124, 255, 155, 0.05), rgba(0, 184, 212, 0.05))' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)' }}>
              Synthetic Biology Market Projection
            </h3>
            <div style={{ fontSize: '4rem', fontWeight: '900', color: 'var(--accent-cyan)', margin: '1rem 0' }}>$75 Billion</div>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Estimated global market size by 2030</p>
          </div>
        </div>
      </section>

      {/* Partners Marquee Section */}
      <section className="partners section" style={{ padding: '4rem 0', overflow: 'hidden', background: 'var(--bg-card)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', letterSpacing: '2px', marginBottom: '2.5rem', textTransform: 'uppercase' }}>Partners</p>
        </div>
        <div className="marquee-wrapper" style={{ display: 'flex', whiteSpace: 'nowrap', overflow: 'hidden' }}>
          <div className="marquee-content" style={{ display: 'flex', alignItems: 'center', gap: '8rem', paddingLeft: '8rem', animation: 'scrollMarquee 30s linear infinite' }}>
            <img src="/kaist.png" alt="KAIST" style={{ height: '50px', opacity: 0.9, filter: 'brightness(0) invert(1)' }} />
            <img src="/ksa.png" alt="KSA" style={{ height: '50px', opacity: 0.9, filter: 'brightness(0) invert(1)' }} />
            <img src="/kaist.png" alt="KAIST" style={{ height: '50px', opacity: 0.9, filter: 'brightness(0) invert(1)' }} />
            <img src="/ksa.png" alt="KSA" style={{ height: '50px', opacity: 0.9, filter: 'brightness(0) invert(1)' }} />
            <img src="/kaist.png" alt="KAIST" style={{ height: '50px', opacity: 0.9, filter: 'brightness(0) invert(1)' }} />
            <img src="/ksa.png" alt="KSA" style={{ height: '50px', opacity: 0.9, filter: 'brightness(0) invert(1)' }} />
            <img src="/kaist.png" alt="KAIST" style={{ height: '50px', opacity: 0.9, filter: 'brightness(0) invert(1)' }} />
            <img src="/ksa.png" alt="KSA" style={{ height: '50px', opacity: 0.9, filter: 'brightness(0) invert(1)' }} />
            <img src="/kaist.png" alt="KAIST" style={{ height: '50px', opacity: 0.9, filter: 'brightness(0) invert(1)' }} />
            <img src="/ksa.png" alt="KSA" style={{ height: '50px', opacity: 0.9, filter: 'brightness(0) invert(1)' }} />
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scrollMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}} />
      </section>

      {/* Differentiation Section */}
      <section className="differentiation section">
        <div className="container">
          <h2 className="section-title">What makes Asperitas different?</h2>
          <div className="cards-grid grid-2">
            <div className="card glow-box">
              <Network size={28} color="var(--accent-green)" className="card-icon" />
              <h3>1. Biodiversity Access Network</h3>
              <p>We work through international supplier and conservation-oriented breeding networks.</p>
            </div>
            <div className="card glow-box">
              <Leaf size={28} color="var(--accent-green)" className="card-icon" />
              <h3>2. Conservation-Oriented Commercial Model</h3>
              <p>We aim to connect economic incentives with species propagation and responsible biodiversity management.</p>
            </div>
            <div className="card glow-box">
              <Zap size={28} color="var(--accent-cyan)" className="card-icon" />
              <h3>3. DBTL Product Development</h3>
              <p>We transform biological functions into engineered products using synthetic biology.</p>
            </div>
            <div className="card glow-box">
              <TrendingUp size={28} color="var(--accent-cyan)" className="card-icon" />
              <h3>4. From Discovery to Product</h3>
              <p>Asperitas integrates biological resource access, research, engineering, IP, and commercialization.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Vision Section */}
      <section className="vision section">
        <div className="container">
          <h2 className="section-title">Building the next biological age.</h2>
          <p className="section-desc">
            Asperitas aims to become a global biotechnology company that transforms biodiversity into programmable biological products. Our long-term vision includes endangered species restoration, overseas biodiversity research hubs, synthetic biology bio-products, living materials, biological lighting, and educational bio-themed infrastructure.
          </p>
          <div className="cards-grid grid-4">
            <div className="card text-center glow-box">
              <Globe size={40} color="var(--accent-green)" className="mx-auto mb-4" />
              <h3>Conserve</h3>
              <p className="text-sm">Build ex situ conservation populations and responsible breeding networks.</p>
            </div>
            <div className="card text-center glow-box">
              <Lightbulb size={40} color="var(--accent-gold)" className="mx-auto mb-4" />
              <h3>Discover</h3>
              <p className="text-sm">Identify new biological functions from underexplored organisms.</p>
            </div>
            <div className="card text-center glow-box">
              <Zap size={40} color="var(--accent-cyan)" className="mx-auto mb-4" />
              <h3>Engineer</h3>
              <p className="text-sm">Use synthetic biology to transform natural functions into designed systems.</p>
            </div>
            <div className="card text-center glow-box">
              <TrendingUp size={40} color="var(--accent-violet)" className="mx-auto mb-4" />
              <h3>Commercialize</h3>
              <p className="text-sm">Develop scalable products, IP, and partnerships.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
