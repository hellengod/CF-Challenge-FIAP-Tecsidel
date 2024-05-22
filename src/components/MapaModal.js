import React from 'react';
import './MapaModal.css';

const MapaModal = ({ onClose }) => {
  return (
    <div className="modal-mapa" style={{ display: 'block' }}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="modal-header">
          <h1 className="modal-title">MAPA DA ESTAÇÃO</h1>
          <p className="modal-subtitle">ESTAÇÃO: BR 116 - Regis Bittencourt</p>
        </div>
        <div className="modal-logos">
          <img src="./Images/hamb.png" alt="Logo 1" />
          <img src="./Images/inf.png" alt="Logo 2" />
        </div>
        <div className="modal-map">
          <img src="./Images/mapa.png" alt="Mapa da estação" />
        </div>
      </div>
    </div>
  );
};

export default MapaModal;
