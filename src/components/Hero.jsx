import React from 'react';
import './Hero.css';
import backgroundImage from '../assets/photo-8.jpg';
import decorOrnament from '../assets/decor-1.png';

export default function Hero() {
  return (
    <header id="inicio" className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <div className="hero-badge animate-fade">
          <span className="badge-line"></span>
          <span className="badge-text">Viticultura Austral del Fin del Mundo</span>
          <span className="badge-line"></span>
        </div>

        <h1 className="hero-title animate-slide">
          Los Vinos de Clima Frío <br />
          <span className="highlight-text">Más Australes del Mundo</span>
        </h1>

        <img src={decorOrnament} alt="Decorative Separator" className="hero-ornament animate-fade" />

        <p className="hero-description animate-slide">
          Somos <strong>VINAR</strong>, la cooperativa de viñateros de la Araucanía. 
          Nuestros viñedos crecen en suelos volcánicos bajo climas extremos y lluviosos, 
          dando vida a cepas poco conocidas con un valor enológico y gastronómico inigualable.
        </p>

        <div className="hero-actions animate-slide">
          <a href="#vinas" className="btn btn-primary">Descubrir Viñas</a>
          <a href="#terroir" className="btn btn-outline">Nuestro Origen</a>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Explorar</span>
      </div>
    </header>
  );
}
