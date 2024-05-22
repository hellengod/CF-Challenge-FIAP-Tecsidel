import React from 'react';
import AlertasDeEquipamentos from './AlertasDeEquipamentos.js';
import Eventos from './Eventos';
import GraficoDeTrafego from './GraficoDeTrafego';
import ChamadosTecnicos from './ChamadosTecnicos';
import './RelatoriosModal.css';

const RelatoriosModal = ({ onClose }) => {
  return (
    <div className="modal-relatorio">
      <div className="main-content">
        <span className="closeRelatorio" onClick={onClose}>&times;</span>
        <h1 style={{ fontSize: '30px', lineHeight: '7px' }}>Relatórios e Estatísticas</h1>
        <h2 style={{ fontSize: '15px', lineHeight: '10px' }}>ESTAÇÃO: BR 116 - Régis Bittencourt</h2>
        <br></br>
        <div className="content">
          <div className="section-left" style={{ fontSize: '30px', lineHeight: '28px' }}>
            <AlertasDeEquipamentos />
            <Eventos />

          </div>
          <div className="section-right">
            <div className="trafego-wrapper">
              <div className="trafego-header">
                <div className="taxa-evasao">
                  <h3 style={{ fontSize: '20px', lineHeight: '10px' }}>11%</h3>
                  <br></br>
                  <p style={{ fontSize: '15px', lineHeight: '7px' }}>taxa de evasão</p>
                </div>
                <div className="classificacao-rodovia">
                  <h3 style={{ fontSize: '20px', lineHeight: '10px' }}>D</h3>
                  <br></br>
                  <p style={{ fontSize: '14px', lineHeight: '15px' }}>classificação da rodovia</p>
                </div>
              </div>
              <GraficoDeTrafego />
            </div>
            <ChamadosTecnicos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatoriosModal;
