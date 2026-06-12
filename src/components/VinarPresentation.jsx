import React, { useState, useEffect, useRef } from 'react';
import {
  Grape, Snowflake, Wind, Droplets, Star, Globe, Package, ShoppingBag,
  DollarSign, MapPin, Mail, Phone, ChevronRight, ArrowLeft, Maximize2, Minimize2,
  Building2, Users, Calendar, Flag, Rocket, CheckCircle2, Clock, TrendingUp
} from 'lucide-react';
import './VinarPresentation.css';

const slidesData = [
  {
    type: 'cover',
    title: 'VINAR',
    subtitle: 'La Frontera del Vino Chileno',
    badge: 'Vitivinicultura Austral de Cooperación y Alta Gama',
    description: 'Seis familias viñateras unidas en la Araucanía para desafiar los límites de la geografía, elaborando vinos de clima frío con una pureza y carácter únicos en el mundo.',
    actionText: 'Iniciar Presentación',
    bgGradient: 'radial-gradient(circle at 50% 50%, rgba(92, 19, 33, 0.95) 0%, rgba(11, 11, 13, 1) 100%)'
  },
  {
    type: 'cooperative',
    title: 'La Cooperativa VINAR',
    subtitle: '6 Familias, 1 Identidad Austral',
    description: 'La unión hace la fuerza en la frontera del vino chileno. Agrupamos a seis proyectos boutique pioneros de la Araucanía, compartiendo conocimientos y recursos para posicionar la vitivinicultura austral en el mapa global.',
    vinas: [
      { name: 'Viña Wuampuhue', zone: 'Cautín', desc: 'Experiencia Mapuche Lafkenche con producción artesanal limitada en Carahue.' },
      { name: 'Viña Cavallieri', zone: 'Cautín', desc: 'Tradición de origen italiano y finos vinos de Los Sauces.' },
      { name: 'Viña Quimey', zone: 'Malleco', desc: 'Vinos costeros de fuerte carácter oceánico en la Cordillera de la Costa.' },
      { name: 'Viña Don Damián', zone: 'Cautín', desc: 'Tradición familiar e historia desde 1925 en Galvarino.' },
      { name: 'Viña Kütralkura', zone: 'Malleco', desc: 'Bodega sustentable a los pies de la precordillera en Curacautín.' },
      { name: 'Viña Los Sauces', zone: 'Cautín', desc: 'Vinos de clima frío con carácter y elegancia en Los Sauces.' }
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
        iconKey: 'volcano',
        title: 'Suelos Volcánicos (Trumao)',
        desc: 'Suelos derivados de ceniza de volcanes milenarios (Llaima y Lonquimay), aportando una mineralidad profunda y gran persistencia en boca.'
      },
      {
        iconKey: 'snowflake',
        title: 'Clima Frío Extremo',
        desc: 'Temperaturas bajas y lluvias abundantes. La alta oscilación térmica ralentiza la maduración, permitiendo concentrar aromas delicados.'
      },
      {
        iconKey: 'wind',
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
        name: 'Riesling',
        profile: 'Delicado y Mineral',
        colorName: 'Amarillo Pálido',
        colorHex: '#f0f4c3',
        nose: 'Flores blancas, durazno, miel ligera y una nota de piedra húmeda característica.',
        mouth: 'Acidez vibrante, paso limpio y un final mineral persistente con retrogusto cítrico.'
      },
      {
        name: 'Sémillon',
        profile: 'Untuoso y Complejo',
        colorName: 'Dorado Intenso',
        colorHex: '#e8d08b',
        nose: 'Higo, melocotón maduro, cera de abeja y toques herbáceos sutiles.',
        mouth: 'Cuerpo amplio, textura grasa y sedosa, acidez moderada y final largo y especiado.'
      },
      {
        name: 'Gewürztraminer',
        profile: 'Floral y Exótico',
        colorName: 'Dorado Brillante',
        colorHex: '#ffd993',
        nose: 'Muy perfumado, con notas a pétalos de rosa, lichis y especias dulces.',
        mouth: 'De cuerpo medio, acidez equilibrada, textura untuosa y final muy aromático.'
      },
      {
        name: 'Viognier',
        profile: 'Aromático y Opulento',
        colorName: 'Oro Verde',
        colorHex: '#d4e8a0',
        nose: 'Durazno blanco, damasco, violetas y jazmín con toques de vainilla.',
        mouth: 'Cuerpo pleno, bajo en acidez, muy perfumado en boca y final persistente y floral.'
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
        mouth: 'Ligero, taninos extremadamente finos y sedosos, acidez natural vibrante y un final largo y frutal.'
      },
      {
        name: 'Merlot',
        profile: 'Suave y Complejo',
        colorName: 'Rubí Profundo',
        colorHex: '#802636',
        nose: 'Ciruelas jugosas, cerezas negras, toques especiados y notas a tabaco y tierra húmeda.',
        mouth: 'Cuerpo medio, taninos redondos y aterciopelados, acidez fresca y un final concentrado.'
      },
      {
        name: 'Malbec',
        profile: 'Intenso y Frutal',
        colorName: 'Púrpura Profundo',
        colorHex: '#5c1a6e',
        nose: 'Ciruela negra, mora, violeta y chocolate oscuro con sutiles notas de especias.',
        mouth: 'De cuerpo pleno, taninos firmes pero sedosos, buena acidez y final largo con persistencia frutal.'
      },
      {
        name: 'Syrah',
        profile: 'Especiado y Robusto',
        colorName: 'Rojo Oscuro',
        colorHex: '#6b1a28',
        nose: 'Pimienta negra, frutas negras, cuero y violeta con notas de tinta y grafito.',
        mouth: 'Cuerpo alto, taninos estructurados, acidez vibrante y un final largo especiado y mineral.'
      },
      {
        name: 'Cabernet Franc',
        profile: 'Elegante y Herbáceo',
        colorName: 'Granate Vivo',
        colorHex: '#8b2035',
        nose: 'Pimiento rojo, grosellas, frambuesa y toques de violeta y tierra húmeda.',
        mouth: 'De cuerpo medio, taninos finos y elegantes, acidez crujiente y final herbáceo y frutal.'
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
    type: 'milestones',
    title: 'Nuestro Camino',
    subtitle: 'Hitos que Construyen una Historia',
    description: 'Desde nuestra constitución hasta el escenario internacional, cada paso consolida la identidad de la vitivinicultura austral chilena:',
    achieved: [
      {
        date: 'Febrero 2025',
        iconKey: 'flag',
        title: 'Constitución de la Cooperativa VINAR',
        desc: 'Araucanía Asociativa apoyó, organizó y dirigió el proceso de constitución oficial de la cooperativa, uniendo a las cinco familias viñateras bajo una identidad común.'
      },
      {
        date: 'Mayo 2025',
        iconKey: 'grape',
        title: '1ª Fiesta de la Vendimia de la Araucanía',
        desc: 'Primera edición de la vendimia tardía. Más de 5.000 visitantes y 14 viñas de toda la región reunidas en un mismo escenario. El evento que consolidó la identidad del vino austral.'
      },
      {
        date: 'Agosto 2025',
        iconKey: 'globe',
        title: 'Expo Osaka · Semana del Vino Mundial',
        desc: 'VINAR representó los vinos del sur de Chile en la Expo Internacional de Osaka, Japón, durante la Semana del Vino Mundial, posicionando la Araucanía en el mapa vitivinícola global.'
      },
      {
        date: 'Septiembre 2025',
        iconKey: 'building',
        title: 'Presentación en Cineteca Nacional',
        desc: 'Presentación de vinos VINAR en la Cineteca Nacional (Palacio de La Moneda, Santiago). Invitados por la Embajada de Alemania.'
      },
      {
        date: 'Septiembre 2025',
        iconKey: 'building',
        title: 'Presentación en Destino Valparaíso',
        desc: 'Presentación de vinos VINAR en el Espacio Destino Valparaíso (Museo del Inmigrante). Invitados por la Embajada de Alemania.'
      },
      {
        date: 'Mayo 2026',
        iconKey: 'trending',
        title: '2ª Fiesta de la Vendimia de la Araucanía',
        desc: 'Segunda edición con mayor asistencia, más productores (sumando por primera vez una viña invitada de Argentina) y una demanda que supera toda expectativa. Más de 5.000 visitantes y 14 viñas reunidas, confirmando el crecimiento sostenido del evento.'
      }
    ],
    upcoming: [
      {
        date: 'Próximamente',
        iconKey: 'star',
        title: 'Día del Vino · Evento "500 Copas"',
        desc: 'Un evento exclusivo para celebrar el Día del Vino de la Araucanía, con una experiencia para 500 asistentes que explorarán lo mejor de la vitivinicultura austral.'
      },
      {
        date: '2027',
        iconKey: 'rocket',
        title: 'Fiesta de la Vendimia 2027',
        desc: 'La tercera edición proyecta un evento de mayor escala, consolidando la Vendimia de la Araucanía como el festival del vino más austral y único de Chile.'
      }
    ],
    bgGradient: 'radial-gradient(circle at 10% 80%, rgba(197, 160, 89, 0.15) 0%, rgba(11, 11, 13, 1) 90%)'
  },
  {
    type: 'scaling',
    title: '¿Qué Necesitamos para Escalar?',
    subtitle: 'Palancas de Crecimiento',
    description: 'VINAR tiene la identidad, el producto y la historia. Estos son los próximos pasos estratégicos para llevar la vitivinicultura austral al siguiente nivel:',
    needs: [
      {
        iconKey: 'shop',
        title: 'E-Commerce',
        badge: 'Base ya construida',
        desc: 'Contamos con sitio web, pero necesitamos escalar a una plataforma de venta online con carrito de compras, pasarela de pago y logística para entregar en todo Chile.'
      },
      {
        iconKey: 'package',
        title: 'Packaging Premium',
        badge: 'Identidad de marca',
        desc: 'Diseño y producción de packaging de alta gama: cajas de 6 botellas para regalo, bolsas con identidad VINAR y materiales que comuniquen la historia del vino austral.'
      },
      {
        iconKey: 'dollar',
        title: 'Financiamiento para Activaciones',
        badge: 'Crecimiento de mercado',
        desc: 'Capital para actividades enoturísticas, catas de autor, participación en ferias nacionales e internacionales y campañas de comunicación que posicionen la marca.'
      }
    ],
    bgGradient: 'radial-gradient(circle at 80% 20%, rgba(58, 13, 20, 0.9) 0%, rgba(11, 11, 13, 1) 90%)'
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
      email: 'vinar.chile@gmail.com',
      phone: '+56 9 8214 4582',
      location: 'Temuco, Región de la Araucanía'
    },
    bgGradient: 'radial-gradient(circle at 50% 50%, rgba(92, 19, 33, 0.95) 0%, rgba(11, 11, 13, 1) 100%)'
  },
  {
    type: 'masterplan360',
    title: 'Master Plan 360°',
    subtitle: 'Vendimia 2026',
    description: 'Visualiza la distribución de stands, áreas de cata y la experiencia completa del festival a través de nuestro recorrido virtual 360 interactivo.',
    bgGradient: 'radial-gradient(circle at 50% 50%, rgba(30, 30, 45, 0.95) 0%, rgba(11, 11, 13, 1) 100%)'
  }
];

// Icon map using Lucide
function SlideIcon({ iconKey, size = 24, className = '' }) {
  const props = { size, className, strokeWidth: 1.5 };
  switch (iconKey) {
    case 'volcano':   return <Droplets {...props} />;
    case 'snowflake': return <Snowflake {...props} />;
    case 'wind':      return <Wind {...props} />;
    case 'grape':     return <Grape {...props} />;
    case 'flag':      return <Flag {...props} />;
    case 'globe':     return <Globe {...props} />;
    case 'trending':  return <TrendingUp {...props} />;
    case 'star':      return <Star {...props} />;
    case 'rocket':    return <Rocket {...props} />;
    case 'shop':      return <ShoppingBag {...props} />;
    case 'package':   return <Package {...props} />;
    case 'dollar':    return <DollarSign {...props} />;
    case 'check':     return <CheckCircle2 {...props} />;
    case 'building':  return <Building2 {...props} />;
    default:          return <Star {...props} />;
  }
}

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
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      else if (e.key === 'ArrowLeft') prevSlide();
      else if (e.key === 'Escape' && isFullscreen) setIsFullscreen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, currentSlide]);

  const slide = slidesData[currentSlide];

  return (
    <div id="presentacion-vinar" className="presentation-page">
      <div
        ref={containerRef}
        className={`presentation-container ${isFullscreen ? 'fullscreen' : ''}`}
        style={{ background: slide.bgGradient }}
      >
        {/* Top bar */}
        <div className="presentation-top-bar">
          <a href="#inicio" className="btn-back-home" title="Volver al Inicio">
            <ArrowLeft size={14} strokeWidth={2} /> Inicio
          </a>
          <div className="presentation-brand">
            <span className="gold-text">VINAR</span> Pitch Deck
          </div>
          <div className="presentation-slide-indicator">
            {currentSlide + 1} / {totalSlides}
          </div>
          <button
            className="btn-control btn-fullscreen-toggle"
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Salir de Pantalla Completa' : 'Pantalla Completa'}
          >
            {isFullscreen ? <Minimize2 size={16} strokeWidth={1.5} /> : <Maximize2 size={16} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Progress bar */}
        <div className="presentation-progress-bar">
          <div
            className="presentation-progress-fill"
            style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          />
        </div>

        {/* Slide Content */}
        <div className="presentation-slide-content">

          {/* COVER */}
          {slide.type === 'cover' && (
            <div className="slide-layout-cover animate-fade-in">
              <span className="slide-badge">{slide.badge}</span>
              <h1 className="slide-title-large">{slide.title}</h1>
              <h2 className="slide-subtitle-large">{slide.subtitle}</h2>
              <div className="slide-divider" />
              <p className="slide-desc-large">{slide.description}</p>
              <button className="btn btn-primary slide-action-btn" onClick={nextSlide}>
                {slide.actionText} <ChevronRight size={18} strokeWidth={2} style={{ marginLeft: '0.25rem' }} />
              </button>
            </div>
          )}

          {/* COOPERATIVE */}
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

          {/* TERROIR */}
          {slide.type === 'terroir' && (
            <div className="slide-layout-terroir animate-fade-in">
              <span className="slide-label">{slide.subtitle}</span>
              <h2 className="slide-title text-center">{slide.title}</h2>
              <p className="slide-desc text-center max-w-xl">{slide.description}</p>
              <div className="terroir-deck-grid">
                {slide.pillars.map((pillar, idx) => (
                  <div key={idx} className="terroir-deck-card glassmorphic">
                    <div className="terroir-deck-icon">
                      <SlideIcon iconKey={pillar.iconKey} size={32} />
                    </div>
                    <h3 className="terroir-deck-title">{pillar.title}</h3>
                    <p className="terroir-deck-desc">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CEPAS BLANCAS */}
          {slide.type === 'cepas-blancas' && (
            <div className="slide-layout-cepas animate-fade-in">
              <span className="slide-label">{slide.subtitle}</span>
              <h2 className="slide-title text-center">{slide.title}</h2>
              <p className="slide-desc text-center max-w-xl">{slide.description}</p>
              <div className="cepas-deck-grid five-cols">
                {slide.cepas.map((cepa, idx) => (
                  <div key={idx} className="cepa-deck-card glassmorphic">
                    <div className="cepa-deck-header">
                      <div className="cepa-color-dot" style={{ backgroundColor: cepa.colorHex, boxShadow: `0 0 12px ${cepa.colorHex}` }} />
                      <div>
                        <h3 className="cepa-deck-name">{cepa.name}</h3>
                        <span className="cepa-deck-profile">{cepa.profile}</span>
                      </div>
                    </div>
                    <div className="cepa-deck-body">
                      <div className="cepa-characteristic-block">
                        <strong>Nariz:</strong>
                        <p>{cepa.nose}</p>
                      </div>
                      <div className="cepa-characteristic-block">
                        <strong>Boca:</strong>
                        <p>{cepa.mouth}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CEPAS TINTAS */}
          {slide.type === 'cepas-tintas' && (
            <div className="slide-layout-cepas animate-fade-in">
              <span className="slide-label">{slide.subtitle}</span>
              <h2 className="slide-title text-center">{slide.title}</h2>
              <p className="slide-desc text-center max-w-xl">{slide.description}</p>
              <div className="cepas-deck-grid five-cols">
                {slide.cepas.map((cepa, idx) => (
                  <div key={idx} className="cepa-deck-card glassmorphic">
                    <div className="cepa-deck-header">
                      <div className="cepa-color-dot" style={{ backgroundColor: cepa.colorHex, boxShadow: `0 0 12px ${cepa.colorHex}` }} />
                      <div>
                        <h3 className="cepa-deck-name">{cepa.name}</h3>
                        <span className="cepa-deck-profile">{cepa.profile}</span>
                      </div>
                    </div>
                    <div className="cepa-deck-body">
                      <div className="cepa-characteristic-block">
                        <strong>Nariz:</strong>
                        <p>{cepa.nose}</p>
                      </div>
                      <div className="cepa-characteristic-block">
                        <strong>Boca:</strong>
                        <p>{cepa.mouth}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ATTRIBUTES */}
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

          {/* MILESTONES TIMELINE */}
          {slide.type === 'milestones' && (
            <div className="slide-layout-milestones animate-fade-in">
              <div className="milestones-header">
                <span className="slide-label">{slide.subtitle}</span>
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-desc">{slide.description}</p>
              </div>
              <div className="milestones-body">
                <div className="milestones-column achieved-col">
                  <div className="milestones-col-label">
                    <CheckCircle2 size={14} strokeWidth={2} /> Logrados
                  </div>
                  {slide.achieved.map((m, idx) => (
                    <div key={idx} className="milestone-item glassmorphic">
                      <div className="milestone-icon-wrap achieved">
                        <SlideIcon iconKey={m.iconKey} size={18} />
                      </div>
                      <div className="milestone-content">
                        <span className="milestone-date">{m.date}</span>
                        <h4 className="milestone-title">{m.title}</h4>
                        <p className="milestone-desc">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="milestones-divider-v" />
                <div className="milestones-column upcoming-col">
                  <div className="milestones-col-label upcoming-label">
                    <Clock size={14} strokeWidth={2} /> Próximos Hitos
                  </div>
                  {slide.upcoming.map((m, idx) => (
                    <div key={idx} className="milestone-item glassmorphic upcoming">
                      <div className="milestone-icon-wrap upcoming">
                        <SlideIcon iconKey={m.iconKey} size={18} />
                      </div>
                      <div className="milestone-content">
                        <span className="milestone-date upcoming-date">{m.date}</span>
                        <h4 className="milestone-title">{m.title}</h4>
                        <p className="milestone-desc">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SCALING */}
          {slide.type === 'scaling' && (
            <div className="slide-layout-scaling animate-fade-in">
              <span className="slide-label">{slide.subtitle}</span>
              <h2 className="slide-title text-center">{slide.title}</h2>
              <p className="slide-desc text-center max-w-xl">{slide.description}</p>
              <div className="scaling-grid">
                {slide.needs.map((need, idx) => (
                  <div key={idx} className="scaling-card glassmorphic">
                    <div className="scaling-icon-wrap">
                      <SlideIcon iconKey={need.iconKey} size={28} />
                    </div>
                    <div className="scaling-card-body">
                      <div className="scaling-card-top">
                        <h3 className="scaling-title">{need.title}</h3>
                        <span className="scaling-badge">{need.badge}</span>
                      </div>
                      <p className="scaling-desc">{need.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* BUSINESS */}
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
                  <Mail size={16} strokeWidth={1.5} className="biz-icon" /> {slide.contactInfo.email}
                </div>
                <div className="biz-footer-item">
                  <Phone size={16} strokeWidth={1.5} className="biz-icon" /> {slide.contactInfo.phone}
                </div>
                <div className="biz-footer-item">
                  <MapPin size={16} strokeWidth={1.5} className="biz-icon" /> {slide.contactInfo.location}
                </div>
              </div>
            </div>
          )}

          {/* MASTER PLAN 360 */}
          {slide.type === 'masterplan360' && (
            <div className="slide-layout-masterplan animate-fade-in">
              <span className="slide-label">{slide.subtitle}</span>
              <h2 className="slide-title text-center">{slide.title}</h2>
              <p className="slide-desc text-center max-w-xl">{slide.description}</p>
              <div className="masterplan-iframe-container">
                <iframe
                  src="/360/vista360.html"
                  title="Master Plan 360 de la Vendimia 2026"
                  className="masterplan-iframe"
                  allowFullScreen
                />
              </div>
            </div>
          )}

        </div>

        {/* Navigation arrows */}
        <button className="nav-arrow prev" onClick={prevSlide} aria-label="Diapositiva Anterior">
          <ChevronRight size={22} strokeWidth={1.5} style={{ transform: 'rotate(180deg)' }} />
        </button>
        <button className="nav-arrow next" onClick={nextSlide} aria-label="Diapositiva Siguiente">
          <ChevronRight size={22} strokeWidth={1.5} />
        </button>

        {/* Dot indicators */}
        <div className="presentation-dots">
          {slidesData.map((_, idx) => (
            <button
              key={idx}
              className={`pres-dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Diapositiva ${idx + 1}`}
            />
          ))}
        </div>

        <div className="presentation-help">
          Navega con ← → del teclado · ⊞ para pantalla completa
        </div>
      </div>
    </div>
  );
}
