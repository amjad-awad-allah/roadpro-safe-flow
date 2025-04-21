
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapSection = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN'; // Replace with your Mapbox token
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [54.3773, 24.4539], // Abu Dhabi coordinates
      zoom: 12,
    });

    // Create custom marker element
    const markerElement = document.createElement('div');
    markerElement.className = 'custom-marker';
    markerElement.innerHTML = `
      <div class="marker-content bg-roadpro-yellow px-3 py-2 rounded-lg shadow-lg">
        <span class="font-bold text-roadpro-black">RoadPro</span>
      </div>
    `;

    // Add marker
    marker.current = new mapboxgl.Marker({
      element: markerElement
    })
      .setLngLat([54.3773, 24.4539])
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-roadpro-black mb-4">
            Visit Our Office
          </h2>
          <p className="text-roadpro-gray text-lg">
            Find us in the heart of Abu Dhabi
          </p>
        </div>
        <div className="map-container shadow-xl rounded-2xl overflow-hidden">
          <div ref={mapContainer} className="w-full h-[300px] md:h-[400px] lg:h-[500px]" />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
