
import { 
  TrafficCone, 
  Road, 
  Flag, 
  Car,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Traffic Diversion Solutions",
    description: "Comprehensive planning and implementation of traffic diversions that minimize disruption while maximizing safety.",
    icon: Road,
  },
  {
    title: "Road Lane Closure Equipment",
    description: "State-of-the-art equipment for temporary and long-term lane closures that meet all regulatory requirements.",
    icon: TrafficCone,
  },
  {
    title: "Street Closure Management",
    description: "End-to-end management of street closures for construction, events, or emergency situations.",
    icon: Flag,
  },
  {
    title: "Specialized Safety Equipment (TMA)",
    description: "Truck-Mounted Attenuators and other specialized equipment to protect workers and the public in traffic zones.",
    icon: Car,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-roadpro-yellow/20 px-4 py-1 rounded-full mb-4">
            <span className="text-sm font-medium text-roadpro-black">
              What We Offer
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-roadpro-black mb-4">
            Professional Traffic Management Services
          </h2>
          <p className="text-roadpro-gray text-lg">
            We provide comprehensive solutions to ensure safety and efficiency in all traffic scenarios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-xl transition-shadow rounded-xl overflow-hidden group"
            >
              <div className="h-2 bg-roadpro-yellow w-full"></div>
              <CardHeader className="pt-8">
                <div className="w-16 h-16 rounded-full bg-roadpro-yellow/10 flex items-center justify-center mb-4 group-hover:bg-roadpro-yellow transition-colors">
                  <service.icon className="w-8 h-8 text-roadpro-black" />
                </div>
                <CardTitle className="text-xl font-bold text-roadpro-black">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-roadpro-gray">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center text-roadpro-black font-medium border-b-2 border-roadpro-yellow pb-1 hover:text-roadpro-yellow transition-colors"
          >
            Request a customized solution
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
