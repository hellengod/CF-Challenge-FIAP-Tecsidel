import React from 'react';
import './MonitoramentoModal.css'

const MonitoramentoModal = ({ onClose }) => {
    return (
        <div className="modal-monitoramento">
            <div className="monitoramento-content">
                <span className="close" onClick={onClose}>&times;</span>
                <div className="buttons-monitoramento">
                    <img src="./Images/atendimento.png" alt="atendimento" className="botao-monitoramento" />
                    <img src="./Images/mapamapa.png" alt="mapamapa" className="botao-monitoramento" />
                    <img src="./Images/fs.png" alt="fullscreen" className="botao-monitoramento" />
                </div>
                <div>
                    <h1 className="monitoramento-header">Monitoramento 24/7</h1>
                    <p className="monitoramento-subtitle">ESTAÇÃO: KM 298 - Régis Bittencourt</p>
                </div>
                <div className="cameras">
                    <div className="camera">
                        <img src='./Images/camera1.png' alt="Camera1" className="camera1-image" />
                    </div>
                    <div className="camera">
                        <img src='./Images/camera2.png' alt="Camera2" className="camera2-image" />
                    </div>
                    <div className="camera">
                        <img src='./Images/camera3.png' alt="Camera3" className="camera3-image" />
                    </div>
                    <div className="camera">
                        <img src='./Images/camera4.png' alt="Camera4" className="camera4-image" />
                    </div>
                    <div className="camera">
                        <img src='./Images/camera5.png' alt="Camera5" className="camera5-image" />
                    </div>
                    <div className="camera">
                        <img src='./Images/camera6.png' alt="Camera6" className="camera6-image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonitoramentoModal;