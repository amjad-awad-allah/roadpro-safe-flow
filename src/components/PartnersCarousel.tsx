
import { useRef } from "react";
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
  const plugin = useRef(
    Autoplay({
      delay: 6000, // Increased to 6 seconds
      stopOnInteraction: false, // Continue autoplay after user interaction
    })
  );

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-roadpro-black mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-roadpro-gray text-lg">
            Collaborating with industry leaders to deliver excellence
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full max-w-6xl mx-auto relative"
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
                             p-6 flex items-center justify-center h-32 group"
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 
                               group-hover:scale-103 group-hover:shadow-lg"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom Navigation Arrows */}
          <div className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2">
            <CarouselPrevious 
              variant="outline" 
              size="lg"
              className="h-12 w-12 rounded-full border-2 border-roadpro-yellow bg-white/90 
                         hover:bg-roadpro-yellow hover:text-roadpro-black transition-all duration-300
                         shadow-lg hover:shadow-xl"
            >
              <ChevronLeft className="h-6 w-6" />
            </CarouselPrevious>
          </div>
          
          <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2">
            <CarouselNext 
              variant="outline" 
              size="lg"
              className="h-12 w-12 rounded-full border-2 border-roadpro-yellow bg-white/90 
                         hover:bg-roadpro-yellow hover:text-roadpro-black transition-all duration-300
                         shadow-lg hover:shadow-xl"
            >
              <ChevronRight className="h-6 w-6" />
            </CarouselNext>
          </div>

          {/* Carousel Dots/Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {partners.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className="w-2 h-2 rounded-full bg-roadpro-gray/30 hover:bg-roadpro-yellow/50
                         data-[state=active]:bg-roadpro-yellow data-[state=active]:scale-125
                         transition-all duration-300"
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default PartnersCarousel;
