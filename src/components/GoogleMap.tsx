
import { useEffect, useRef, useState } from "react";
import { LinkesAndPathes } from "@/utils/LinkesAndPathes";

interface GoogleMapProps {
  apiKey?: string;
  location: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  height?: string;
}

// Define Google Maps types to avoid 'Cannot find name google' errors
declare global {
  interface Window {
    initMap: () => void;
    google: any;
  }
}

const GoogleMap = ({ 
  apiKey = "AIzaSyBK8zEiYnUvStanJpqf8PIDyl5RWFewSG8",
  location = { lat: 24.484681, lng: 54.382651 }, // RoadPro Abu Dhabi coordinates
  zoom = 15,
  height = "400px"
}: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  useEffect(() => {
    // Skip if Google Maps is already loaded
    if (window.google) {
      setMapLoaded(true);
      initializeMap();
      return;
    }

    // Load Google Maps API script
    const script = document.createElement("script");
    script.src = `${LinkesAndPathes.googleMapsApiBase}?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    
    // Define the initMap function in the global scope
    window.initMap = () => {
      setMapLoaded(true);
      initializeMap();
    };
    
    // Append the script to the document
    document.head.appendChild(script);
    
    // Clean up
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      // Only delete the initMap function if we're unmounting
      if (window.initMap === initializeMap) {
        delete window.initMap;
      }
    };
  }, [apiKey]);

  const initializeMap = () => {
    if (!mapRef.current || !window.google) return;
    
    const map = new window.google.maps.Map(mapRef.current, {
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
    new window.google.maps.Marker({
      position: location,
      map: map,
      title: "RoadPro Abu Dhabi",
      animation: window.google.maps.Animation.DROP
    });
  };
  
  // Watch for changes to location and update map
  useEffect(() => {
    if (mapLoaded) {
      initializeMap();
    }
  }, [mapLoaded, location, zoom]);
  
  return (
    <div 
      ref={mapRef} 
      className="w-full rounded-xl overflow-hidden shadow-lg"
      style={{ height }}
    ></div>
  );
};

export default GoogleMap;
