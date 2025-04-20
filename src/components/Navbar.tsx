import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <img src="/lovable-uploads/b28ade9e-f56c-4d8f-8891-c7ba2b8b00bf.png" alt="Road Shield Logo" className="h-10 object-contain" />
          
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-medium hover:text-roadpro-yellow transition-colors">Home</a>
          <a href="#services" className="font-medium hover:text-roadpro-yellow transition-colors">Services</a>
          <a href="#clients" className="font-medium hover:text-roadpro-yellow transition-colors">Clients</a>
          <a href="#advantages" className="font-medium hover:text-roadpro-yellow transition-colors">Why Us</a>
          <a href="#sustainability" className="font-medium hover:text-roadpro-yellow transition-colors">Sustainability</a>
          <a href="#contact" className="font-medium hover:text-roadpro-yellow transition-colors">Contact</a>
          <Button className="bg-roadpro-yellow text-roadpro-black hover:bg-roadpro-black hover:text-roadpro-yellow transition-colors">
            Get a Quote
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-roadpro-black" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          <div className="container py-4 flex flex-col space-y-4">
            <a href="#home" className="py-2 font-medium hover:text-roadpro-yellow transition-colors" onClick={toggleMenu}>
              Home
            </a>
            <a href="#services" className="py-2 font-medium hover:text-roadpro-yellow transition-colors" onClick={toggleMenu}>
              Services
            </a>
            <a href="#clients" className="py-2 font-medium hover:text-roadpro-yellow transition-colors" onClick={toggleMenu}>
              Clients
            </a>
            <a href="#advantages" className="py-2 font-medium hover:text-roadpro-yellow transition-colors" onClick={toggleMenu}>
              Why Us
            </a>
            <a href="#sustainability" className="py-2 font-medium hover:text-roadpro-yellow transition-colors" onClick={toggleMenu}>
              Sustainability
            </a>
            <a href="#contact" className="py-2 font-medium hover:text-roadpro-yellow transition-colors" onClick={toggleMenu}>
              Contact
            </a>
            <Button className="bg-roadpro-yellow text-roadpro-black hover:bg-roadpro-black hover:text-roadpro-yellow transition-colors">
              Get a Quote
            </Button>
          </div>
        </div>}
    </header>;
};
export default Navbar;