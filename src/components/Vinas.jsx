import React, { useState, useMemo } from 'react';
import './Vinas.css';
import vinasData from '../data/vinasData';

// Dynamic Zone Classification
const getZone = (vina) => {
  if (vina.id === 'quimey') return 'Valle de Malleco';
  if (vina.id === 'cavallieri') return 'Valle de Cautín';
  if (vina.id === 'wuampuhue') return 'Valle de Cautín';
  if (vina.id === 'los-sauces') return 'Valle de Cautín';

  const loc = vina.location.toLowerCase();
  if (loc.includes('pucón') || loc.includes('pucon')) return 'Zona Lacustre';
  if (loc.includes('carahue') || loc.includes('schmidt') || loc.includes('nohualhue') || loc.includes('imperial') || loc.includes('nehuentue')) return 'Zona Costa';
  if (loc.includes('traiguén') || loc.includes('traiguen') || loc.includes('sauces') || loc.includes('curacautín') || loc.includes('curacautin') || loc.includes('malleco') || loc.includes('angol')) return 'Valle de Malleco';
  if (loc.includes('galvarino') || loc.includes('freire') || loc.includes('padre las casas') || loc.includes('cautín') || loc.includes('cautin') || loc.includes('pitrufquén') || loc.includes('pitrufquen')) return 'Valle de Cautín';
  return 'Otras Zonas';
};

export default function Vinas() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState('Todas');
  const [selectedCepa, setSelectedCepa] = useState('Todas');
  const [activeVina, setActiveVina] = useState(null);

  // Dynamic lists of Zones and Cepas for filter buttons/dropdowns
  const zonesList = ['Todas', 'Valle de Malleco', 'Valle de Cautín', 'Zona Costa', 'Zona Lacustre'];
  
  const cepasList = [
    'Todas',
    'Pinot Noir',
    'Chardonnay',
    'Sauvignon Blanc',
    'Riesling',
    'Gewürztraminer',
    'Moscatel de Alejandría'
  ];

  // Process data to inject zones dynamically and restrict to cooperative members
  const vinasWithZones = useMemo(() => {
    const cooperativaIds = ['wuampuhue', 'cavallieri', 'quimey', 'don-damian', 'kutralkura', 'los-sauces'];
    return vinasData
      .filter(vina => cooperativaIds.includes(vina.id))
      .map(vina => ({
        ...vina,
        zone: getZone(vina)
      }));
  }, []);

  // Filter wineries based on search query, zone, and cepas
  const filteredVinas = useMemo(() => {
    return vinasWithZones.filter(vina => {
      const matchesSearch = 
        vina.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vina.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vina.cepas.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesZone = selectedZone === 'Todas' || vina.zone === selectedZone;
      
      const matchesCepa = selectedCepa === 'Todas' || vina.cepasList.some(cepa => 
        cepa.toLowerCase().includes(selectedCepa.toLowerCase())
      );

      return matchesSearch && matchesZone && matchesCepa;
    });
  }, [vinasWithZones, searchQuery, selectedZone, selectedCepa]);

  const openModal = (vina) => {
    setActiveVina(vina);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveVina(null);
    document.body.style.overflow = '';
  };

  return (
    <section id="vinas" className="vinas-section">
      <div className="container">
        
        {/* SECTION HEADER */}
        <div className="section-header">
          <span className="section-subtitle">Polo Vitivinícola</span>
          <h2 className="section-title">Nuestras Viñas Participantes</h2>
          <p className="section-desc">
            Explora los 15 proyectos que dan vida a la vitivinicultura más extrema del sur del mundo. Filtra por valle o variedad para descubrir tu próximo vino favorito.
          </p>
        </div>

        {/* SEARCH AND FILTERS BAR */}
        <div className="filters-container glassmorphic-filters">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Buscar viña por nombre, cepa o comuna..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button className="clear-search" onClick={() => setSearchQuery('')}>✕</button>
            )}
          </div>

          <div className="filter-groups">
            {/* Zone Filter */}
            <div className="filter-select-wrapper">
              <label>Valle / Zona:</label>
              <select 
                value={selectedZone} 
                onChange={(e) => setSelectedZone(e.target.value)}
                className="filter-select"
              >
                {zonesList.map(zone => (
                  <option key={zone} value={zone}>{zone}</option>
                ))}
              </select>
            </div>

            {/* Cepa Filter */}
            <div className="filter-select-wrapper">
              <label>Cepa Principal:</label>
              <select 
                value={selectedCepa} 
                onChange={(e) => setSelectedCepa(e.target.value)}
                className="filter-select"
              >
                {cepasList.map(cepa => (
                  <option key={cepa} value={cepa}>{cepa}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* WINERIES GRID */}
        {filteredVinas.length > 0 ? (
          <div className="vinas-grid">
            {filteredVinas.map((vina) => (
              <div 
                key={vina.id} 
                className="vina-card animate-fade"
                onClick={() => openModal(vina)}
              >
                <div className="vina-card-header" style={{ backgroundImage: `url(${vina.bg})` }}>
                  <div className="vina-card-overlay"></div>
                  <span className="vina-zone-badge">{vina.zone}</span>
                  <div className="vina-logo-container">
                    <img src={vina.logo} alt={`Logo de ${vina.name}`} className="vina-card-logo" />
                  </div>
                </div>

                <div className="vina-card-body">
                  <h3 className="vina-name">{vina.name}</h3>
                  <div className="vina-location-mini">
                    <span className="icon">📍</span> {vina.locationDetails.desc || vina.location}
                  </div>
                  <p className="vina-desc-short">
                    {vina.description.length > 130 
                      ? `${vina.description.substring(0, 130)}...` 
                      : vina.description}
                  </p>
                  
                  <div className="vina-cepas-tags">
                    {vina.cepasList.slice(0, 3).map((cepa, idx) => (
                      <span key={idx} className="cepa-tag">{cepa}</span>
                    ))}
                    {vina.cepasList.length > 3 && (
                      <span className="cepa-tag plus">+{vina.cepasList.length - 3}</span>
                    )}
                  </div>

                  <button className="btn-card-action">
                    Ver Ficha Técnica y Catas <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results glassmorphic">
            <span className="no-results-icon">🍇</span>
            <h3>No se encontraron viñas</h3>
            <p>Intenta cambiar los filtros de búsqueda o restablecer la selección.</p>
            <button 
              className="btn btn-outline"
              onClick={() => {
                setSearchQuery('');
                setSelectedZone('Todas');
                setSelectedCepa('Todas');
              }}
            >
              Restablecer Filtros
            </button>
          </div>
        )}
      </div>

      {/* DETAIL MODAL (FICHA TÉCNICA COMPLETA) */}
      {activeVina && (
        <div className="vina-modal-overlay" onClick={closeModal}>
          <div className="vina-modal-container glassmorphic" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal} aria-label="Cerrar modal">✕</button>
            
            {/* Modal Header / Banner */}
            <div className="modal-banner" style={{ backgroundImage: `url(${activeVina.bg})` }}>
              <div className="modal-banner-overlay"></div>
              <div className="modal-header-content">
                <img src={activeVina.logo} alt={`Logo ${activeVina.name}`} className="modal-logo" />
                <div>
                  <span className="modal-badge">{activeVina.zone}</span>
                  <h2 className="modal-title">{activeVina.name}</h2>
                  <p className="modal-subtitle">{activeVina.locationDetails.desc || activeVina.location}</p>
                </div>
              </div>
            </div>

            {/* Modal Grid Content */}
            <div className="modal-body-grid">
              
              {/* Left Column: Story and Contact */}
              <div className="modal-col-story">
                <div className="info-block">
                  <h3 className="block-title">Sobre la Viña</h3>
                  <div className="story-paragraphs">
                    {activeVina.paragraphs && activeVina.paragraphs.length > 0 ? (
                      activeVina.paragraphs.map((p, idx) => (
                        <p key={idx} className="story-p">{p}</p>
                      ))
                    ) : (
                      <p className="story-p">{activeVina.description}</p>
                    )}
                  </div>
                </div>

                {/* Contact and Social Networks */}
                <div className="info-block contact-block">
                  <h3 className="block-title">Contacto e Información</h3>
                  {activeVina.contactName && (
                    <div className="contact-meta-item">
                      <strong>Productor/a:</strong> {activeVina.contactName}
                    </div>
                  )}
                  <div className="social-links-grid">
                    {activeVina.nav.web && (
                      <a href={activeVina.nav.web} target="_blank" rel="noopener noreferrer" className="social-btn web">
                        <span className="icon">🌐</span> Sitio Web
                      </a>
                    )}
                    {activeVina.nav.instagram && (
                      <a href={activeVina.nav.instagram} target="_blank" rel="noopener noreferrer" className="social-btn instagram">
                        <span className="icon">📸</span> Instagram
                      </a>
                    )}
                    {activeVina.nav.whatsapp && (
                      <a href={activeVina.nav.whatsapp} target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
                        <span className="icon">💬</span> WhatsApp
                      </a>
                    )}
                    {activeVina.nav.email && (
                      <a href={activeVina.nav.email} className="social-btn email">
                        <span className="icon">✉</span> Enviar Email
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Wines / Cepas catalog */}
              <div className="modal-col-wines">
                <h3 className="block-title">Variedades y Notas de Cata</h3>
                <div className="wines-catalog-list">
                  {activeVina.cepaItems && activeVina.cepaItems.length > 0 ? (
                    activeVina.cepaItems.map((item, idx) => (
                      <div key={idx} className="wine-item-card glassmorphic">
                        {item.image && (
                          <div className="wine-img-wrapper">
                            <img src={item.image} alt={item.name} className="wine-bottle-img" />
                          </div>
                        )}
                        <div className="wine-info-content">
                          <h4 className="wine-name">{item.name}</h4>
                          <span className="wine-cepa-type-badge">{item.type}</span>
                          {item.description && (
                            <p 
                              className="wine-cata-notes"
                              dangerouslySetInnerHTML={{ __html: item.description }}
                            ></p>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="no-wines-text">Variedades de autor disponibles en el stand durante la Fiesta de la Vendimia.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Location & Map Section */}
            {activeVina.locationDetails.iframeSrc && (
              <div className="modal-location-section">
                <h3 className="block-title">Ubicación Geográfica</h3>
                <div className="map-wrapper">
                  <iframe 
                    title={`Mapa de ubicación de ${activeVina.name}`}
                    src={activeVina.locationDetails.iframeSrc} 
                    width="100%" 
                    height="300" 
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen="" 
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="map-buttons">
                  {activeVina.locationDetails.googleMapsUrl && (
                    <a href={activeVina.locationDetails.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline map-btn">
                      🗺️ Abrir en Google Maps
                    </a>
                  )}
                  {activeVina.locationDetails.wazeUrl && (
                    <a href={activeVina.locationDetails.wazeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline map-btn">
                      🚗 Navegar con Waze
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
