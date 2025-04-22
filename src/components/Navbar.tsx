
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const { t, language, setLanguage } = useLanguage();
  const scrollTimeoutRef = useRef(null);
  
  const navLinks = [
    { href: "#home", text: language === "en" ? "Home" : "الرئيسية" },
    { href: "#services", text: language === "en" ? "Services" : "خدماتنا" },
    { href: "#clients", text: language === "en" ? "Clients" : "عملاؤنا" },
    { href: "#advantages", text: language === "en" ? "Why Us" : "لماذا نحن" },
    { href: "#sustainability", text: language === "en" ? "Sustainability" : "الاستدامة" },
    { href: "#contact", text: language === "en" ? "Contact" : "اتصل بنا" }
  ];
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    document.documentElement.dir = newLanguage === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLanguage;
  };
  
  useEffect(() => {
    // Set initial active section based on URL hash or default to home
    const initialHash = window.location.hash || "#home";
    setActiveSection(initialHash);
    
    const handleScroll = () => {
      // Check if scrolled for navbar styling
      setIsScrolled(window.scrollY > 50);
      
      // Clear previous timeout to avoid frequent updates
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // Use a timeout to avoid excessive calculations during scroll
      scrollTimeoutRef.current = setTimeout(() => {
        // Get all sections and calculate their position and visibility
        const sections = [];
        navLinks.forEach(({ href }) => {
          const id = href.replace("#", "");
          const element = document.getElementById(id);
          
          if (element) {
            const rect = element.getBoundingClientRect();
            const topPos = rect.top;
            const height = rect.height;
            
            // Calculate visibility percentage - how much of section is in viewport
            const viewportHeight = window.innerHeight;
            const visibleHeight = Math.min(
              viewportHeight,
              Math.max(0, rect.bottom) - Math.max(0, rect.top)
            );
            
            // Calculate visibility as a percentage (0 to 1)
            const visiblePercentage = visibleHeight / height;
            
            sections.push({
              id: href,
              topPos,
              visiblePercentage,
              // Add a weight factor for sections near the top of the viewport
              weight: visiblePercentage * (1 - (Math.max(0, topPos) / viewportHeight) * 0.8)
            });
          }
        });
        
        // Sort sections by their weighted visibility (most visible first)
        sections.sort((a, b) => b.weight - a.weight);
        
        // Check if we have a section and if the most visible one is different from current
        if (sections.length > 0 && sections[0].id !== activeSection) {
          setActiveSection(sections[0].id);
          // Update URL hash without scrolling
          history.replaceState(null, null, sections[0].id);
        }
      }, 100);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Initial check for correct highlighting
    handleScroll();
    
    // Handle hash changes from clicks
    const handleHashChange = () => {
      const hash = window.location.hash || "#home";
      setActiveSection(hash);
    };
    
    window.addEventListener("hashchange", handleHashChange);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [navLinks]);
  
  const handleNavLinkClick = (href) => {
    setActiveSection(href);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    
    // Scroll to section smoothly
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      
      // Update URL without adding to history
      history.replaceState(null, null, href);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-poppins
        ${isScrolled ? "bg-white/90 shadow-lg py-2 backdrop-blur" : "bg-transparent py-4"}
      `} 
      style={{
        transitionProperty: "background,box-shadow,padding"
      }}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center space-x-3 group">
          <img 
            alt="RoadPro logo" 
            src="/lovable-uploads/0da8014e-7a3b-4ac3-8355-f7f00bf18dbd.png" 
            className="h-14 w-auto rounded-xl shadow-xl bg-white p-2 border border-gray-200 object-cover transition-all duration-300 group-hover:scale-105" 
            style={{ maxHeight: 64 }}
          />
        </a>
        
        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center ${language === "ar" ? "space-x-reverse space-x-8" : "space-x-8"}`}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(link.href);
              }}
              className={`font-medium relative transition-colors duration-300 py-2 px-3 rounded-lg
                ${activeSection === link.href 
                  ? "text-roadpro-black bg-roadpro-yellow/90 shadow-md" 
                  : "hover:text-roadpro-yellow hover:bg-gray-100/80"}
              `}
            >
              {link.text}
            </a>
          ))}
          
          {/* Language Toggle Button for Desktop */}
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="bg-white/90 backdrop-blur-sm hover:bg-roadpro-yellow hover:text-roadpro-black flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 ml-2"
          >
            <Globe size={16} />
            {language === "en" ? "العربية" : "English"}
          </Button>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center gap-2">
          {/* Language Toggle Button for Mobile */}
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="bg-white/90 backdrop-blur-sm hover:bg-roadpro-yellow hover:text-roadpro-black shadow-md transition-all hover:scale-105 px-2 py-1"
          >
            <Globe size={16} />
            <span className="sr-only">{language === "en" ? "العربية" : "English"}</span>
          </Button>
          
          <button 
            className="text-roadpro-black shadow-md bg-white px-2 py-2 rounded-xl border border-roadpro-lightgray transition-all hover:scale-110 hover:shadow-roadpro-yellow"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 shadow-lg animate-fade-in-up rounded-b-xl border-t border-roadpro-lightgray z-50">
          <div className="container py-4 flex flex-col space-y-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`py-3 font-medium transition-all duration-300 text-lg rounded-lg px-4
                  ${activeSection === link.href 
                    ? "text-roadpro-black bg-roadpro-yellow/90 shadow-md font-bold" 
                    : "hover:text-roadpro-yellow hover:bg-gray-100/80"}
                `}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick(link.href);
                }}
              >
                {link.text}
              </a>
            ))}
            
            {/* Language Toggle for Mobile Menu */}
            <Button 
              onClick={toggleLanguage}
              className="w-full text-left justify-start py-3 mt-2 font-medium transition-all duration-300 text-lg rounded-lg px-4 hover:text-roadpro-yellow hover:bg-gray-100/80"
              variant="ghost"
            >
              <Globe size={20} className="mr-2" />
              {language === "en" ? "العربية" : "English"}
            </Button>
            
            <Button 
              className="w-full mt-2 bg-roadpro-yellow text-roadpro-black hover:bg-roadpro-black hover:text-roadpro-yellow transition-transform hover:scale-105 hover:shadow-lg hover-glow shadow rounded-lg text-base px-4 py-3 font-poppins glowing-cta"
            >
              {language === "en" ? "Get a Quote" : "احصل على عرض سعر"}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
