
import { useEffect, useRef } from 'react';

const ParallaxSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrollPosition = window.scrollY;
      const element = parallaxRef.current;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrollPosition;
      const elementInView = scrollPosition > elementTop - window.innerHeight && 
                           scrollPosition < elementTop + rect.height;
      
      if (elementInView) {
        // Calculate parallax offset - slower movement for parallax effect
        const offset = (scrollPosition - (elementTop - window.innerHeight)) * 0.3;
        // Apply the transform using style
        element.style.backgroundPositionY = `calc(50% + ${offset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="parallax" 
      ref={parallaxRef}
      className="w-full bg-center bg-no-repeat bg-cover relative h-[300px] md:h-[400px] lg:h-[500px] dark-overlay"
      style={{
        backgroundImage: "url('https://pvwrtzsebysbidqijglv.supabase.co/storage/v1/object/sign/imges/bg-1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NiNWUzYzllLTUyNmUtNGExZC1iYjEzLTBmOGExZjVmMzY0YyJ9.eyJ1cmwiOiJpbWdlcy9iZy0xLmpwZyIsImlhdCI6MTc0NzczMzkzMCwiZXhwIjoyMzc4NDUzOTMwfQ.A3DRKukkI3qRT6lAx8DGhtYqZlaNhdnTVLTusWd50VI')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center 50%",
        transition: "background-position-y 0.1s ease-out",
      }}
      aria-hidden="true"
    >
      {/* No content inside, just the parallax background */}
    </section>
  );
};

export default ParallaxSection;
