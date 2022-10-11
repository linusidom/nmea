
import './App.css';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import L from 'leaflet'

import boat from './assets/boat.svg';
import boatOrange from './assets/boatOrange.svg';

function App() {

  const boat1 = new L.Icon({
      iconUrl: boat,
      iconRetinaUrl: boat,
      popupAnchor:  [-0, -0],
      iconSize: [32,45],
      
  });

  const boat2 = new L.Icon({
    iconUrl: boatOrange,
    iconRetinaUrl: boatOrange,
    popupAnchor:  [-0, -0],
    iconSize: [32,45],
    
});

  const position = [13.180,100.3569]
  const markers = [
    [[13.37091539721964,100.26947021484376], boat1],
    [[13.437709413814021,100.50292968750001], boat2],
    [[13.317466849852305,100.72540283203126], boat1],
    [[13.036669323115246,100.67321777343751], boat2],
    [[12.967088984637462,100.44250488281251], boat1],
    [[12.983147716796578,100.08544921875001], boat2],
    [[13.306775722376099,100.09094238281251], boat1],
    [[13.328157505129296,100.17608642578126], boat2]]

  return (
    <MapContainer center={position} zoom={9} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {markers.map((marker, index) => {
      console.log(marker, index)
      return(
        <div key={index}>
          <Marker position={marker[0]} icon={marker[1]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </div>
      )})}

    
  </MapContainer>
  );
}

export default App;
