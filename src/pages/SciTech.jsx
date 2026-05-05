import { Dna, Activity, Zap, Cpu, TestTube2, Layers, Binary, Search, Sprout, FlaskConical, Microchip, Microscope } from 'lucide-react';
import './Home.css';

const SciTech = () => {
  // 7.jpeg is missing from the directory, so we filter it out to avoid broken images
  const plantImages = [1, 2, 3, 4, 5, 6, 8, 9, 10].map(n => `/${n}.jpeg`);

  return (
    <div className="scitech-page">
      <section className="hero section" style={{ minHeight: '60vh', position: 'relative', backgroundImage: 'url("/glow.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 1 }}></div>
        <div className="container hero-container" style={{ textAlign: 'center', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
          <div className="hero-content" style={{ maxWidth: '900px' }}>
            <h1 className="hero-title text-gradient">Science & Technology</h1>
            <p className="hero-subtitle" style={{ fontSize: '1.4rem' }}>
              Engineering biological functions into programmable bio-products.
            </p>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          
          {/* DBTL Platform */}
          <div className="card glow-box" style={{ width: '100%' }}>
            <h2 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.8rem' }}>
              <Binary size={32} color="var(--accent-cyan)" />
              DBTL Platform
            </h2>
            <div className="flow-diagram" style={{ margin: '2rem 0', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
              <div className="flow-step" style={{ minWidth: '150px' }}>Design</div>
              <div className="flow-arrow" style={{ color: 'var(--accent-cyan)' }}>→</div>
              <div className="flow-step" style={{ minWidth: '150px' }}>Build</div>
              <div className="flow-arrow" style={{ color: 'var(--accent-cyan)' }}>→</div>
              <div className="flow-step" style={{ minWidth: '150px' }}>Test</div>
              <div className="flow-arrow" style={{ color: 'var(--accent-cyan)' }}>→</div>
              <div className="flow-step highlight-step" style={{ minWidth: '150px' }}>Learn</div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginTop: '2rem' }}>
              Our synthetic biology platform follows the Design–Build–Test–Learn cycle. We design genetic circuits and metabolic pathways, build biological systems in plant or microbial chassis, test their performance, and use the results to improve the next design cycle.
            </p>
          </div>

          {/* VITRAYA™ */}
          <div className="card card-violet glow-box" style={{ width: '100%' }}>
            <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.8rem' }}>
              <Zap size={32} color="var(--accent-violet)" />
              VITRAYA™
            </h2>
            <p style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginBottom: '2rem' }}>
              First Autoluminescent plant developed with proprietary technology.
            </p>
            
            <div style={{ marginBottom: '3rem' }}>
              <img src="/poster.png" alt="VITRAYA Poster" style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }} />
            </div>

            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--accent-green)' }}>Gallery: Bioluminescent Collection</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              {plantImages.map((src, i) => (
                <div key={i} style={{ aspectRatio: '1/1', overflow: 'hidden', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <img src={src} alt={`Autoluminescent Plant`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                </div>
              ))}
            </div>

            <p style={{ color: 'var(--accent-gold)', fontStyle: 'italic', fontSize: '1rem', borderLeft: '3px solid var(--accent-gold)', paddingLeft: '1rem' }}>
              For detailed technical specifications, please contact our business team (business@asperitas.bio).
            </p>
          </div>

          {/* Medical Bio-Patch Platform */}
          <div className="card glow-box" style={{ width: '100%' }}>
            <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.8rem' }}>
              <Activity size={32} color="var(--accent-rose)" />
              Medical Bio-Patch Platform
            </h2>
            <div className="flow-diagram" style={{ margin: '1.5rem 0', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', gap: '1rem' }}>
              <div className="flow-step" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Resource Discovery</div>
              <div className="flow-arrow">→</div>
              <div className="flow-step" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Bio-compatible Formulation</div>
              <div className="flow-arrow">→</div>
              <div className="flow-step" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Therapeutic Patch</div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Developing alginate-based plant extract platforms for advanced therapeutic applications.
            </p>
            <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, marginTop: '1rem' }}>
              * Currently under patent processing. (Patent Pending)
            </p>
          </div>

          {/* Now Working On */}
          <div className="card glow-box" style={{ width: '100%', border: '1px solid var(--accent-green)' }}>
            <h2 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.8rem', color: 'var(--accent-green)' }}>
              <Microscope size={32} />
              Now Working On
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>Microbial Protein Biofoundry</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  We are researching mass production by inserting synthetic biology protein circuits—discovered in over 60 species of Dart Frogs for medical potential—into microbial chassis.
                </p>
              </div>
              <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--accent-violet)', marginBottom: '0.5rem' }}>Next-Gen Epigenome Editor</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Development of a next-generation epigenome editor with minimal off-target effects using the tDeg-Degron system. (In collaboration with KAIST)
                </p>
              </div>
              <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>Parthenogenesis Research</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Successfully proven research demonstrating that males within parthenogenesis populations possess reproductive capacity.
                </p>
              </div>
            </div>
          </div>

          {/* Future Research Areas */}
          <div className="card glow-box" style={{ width: '100%' }}>
            <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.8rem' }}>
              <Search size={32} color="var(--accent-gold)" />
              Future Research & Commercialization
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              Asperitas is focusing on commercializing synthetic bioproducts by utilizing newly discovered proteins and biological circuits to drive industry innovation.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)' }}></div>
                Biological lighting
              </span>
              <span style={{ color: 'var(--text-muted)', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)' }}></div>
                Living materials
              </span>
              <span style={{ color: 'var(--text-muted)', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)' }}></div>
                Pigment engineering
              </span>
              <span style={{ color: 'var(--text-muted)', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)' }}></div>
                Biofoundry automation
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SciTech;
