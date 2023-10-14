import React, { useState } from "react";
import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS} from "chart.js/auto";
import  data from '../Data.json';

export function Hoy(props) {

  
  const horas = data.hourly.time;
  const temperaturas = data.hourly.temperature_2m;

  
  const [hora, setHora] = useState(horas);
  const [temperatura, setTemperatura] = useState(temperaturas);

  
  const etiquetas = horas.map((hora) => {
    const fechaHora = new Date(hora);
    return fechaHora.toLocaleTimeString().replace(/:00$/, "");
  });


  const chartData = {
    labels: etiquetas,
    datasets: [
      {
        label: "Temperatura (ºC)",
        data: temperaturas,
        backgroundColor: "rgba(50, 188, 19, 0.6)",
        borderColor: "rgba(3, 16, 0, 0.95)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(81, 19, 188, 0.6)",
        hoverBorderColor: "red",
      },
    ],
  };

 
  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className='hoy'>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}

