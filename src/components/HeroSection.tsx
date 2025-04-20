import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const HeroSection = () => {
  return <section id="home" className="relative min-h-[80vh] flex items-center pt-[84px] pb-8 md:pb-20 bg-roadpro-lightgray overflow-hidden">
      {/* Background Pattern and Parallax Cone */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Large faint cone parallax left */}
        <svg className="absolute left-0 bottom-0 z-0 animate-float" width="112" height="120" fill="none" viewBox="0 0 44 48" style={{
        opacity: 0.08
      }}>
          <polygon points="22,0 44,48 0,48" fill="#FFD600" />
        </svg>
        <div className="absolute bottom-0 right-0 w-full h-[40%] bg-gradient-to-t from-white to-transparent"></div>
      </div>
      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* IMAGE - Always visible, never covered */}
        <div className="lg:col-span-6 w-full mb-6 lg:mb-0 flex justify-center">
          {/* Main hero image, rounded, shadow, responsive */}
          <img alt="RoadPro team working on a traffic solution" className="w-full max-w-lg rounded-xl shadow-2xl border-8 border-white object-cover block animate-fade-in-up" style={{
          minHeight: "320px",
          background: "#F1F0FB"
        }} src="/lovable-uploads/2c60c704-4e64-4ceb-a808-2dfe5dd85255.jpg" />
        </div>
        {/* TEXT Content */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="inline-block bg-roadpro-yellow px-4 py-1 rounded-full animate-fade-in-up font-poppins text-sm font-medium text-roadpro-black shadow" style={{
          animationDelay: "0.2s"
        }}>
            خبراء إدارة المرور في أبوظبي | Road Safety Experts in Abu Dhabi
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-roadpro-black leading-tight animate-fade-in-up font-poppins" style={{
          animationDelay: "0.4s"
        }}>
            <span className="block">تعزيز السلامة العامة</span>
            <span className="block">وسلاسة حركة المرور</span>
            <span className="block text-xl font-normal text-roadpro-gray mt-1">Enhancing Public Safety & Smooth Traffic Flow</span>
          </h1>
          <p className="text-lg md:text-xl text-roadpro-gray max-w-2xl animate-fade-in-up font-poppins" style={{
          animationDelay: "0.6s"
        }}>
            حلول مبتكرة للتحويلات المرورية، إغلاقات المسارات، وتحقيق أعلى معايير السلامة في الشوارع.<br />
            Innovative solutions for traffic diversions, lane closures, and street safety.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{
          animationDelay: "0.8s"
        }}>
            <Button className="bg-roadpro-yellow text-roadpro-black text-lg px-6 py-6 rounded-xl shadow-lg hover:bg-roadpro-black hover:text-roadpro-yellow transition-all hover-glow hover:scale-105 animate-soft-pulse font-poppins">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-roadpro-black text-roadpro-black text-lg px-6 py-6 hover:bg-roadpro-black hover:text-white transition-all rounded-xl font-poppins">
              Contact Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;