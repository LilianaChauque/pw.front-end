/*import React from "react";
import '../Styles/Hoy.css';
import {Bar} from "react-chartjs-2";
import { Chart as ChartJS} from "chart.js/auto";
import  data from './Data.json';*/

/*export function Hoy({}) {
    const [data, setData] = useState({
    labels: data.map((data) => data.temperature_2m),
    datasets: [
      {
        label: "data time",
        data: data.map((data) => data.time),
let tempXhora = [23,34,36,28,25]
let diaHora = [8,12,15,19,22]
var miData = {
labels: [diaHora],
datasets:[{
  labels: "tempXhora",
  data: tempXhora,}]
}

      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "black",
      borderWidth: 2,
    },
  ],
};
   
    return <Bar data={Hoy}/>
        

}*/
/*import React from "react";
import { Bar } from "react-chartjs-2";

export function Hoy() {
  const data = {
    labels: [
      "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00",
      "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00",
      "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
    ],
    datasets: [
      {
        label: "Temperature (°C)",
        data: [
          16.9, 16.8, 16.2, 15.5, 15.0, 14.7, 14.3, 14.1,
          14.4, 15.7, 16.5, 17.1, 17.5, 17.6, 18.1, 18.5,
          18.7, 18.9, 18.6, 17.5, 15.9, 15.3, 14.8, 14.3
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Temperature (°C)",
        },
      },
      xAxes:[ {
        title: {
          display: true,
          text: "Time",
        },
      }],
    },
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
}*/
