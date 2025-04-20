import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-block bg-roadpro-yellow/20 px-4 py-1 rounded-full mb-4">
            <span className="text-sm font-medium text-roadpro-black">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-roadpro-black mb-4">
            Contact Information
          </h2>
          <p className="text-roadpro-gray text-lg">
            Reach out to us for inquiries, quotes, or to discuss your traffic management needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-roadpro-lightgray p-8 rounded-xl mb-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-roadpro-yellow flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-roadpro-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-roadpro-black mb-1">Our Location</h3>
                    <p className="text-roadpro-gray">
                      Al Falah Street, Abu Dhabi, UAE<br />
                      P.O. Box 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-roadpro-yellow flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-roadpro-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-roadpro-black mb-1">Phone Numbers</h3>
                    <p className="text-roadpro-gray">
                      Main Office: +971 2 123 4567<br />
                      Customer Support: +971 2 765 4321
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-roadpro-yellow flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-roadpro-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-roadpro-black mb-1">Email Addresses</h3>
                    <p className="text-roadpro-gray">
                      General Inquiries: info@roadpro-abudhabi.com<br />
                      Sales Department: sales@roadpro-abudhabi.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg h-[300px] hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://miro.medium.com/v2/resize:fit:1400/1*qYUvh-EtES8dtgKiBRiLsA.png"
                alt="Map location of RoadPro office in Abu Dhabi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in-up hover:shadow-2xl transition-shadow duration-300" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold text-roadpro-black mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-roadpro-gray">Full Name</label>
                  <Input 
                    placeholder="Enter your name" 
                    className="mt-1 bg-roadpro-lightgray border-transparent focus:border-roadpro-yellow"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-roadpro-gray">Email Address</label>
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="mt-1 bg-roadpro-lightgray border-transparent focus:border-roadpro-yellow"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-roadpro-gray">Company Name</label>
                <Input 
                  placeholder="Enter your company name" 
                  className="mt-1 bg-roadpro-lightgray border-transparent focus:border-roadpro-yellow"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-roadpro-gray">Phone Number</label>
                <Input 
                  placeholder="Enter your phone number" 
                  className="mt-1 bg-roadpro-lightgray border-transparent focus:border-roadpro-yellow"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-roadpro-gray">Message</label>
                <Textarea 
                  placeholder="Tell us about your requirements" 
                  className="mt-1 bg-roadpro-lightgray border-transparent focus:border-roadpro-yellow"
                  rows={4}
                />
              </div>
              
              <Button type="submit" className="w-full bg-roadpro-yellow text-roadpro-black hover:bg-roadpro-black hover:text-roadpro-yellow transition-colors py-6 hover-glow">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
