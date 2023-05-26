import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import './App.css';
import L from "leaflet";
import './Navbar.css';



const position = [33.238918, -8.520687]
const markerIcon = new L.Icon({
  iconUrl: require('./icon.png'),
  iconSize: [35, 35]
})
const Map = (props) => {
  if (props.pharmacies.length === 0) {
    return (
      <MapContainer center={position} zoom={5} scrollWheelZoom={false} >
          <TileLayer
            attribution='&copy; <a href="https://api.maptiler.com/maps/streets-v2/tiles.json?key=rR3KOWeDNseGtrpvxPd3">OpenStreetMap</a> contributors'
            url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}@2x.png?key=rR3KOWeDNseGtrpvxPd3"
          />
        </MapContainer>
    )
  } else {
    
    return (
      <MapContainer key='rR3KOWeDNseGtrpvxPd3' center={[props.pharmacies[0].latitude,props.pharmacies[0].longitude]} zoom={13} scrollWheelZoom={false} className='scale-in-ver-top'>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {props.pharmacies.map((element) => (
            <Marker icon={markerIcon} position={[element.latitude, element.longitude]}>
              <Popup>
                {element.adresse}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
    );
  }
};
export default Map;
