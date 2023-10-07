import {useState} from 'react';
import './App.css';
import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS} from "chart.js/auto";
import { TempActual } from './Componentes/TempActual';
import {Destacados} from './Componentes/Destacados';
/*import {Hoy} from './Componentes/Hoy';*/
import {MinMax} from './Componentes/MinMax';
import transporteImagen from './imagenes/bus.png';
import  data from './Data.json';

function App() { 
    
  const data = {
    labels: [
      "00:00",  "03:00","06:00",  "09:00", "12:00", "15:00","18:00", "21:00", "23:00"
    ],
    datasets: [
      {
        label: "Temperature (°C)",
        data: [
          16.9, 15.5, 14.3, 15.7, 17.5, 18.5,18.6, 15.3,  14.3
        ],
        backgroundColor: " rgba(50, 188, 19, 0.6)",
        borderColor: "rgba(3, 16, 0, 0.95)",        
        borderWidth: 1,
        hoverBackgroundColor: "rgba(81, 19, 188, 0.6)",
        hoverBorderColor: "red",
      },
    ], 
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true
  }
 
    return (
    <div className='contenedor'>
        <div className='transporte'>
          <h1>TRANSPORTE</h1> 
          <p>En breve, aqui, podremos observar información del transporte.</p>
          <img className= "transporte" src = {transporteImagen} alt={"colectivo"} style={{height: '75%', width: '100%'}}/>
        </div>   
           
        <div className="clima">       
           <TempActual/>
           <MinMax/>
           <div className='hoy'>
           <Bar data={data} options={options}/>
           </div>
           <Destacados/>
        </div>
        </div>
           
          
        
 
    

  );
}

export default App;

