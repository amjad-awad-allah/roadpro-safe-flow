
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, TrafficCone } from "lucide-react";

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-poppins ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center space-x-3 group">
          <img
            alt="RoadPro logo"
            src="/lovable-uploads/0da8014e-7a3b-4ac3-8355-f7f00bf18dbd.png"
            className="h-14 w-auto rounded-xl shadow-xl bg-white p-2 border border-gray-200 object-cover transition-all duration-300 group-hover:scale-105"
            style={{ maxHeight: 64 }}
          />
          <span className="hidden md:inline-block text-2xl font-bold font-poppins text-roadpro-black ml-2 tracking-tight">
            Road<span className="text-roadpro-yellow">Pro</span>
          </span>
          <TrafficCone
            className="ml-3 text-roadpro-yellow drop-shadow-xl animate-float hidden lg:block"
            size={32}
          />
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-medium hover:text-roadpro-yellow transition-colors">Home</a>
          <a href="#services" className="font-medium hover:text-roadpro-yellow transition-colors">Services</a>
          <a href="#clients" className="font-medium hover:text-roadpro-yellow transition-colors">Clients</a>
          <a href="#advantages" className="font-medium hover:text-roadpro-yellow transition-colors">Why Us</a>
          <a href="#sustainability" className="font-medium hover:text-roadpro-yellow transition-colors">Sustainability</a>
          <a href="#contact" className="font-medium hover:text-roadpro-yellow transition-colors">Contact</a>
        </nav>
        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-roadpro-black shadow-md bg-white px-2 py-2 rounded-xl border border-roadpro-lightgray transition-all hover:scale-110 hover:shadow-roadpro-yellow"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in-up rounded-b-xl border-t border-roadpro-lightgray z-50">
          <div className="container py-4 flex flex-col space-y-4">
            <a
              href="#home"
              className="py-2 font-medium hover:text-roadpro-yellow transition-colors"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#services"
              className="py-2 font-medium hover:text-roadpro-yellow transition-colors"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#clients"
              className="py-2 font-medium hover:text-roadpro-yellow transition-colors"
              onClick={toggleMenu}
            >
              Clients
            </a>
            <a
              href="#advantages"
              className="py-2 font-medium hover:text-roadpro-yellow transition-colors"
              onClick={toggleMenu}
            >
              Why Us
            </a>
            <a
              href="#sustainability"
              className="py-2 font-medium hover:text-roadpro-yellow transition-colors"
              onClick={toggleMenu}
            >
              Sustainability
            </a>
            <a
              href="#contact"
              className="py-2 font-medium hover:text-roadpro-yellow transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <Button className="w-full mt-2 bg-roadpro-yellow text-roadpro-black hover:bg-roadpro-black hover:text-roadpro-yellow transition-transform hover:scale-105 hover:shadow-lg hover-glow shadow rounded-lg text-base px-4 py-3 font-poppins">
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
