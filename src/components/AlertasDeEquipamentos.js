import React from 'react';
import './AlertasDeEquipamentos.css';

const AlertasDeEquipamentos = () => {
  return (
    <div className="alertas-de-equipamentos">
      <p style={{ fontSize: '20px', lineHeight: '10px' }}>Alertas de Equipamentos</p>
      <div className="tabela-wrapper"> {/* Div que envolve a tabela */}

      <table>
        <thead>

          <tr>
            <th style={{ fontSize: '16px'}} >Equipamento</th>
             <th style={{ fontSize: '16px'}} >Faixa</th>
             <th style={{ fontSize: '16px'}} >Posição</th>
             <th style={{ fontSize: '16px'}} >Status</th>
             <th style={{ fontSize: '16px'}} >Erro</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ fontSize: '14px'}} >Laser</td>
            <td style={{ fontSize: '14px'}} >2</td>
            <td style={{ fontSize: '14px'}} >Frontal</td>
            <td style={{ fontSize: '14px'}} >Falha de comun.</td>
            <td style={{ fontSize: '14px'}} >NRF#57</td>
          </tr>
          <tr>
            <td style={{ fontSize: '14px'}} >Leitor TAG/OBU</td>
            <td style={{ fontSize: '14px'}} >3</td>
            <td style={{ fontSize: '14px'}} >N/A</td>
            <td style={{ fontSize: '14px'}} >Falha de energia</td>
            <td style={{ fontSize: '14px'}} >NRF#401</td>
          </tr>
          <tr>
            <td style={{ fontSize: '14px'}} >Câmera</td>
            <td style={{ fontSize: '14px'}} >6</td>
            <td style={{ fontSize: '14px'}} >Frontal</td>
            <td style={{ fontSize: '14px'}} >Desligado</td>
            <td style={{ fontSize: '14px'}} >NRF#08</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default AlertasDeEquipamentos;
