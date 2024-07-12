// src/components/Map.tsx
'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MarkerIcon from 'leaflet/dist/images/marker-icon.png';
import MarkerShadow from 'leaflet/dist/images/marker-shadow.png';
import L, { LatLngExpression } from 'leaflet';
import { useState, useRef } from 'react';
import { PrimarySolidButton } from './Buttons';

const initialCoord: LatLngExpression = [38.26099285730545, 21.742655583197468];

const GetOfficeLocation = ({
  onLocation,
}: {
  onLocation: (latlng: LatLngExpression) => void;
}) => {
  return (
    <div className="flex justify-center items-center w-full">
      <PrimarySolidButton
        text="ΘΕΡΑΠΕΥΤΗΡΙΟ"
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
    <div className="flex flex-col space-y-10 bg-sky-50">
      <div className="flex flex-col space-y-10 items-center px-40 justify-center lg:justify-between lg:flex-row sm:space-y-10 sm:items-center md:space-y-5 lg:space-y-0">
        <GetOfficeLocation onLocation={handleLocationFound} />
      </div>
      <MapContainer
        ref={mapRef}
        style={{
          height: '100vh',
          width: '100vw',
        }}
        center={coord}
        zoom={20}
        scrollWheelZoom={false}
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
          <Popup>
            ΓΡΑΦΕΙΟ ΨΥΧΟΘΕΡΑΠΕΙΑΣ
            <br />
            ΓΙΩΡΓΟΥ ΑΝΤΩΝΟΠΟΥΛΟΥ
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
