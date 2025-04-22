
import { useEffect, useRef } from "react";

interface GoogleMapProps {
  apiKey?: string;
  location: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  height?: string;
}

const GoogleMap = ({ 
  apiKey = "YOUR_API_KEY", // Replace with your Google Maps API key
  location = { lat: 24.4539, lng: 54.3773 }, // Default: Abu Dhabi coordinates
  zoom = 15,
  height = "400px"
}: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Load Google Maps API script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    
    // Define the initMap function in the global scope
    window.initMap = () => {
      if (!mapRef.current) return;
      
      const map = new google.maps.Map(mapRef.current, {
        center: location,
        zoom: zoom,
        styles: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#7c93a3" }, { lightness: -10 }]
          },
          {
            featureType: "administrative.country",
            elementType: "geometry",
            stylers: [{ visibility: "on" }]
          },
          {
            featureType: "administrative.country",
            elementType: "geometry.stroke",
            stylers: [{ color: "#a0a4a5" }]
          },
          {
            featureType: "administrative.province",
            elementType: "geometry.stroke",
            stylers: [{ color: "#62838e" }]
          },
          {
            featureType: "landscape",
            elementType: "geometry.fill",
            stylers: [{ color: "#f0f0f0" }]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ebebeb" }]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffffff" }]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#dfdfdf" }]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{ color: "#FFD600" }]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#e5ac00" }]
          }
        ]
      });
      
      // Add marker
      new google.maps.Marker({
        position: location,
        map: map,
        title: "RoadPro Abu Dhabi",
        animation: google.maps.Animation.DROP
      });
    };
    
    // Append the script to the document
    document.head.appendChild(script);
    
    // Clean up
    return () => {
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, [apiKey, location, zoom]);
  
  return (
    <div 
      ref={mapRef} 
      className="w-full rounded-xl overflow-hidden shadow-lg"
      style={{ height }}
    ></div>
  );
};

// Add the initMap to the window type
declare global {
  interface Window {
    initMap: () => void;
  }
}

export default GoogleMap;
