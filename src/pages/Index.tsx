
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsGallery from "@/components/ProjectsGallery";
import EquipmentSection from "@/components/EquipmentSection";
import ClientsSection from "@/components/ClientsSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import PartnersCarousel from "@/components/PartnersCarousel";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LanguageToggle from "@/components/LanguageToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsGallery />
      <EquipmentSection />
      <ClientsSection />
      <AdvantagesSection />
      <SustainabilitySection />
      <PartnersCarousel />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <LanguageToggle />
    </div>
  );
};

export default Index;
