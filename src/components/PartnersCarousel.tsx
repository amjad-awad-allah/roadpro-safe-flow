
import { useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const partners = [
  {
    id: 1,
    name: "Partner 1",
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&h=100&q=80"
  },
  {
    id: 2,
    name: "Partner 2",
    logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=200&h=100&q=80"
  },
  {
    id: 3,
    name: "Partner 3",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=200&h=100&q=80"
  },
  {
    id: 4,
    name: "Partner 4",
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=200&h=100&q=80"
  },
  {
    id: 5,
    name: "Partner 5",
    logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=200&h=100&q=80"
  },
  {
    id: 6,
    name: "Partner 6",
    logo: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=200&h=100&q=80"
  },
  {
    id: 7,
    name: "Partner 7",
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&h=100&q=80"
  },
];

const PartnersCarousel = () => {
  const { language } = useLanguage();
  
  // Create autoplay plugin with options
  const plugin = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      rootNode: (emblaRoot) => emblaRoot.parentElement,
    })
  );
  
  // Function to handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      // Force carousel reflow/update on resize
      plugin.current.reset();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-roadpro-black mb-4">
            {language === "en" ? "Our Trusted Partners" : "شركاؤنا الموثوقون"}
          </h2>
          <p className="text-roadpro-gray text-lg">
            {language === "en" 
              ? "Collaborating with industry leaders to deliver excellence" 
              : "نتعاون مع الشركات الرائدة في الصناعة لتقديم التميز"}
          </p>
        </div>
        
        {/* Force LTR direction on the carousel container regardless of language */}
        <div dir="ltr">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              dragFree: true,
            }}
            plugins={[plugin.current]}
            className="w-full max-w-6xl mx-auto relative"
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.play()}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner) => (
                <CarouselItem 
                  key={partner.id} 
                  className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="p-4">
                    <div 
                      className="rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 
                               p-6 flex items-center justify-center h-32 group border border-gray-100 hover:border-roadpro-yellow"
                    >
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="max-w-[80%] max-h-[80%] object-contain transition-all duration-300 
                                 group-hover:scale-110 group-hover:drop-shadow-md filter saturate-0 group-hover:saturate-100"
                        style={{ aspectRatio: "4/2", objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Navigation Arrows */}
            <div className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10">
              <CarouselPrevious 
                variant="outline" 
                size="lg"
                className="h-12 w-12 rounded-full border-2 border-roadpro-yellow bg-white/90 
                           hover:bg-roadpro-yellow hover:text-roadpro-black transition-all duration-300
                           shadow-lg hover:shadow-xl opacity-80 hover:opacity-100"
              >
                <ChevronLeft className="h-6 w-6" />
              </CarouselPrevious>
            </div>
            
            <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10">
              <CarouselNext 
                variant="outline" 
                size="lg"
                className="h-12 w-12 rounded-full border-2 border-roadpro-yellow bg-white/90 
                           hover:bg-roadpro-yellow hover:text-roadpro-black transition-all duration-300
                           shadow-lg hover:shadow-xl opacity-80 hover:opacity-100"
              >
                <ChevronRight className="h-6 w-6" />
              </CarouselNext>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {partners.slice(0, 5).map((_, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="w-3 h-3 p-0 rounded-full bg-roadpro-gray/30 hover:bg-roadpro-yellow/50
                           data-[state=active]:bg-roadpro-yellow data-[state=active]:scale-125
                           transition-all duration-300"
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
