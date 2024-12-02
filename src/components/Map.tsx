import React from 'react';

interface MapProps {
  lat: number;
  lng: number;
  zoom?: number;
  className?: string;
}

export default function Map({ lat, lng, zoom = 14, className = '' }: MapProps) {
  // Using OpenStreetMap instead of Google Maps for a free, no-API-key solution
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.01}%2C${lat-0.01}%2C${lng+0.01}%2C${lat+0.01}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <div className={`relative rounded-lg overflow-hidden shadow-md ${className}`}>
      <iframe
        title="Location Map"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '300px' }}
        loading="lazy"
        src={mapUrl}
      />
    </div>
  );
}