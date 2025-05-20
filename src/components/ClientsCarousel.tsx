
import { useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useLanguage } from "@/contexts/LanguageContext";

const ClientsCarousel = () => {
  const { language } = useLanguage();
  
  // Client logo URLs
  const clientLogos = [
    {
      id: 1,
      name: "Client 1",
      logo: "https://pvwrtzsebysbidqijglv.supabase.co/storage/v1/object/sign/client-logo/img-1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NiNWUzYzllLTUyNmUtNGExZC1iYjEzLTBmOGExZjVmMzY0YyJ9.eyJ1cmwiOiJjbGllbnQtbG9nby9pbWctMS5wbmciLCJpYXQiOjE3NDc3MzI3OTgsImV4cCI6MjM3ODQ1Mjc5OH0._bOU_d_mZpN5yxv0gbBA0-HSo07-BYacy0FDsBxNeNI"
    },
    {
      id: 2,
      name: "Client 2",
      logo: "https://pvwrtzsebysbidqijglv.supabase.co/storage/v1/object/sign/client-logo/img-2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NiNWUzYzllLTUyNmUtNGExZC1iYjEzLTBmOGExZjVmMzY0YyJ9.eyJ1cmwiOiJjbGllbnQtbG9nby9pbWctMi5qcGciLCJpYXQiOjE3NDc3MzI4OTAsImV4cCI6MjM3ODQ1Mjg5MH0.k_cTxj5Y5DLSS6eKQkIH213wk89HbzQfRSggqkTK_w0"
    },
    {
      id: 3,
      name: "Client 3",
      logo: "https://pvwrtzsebysbidqijglv.supabase.co/storage/v1/object/sign/client-logo/img-2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NiNWUzYzllLTUyNmUtNGExZC1iYjEzLTBmOGExZjVmMzY0YyJ9.eyJ1cmwiOiJjbGllbnQtbG9nby9pbWctMi5wbmciLCJpYXQiOjE3NDc3MzI5MDUsImV4cCI6MjM3ODQ1MjkwNX0.uiFigBU62HJihqK9bgiX00U09J3GhK5Orbhcu3DUqu0"
    },
    {
      id: 4,
      name: "Client 4",
      logo: "https://pvwrtzsebysbidqijglv.supabase.co/storage/v1/object/sign/client-logo/img-3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NiNWUzYzllLTUyNmUtNGExZC1iYjEzLTBmOGExZjVmMzY0YyJ9.eyJ1cmwiOiJjbGllbnQtbG9nby9pbWctMy5wbmciLCJpYXQiOjE3NDc3MzI5OTksImV4cCI6MjM3ODQ1Mjk5OX0.7Yn9SVBypSIGTN7vmylbPoaOHqi9YWaeEeBqlW14u4A"
    },
    {
      id: 5,
      name: "Client 5",
      logo: "https://pvwrtzsebysbidqijglv.supabase.co/storage/v1/object/sign/client-logo/img-4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NiNWUzYzllLTUyNmUtNGExZC1iYjEzLTBmOGExZjVmMzY0YyJ9.eyJ1cmwiOiJjbGllbnQtbG9nby9pbWctNC5wbmciLCJpYXQiOjE3NDc3MzMwMTYsImV4cCI6MjM3ODQ1MzAxNn0.aRXxBMtVL0uNiIBtO82CY5hJAam0UEbYPm2db2b7oH4"
    },
    {
      id: 6,
      name: "Client 6",
      logo: "https://pvwrtzsebysbidqijglv.supabase.co/storage/v1/object/sign/client-logo/img-5.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NiNWUzYzllLTUyNmUtNGExZC1iYjEzLTBmOGExZjVmMzY0YyJ9.eyJ1cmwiOiJjbGllbnQtbG9nby9pbWctNS5wbmciLCJpYXQiOjE3NDc3MzMwMzEsImV4cCI6MjM3ODQ1MzAzMX0.Qa3U3t8-rIp4Kiu5WEQTTPdnFeBr2SiWLZ6xuUhdQ0c"
    },
    {
      id: 7,
      name: "Client 7",
      logo: "https://pvwrtzsebysbidqijglv.supabase.co/storage/v1/object/sign/client-logo/img-6.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NiNWUzYzllLTUyNmUtNGExZC1iYjEzLTBmOGExZjVmMzY0YyJ9.eyJ1cmwiOiJjbGllbnQtbG9nby9pbWctNi5wbmciLCJpYXQiOjE3NDc3MzMwNDYsImV4cCI6MjM3ODQ1MzA0Nn0.MjBfxlKz8Sibp8ivFct2NGTEDDE7x4hhtup5t60_URU"
    },
  ];
  
  // Create autoplay plugin with options
  const plugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
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
    <section id="clients" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-roadpro-black mb-4">
            {language === "en" ? "Our Clients" : "عملاؤنا"}
          </h2>
          <p className="text-roadpro-gray text-lg">
            {language === "en" 
              ? "Trusted by leading organizations across Abu Dhabi" 
              : "موثوق به من قبل المؤسسات الرائدة في جميع أنحاء أبوظبي"}
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              dragFree: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.play()}
          >
            <CarouselContent className="-ml-4">
              {clientLogos.map((client) => (
                <CarouselItem 
                  key={client.id} 
                  className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="p-4">
                    <div 
                      className="rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 
                               p-6 flex items-center justify-center h-32 group border border-gray-100 hover:border-roadpro-yellow"
                    >
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="max-w-[80%] max-h-[80%] object-contain transition-all duration-300 
                                 group-hover:scale-110 group-hover:drop-shadow-md"
                        style={{ aspectRatio: "4/2", objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
