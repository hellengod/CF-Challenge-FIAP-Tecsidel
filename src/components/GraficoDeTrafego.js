import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './GraficoDeTrafego.css';

const data = {
  labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
  datasets: [
    {
      label: '', // Removendo a label para evitar a exibição na legenda
      data: [1, 2, 1, 3, 1, 2, 1],
      fill: false,
      borderColor: '#000',
      tension: 0.4 // Linha mais arredondada
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // Adicionado para manter a proporção
  scales: {
    x: {
      grid: {
        display: false // Desativa a grade do eixo X
      },
      ticks: {
        autoSkip: false, // Não pular os rótulos
        maxRotation: 0, // Não girar os rótulos
      }
    },
    y: {
      grid: {
        display: false // Desativa a grade do eixo Y
      }
    }
  },
  plugins: {
    title: {
      display: false // Removendo o título do gráfico
    },
    legend: {
      display: false // Oculta a legenda (quadrado cinza)
    },
    tooltip: {
      callbacks: {
        title: function (tooltipItems, data) {
          // Verifica se há dados e se o índice existe antes de acessá-lo
          if (data && data.labels && data.labels[tooltipItems[0]?.dataIndex]) {
            return data.labels[tooltipItems[0].dataIndex]; // Retorna o dia da semana
          }
          return '';
        },
        label: function (tooltipItem) {
          return tooltipItem.dataset.label + ': ' + tooltipItem.formattedValue + 'h'; // Retorna o valor e adiciona 'h' ao final
        }
      }
    }
  }
};

const GraficoDeTrafego = () => {
  return (
    
    <div className="grafico-container">
              <br></br>

      <div className="grafico-de-trafego">
        <div className="textos-grafico">
          <span className="volume-maximo">Volume Máximo</span>
          <span className="evasao">Evasão</span>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Line data={data} options={options} />
      </div>
      <br></br>
      <br></br>

      <br></br>

      <br></br>

    </div>
    
  );
};

export default GraficoDeTrafego;
