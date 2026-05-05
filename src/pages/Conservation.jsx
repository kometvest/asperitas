import { Globe2, Sprout, HandHeart, FlaskConical } from 'lucide-react';
import './Home.css';
import InteractiveGlobe from '../components/InteractiveGlobe';

const Conservation = () => {
  return (
    <div className="conservation-page">
      <section className="hero section" style={{ minHeight: '60vh', position: 'relative', backgroundImage: 'url("/conservation.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: 1 }}></div>
        <div className="container hero-container" style={{ textAlign: 'center', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
          <div className="hero-content" style={{ maxWidth: '1400px' }}>
            <h1 className="hero-title text-gradient">Conservation</h1>
            <p className="hero-subtitle" style={{ fontSize: '1.4rem', whiteSpace: 'nowrap', width: '100%', color: '#fff' }}>
              Conservation through responsible propagation, research access, and biodiversity partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Restoration Status Section */}
      <section className="section" style={{ padding: '4rem 0', background: 'rgba(124, 255, 155, 0.02)' }}>
        <div className="container">
          <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '3rem' }}>Restoration Status</h2>
          <div className="cards-grid grid-2">
            <div className="card glow-box" style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--accent-green)', fontSize: '2.5rem', marginBottom: '1rem' }}>5000+ / 30000+</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>CITES I, II, III: Imported & Bred</p>
            </div>
            <div className="card glow-box" style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--accent-cyan)', fontSize: '2.5rem', marginBottom: '1rem' }}>18+</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Exclusive Overseas Farms Owned</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <h2 className="section-title">Our Conservation Model</h2>
          
          <div className="flow-diagram" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', alignItems: 'center' }}>
            <div className="flow-step" style={{ padding: '0.8rem 1.5rem' }}>Legal Import / Export</div>
            <div className="flow-arrow" style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)' }}>→</div>
            <div className="flow-step" style={{ padding: '0.8rem 1.5rem' }}>Quarantine & Welfare</div>
            <div className="flow-arrow" style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)' }}>→</div>
            <div className="flow-step" style={{ padding: '0.8rem 1.5rem' }}>Breeding & Population Growth</div>
            <div className="flow-arrow" style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)' }}>→</div>
            <div className="flow-step" style={{ padding: '0.8rem 1.5rem' }}>Partnerships</div>
            <div className="flow-arrow" style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)' }}>→</div>
            <div className="flow-step highlight-step" style={{ padding: '0.8rem 1.5rem', background: 'var(--accent-cyan)', color: '#000' }}>
              Conservation Collaboration
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="card glow-box" style={{ width: '100%' }}>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <Sprout size={32} color="var(--accent-green)" />
              <h2 style={{ fontSize: '1.8rem', margin: 0 }}>Species Scope</h2>
            </div>
            <ul style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', listStyle: 'none', padding: 0 }}>
              <li>• CITES Appendix I, II, III species</li>
              <li>• Rare reptiles, amphibians, plants, and other biological resources</li>
            </ul>
          </div>

          <div className="card glow-box" style={{ width: '100%' }}>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <HandHeart size={32} color="var(--accent-rose)" />
              <h2 style={{ fontSize: '1.8rem', margin: 0 }}>Local Impact</h2>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Creating economic incentives for local communities to conserve and breed species responsibly.
            </p>
          </div>

          <div className="card glow-box" style={{ width: '100%' }}>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <Globe2 size={32} color="var(--accent-cyan)" />
              <h2 style={{ fontSize: '1.8rem', margin: 0 }}>Global Network</h2>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Connecting conservation partners and responsible breeders across the globe.
            </p>
          </div>
        </div>
      </section>

      <section className="section dark-section" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <h2 className="section-title">Global Network Map</h2>
          <div style={{ margin: '3rem 0' }}>
            <InteractiveGlobe />
          </div>
        </div>
      </section>

      {/* Future Plan Section */}
      <section className="section" style={{ background: 'var(--bg-main)' }}>
        <div className="container">
          <div className="card glow-box" style={{ border: '1px solid var(--accent-cyan)' }}>
            <h2 className="section-title" style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <FlaskConical size={32} color="var(--accent-cyan)" />
              Future Plan: Global Research Centers
            </h2>
            <div style={{ marginTop: '2rem' }}>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                We plan to transform our existing global farm network beyond simple production facilities into <strong>state-of-the-art Life Science Research Centers</strong>.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px' }}>
                  <h4 style={{ color: 'var(--accent-green)', marginBottom: '1rem' }}>In-situ Laboratories</h4>
                  <p style={{ color: 'var(--text-muted)' }}>
                    We will establish professional laboratories at each base farm to strengthen real-time research and management of local biological resources.
                  </p>
                </div>
                <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px' }}>
                  <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }}>Biological Discovery</h4>
                  <p style={{ color: 'var(--text-muted)' }}>
                    The centers will conduct basic species research and discover high-value bio-byproducts, such as new enzymes and pigments, during the process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conservation;
