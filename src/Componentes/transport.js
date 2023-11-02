import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import '../Styles/transport.css';
import busIcon from '../imagenes/bus.png';
import bus2Icon from '../imagenes/bus2.png';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export function Transport() {
  const position = [-34.6131,	-58.37723];
 
  const [busLinea, setBusLinea] = useState([]);
  const [selectedLinea, setSelectedLinea] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState('');
  const [selectedLineBusPositions, setSelectedLineBusPositions] = useState([])
  const [transporteData, setTransporteData] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
fetch('https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6')
      .then(response => response.json())
      .then(data => {
       
        setTransporteData(data);
        setLoading(false);
      
      })
      .catch(error => {
        console.error('Error al obtener datos de la API:', error);
        setLoading(false);
      });
     
      const intervalId = setInterval(() => {
        fetch('https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6')
        .then(response => response.json())
        .then(data => {
          setTransporteData(data);
         
        })
        .catch(error => {
          console.error('Error al obtener datos de la API:', error);
        });
      }, 31000);
  
      return () => {
        
        clearInterval(intervalId);        
      };
          
    }, []);
    

    useEffect(() => {
      if (transporteData) {
        const uniqueLines = [...new Set(transporteData.map(bus => bus.route_short_name))];
            
     setBusLinea(uniqueLines);
      }
    }, [transporteData]);

  
    useEffect(() => {
      if (transporteData) {
        const selectedLinePositions = transporteData.filter(bus => bus.route_short_name === selectedLinea);
        setSelectedLineBusPositions(selectedLinePositions);
      }
    }, [selectedLinea, transporteData]);  
  

  useEffect(() => {
    console.log("linea: " + selectedLinea)
    if (transporteData) {
     const destinationsForLine = [...new Set(transporteData
            .filter((bus) => bus.route_short_name === selectedLinea)
      .map((bus) => bus.trip_headsign))];
console.log(destinationsForLine);
    setDestinations(destinationsForLine);
  }else {
    setDestinations([]); 
  }
  
}, [selectedLinea, transporteData])

  const handleSelectChange = (event) => {
    setSelectedLinea(event.target.value);   
  }

  const handleDestinationChange = (event) => {
    setSelectedDestination(event.target.value);
  }; 

  const customIcon = new L.icon({
    iconUrl: busIcon,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [-3, -30],
  });
  
  const selectedLineIcon = new L.icon({
    iconUrl: bus2Icon,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [-3, -30],
  });
  
  if (loading) {   
    
        return <p>Loading data...</p>;
      } 
      
  if (!transporteData) {
    return <div>No hay datos disponibles</div>;
  }
 
  return (
    <>
      <h1>COLECTIVOS de Bs.As.</h1>
      <select className="linea" id="lineaBus" value={selectedLinea} onChange={handleSelectChange}>
        <option value="">Seleccionar línea</option>
        {busLinea.map((line) => (
          <option key={line} value={line}>
            {line}
          </option>
        ))}
      </select>

      <select className="destino" id="destinoBus" value={selectedDestination} onChange={handleDestinationChange}>
        <option value="">Seleccionar destino</option>
        {destinations.map((destino) => (
          <option key={destino} value={destino}>
            {destino}
          </option>
        ))}
      </select>

      <div id="map">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {selectedLineBusPositions.length > 0 ? (
             selectedLineBusPositions.map((bus) => (
          <Marker
             key={bus.id}
             position={[bus.latitude, bus.longitude]}
             icon={bus.route_short_name === selectedLinea && bus.trip_headsign === selectedDestination  ? selectedLineIcon : customIcon}         
          >
            <Popup>
                Línea: {bus.route_short_name} Destino: {bus.trip_headsign}
            </Popup>
          </Marker>
          ))
          ) : (
  
            <p>No hay posiciones de colectivos disponibles.</p>
             )}
             
        </MapContainer>
      </div>
    </>
  );
} 
