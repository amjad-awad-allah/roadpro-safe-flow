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
}
const DesktopMenu = ({
  navLinks,
  activeSection,
  handleNavLinkClick,
  language,
  toggleLanguage
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
  return <nav className={`hidden md:flex items-center ${language === "ar" ? "space-x-reverse space-x-8" : "space-x-8"}`}>
      {navLinks.map(link => <a key={link.href} href={link.href} onClick={e => {
      e.preventDefault();
      handleNavLinkClick(link.href);
    }} className={`font-medium relative transition-colors duration-300 py-2 px-3 rounded-lg cursor-pointer
              ${activeSection === link.href ? "text-roadpro-black bg-roadpro-yellow/90 shadow-md" : "hover:text-roadpro-yellow hover:bg-gray-100/80"}
            `}>
          {link.text}
        </a>)}
      <LanguageToggle language={language} toggleLanguage={toggleLanguage} isDesktop />
      
    </nav>;
};
export default DesktopMenu;