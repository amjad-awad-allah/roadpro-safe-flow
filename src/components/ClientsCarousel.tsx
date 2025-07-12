
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useLanguage } from "@/contexts/LanguageContext";
import { LinkesAndPathes } from "@/utils/LinkesAndPathes";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const ClientsCarousel = () => {
  const { language } = useLanguage();
  
  // Updated client logo URLs
  const clientLogos = [
    {
      id: 1,
      name: "Client 1",
      logo: LinkesAndPathes.clientLogo1
    },
    {
      id: 2,
      name: "Client 2",
      logo: LinkesAndPathes.clientLogo2
    },
    {
      id: 3,
      name: "Client 3",
      logo: LinkesAndPathes.clientLogo3
    },
    {
      id: 4,
      name: "Client 4",
      logo: LinkesAndPathes.clientLogo4
    },
    {
      id: 5,
      name: "Client 5",
      logo: LinkesAndPathes.clientLogo5
    },
    {
      id: 6,
      name: "Client 6",
      logo: LinkesAndPathes.clientLogo6
    },
    {
      id: 7,
      name: "Client 7",
      logo: LinkesAndPathes.clientLogo7
    },
  ];

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
          {/* Force LTR direction on the carousel container regardless of language */}
          <div dir="ltr">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
                reverseDirection: false,
              }}
              speed={3000}
              allowTouchMove={false}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              className="clients-swiper"
            >
              {/* Duplicate slides for seamless looping */}
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <SwiperSlide key={`${client.id}-${index}`}>
                  <div className="p-4">
                    <div 
                      className="rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 
                               p-8 flex items-center justify-center h-40 group border border-gray-100 hover:border-roadpro-yellow"
                    >
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="max-w-[90%] max-h-[90%] object-contain transition-all duration-300 
                                 group-hover:scale-110 group-hover:drop-shadow-md"
                        loading="lazy"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Custom styles for smooth continuous movement */}
      <style>{`
        .clients-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
};

export default ClientsCarousel;
