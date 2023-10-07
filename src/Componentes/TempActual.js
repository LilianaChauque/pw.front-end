import React from "react";
import '../Styles/TempActual.css';
import Termometro from 'react-thermometer-component'
import data from '../Data.json'
import tiempoImagen from '../imagenes/tiempo_clima.jpg'

export function TempActual(props) {
    let TempActual = data["current_weather"]["temperature"];
    let fecha = data["daily"]["time"];

    return (
        <div className="dia">
            <div className="temp-container">
            <h1>TIEMPO Y CLIMA</h1>                             
               <p className="dia">{fecha} </p>
               <div className="termometro-container">
                   <Termometro
                       theme="dark"
                       value={TempActual}
                       max="50"
                       steps="10"
                       format="ºC"
                       size="normal"
                       height="250"
                   /> 
                                           
                </div>
              </div>
           </div>
        
        
    );
}
