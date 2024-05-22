import React from 'react';
import './Eventos.css'; // Importe o arquivo CSS para aplicar os estilos

const eventos = [
  { id: 1, placa: 'JAK-4M56', modelo: 'Chevrolet Onix - Branco', tempo: '3h 15min', velocidade: '107km/h' },
  { id: 2, placa: 'VNO-5P67', modelo: 'Jeep Renegade - Preto', tempo: '7h 40min', velocidade: '98km/h' },
  { id: 3, placa: 'PQR-6S78', modelo: 'Toyota Corolla - Preto', tempo: '11h 30min', velocidade: '115km/h' },
  { id: 4, placa: 'STU-7V89', modelo: 'Hyundai HB20 - Cinza', tempo: '13h 35min', velocidade: '67km/h' },
  { id: 5, placa: 'VWX-8Y90', modelo: 'Kia Sportage - Azul', tempo: '15h 20min', velocidade: '132km/h' }
];

const imagens = [
  "./Images/JAK-4M56.png",
  "./Images/VNO-5P67.png",
  "./Images/PQR-6S78.png",
  "./Images/STU-7V89.png",
  "./Images/VWX-8Y90.png"
];

const Eventos = () => {
  return (
    <div className="eventos">
      <h3>Eventos</h3>
      <div className="eventos-lista">
        <span className="acima-velocidade">Todos os Eventos</span>
        <span className="evasao">Evasão</span>
        <span className="acima-velocidade">Acima da Velocidade</span>
        <span className="em-alerta">Em Alerta</span>
      </div>
      <div className="eventos-container">
        {eventos.map((evento, index) => (
          <div key={evento.id} className="evento-item">
            <img src={imagens[index]} alt={evento.modelo} className="evento-imagem" />
            <div className="info-evento">
              <div className="placa">{evento.placa}</div>
              <div className="modelo">{evento.modelo} - {evento.tempo} - {evento.velocidade}</div>
            </div>
            <div className="evento-icon"><img src='./Images/sla.png' alt="icon" /></div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Eventos;
