import { useEffect, useRef } from "react";

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  // إحداثيات الموقع الدقيقة:
  const location = {
    lat: 24.48475442926147,
    lng: 54.38270741104361
  };

  const apiKey = "AIzaSyBK8zEiYnUvStanJpqf8PIDyl5RWFewSG8"; // استخدم مفتاحك الخاص
  const zoom = 17;
  const height = "400px";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;

    // تعريف دالة initMap بشكل عام
    window.initMap = () => {
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
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{ color: "#FFD600" }]
          }
        ]
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
      ref={mapRef}
      className="w-full rounded-xl overflow-hidden shadow-lg"
      style={{ height }}
    ></div>
  );
};

export default GoogleMap;
