// src/components/Map.tsx
'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MarkerIcon from 'leaflet/dist/images/marker-icon.png';
import MarkerShadow from 'leaflet/dist/images/marker-shadow.png';
import L, { LatLngExpression } from 'leaflet';
import { useState, useRef } from 'react';
import { PrimarySolidButton } from './Buttons';

const initialCoord: LatLngExpression = [38.26002812552977, 21.745253928081667];

const GetOfficeLocation = ({
  onLocation,
}: {
  onLocation: (latlng: LatLngExpression) => void;
}) => {
  return (
    <div className="flex justify-center items-center w-full">
      <PrimarySolidButton
        text="ΔΙΕΥΘΥΝΣΗ ΓΡΑΦΕΙΟΥ"
        onClick={() => onLocation(initialCoord)}
        width={200}
      />
    </div>
  );
};

const Map = () => {
  const [coord, setCoord] = useState<LatLngExpression>(initialCoord);
  const mapRef = useRef<L.Map | null>(null);

  const handleLocationFound = (latlng: LatLngExpression) => {
    setCoord(latlng);
    if (mapRef.current) {
      mapRef.current.setView(latlng, 20);
    }
  };

  return (
    <div className="flex flex-col space-y-10 bg-sky-50 items-center w-full">
      <div className="flex flex-col space-y-10 items-center justify-center lg:justify-between lg:flex-row sm:space-y-10 sm:items-center md:space-y-5 lg:space-y-0">
        <GetOfficeLocation onLocation={handleLocationFound} />
      </div>
      <div className="w-[280px] h-[280px] sm:w-[80vw] sm:h-[60vh] sm:max-w-[800px] sm:max-h-[500px] lg:w-[70vw] lg:h-[50vh] lg:max-w-[900px] lg:max-h-[600px]"><MapContainer
        ref={mapRef}
        center={coord}
        zoom={18}
        scrollWheelZoom={false}
        className="h-full w-full shadow-xl rounded-xl"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={coord}
          icon={
            new L.Icon({
              iconUrl: MarkerIcon.src,
              iconRetinaUrl: MarkerIcon.src,
              iconSize: [25, 41],
              iconAnchor: [12.5, 41],
              popupAnchor: [0, -41],
              shadowUrl: MarkerShadow.src,
              shadowSize: [41, 41],
            })
          }
        >
          <Popup>ΓΡΑΦΕΙΟ</Popup>
        </Marker>
      </MapContainer></div>
      
    </div>
  );
};

export default Map;
