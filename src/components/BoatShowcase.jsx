import React from 'react';
import { Link } from 'react-router-dom';
import './BoatShowcase.css';
import { Ruler, Users, Settings } from 'lucide-react';
import { boats } from '../data/boats';

const BoatShowcase = () => {
  return (
    <section id="models" className="section bg-surface">
      <div className="container">
        <h2 className="section-title">Nuestras Matrices y Embarcaciones</h2>
        <p className="section-subtitle">
          Descubrí la línea de embarcaciones diseñadas para máximo rendimiento, confort y durabilidad en el agua.
        </p>

        <div className="models-grid">
          {boats.map((boat) => (
            <div key={boat.id} className="boat-card">
              <div className="boat-image">
                <img src={boat.image} alt={boat.name} />
                <div className="boat-overlay">
                  <Link to={`/bote/${boat.id}`} className="btn btn-outline" style={{color: '#fff', borderColor: '#fff'}}>
                    Ver Detalles
                  </Link>
                </div>
              </div>
              <div className="boat-content">
                <h3>{boat.name}</h3>
                <div className="boat-specs">
                  <div className="spec-item">
                    <Ruler size={16} />
                    <span>{boat.specs.length}</span>
                  </div>
                  <div className="spec-item">
                    <Users size={16} />
                    <span>{boat.specs.capacity}</span>
                  </div>
                  <div className="spec-item">
                    <Settings size={16} />
                    <span>{boat.specs.engine}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoatShowcase;
