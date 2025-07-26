import { useEffect, useRef } from "react";

// Extend Window interface for Google Maps
declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  const location = {
    lat: 24.48475442926147,
    lng: 54.38270741104361
  };

  const apiKey = "AIzaSyBK8zEiYnUvStanJpqf8PIDyl5RWFewSG8";
  const zoom = 17;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;

    window.initMap = () => {
      if (!mapRef.current || !window.google) return;

      const map = new window.google.maps.Map(mapRef.current, {
        center: location,
        zoom: zoom,
        disableDefaultUI: true, // يخفي كل الأدوات
        gestureHandling: "greedy" // لمنع التمدد التلقائي
      });

      new window.google.maps.Marker({
        position: location,
        map: map,
        title: "RoadPro Abu Dhabi",
        animation: window.google.maps.Animation.DROP
      });
    };

    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      delete window.initMap;
    };
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden rounded-2xl shadow-lg">
      <div
        ref={mapRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default GoogleMap;
