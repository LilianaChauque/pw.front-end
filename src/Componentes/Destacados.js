import '../Styles/Destacados.css';
import React, {useState, useEffect} from 'react'
import uvImagen from '../imagenes/uv-index.svg'
import vientoImagen from '../imagenes/wind.svg'
import amanecerImagen from '../imagenes/sunrise.svg'
import ocasoImagen from '../imagenes/sunset.svg'
import sTImagen from '../imagenes/termometro.svg'
import humedadImagen from '../imagenes/humidity.svg'
import verImagen from '../imagenes/horizon.svg'



export function Destacados(props) { 
    const weatherData = props.weatherData;   
   
    const datetimeAmanecer = weatherData.daily.sunrise
    const amanecer = weatherData.daily.sunrise[0].slice(11, 16);
   
    const ocaso = weatherData.daily.sunset[0].slice(11, 16);

  
    return (
        <div className="varios">
            
           <div className="caja">
                <p>Indice UV</p>                
                <img className="uv" src={uvImagen} alt={"U.V."} style={{height: '40%', width: '50%'}}/>
                <p>{weatherData.daily.uv_index_max}</p>
           </div>
           
           <div className="caja">
                <p>Velocidad del Viento</p>
                <img className="wind" src={vientoImagen} alt={"viento"} style={{height: '50%', width: '50%'}}/>
                <p>{weatherData.current.windspeed_10m} </p> 
           </div>
          
           <div className='caja'>
               <div className='caja1'>
                   <p>Amanecer</p>
                   <img className="amanecer" src={amanecerImagen} alt={"amanecer"} style={{height: '50%', width: '50%'}}/>
                   <p>{amanecer} hs</p> 
                   
                   <p>Ocaso</p>
                   <img className="sunset" src={ocasoImagen} alt={"puestaSol"} style={{height: '50%', width: '50%'}}/>
                   <p>{ocaso} hs</p> 
                </div> 
           </div>
          
           <div className='caja'>
                <p>Sensación Térmica ºC</p>
                <img className="sensTerm" src={sTImagen} alt={"S.T."} style={{height: '50%', width: '50%'}}/>
                <p>{weatherData?.hourly?.apparent_temperature[weatherData?.hourly?.time?.indexOf(weatherData?.current?.time?.slice(0, 13) + `:00`)]} </p> 
           </div> 
           
           <div className='caja'>
                <p>Humedad</p>
                <img className="humedad" src={humedadImagen} alt={"humedad"} style={{height: '50%', width: '50%'}}/>
                <p>{weatherData?.hourly?.relativehumidity_2m[weatherData?.hourly?.time?.indexOf(weatherData?.current?.time?.slice(0, 13) + `:00`)]} </p> 
           </div>

           <div className='caja'>
                 <p>Visibilidad m.</p>
                 <img className="vision" src={verImagen} alt={"visibilidad"} style={{height: '50%', width: '50%'}}/>
                <p>{weatherData?.hourly?.visibility[weatherData?.hourly?.time?.indexOf(weatherData?.current?.time?.slice(0, 13) + `:00`)]} </p> 
                 </div>

        </div>
    );
}        
