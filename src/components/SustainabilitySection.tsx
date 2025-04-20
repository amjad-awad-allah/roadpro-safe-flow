
import { Leaf, Route } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SustainabilitySection = () => {
  return (
    <section id="sustainability" className="section-padding bg-roadpro-lightgray">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-roadpro-yellow/20 px-4 py-1 rounded-full mb-4">
            <span className="text-sm font-medium text-roadpro-black">
              Future-Focused
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-roadpro-black mb-4">
            Sustainability & Future Goals
          </h2>
          <p className="text-roadpro-gray text-lg">
            We're committed to environmentally responsible practices and innovative technology to shape the future of traffic management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-none shadow-lg rounded-xl overflow-hidden bg-white">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-4 bg-roadpro-yellow flex items-center justify-center p-8">
                  <Leaf className="w-20 h-20 text-roadpro-black" />
                </div>
                <div className="md:col-span-8 p-8">
                  <h3 className="text-2xl font-bold text-roadpro-black mb-4">Eco-Friendly Practices</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-roadpro-yellow/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="w-2 h-2 bg-roadpro-yellow rounded-full"></span>
                      </div>
                      <p className="text-roadpro-gray">Solar-powered traffic management equipment to reduce carbon footprint</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-roadpro-yellow/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="w-2 h-2 bg-roadpro-yellow rounded-full"></span>
                      </div>
                      <p className="text-roadpro-gray">Recycled materials in our traffic barriers and signage</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-roadpro-yellow/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="w-2 h-2 bg-roadpro-yellow rounded-full"></span>
                      </div>
                      <p className="text-roadpro-gray">Electric fleet vehicles for on-site operations and maintenance</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-roadpro-yellow/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="w-2 h-2 bg-roadpro-yellow rounded-full"></span>
                      </div>
                      <p className="text-roadpro-gray">Paperless operations through digital planning and documentation</p>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg rounded-xl overflow-hidden bg-white">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-4 bg-roadpro-yellow flex items-center justify-center p-8">
                  <Route className="w-20 h-20 text-roadpro-black" />
                </div>
                <div className="md:col-span-8 p-8">
                  <h3 className="text-2xl font-bold text-roadpro-black mb-4">Smart Traffic Technology</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-roadpro-yellow/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="w-2 h-2 bg-roadpro-yellow rounded-full"></span>
                      </div>
                      <p className="text-roadpro-gray">AI-powered traffic flow optimization systems</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-roadpro-yellow/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="w-2 h-2 bg-roadpro-yellow rounded-full"></span>
                      </div>
                      <p className="text-roadpro-gray">Real-time monitoring and adaptive traffic management</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-roadpro-yellow/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="w-2 h-2 bg-roadpro-yellow rounded-full"></span>
                      </div>
                      <p className="text-roadpro-gray">IoT devices for enhanced safety and traffic data collection</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-roadpro-yellow/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="w-2 h-2 bg-roadpro-yellow rounded-full"></span>
                      </div>
                      <p className="text-roadpro-gray">Integration with smart city initiatives across Abu Dhabi</p>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 p-8 bg-white rounded-xl shadow-lg text-center">
          <h3 className="text-2xl font-bold text-roadpro-black mb-4">Our Environmental Commitment</h3>
          <p className="text-roadpro-gray mb-6 max-w-3xl mx-auto">
            By 2025, we aim to reduce our carbon footprint by 40% through sustainable practices and innovative technology solutions. Join us in creating safer, more efficient, and environmentally responsible traffic management systems.
          </p>
          <div className="bg-roadpro-yellow/10 p-6 rounded-lg inline-block">
            <div className="flex flex-col md:flex-row md:items-center gap-4 justify-center">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-roadpro-yellow rounded-full"></div>
                <span className="text-roadpro-black font-medium">40% Reduced Emissions</span>
              </div>
              <div className="hidden md:block w-1 h-6 border-r border-roadpro-yellow/30"></div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-roadpro-yellow rounded-full"></div>
                <span className="text-roadpro-black font-medium">100% Renewable Energy</span>
              </div>
              <div className="hidden md:block w-1 h-6 border-r border-roadpro-yellow/30"></div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-roadpro-yellow rounded-full"></div>
                <span className="text-roadpro-black font-medium">Zero Waste Operations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
