
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import LanguageToggle from "./LanguageToggle";

interface NavLink {
  href: string;
  text: string;
}

interface MobileMenuProps {
  navLinks: NavLink[];
  activeSection: string;
  handleNavLinkClick: (href: string) => void;
  language: string;
  toggleLanguage: () => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu = ({
  navLinks,
  activeSection,
  handleNavLinkClick,
  language,
  toggleLanguage,
  isMenuOpen,
  toggleMenu
}: MobileMenuProps) => {
  // Function to handle the quote button click
  const handleQuoteClick = () => {
    toggleMenu(); // Close menu first
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        history.replaceState(null, null, '#contact');
      }
    }, 300);
  };
  
  return (
    <>
      <div className="md:hidden flex items-center gap-2">
        {/* Language Toggle Button for Mobile */}
        <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
        <button 
          className="text-roadpro-black shadow-md bg-white px-2 py-2 rounded-xl border border-roadpro-lightgray transition-all hover:scale-110 hover:shadow-roadpro-yellow"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
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
                  toggleMenu(); // Close menu after clicking
                }}
              >
                {link.text}
              </a>
            ))}
            <LanguageToggle language={language} toggleLanguage={toggleLanguage} isMobileMenu />
            <Button 
              className="w-full mt-2 bg-roadpro-yellow text-roadpro-black hover:bg-roadpro-black hover:text-roadpro-yellow transition-transform hover:scale-105 hover:shadow-lg hover-glow shadow rounded-lg text-base px-4 py-3 font-poppins glowing-cta"
              onClick={handleQuoteClick}
            >
              {language === "en" ? "Get a Quote" : "احصل على عرض سعر"}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
