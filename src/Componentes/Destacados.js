import '../Styles/Destacados.css';
import React from 'react'
import uvImagen from '../imagenes/uv-index.svg'
import vientoImagen from '../imagenes/wind.svg'
import amanecerImagen from '../imagenes/sunrise.svg'
import ocasoImagen from '../imagenes/sunset.svg'
import sTImagen from '../imagenes/termometro.svg'
import humedadImagen from '../imagenes/humidity.svg'
import verImagen from '../imagenes/horizon.svg'
import data from '../Data.json'

export function Destacados(props) {
    let indexUV=data["daily"]["uv_index_max"];
    let viento=data["current_weather"]["windspeed"];
    let amanecer=data["daily"]["sunrise"]; // en data.json modifique los valores (le saque la fecha), a los efectos de cumplir con la primera entrega. En la semana voy a dejarlo como estaba.
    let ocaso=data["daily"]["sunset"]; // idem comentario anterior.
    let sensatermica=data["hourly_units"]["apparent_temperature"]; // utilice estos valores modificandolos cuando resuelva la manera de obtenerlos de la manera correcta, volveran a su estado inicial y usare los que corresponden segun el día y la hora ["hourly"].
    let humedad=data["hourly_units"]["relativehumidity_2m"]; // idem, anterior.
    let visibilidad=data["hourly_units"]["visibility"]; // idem anterior.
    return (
        <div className="varios">
            
           <div className="caja">
                <p>Indice UV</p>                
                <img className="uv" src={uvImagen} alt={"U.V."} style={{height: '50%', width: '50%'}}/>
                <p>{indexUV}</p>
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
                <p>Sensación Térmica</p>
                <img className="sensTerm" src={sTImagen} alt={"S.T."} style={{height: '50%', width: '50%'}}/>
                <p>{sensatermica} ºC</p> 
           </div>
           
           <div className='caja'>
                <p>Humedad</p>
                <img className="humedad" src={humedadImagen} alt={"humedad"} style={{height: '50%', width: '50%'}}/>
                <p>{humedad} </p> 
           </div>

           <div className='caja'>
                 <p>Visibilidad</p>
                 <img className="vision" src={verImagen} alt={"visibilidad"} style={{height: '50%', width: '50%'}}/>
                <p>{visibilidad} m</p> 
                 </div>

        </div>
    );
}
