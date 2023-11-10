import React, {useState} from "react";
import '../Styles/MinMax.css';
import termMaxImagen from '../imagenes/thermometer-warmer.svg'
import termMinImagen from '../imagenes/thermometer-colder.svg'

export function MinMax(props) {
   const weatherData = props.weatherData; 

   const [tempMax, setTempMax] = useState(weatherData.daily.temperature_2m_max);
   const [tempMin, setTempMin] = useState(weatherData.daily.temperature_2m_min); 
    
    return (
        <div className="datos">
           
               <div className="temp1"> 
                  <p>Temp. Máxima º C</p>
                  <img className="term_Max" src={termMaxImagen} alt={"max"} style={{height: '50%', width: '50%'}}/>
                  <p className="maxima">{tempMax}</p>            
               </div>
               <div className="temp2"> <p>Temp. Mínima º C</p>
               <img className="term_Min" src={termMinImagen} alt={"min"} style={{height: '50%', width: '50%'}}/>
            <p className="minima">{tempMin}</p>
               </div>
            </div>
        
    );
}
