import { MapContainer, TileLayer, Marker, Popup, useMapEvent, useMap } from 'react-leaflet';
import "./Map.scss"
import { render } from 'react-dom';
import L from "leaflet";
import { RefObject } from 'react';

const Map = () => {


  return (
  <MapContainer center={[43.068661, 141.350755]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {/* <Marker position={[43.068661, 141.350755]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker> */}
    <MarkerEvent/>
  </MapContainer>
  // <div></div>
  );
};

let globalLocation: any = "";

const MarkerEvent = () => {
  const map = useMapEvent("click", (location) => {
    const marker = L.marker([location.latlng.lat, location.latlng.lng], {
      draggable: true,
    })
      .addTo(map)
      .on("click", function (e) {
        marker.bindPopup('<div>popup</div>', {
            maxWidth: 200,
        })
      });
      
      marker.on('moveend', (e) => {
        console.log(e.target._latlng)
      });

      marker.on('contextmenu', (e) => {
        console.log(e)
        marker.remove()
      })
      // console.log(location["latlng"])
      // 力わざ
      globalLocation = location["latlng"] as any;
  });

  

  return <div>markerEvent</div>;
};

export const Location = () => {
  return globalLocation;
};

export default Map;