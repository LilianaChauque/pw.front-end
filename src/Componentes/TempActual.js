import React, { useState } from "react";
import '../Styles/TempActual.css';
import Termometro from "react-thermometer-component";



export function TempActual(props) {
    const weatherData = props.weatherData;
    
    const tempActual = props.weatherData.current.temperature_2m;
    const fecha = props.weatherData.current.time;
   
    
    
    const fechaHora = new Date(fecha);
    const fechaFormateada = fechaHora.toLocaleDateString();
    const horaFormateada = fechaHora.toLocaleTimeString().replace(/:00$/, "");
    
  
    return (
        <div className="dia">
            <div className="temp-container">
            <h1>TIEMPO Y CLIMA</h1>                             
               <p className="dia">{fechaFormateada} {horaFormateada} </p>
               <div className="termometro-container">
                   <Termometro
                       theme="dark"
                       value={tempActual}
                       max="50"
                       steps="10"
                       format="ºC"
                       size="normal"
                       height="140"
                   /> 
                                           
                </div>
              </div>
           </div>
        
        
    );
}
