import React, { useState, useEffect, useRef } from 'react';
import './VinarPresentation.css';

const slidesData = [
  {
    type: 'cover',
    title: 'VINAR',
    subtitle: 'La Frontera del Vino Chileno',
    badge: 'Viticultura Austral de Cooperación y Alta Gama',
    description: 'Cinco familias viñateras unidas en la Araucanía para desafiar los límites de la geografía, elaborando vinos de clima frío con una pureza y carácter únicos en el mundo.',
    actionText: 'Iniciar Pitch Deck',
    bgGradient: 'radial-gradient(circle at 50% 50%, rgba(92, 19, 33, 0.95) 0%, rgba(11, 11, 13, 1) 100%)'
  },
  {
    type: 'cooperative',
    title: 'La Cooperativa VINAR',
    subtitle: '5 Familias, 1 Identidad Austral',
    description: 'La unión hace la fuerza en la frontera del vino chileno. Agrupamos a cinco proyectos boutique pioneros de la Araucanía, compartiendo conocimientos y recursos para posicionar la viticultura austral en el mapa global.',
    vinas: [
      { name: 'Viña Aynco', zone: 'Cautín', desc: 'Vinos frescos y de gran perfil mineral en Galvarino.' },
      { name: 'Viña Cavallieri', zone: 'Malleco', desc: 'Tradición de origen italiano y finos Pinot Noir en Los Sauces.' },
      { name: 'Viña Quimey', zone: 'Costa', desc: 'Vinos costeros de fuerte carácter oceánico en la Cordillera de la Costa.' },
      { name: 'Viña Don Damián', zone: 'Cautín', desc: 'Tradición familiar e historia desde 1925 en Galvarino.' },
      { name: 'Viña Kütralkura', zone: 'Malleco', desc: 'Bodega sustentable a los pies de la precordillera en Curacautín.' }
    ],
    bgGradient: 'radial-gradient(circle at 10% 20%, rgba(58, 13, 20, 0.95) 0%, rgba(11, 11, 13, 1) 90%)'
  },
  {
    type: 'terroir',
    title: 'Terroir de Lluvia, Fuego y Ceniza',
    subtitle: 'El Origen de Nuestra Ventaja Competitiva',
    description: 'La Araucanía ofrece características únicas que desafían los estándares tradicionales y aportan una complejidad sin igual al vino:',
    pillars: [
      {
        icon: '🌋',
        title: 'Suelos Volcánicos (Trumao)',
        desc: 'Suelos derivados de ceniza de volcanes milenarios (Llaima y Lonquimay), aportando una mineralidad profunda y una gran persistencia en boca.'
      },
      {
        icon: '❄️',
        title: 'Clima Frío Extremo',
        desc: 'Temperaturas bajas y lluvias abundantes. La alta oscilación térmica ralentiza la maduración, permitiendo concentrar aromas delicados.'
      },
      {
        icon: '🌬️',
        title: 'Vientos de Frontera',
        desc: 'Flujo constante de viento húmedo y costero que otorga frescura y mantiene sanos los viñedos de manera natural.'
      }
    ],
    bgGradient: 'radial-gradient(circle at 90% 10%, rgba(30, 38, 28, 0.95) 0%, rgba(11, 11, 13, 1) 90%)'
  },
  {
    type: 'cepas-blancas',
    title: 'Nuestras Cepas Blancas',
    subtitle: 'Frescura, Mineralidad y Perfume',
    description: 'Vinos de gran tipicidad y pureza aromática, ideales para los amantes de los blancos crujientes y con carácter:',
    cepas: [
      {
        name: 'Chardonnay',
        profile: 'Vibrante y Estructurado',
        colorName: 'Dorado Pálido',
        colorHex: '#f6e7c1',
        nose: 'Manzana verde, pera de agua, pomelo y sutiles toques de frutos secos tostados.',
        mouth: 'Acidez punzante, paso graso elegante y una salinidad mineral muy marcada.'
      },
      {
        name: 'Sauvignon Blanc',
        profile: 'Fresco e Intenso',
        colorName: 'Amarillo Verdoso',
        colorHex: '#eef8db',
        nose: 'Aromas a ají verde, pasto recién cortado, piña y frutas cítricas frescas.',
        mouth: 'Muy fresco, de paso crujiente, acidez elevada y final cítrico y herbáceo.'
      },
      {
        name: 'Gewürztraminer',
        profile: 'Floral y Exótico',
        colorName: 'Dorado Brillante',
        colorHex: '#ffd993',
        nose: 'Muy perfumado, con notas a pétalos de rosa, lichis y especias dulces.',
        mouth: 'De cuerpo medio, acidez equilibrada, textura untuosa y final muy aromático.'
      }
    ],
    bgGradient: 'radial-gradient(circle at 50% 10%, rgba(80, 70, 40, 0.9) 0%, rgba(11, 11, 13, 1) 100%)'
  },
  {
    type: 'cepas-tintas',
    title: 'Nuestras Cepas Tintas',
    subtitle: 'Elegancia, Taninos Finos y Fruta Roja',
    description: 'Tintos de clima frío que destacan por su perfil delicado, colores translúcidos y extraordinaria elegancia aromática:',
    cepas: [
      {
        name: 'Pinot Noir',
        profile: 'La Cepa Reina del Frío',
        colorName: 'Rubí Translúcido',
        colorHex: '#a13b4c',
        nose: 'Frambuesas frescas, cereza ácida, moras silvestres y delicadas notas terrosas de bosque lluvioso.',
        mouth: 'Ligero, de taninos extremadamente finos y sedosos, acidez natural vibrante y un final largo y frutal.'
      },
      {
        name: 'Merlot',
        profile: 'Suave y Complejo',
        colorName: 'Rubí Profundo',
        colorHex: '#802636',
        nose: 'Ciruelas jugosas, cerezas negras, toques especiados y notas a tabaco y tierra húmeda.',
        mouth: 'Cuerpo medio, de taninos redondos y aterciopelados, acidez fresca y un final concentrado y equilibrado.'
      }
    ],
    bgGradient: 'radial-gradient(circle at 50% 90%, rgba(92, 19, 33, 0.9) 0%, rgba(11, 11, 13, 1) 100%)'
  },
  {
    type: 'attributes',
    title: 'El Sello de los Vinos Australes',
    subtitle: 'Características Enológicas Distintivas',
    description: '¿Por qué los vinos de clima frío de VINAR son diferentes y altamente cotizados en la gastronomía premium?',
    attributes: [
      {
        title: 'Alta Acidez Natural',
        badge: 'Frescura Eterna',
        desc: 'El frío preserva el ácido málico en la uva. Esto aporta una frescura única en boca sin necesidad de aditivos químicos, proporcionando un gran potencial de envejecimiento en botella.'
      },
      {
        title: 'Bajo Alcohol Natural',
        badge: 'Elegancia y Equilibrio',
        desc: 'Debido a la maduración lenta y tardía, las uvas acumulan menos azúcar. El resultado son vinos de menor graduación alcohólica (11.5% a 12.5%), fáciles de beber y extremadamente elegantes.'
      },
      {
        title: 'Tensión y Mineralidad',
        badge: 'Suelo Volcánico',
        desc: 'En boca se percibe una tensión salina y una mineralidad de ceniza volcánica. Vinos verticales, con estructura lineal bien definida que limpia el paladar y realza los sabores gastronómicos.'
      }
    ],
    bgGradient: 'radial-gradient(circle at 50% 50%, rgba(30, 30, 45, 0.95) 0%, rgba(11, 11, 13, 1) 100%)'
  },
  {
    type: 'numbers',
    title: 'La Fiesta de la Vendimia de la Araucanía',
    subtitle: 'Dos Hitos que Definen una Nueva Era del Vino Chileno',
    description: 'Dos ediciones consecutivas que demuestran el explosivo interés por el vino austral y la fuerza de un movimiento regional que no para de crecer:',
    editions: [
      {
        year: '1ª Edición',
        visitors: '+5.000',
        visitorLabel: 'Visitantes',
        highlight: 'El punto de partida que consolidó la identidad vitivinícola de la región, reuniendo por primera vez a las viñas de la Araucanía bajo un mismo escenario.',
        wineries: '14 viñas',
        wineryDetail: 'de toda la Región de la Araucanía'
      },
      {
        year: '2ª Edición',
        visitors: '+5.000',
        visitorLabel: 'Visitantes',
        highlight: 'Confirmó el crecimiento sostenido del evento. Mayor asistencia, más productores y una demanda que supera toda expectativa año a año.',
        wineries: '14 viñas',
        wineryDetail: 'reunidas en un evento que sigue creciendo'
      }
    ],
    highlight: 'No es solo la fiesta de VINAR — es el punto de encuentro de toda la viticultura austral de Chile.',
    bgGradient: 'radial-gradient(circle at 10% 80%, rgba(197, 160, 89, 0.2) 0%, rgba(11, 11, 13, 1) 90%)'
  },
  {
    type: 'business',
    title: 'La Oportunidad Comercial',
    subtitle: 'Por qué Comprar y Distribuir VINAR',
    description: 'El mercado global demanda vinos con identidad, frescura y producciones limitadas. VINAR es la respuesta:',
    pillars: [
      {
        title: 'Exclusividad Gastronómica',
        desc: 'Nuestros vinos son ideales para tiendas especializadas y cartas de restaurantes premium que buscan sorprender con productos auténticos de baja escala.'
      },
      {
        title: 'Relato Cultural',
        desc: 'Unión del respeto por la tierra de los pueblos originarios con técnicas europeas de clima frío. Cada botella cuenta la historia de un territorio indómito.'
      },
      {
        title: 'Cooperativismo de Impacto',
        desc: 'Al elegir VINAR apoyas directamente a la agricultura familiar campesina de la Araucanía, fomentando el desarrollo local y sustentable.'
      }
    ],
    contactInfo: {
      email: 'contacto@vinar.cl',
      phone: '+56 9 7695 9529',
      location: 'Temuco - Galvarino, Región de La Araucanía, Chile'
    },
    bgGradient: 'radial-gradient(circle at 50% 50%, rgba(92, 19, 33, 0.95) 0%, rgba(11, 11, 13, 1) 100%)'
  }
];

export default function VinarPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  const totalSlides = slidesData.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if (containerRef.current.webkitRequestFullscreen) {
        containerRef.current.webkitRequestFullscreen();
      } else if (containerRef.current.msRequestFullscreen) {
        containerRef.current.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(
        !!(document.fullscreenElement ||
          document.webkitFullscreenElement ||
          document.mozFullScreenElement ||
          document.msFullscreenElement)
      );
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreen]);

  const slide = slidesData[currentSlide];

  return (
    <div id="presentacion-vinar" className="presentation-page">
      <div 
        ref={containerRef}
        className={`presentation-container ${isFullscreen ? 'fullscreen' : ''}`}
        style={{ background: slide.bgGradient }}
      >
        {/* Top bar controls */}
        <div className="presentation-top-bar">
          <a href="#inicio" className="btn-back-home" title="Volver al Inicio">
            ← Inicio
          </a>
          <div className="presentation-brand">
            <span className="gold-text">VINAR</span> Pitch Deck
          </div>
          <div className="presentation-slide-indicator">
            Diapositiva {currentSlide + 1} de {totalSlides}
          </div>
          <button 
            className="btn-control btn-fullscreen-toggle" 
            onClick={toggleFullscreen}
            title={isFullscreen ? "Salir de Pantalla Completa (Esc)" : "Ver en Pantalla Completa (F)"}
          >
            {isFullscreen ? (
              <span className="icon">✕</span>
            ) : (
              <span className="icon">⛶</span>
            )}
          </button>
        </div>

        {/* Progress bar */}
        <div className="presentation-progress-bar">
          <div 
            className="presentation-progress-fill" 
            style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          ></div>
        </div>

        {/* Slide Content wrapper */}
        <div className="presentation-slide-content">
          
          {/* COVER SLIDE */}
          {slide.type === 'cover' && (
            <div className="slide-layout-cover animate-fade-in">
              <span className="slide-badge">{slide.badge}</span>
              <h1 className="slide-title-large">{slide.title}</h1>
              <h2 className="slide-subtitle-large">{slide.subtitle}</h2>
              <div className="slide-divider"></div>
              <p className="slide-desc-large">{slide.description}</p>
              <button className="btn btn-primary slide-action-btn" onClick={nextSlide}>
                {slide.actionText} →
              </button>
            </div>
          )}

          {/* COOPERATIVE SLIDE */}
          {slide.type === 'cooperative' && (
            <div className="slide-layout-coop animate-fade-in">
              <div className="coop-left">
                <span className="slide-label">{slide.subtitle}</span>
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-desc">{slide.description}</p>
              </div>
              <div className="coop-right">
                <div className="vinas-list-deck">
                  {slide.vinas.map((vina, idx) => (
                    <div key={idx} className="coop-vina-card glassmorphic">
                      <div className="coop-vina-header">
                        <span className="coop-vina-num">0{idx + 1}</span>
                        <h3 className="coop-vina-name">{vina.name}</h3>
                        <span className="coop-vina-zone">{vina.zone}</span>
                      </div>
                      <p className="coop-vina-desc">{vina.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TERROIR SLIDE */}
          {slide.type === 'terroir' && (
            <div className="slide-layout-terroir animate-fade-in">
              <span className="slide-label">{slide.subtitle}</span>
              <h2 className="slide-title text-center">{slide.title}</h2>
              <p className="slide-desc text-center max-w-xl">{slide.description}</p>
              <div className="terroir-deck-grid">
                {slide.pillars.map((pillar, idx) => (
                  <div key={idx} className="terroir-deck-card glassmorphic">
                    <div className="terroir-deck-icon">{pillar.icon}</div>
                    <h3 className="terroir-deck-title">{pillar.title}</h3>
                    <p className="terroir-deck-desc">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CEPAS BLANCAS SLIDE */}
          {slide.type === 'cepas-blancas' && (
            <div className="slide-layout-cepas animate-fade-in">
              <span className="slide-label">{slide.subtitle}</span>
              <h2 className="slide-title text-center">{slide.title}</h2>
              <p className="slide-desc text-center max-w-xl">{slide.description}</p>
              
              <div className="cepas-deck-grid three-cols">
                {slide.cepas.map((cepa, idx) => (
                  <div key={idx} className="cepa-deck-card glassmorphic">
                    <div className="cepa-deck-header">
                      <div className="cepa-color-dot" style={{ backgroundColor: cepa.colorHex, boxShadow: `0 0 12px ${cepa.colorHex}` }}></div>
                      <div>
                        <h3 className="cepa-deck-name">{cepa.name}</h3>
                        <span className="cepa-deck-profile">{cepa.profile}</span>
                      </div>
                    </div>
                    <div className="cepa-deck-body">
                      <div className="cepa-characteristic-block">
                        <strong>👃 Nariz:</strong>
                        <p>{cepa.nose}</p>
                      </div>
                      <div className="cepa-characteristic-block">
                        <strong>🍷 Boca:</strong>
                        <p>{cepa.mouth}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CEPAS TINTAS SLIDE */}
          {slide.type === 'cepas-tintas' && (
            <div className="slide-layout-cepas animate-fade-in">
              <span className="slide-label">{slide.subtitle}</span>
              <h2 className="slide-title text-center">{slide.title}</h2>
              <p className="slide-desc text-center max-w-xl">{slide.description}</p>
              
              <div className="cepas-deck-grid two-cols">
                {slide.cepas.map((cepa, idx) => (
                  <div key={idx} className="cepa-deck-card glassmorphic">
                    <div className="cepa-deck-header">
                      <div className="cepa-color-dot" style={{ backgroundColor: cepa.colorHex, boxShadow: `0 0 12px ${cepa.colorHex}` }}></div>
                      <div>
                        <h3 className="cepa-deck-name">{cepa.name}</h3>
                        <span className="cepa-deck-profile">{cepa.profile}</span>
                      </div>
                    </div>
                    <div className="cepa-deck-body">
                      <div className="cepa-characteristic-block">
                        <strong>👃 Nariz:</strong>
                        <p>{cepa.nose}</p>
                      </div>
                      <div className="cepa-characteristic-block">
                        <strong>🍷 Boca:</strong>
                        <p>{cepa.mouth}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ATTRIBUTES SLIDE */}
          {slide.type === 'attributes' && (
            <div className="slide-layout-attributes animate-fade-in">
              <span className="slide-label">{slide.subtitle}</span>
              <h2 className="slide-title text-center">{slide.title}</h2>
              <p className="slide-desc text-center max-w-xl">{slide.description}</p>
              
              <div className="attributes-deck-list">
                {slide.attributes.map((attr, idx) => (
                  <div key={idx} className="attribute-deck-card glassmorphic">
                    <div className="attr-deck-header">
                      <span className="attr-deck-num">0{idx + 1}</span>
                      <div>
                        <h3 className="attr-deck-title">{attr.title}</h3>
                        <span className="attr-deck-badge">{attr.badge}</span>
                      </div>
                    </div>
                    <p className="attr-deck-desc">{attr.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* NUMBERS / VENDIMIA SLIDE */}
          {slide.type === 'numbers' && (
            <div className="slide-layout-numbers animate-fade-in">
              <span className="slide-label">{slide.subtitle}</span>
              <h2 className="slide-title text-center">{slide.title}</h2>
              <p className="slide-desc text-center max-w-xl">{slide.description}</p>
              
              <div className="vendimia-editions-grid">
                {slide.editions.map((ed, idx) => (
                  <div key={idx} className={`vendimia-edition-card glassmorphic ${idx === 1 ? 'edition-featured' : ''}`}>
                    <div className="edition-header">
                      <span className="edition-year">{ed.year}</span>
                      <div className="edition-grow-badge">📈 Crecimiento</div>
                    </div>
                    <div className="edition-stats-row">
                      <div className="edition-stat">
                        <span className="edition-big-num">{ed.visitors}</span>
                        <span className="edition-stat-label">{ed.visitorLabel}</span>
                      </div>
                      <div className="edition-divider-v"></div>
                      <div className="edition-stat">
                        <span className="edition-big-num edition-wineries-num">{ed.wineries}</span>
                        <span className="edition-stat-label">{ed.wineryDetail}</span>
                      </div>
                    </div>
                    <p className="edition-desc">{ed.highlight}</p>
                  </div>
                ))}
              </div>

              <div className="numbers-deck-highlight glassmorphic">
                <span className="icon">🍇</span>
                <p>{slide.highlight}</p>
              </div>
            </div>
          )}

          {/* BUSINESS SLIDE */}
          {slide.type === 'business' && (
            <div className="slide-layout-business animate-fade-in">
              <span className="slide-label">{slide.subtitle}</span>
              <h2 className="slide-title text-center">{slide.title}</h2>
              <p className="slide-desc text-center max-w-xl">{slide.description}</p>
              
              <div className="business-deck-grid">
                {slide.pillars.map((pillar, idx) => (
                  <div key={idx} className="business-deck-card glassmorphic">
                    <h3 className="biz-deck-title">{pillar.title}</h3>
                    <p className="biz-deck-desc">{pillar.desc}</p>
                  </div>
                ))}
              </div>

              <div className="business-deck-footer">
                <div className="biz-footer-item">
                  <span className="icon">✉</span> {slide.contactInfo.email}
                </div>
                <div className="biz-footer-item">
                  <span className="icon">☏</span> {slide.contactInfo.phone}
                </div>
                <div className="biz-footer-item">
                  <span className="icon">📍</span> {slide.contactInfo.location}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Navigation arrows */}
        <button className="nav-arrow prev" onClick={prevSlide} aria-label="Diapositiva Anterior">
          ‹
        </button>
        <button className="nav-arrow next" onClick={nextSlide} aria-label="Diapositiva Siguiente">
          ›
        </button>

        {/* Dots indicators */}
        <div className="presentation-dots">
          {slidesData.map((_, idx) => (
            <button
              key={idx}
              className={`pres-dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Ir a diapositiva ${idx + 1}`}
            ></button>
          ))}
        </div>

        {/* Help text */}
        <div className="presentation-help">
          Navega con las flechas ⇦ ⇨ del teclado. Presiona ⛶ para pantalla completa.
        </div>
      </div>
    </div>
  );
}
