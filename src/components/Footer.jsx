import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          
          <div className="footer-column footer-contact">
            <h3 className="footer-title">Contact Us</h3>
            <h2 className="footer-heading">Partner with Asperitas?</h2>
            
            {subscribed ? (
              <p style={{ color: 'var(--accent-green)', fontSize: '0.9rem', marginTop: '1rem' }}>Thank you for your subscription!</p>
            ) : (
              <form className="footer-email-form" onSubmit={handleSubscribe}>
                <label>ENTER YOUR EMAIL</label>
                <input type="email" required placeholder="email@email.com" />
                <button type="submit" className="footer-submit-btn">Submit</button>
              </form>
            )}
            
            <div className="footer-brand" style={{ marginTop: '2rem' }}>
              <img src="/logo.svg" alt="Asperitas" className="footer-logo" />
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Asperitas Focus</h3>
            <ul className="footer-links-list">
              <li><Link to="/scitech">Platform Overview</Link></li>
              <li><Link to="/conservation">Conservation Model</Link></li>
              <li><Link to="/scitech">Synthetic Bio Product</Link></li>
              <li><Link to="/contact">Partnerships</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">More from Asperitas</h3>
            <ul className="footer-links-list">
              <li><Link to="/company">About</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/contact">Investment</Link></li>
              <li><Link to="/contact">General Inquiry</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>Terms & Conditions</span>
            <span className="separator">|</span>
            <span>&copy; Copyright Asperitas Inc. 2026</span>
          </div>
          <div className="footer-bottom-right">
            <span style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>FOLLOW US</span>
            <a href="https://linkedin.com/company/asperitasbio" target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{ display: 'flex', alignItems: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://instagram.com/asperitasbio" target="_blank" rel="noreferrer" aria-label="Instagram" style={{ display: 'flex', alignItems: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
