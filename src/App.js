import {useState,useEffect} from 'react';
import './App.css';
import { Clima } from './Componentes/Clima';
import { Transport } from './Componentes/transport'; 

function App() {  
 
    return (
    <div className='contenedor'>
        <div className='transporte'>        
          <Transport/>                   
        </div>   
           
        <div className="clima">       
           <Clima/>
        </div>      
    </div>    
        
  );
}

export default App;

