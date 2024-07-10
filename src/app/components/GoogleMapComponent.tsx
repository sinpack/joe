'use client';
import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface GoogleMapProps {
  address: string;
}

const GoogleMapComponent: React.FC<GoogleMapProps> = ({ address }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
      version: 'weekly',
    });

    loader
      .importLibrary('geometry')
      .then(() => {
        const geocoder = new google.maps.Geocoder();

        geocoder.geocode({ address: address }, (results, status) => {
          if (status === 'OK') {
            const map = new google.maps.Map(mapRef.current!, {
              center: results[0].geometry.location,
              zoom: 15,
            });
            new google.maps.Marker({
              map: map,
              position: results[0].geometry.location,
            });
          } else {
            console.error(
              `Geocode was not successful for the following reason: ${status}`
            );
          }
        });
      })
      .catch((error) => {
        console.error('Error loading Google Maps:', error);
      });
  }, [address]);

  return <div className="h-96" ref={mapRef} />;
};

export default GoogleMapComponent;
