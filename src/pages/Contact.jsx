import { useState } from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to business@asperitas.bio
  };

  return (
    <div className="contact-page">
      <section className="hero section" style={{ minHeight: '40vh' }}>
        <div className="container hero-container" style={{ textAlign: 'center', justifyContent: 'center' }}>
          <div className="hero-content">
            <h1 className="hero-title text-gradient">Partner with Asperitas.</h1>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <div className="contact-layout" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', justifyContent: 'space-between' }}>
            
            <div className="contact-info" style={{ flex: '1', minWidth: '300px' }}>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Get in Touch</h2>
              
              <div className="cards-grid" style={{ gap: '1.5rem', marginBottom: '3rem' }}>
                <div className="card glow-box" style={{ padding: '1.5rem' }}>
                  <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.1rem' }}>Investment</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>For investors interested in Asperitas’ biodiversity-to-bioproduct platform.</p>
                </div>
                <div className="card glow-box" style={{ padding: '1.5rem' }}>
                  <h3 style={{ color: 'var(--accent-green)', fontSize: '1.1rem' }}>Partnerships</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>For research institutions, zoos, botanical gardens, conservation organizations, and design brands.</p>
                </div>
                <div className="card glow-box" style={{ padding: '1.5rem' }}>
                  <h3 style={{ color: 'var(--accent-rose)', fontSize: '1.1rem' }}>Sponsorship & Donation</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>For supporters interested in conservation, research, and educational programs.</p>
                </div>
                <div className="card glow-box" style={{ padding: '1.5rem' }}>
                  <h3 style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>General Contact</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>For general inquiries.</p>
                </div>
              </div>

              <div className="contact-emails">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <Mail color="var(--accent-gold)" />
                  <a href="mailto:business@asperitas.bio" style={{ fontSize: '1.1rem' }}>business@asperitas.bio</a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper" style={{ flex: '1', minWidth: '350px' }}>
              <div className="card" style={{ padding: '3rem 2rem' }}>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '2rem' }}>
                    <h2 style={{ color: 'var(--accent-green)', marginBottom: '1rem' }}>Thank you!</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Your inquiry has been sent to business@asperitas.bio. We will get back to you shortly.</p>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="form-group">
                      <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Name</label>
                      <input type="text" required placeholder="Your Name" style={{ width: '100%', padding: '1rem', background: 'var(--bg-primary)', border: '1px solid rgba(140, 150, 166, 0.2)', borderRadius: '6px', color: 'var(--text-main)', fontFamily: 'var(--font-body)' }} />
                    </div>
                    
                    <div className="form-group">
                      <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Email</label>
                      <input type="email" required placeholder="Your Email" style={{ width: '100%', padding: '1rem', background: 'var(--bg-primary)', border: '1px solid rgba(140, 150, 166, 0.2)', borderRadius: '6px', color: 'var(--text-main)', fontFamily: 'var(--font-body)' }} />
                    </div>

                    <div className="form-group">
                      <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Organization</label>
                      <input type="text" placeholder="Company / Institution" style={{ width: '100%', padding: '1rem', background: 'var(--bg-primary)', border: '1px solid rgba(140, 150, 166, 0.2)', borderRadius: '6px', color: 'var(--text-main)', fontFamily: 'var(--font-body)' }} />
                    </div>

                    <div className="form-group">
                      <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Inquiry Type</label>
                      <select style={{ width: '100%', padding: '1rem', background: 'var(--bg-primary)', border: '1px solid rgba(140, 150, 166, 0.2)', borderRadius: '6px', color: 'var(--text-main)', fontFamily: 'var(--font-body)' }}>
                        <option>Investment</option>
                        <option>Research Partnership</option>
                        <option>Conservation Partnership</option>
                        <option>Media</option>
                        <option>Sponsorship / Donation</option>
                        <option>General</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Message</label>
                      <textarea rows="5" required placeholder="How can we collaborate?" style={{ width: '100%', padding: '1rem', background: 'var(--bg-primary)', border: '1px solid rgba(140, 150, 166, 0.2)', borderRadius: '6px', color: 'var(--text-main)', fontFamily: 'var(--font-body)', resize: 'vertical' }}></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Submit Inquiry</button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
