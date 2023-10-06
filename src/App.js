import {useState} from 'react';
import './App.css';

import { TempActual } from './Componentes/TempActual';
import {Destacados} from './Componentes/Destacados';
import {Hoy} from './Componentes/Hoy';
import {MinMax} from './Componentes/MinMax';
/*import  data from './Data.json';*/

function App() { 
   /* let TempActual = data["current_weather"]["temperature"];*/
    
    return (
    <div className='contenedor'>
        <div className='transporte'></div>
        
      
        <div className="clima">
           
          
           <TempActual/>
           <MinMax/>
           <div className='hoy'></div>
           <Destacados/>
        </div>
        </div>
           
          
        
 
    

  );
}

export default App;

