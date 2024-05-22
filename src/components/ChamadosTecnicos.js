import React from 'react';
import './ChamadosTecnicos.css';

const chamadosData = [
  { numero: '77BR-M04245', data: '04/05/2024', tecnico: 'João', status: 'Concluído' },
  { numero: '77BR-M05246', data: '05/05/2024', tecnico: 'Nataly', status: 'Deslocamento' },
  { numero: '77BR-M06247', data: '06/05/2024', tecnico: 'Jhonatan', status: 'Em análise' },
  { numero: '77BR-M06248', data: '06/05/2024', tecnico: 'Hellen', status: 'Concluído' },
];

const ChamadosTecnicos = () => {
  return (
    <div className="chamados-tecnicos">
      <p style={{ fontSize: '15px', lineHeight: '10px', fontWeight: 'bold' }}>CHAMADOS TÉCNICOS</p>
      <div className="tabela-wrapper">
        <table>
          <thead>
            <tr>
              <th>N°</th>
              <th>Data</th>
              <th>Técnico</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {chamadosData.map((chamado, index) => (
              <tr key={index}>
                <td>{chamado.numero}</td>
                <td>{chamado.data}</td>
                <td>{chamado.tecnico}</td>
                <td>{chamado.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br></br>
      <br></br>

      <button className="botao-abrir-chamado">Abrir chamado</button>
    </div>
  );
};

export default ChamadosTecnicos;
