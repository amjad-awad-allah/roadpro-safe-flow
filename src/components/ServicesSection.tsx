import { useEffect, useRef } from "react";
import { CarFront, Layers, Construction, MapPin, AlertTriangle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
const ServicesSection = () => {
  const {
    t
  } = useLanguage();
  const titleRef = useScrollAnimation<HTMLDivElement>({
    animation: 'animate-fade-in-scroll',
    delay: 100
  });
  const productsTitleRef = useScrollAnimation<HTMLDivElement>({
    animation: 'animate-fade-in-scroll',
    delay: 100
  });
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const productsCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Define services with their respective icons and translation keys
  const trafficManagementServices = [{
    icon: CarFront,
    titleKey: "services.traffic.title",
    descriptionKey: "services.traffic.description",
    delay: 0
  }, {
    icon: Layers,
    titleKey: "services.consultancy.title",
    descriptionKey: "services.consultancy.description",
    delay: 100
  }];
  const trafficProductsServices = [{
    icon: Construction,
    titleKey: "services.diversion.title",
    descriptionKey: "services.diversion.description",
    delay: 200
  }, {
    icon: MapPin,
    titleKey: "services.lane.title",
    descriptionKey: "services.lane.description",
    delay: 300
  }, {
    icon: AlertTriangle,
    titleKey: "services.street.title",
    descriptionKey: "services.street.description",
    delay: 400
  }];
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, Number(entry.target.getAttribute('data-delay')) || 0);
        }
      });
    }, {
      threshold: 0.1
    });
    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });
    productsCardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });
    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
      productsCardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);
  return <section id="services" className="section-padding bg-roadpro-lightgray">
      <div className="container mx-auto px-4">
        {/* Traffic Management & Consultancy Services */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-roadpro-yellow/20 px-4 py-1 rounded-full mb-4">
            <span className="text-sm font-medium text-roadpro-black">
              {t("nav.services")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-roadpro-black mb-4 leading-tight">
            {t("services.title")}
          </h2>
          <p className="text-roadpro-gray text-lg leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {trafficManagementServices.map((service, index) => {
          const Icon = service.icon;
          return <div key={index} ref={el => cardsRef.current[index] = el} data-delay={service.delay} className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300
                  hover:translate-y-[-10px] hover:shadow-xl border-b-4 border-transparent 
                  hover:border-roadpro-yellow animate-fade-in-scroll">
                <div className="w-16 h-16 bg-roadpro-yellow/20 rounded-full flex items-center justify-center mb-6
                    transition-shadow animate-soft-pulse">
                  <Icon className="w-8 h-8 text-roadpro-yellow transition-transform" />
                </div>
                <h3 className="text-xl font-semibold text-roadpro-black mb-4 leading-tight">
                  {t(service.titleKey)}
                </h3>
                <p className="text-roadpro-gray leading-relaxed mb-6">
                  {t(service.descriptionKey)}
                </p>
                
              </div>;
        })}
        </div>

        {/* Traffic Products and Services Section */}
        <div ref={productsTitleRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-roadpro-yellow/20 px-4 py-1 rounded-full mb-4">
            <span className="text-sm font-medium text-roadpro-black">
              {t("nav.equipment")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-roadpro-black mb-4 leading-tight">
            {t("services.products.title")}
          </h2>
          <p className="text-roadpro-gray text-lg leading-relaxed">
            {t("services.products.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trafficProductsServices.map((service, index) => {
          const Icon = service.icon;
          return <div key={index} ref={el => productsCardsRef.current[index] = el} data-delay={service.delay} className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300
                  hover:translate-y-[-10px] hover:shadow-xl border-b-4 border-transparent 
                  hover:border-roadpro-yellow animate-fade-in-scroll">
                <div className="w-16 h-16 bg-roadpro-yellow/20 rounded-full flex items-center justify-center mb-6
                    transition-shadow animate-soft-pulse">
                  <Icon className="w-8 h-8 text-roadpro-yellow transition-transform" />
                </div>
                <h3 className="text-xl font-semibold text-roadpro-black mb-4 leading-tight">
                  {t(service.titleKey)}
                </h3>
                <p className="text-roadpro-gray leading-relaxed mb-6">
                  {t(service.descriptionKey)}
                </p>
                
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default ServicesSection;
