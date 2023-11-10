import {useState,useEffect} from 'react';
import { TempActual } from '../Componentes/TempActual';
import {MinMax} from '../Componentes/MinMax';
import {Hoy} from '../Componentes/Hoy';
import {Destacados} from '../Componentes/Destacados';

export function Clima({ onDayNightChange })  { 
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
           
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.1818&current=temperature_2m,apparent_temperature,is_day,precipitation,weathercode,windspeed_10m&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,visibility&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=America%2FSao_Paulo&forecast_days=1')
      .then(response => response.json())
      .then(data => {       
        setWeatherData(data);
        setLoading(false); 
        setDarkMode(data.current.is_day === 0);
        onDayNightChange(data.current.is_day === 1);
        console.log('isDay:', data.current.is_day === 1);
      })
      .catch(error => {
        console.error('Error al obtener datos de la API:', error);
        setLoading(false);
      });
      
      const intervalId = setInterval(() => {
        fetch('https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.1818&current=temperature_2m,apparent_temperature,is_day,precipitation,weathercode,windspeed_10m&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,visibility&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=America%2FSao_Paulo&forecast_days=1')
        .then(response => response.json())
        .then(data => {
          setWeatherData(data);
          setDarkMode(data.current.is_day === 0);
          onDayNightChange(data.current.is_day === 1);
          console.log('isDay:', data.current.is_day );
        })
        .catch(error => {
          console.error('Error al obtener datos de la API:', error);
        });
      }, 15 * 60 * 1000);
  
      return () => {
        
        clearInterval(intervalId);
      };      
    }, []);   
  
  if (loading) {
    return <div>Cargando datos...</div>;
  }
//
  if (!weatherData || !weatherData.current || !weatherData.hourly || !weatherData.daily) {
    return <div>No hay datos disponibles</div>;
  }
  
  const isDay = weatherData.current.is_day === 1;

    return (   
           
        <div className={`clima ${isDay ? '' : 'dark-mode'}`}>
           <TempActual weatherData={weatherData}/>
           <MinMax weatherData={weatherData}/>
           <Hoy weatherData={weatherData}/>
            <Destacados weatherData={weatherData}/>
        </div>     
               
  );
}



