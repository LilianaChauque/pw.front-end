import {useState,useEffect} from 'react';
import './App.css';
import { Clima } from './Componentes/Clima';
import { Transport } from './Componentes/transport'; 

function App() {  
  const [isDay, setIsDay] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleDayNightChange = (isDay) => {
    setIsDay(isDay);
    setIsDarkMode(!isDay);
  };
 
    return (
    <div className='contenedor'>
        <div className='transporte'>        
          <Transport isDarkMode={isDarkMode} />                   
        </div>   
           
        <div className="clima">       
           <Clima onDayNightChange={handleDayNightChange} />
        </div>      
    </div>    
        
  );
}

export default App;

