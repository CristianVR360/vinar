import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logoBlanco from '../assets/vinar-logo-blanco.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <a href="#inicio" className="navbar-logo">
          <img src={logoBlanco} alt="VINAR Araucanía Logo" className="logo-img" />
          <span className="logo-text">VINAR <span className="logo-subtext">Araucanía</span></span>
        </a>

        {/* Mobile Toggle */}
        <button className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle Navigation">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#inicio" onClick={() => setMobileMenuOpen(false)}>Inicio</a></li>
          <li><a href="#terroir" onClick={() => setMobileMenuOpen(false)}>Terroir Austral</a></li>
          <li><a href="#vinas" onClick={() => setMobileMenuOpen(false)}>Nuestras Viñas</a></li>
          <li><a href="#/presentacion" className="nav-pres-link" onClick={() => setMobileMenuOpen(false)}>Presentación</a></li>
          <li><a href="#tienda" className="nav-btn-link" onClick={() => setMobileMenuOpen(false)}>Tienda Online</a></li>
        </ul>
      </div>
    </nav>
  );
}
