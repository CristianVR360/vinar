import React from 'react';
import './Footer.css';
import logoBlanco from '../assets/vinar-logo-blanco.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-top container">
        <div className="footer-brand">
          <a href="#inicio" className="footer-logo">
            <img src={logoBlanco} alt="VINAR Araucanía Logo" className="footer-logo-img" />
            <span className="footer-logo-text">VINAR <span className="footer-logo-sub">Araucanía</span></span>
          </a>
          <p className="footer-brand-desc">
            La cooperativa de vinos más austral del mundo. Cultivamos cepas de climas fríos 
            en suelos volcánicos con un gran valor gastronómico y vitivinícola.
          </p>
          <div className="footer-socials">
            <a href="#instagram" aria-label="Instagram" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#facebook" aria-label="Facebook" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#twitter" aria-label="Twitter" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </a>
          </div>
        </div>

        <div className="footer-links-group">
          <div className="footer-links-col">
            <h4>Secciones</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#terroir">Terroir Austral</a></li>
              <li><a href="#vinas">Nuestras Viñas</a></li>
              <li><a href="#tienda">Tienda Online</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Viñas Asociadas</h4>
            <ul>
              <li><a href="#vinas">Viña Quimey</a></li>
              <li><a href="#vinas">Viña Wuampuhue</a></li>
              <li><a href="#vinas">Viña Kutralkura</a></li>
              <li><a href="#vinas">Viña Cavallieri</a></li>
              <li><a href="#vinas">Viña Don Damián</a></li>
              <li><a href="#vinas">Viña Los Sauces</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Contacto</h4>
            <p className="contact-info">📍 Temuco, Región de la Araucanía</p>
            <p className="contact-info">📧 vinar.chile@gmail.com</p>
            <p className="contact-info">📞 +56 9 8214 4582</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>&copy; {currentYear} Cooperativa VINAR Araucanía. Todos los derechos reservados.</p>
          <p className="footer-author">Vinos de Frontera • De la Araucanía hacia el mundo</p>
        </div>
      </div>
    </footer>
  );
}
