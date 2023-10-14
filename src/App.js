import {useState,useEffect} from 'react';
import './App.css';
import { TempActual } from './Componentes/TempActual';
import {Destacados} from './Componentes/Destacados';
import {Hoy} from './Componentes/Hoy';
import {MinMax} from './Componentes/MinMax';
import transporteImagen from './imagenes/bus.png';


function App() { 
  
  
 
    return (
    <div className='contenedor'>
        <div className='transporte'>
          <h1>TRANSPORTE</h1> 
          <p>En breve, aqui, podremos observar información del transporte.</p>
          <img className= "transporte" src = {transporteImagen} alt={"colectivo"} style={{height: '75%', width: '100%'}}/>
        </div>   
           
        <div className="clima">       
           <TempActual/>
           <MinMax/>
           <Hoy/>
           <Destacados/>
        </div>
        </div>
           
          
        
 
    

  );
}

export default App;

