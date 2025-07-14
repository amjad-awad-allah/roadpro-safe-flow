
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
interface NavLink {
  href: string;
  text: string;
}
interface DesktopMenuProps {
  navLinks: NavLink[];
  activeSection: string;
  handleNavLinkClick: (href: string) => void;
  language: string;
  toggleLanguage: () => void;
  isScrolled: boolean;
}

const DesktopMenu = ({
  navLinks,
  activeSection,
  handleNavLinkClick,
  language,
  toggleLanguage,
  isScrolled
}: DesktopMenuProps) => {
  // Function to handle the quote button click
  const handleGetQuoteClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
      history.replaceState(null, null, '#contact');
    }
  };
  
  return <nav className={`hidden lg:flex items-center ${language === "ar" ? "space-x-reverse space-x-4 lg:space-x-6" : "space-x-4 lg:space-x-6"}`}>
      {navLinks.map(link => <a 
        key={link.href} 
        href={link.href} 
        onClick={e => {
          e.preventDefault();
          handleNavLinkClick(link.href);
        }} 
        className={`font-medium relative transition-colors duration-300 py-2 px-2 lg:px-3 rounded-lg cursor-pointer text-sm lg:text-base
          ${activeSection === link.href 
            ? "text-roadpro-black bg-roadpro-yellow/90 shadow-md" 
            : isScrolled
              ? "text-roadpro-black hover:text-roadpro-yellow hover:bg-gray-100/80"
              : "text-white hover:text-roadpro-yellow hover:bg-gray-800/20"
          }
        `}
      >
        {link.text}
      </a>)}
      
      
      
    </nav>;
};
export default DesktopMenu;
