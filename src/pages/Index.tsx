
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ClientsSection from "@/components/ClientsSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import MapSection from "@/components/MapSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ClientsSection />
      <AdvantagesSection />
      <SustainabilitySection />
      <MapSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
