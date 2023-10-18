import {useState,useEffect} from 'react';
import './App.css';
import transporteImagen from './imagenes/bus.png';
import { TempActual } from './Componentes/TempActual';
import {MinMax} from './Componentes/MinMax';
import {Hoy} from './Componentes/Hoy';
import {Destacados} from './Componentes/Destacados';

function App() { 
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
   
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&current=temperature_2m,apparent_temperature,weathercode,windspeed_10m&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,visibility&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=America%2FSao_Paulo&forecast_days=1')
      .then(response => response.json())
      .then(data => {
       
        setWeatherData(data);
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error al obtener datos de la API:', error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Cargando datos...</div>;
  }
//
  if (!weatherData || !weatherData.current || !weatherData.hourly || !weatherData.daily) {
    return <div>No hay datos disponibles</div>;
  }
  
 
    return (
    <div className='contenedor'>
        <div className='transporte'>
          <h1>TRANSPORTE</h1> 
          <p>En breve, aqui, podremos observar información del transporte.</p>
          <img className= "transporte" src = {transporteImagen} alt={"colectivo"} style={{height: '75%', width: '100%'}}/>
        </div>   
           
        <div className="clima">       
           <TempActual weatherData={weatherData}/>
           <MinMax weatherData={weatherData}/>
           <Hoy weatherData={weatherData}/>
            <Destacados weatherData={weatherData}/>
        </div>
        </div>      
        
        
  );
}

export default App;

