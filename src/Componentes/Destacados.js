import '../Styles/Destacados.css';
import React, {useState, useEffect} from 'react'
import uvImagen from '../imagenes/uv-index.svg'
import vientoImagen from '../imagenes/wind.svg'
import amanecerImagen from '../imagenes/sunrise.svg'
import ocasoImagen from '../imagenes/sunset.svg'
import sTImagen from '../imagenes/termometro.svg'
import humedadImagen from '../imagenes/humidity.svg'
import verImagen from '../imagenes/horizon.svg'
import data from '../Data.json'
import { TempActual } from './TempActual';

export function Destacados(props) { 
    const fechaHoraRedondeada = redondearHoraAMinutoEnPunto(data.current_weather.time)
    const [horaSeleccionada, setHoraSeleccionada] = useState(fechaHoraRedondeada); // Aquí puedes almacenar la hora seleccionada por el usuario
    const [horaData, setHoraData] = useState(null);

    function redondearHoraAMinutoEnPunto(fechaHora) {
        const fechaHoraSplit = fechaHora.split("T");
        const fecha = fechaHoraSplit[0];
        const horaMinutos = fechaHoraSplit[1].split(":");
        const hora = horaMinutos[0];      
       
    const horaRedondeada = `${hora}:00`;               
              
    const fechaHoraRedondeada = `${fecha}T${horaRedondeada}`;
        
        return fechaHoraRedondeada;
    }

   
    const [viento, setViento] = useState(data.current_weather.windspeed);
    const [amanecer, setAmanecer] = useState(data.daily.sunrise);
    const [ocaso, setOcaso] = useState(data.daily.sunset);
    const [uvIndex, setUVIndex] = useState(data.daily.uv_index_max);

  


 
useEffect(() => {
    if (horaSeleccionada && data.hourly && data.hourly.time) {
        const indexHora = data.hourly.time.findIndex((hora) => hora === horaSeleccionada);
  
        if (indexHora !== -1) {
            const hora = data.hourly.time[indexHora];
            
            const apparentTemperature = data.hourly.apparent_temperature[indexHora];
            const relativeHumidity = data.hourly.relativehumidity_2m[indexHora];
            const visibility = data.hourly.visibility[indexHora];
    
            setHoraData({
                hora,
                apparentTemperature,
                relativeHumidity,
                visibility,
              });
            } else {
              
              setHoraData(null);
            }
          }
        }, [horaSeleccionada]);
      

return (
        <div className="varios">
            
           <div className="caja">
                <p>Indice UV</p>                
                <img className="uv" src={uvImagen} alt={"U.V."} style={{height: '40%', width: '50%'}}/>
                <p>{uvIndex}</p>
           </div>
           
           <div className="caja">
                <p>Velocidad del Viento</p>
                <img className="wind" src={vientoImagen} alt={"viento"} style={{height: '50%', width: '50%'}}/>
                <p>{viento} </p> 
           </div>
          
           <div className='caja'>
               <div className='caja1'>
                   <p>Amanecer</p>
                   <img className="amanecer" src={amanecerImagen} alt={"amanecer"} style={{height: '50%', width: '50%'}}/><p>{amanecer} hs</p> 
                
                   <p>Ocaso</p>
                   <img className="sunset" src={ocasoImagen} alt={"puestaSol"} style={{height: '50%', width: '50%'}}/>
                   <p>{ocaso} hs</p> 
                </div>
           </div>
          
           <div className='caja'>
                <p>Sensación Térmica ºC</p>
                <img className="sensTerm" src={sTImagen} alt={"S.T."} style={{height: '50%', width: '50%'}}/>
                <p>{horaData ? horaData.apparentTemperature: "N/A"} </p> 
           </div>
           
           <div className='caja'>
                <p>Humedad</p>
                <img className="humedad" src={humedadImagen} alt={"humedad"} style={{height: '50%', width: '50%'}}/>
                <p>{horaData ? horaData.relativeHumidity: "N/A"} </p> 
           </div>

           <div className='caja'>
                 <p>Visibilidad m.</p>
                 <img className="vision" src={verImagen} alt={"visibilidad"} style={{height: '50%', width: '50%'}}/>
                <p>{horaData ? horaData.visibility: "N/A"} </p> 
                 </div>

        </div>
    );
}
