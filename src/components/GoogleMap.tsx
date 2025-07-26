import { useEffect, useRef } from "react";

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
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "400px",          // اضبط الارتفاع حسب ما بدك
        overflow: "hidden",
        borderRadius: "16px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"
      }}
    >
      <div
        ref={mapRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      />
    </div>
  );
};

export default GoogleMap;
