import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Fade out completely by 300px scroll
      const newOpacity = Math.max(0, 1 - window.scrollY / 300);
      setOpacity(newOpacity);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar" style={{ opacity, pointerEvents: opacity < 0.1 ? 'none' : 'auto' }}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo.svg" alt="Asperitas" />
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/company" className={isActive('/company') ? 'active' : ''}>Company</Link>
          </li>
          <li>
            <Link to="/conservation" className={isActive('/conservation') ? 'active' : ''}>Conservation</Link>
          </li>
          <li>
            <Link to="/research" className={isActive('/research') ? 'active' : ''}>Research</Link>
          </li>
          <li>
            <Link to="/news" className={isActive('/news') ? 'active' : ''}>News</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
