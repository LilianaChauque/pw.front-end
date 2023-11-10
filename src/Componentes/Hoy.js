import React, { useState } from "react";
import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS} from "chart.js/auto";


export function Hoy(props) {
 const weatherData = props.weatherData;  
  const horas = weatherData.hourly.time;
  const temperaturas = weatherData.hourly.temperature_2m;

  const horasFiltradas = ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00", "23:00"];
  const etiquetas = horas
    .filter((hora) => horasFiltradas.includes(new Date(hora).toLocaleTimeString().replace(/:00$/, "")))
    .map((hora) => new Date(hora).toLocaleTimeString().replace(/:00$/, ""));

  const temperaturasFiltradas = horas
    .filter((hora) => horasFiltradas.includes(new Date(hora).toLocaleTimeString().replace(/:00$/, "")))
    .map((hora) => temperaturas[horas.indexOf(hora)]);

  const chartData = {
    labels: etiquetas,
    datasets: [
      {
        label: "Temperatura (ºC)",
        data: temperaturasFiltradas,
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

