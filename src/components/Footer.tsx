
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-roadpro-black text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <a href="#" className="text-2xl font-bold">
                Road<span className="text-roadpro-yellow">Pro</span>
              </a>
            </div>
            <p className="text-gray-300 mb-6">
              Professional traffic management and consultancy services committed to ensuring public safety and maintaining efficient traffic flow.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-roadpro-yellow hover:text-roadpro-black transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-roadpro-yellow hover:text-roadpro-black transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-gray-300 hover:text-roadpro-yellow transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-roadpro-yellow transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-roadpro-yellow transition-colors">Services</a>
              </li>
              <li>
                <a href="#advantages" className="text-gray-300 hover:text-roadpro-yellow transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-roadpro-yellow transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-roadpro-yellow transition-colors">Traffic Management Planning</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-roadpro-yellow transition-colors">Consultancy and Advisory</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-roadpro-yellow transition-colors">Traffic Diversion Solutions</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-roadpro-yellow transition-colors">Lane Closure Equipment</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-roadpro-yellow transition-colors">Street Control Systems</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-roadpro-yellow flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Abu Dhabi, UAE
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-roadpro-yellow flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  +971-50-123-4567
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-roadpro-yellow flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  info@roadpro.ae
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Road Pro Traffic Management & Consultancy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 text-sm hover:text-roadpro-yellow transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-roadpro-yellow transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
