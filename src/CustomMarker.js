import React, { useState } from 'react';
import '.components/CustomMarker.css';

const CustomMarker = ({ imgstatus, km, description, status, openMonitoramentoModal, openRelatoriosModal, openMapaModal }) => {


    return (
        <div className="custom-marker">
            <img src={imgstatus} alt="Status Image" className="status-image" />
            <div className="marker-content">
                <div className="marker-text">
                    <h4>KM {km} - {description}</h4>
                    <p>Status: {status}</p>
                </div>
                <div className="marker-buttons">
                    <img src="\Images\Button1.png" alt="Monitoramento" onClick={openMonitoramentoModal} />
                    <img src="\Images\Button2.png" alt="Relatorios" onClick={openRelatoriosModal} />
                    <img src="\Images\Button3.png" alt="Mapa" onClick={openMapaModal} />
                </div>
            </div>
        </div>
    );
};

export default CustomMarker;