import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { boats } from '../data/boats';
import './BoatDetail.css';
import { ChevronLeft, ChevronRight, ArrowLeft, Ruler, Users, Settings, CheckCircle } from 'lucide-react';

// WhatsApp Icon SVG
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const WHATSAPP_NUMBER = '5491112345678';

const BoatDetail = () => {
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbIndex, setThumbIndex] = useState(0);

  const boat = boats.find(b => b.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!boat) {
    return (
      <div className="not-found">
        <h2>Modelo no encontrado</h2>
        <Link to="/" className="btn btn-primary">Volver al inicio</Link>
      </div>
    );
  }

  const handlePrev = () => {
    const newIdx = currentIndex === 0 ? boat.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIdx);
    setThumbIndex(newIdx);
  };

  const handleNext = () => {
    const newIdx = currentIndex === boat.images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIdx);
    setThumbIndex(newIdx);
  };

  const selectImage = (idx) => {
    setCurrentIndex(idx);
    setThumbIndex(idx);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hola! Me interesa el modelo *${boat.name}* 🚤\n\nVi la página de Panga.Arg y quiero recibir más información sobre precio y disponibilidad.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <div className="boat-detail-page">
      {/* Header de la página de detalle */}
      <div className="detail-header">
        <div className="container">
          <button onClick={() => { window.location.href = '/#models'; }} className="back-btn">
            <ArrowLeft size={18} /> Volver a Modelos
          </button>
        </div>
      </div>

      <div className="container detail-container">
        {/* Galería */}
        <div className="detail-gallery">
          {/* Imagen Principal */}
          <div className="main-image-wrapper">
            <img
              key={currentIndex}
              src={boat.images[currentIndex]}
              alt={`${boat.name} - Vista ${currentIndex + 1}`}
              className="main-image"
            />
            {boat.images.length > 1 && (
              <>
                <button className="gallery-btn prev" onClick={handlePrev}>
                  <ChevronLeft size={28} />
                </button>
                <button className="gallery-btn next" onClick={handleNext}>
                  <ChevronRight size={28} />
                </button>
                <div className="image-counter">
                  {currentIndex + 1} / {boat.images.length}
                </div>
              </>
            )}
          </div>

          {/* Miniaturas */}
          {boat.images.length > 1 && (
            <div className="thumbnails">
              {boat.images.map((img, idx) => (
                <div
                  key={idx}
                  className={`thumb ${idx === thumbIndex ? 'active' : ''}`}
                  onClick={() => selectImage(idx)}
                >
                  <img src={img} alt={`Miniatura ${idx + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Info del modelo */}
        <div className="detail-info">
          <span className="detail-badge">Astillero Panga.Arg — Tigre</span>
          <h1 className="detail-title">{boat.name}</h1>
          <p className="detail-tagline">{boat.tagline}</p>

          {/* Especificaciones técnicas */}
          <div className="specs-table">
            <h3>Especificaciones Técnicas</h3>
            <div className="specs-grid">
              <div className="spec-row">
                <span className="spec-label"><Ruler size={15}/> Eslora</span>
                <span className="spec-value">{boat.specs.length}</span>
              </div>
              <div className="spec-row">
                <span className="spec-label"><Ruler size={15}/> Manga</span>
                <span className="spec-value">{boat.specs.beam}</span>
              </div>
              <div className="spec-row">
                <span className="spec-label"><Users size={15}/> Capacidad</span>
                <span className="spec-value">{boat.specs.capacity}</span>
              </div>
              <div className="spec-row">
                <span className="spec-label"><Settings size={15}/> Motor</span>
                <span className="spec-value">{boat.specs.engine}</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">🏗 Material</span>
                <span className="spec-value">{boat.specs.hull}</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">⚖ Peso</span>
                <span className="spec-value">{boat.specs.weight}</span>
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="detail-actions">
            <button className="btn-whatsapp-detail" onClick={handleWhatsApp}>
              <WhatsAppIcon /> Consultar por este Modelo
            </button>
            <a href={boat.instagramLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline ig-btn">
              <InstagramIcon /> Ver en Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Descripción y características en ancho completo */}
      <div className="detail-bottom">
        <div className="container detail-bottom-grid">
          <div className="detail-description">
            <h2>Sobre este modelo</h2>
            {boat.description.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="detail-features">
            <h2>Características</h2>
            <ul>
              {boat.features.map((feat, i) => (
                <li key={i}>
                  <CheckCircle size={18} className="feature-check" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA final */}
      <div className="detail-cta-banner">
        <div className="container">
          <h2>¿Te interesa la {boat.name}?</h2>
          <p>Contactanos ahora y te asesoramos sin compromiso.</p>
          <button className="btn-whatsapp-detail large" onClick={handleWhatsApp}>
            <WhatsAppIcon /> Consultar Precio por WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoatDetail;
