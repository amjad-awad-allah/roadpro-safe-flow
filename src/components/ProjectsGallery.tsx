
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { LinkesAndPathes } from "@/utils/LinkesAndPathes";

// Sample projects data
const projects = [
  {
    id: 1,
    category: "road-construction",
    name: "Al Falah Street Expansion",
    location: "Abu Dhabi City Center",
    image: LinkesAndPathes.projectGallery1,
    highlights: "Completed 2 weeks ahead of schedule with zero safety incidents"
  },
  {
    id: 2,
    category: "events",
    name: "UAE National Day Parade",
    location: "Corniche Road, Abu Dhabi",
    image: LinkesAndPathes.projectGallery2,
    highlights: "Managed traffic for over 200,000 attendees"
  },
  {
    id: 3,
    category: "infrastructure",
    name: "Reem Island Bridge Construction",
    location: "Reem Island, Abu Dhabi",
    image: LinkesAndPathes.projectGallery3,
    highlights: "Award-winning safety implementation"
  },
  {
    id: 4,
    category: "road-construction",
    name: "Yas Island Highway Extension",
    location: "Yas Island, Abu Dhabi",
    image: LinkesAndPathes.projectGallery4,
    highlights: "Innovative traffic diversion plan"
  },
  {
    id: 5,
    category: "events",
    name: "Formula 1 Grand Prix",
    location: "Yas Marina Circuit",
    image: LinkesAndPathes.projectGallery5,
    highlights: "Managed complex traffic flows for international event"
  },
  {
    id: 6,
    category: "infrastructure",
    name: "Sheikh Zayed Road Maintenance",
    location: "Dubai-Abu Dhabi Highway",
    image: LinkesAndPathes.projectGallery6,
    highlights: "Zero disruption to major arterial route"
  }
];

const categories = [
  { id: "all", name: "All Projects" },
  { id: "road-construction", name: "Road Construction" },
  { id: "events", name: "Events" },
  { id: "infrastructure", name: "Infrastructure" }
];

const ProjectsGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const titleRef = useScrollAnimation<HTMLDivElement>({
    animation: 'animate-fade-in-scroll',
    delay: 100
  });
  
  const filtersRef = useScrollAnimation<HTMLDivElement>({
    animation: 'animate-fade-in-scroll',
    delay: 200
  });
  
  const galleryRef = useScrollAnimation<HTMLDivElement>({
    animation: 'animate-fade-in-scroll',
    delay: 300
  });
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-roadpro-yellow/20 px-4 py-1 rounded-full mb-4">
            <span className="text-sm font-medium text-roadpro-black">
              Our Portfolio
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-roadpro-black mb-4 leading-tight">
            Featured Projects
          </h2>
          <p className="text-roadpro-gray text-lg leading-relaxed">
            Explore our successful traffic management implementations across Abu Dhabi
          </p>
        </div>
        
        <div ref={filtersRef} className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "cta" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        <div 
          ref={galleryRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-roadpro-yellow transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center text-sm mb-2">
                    <svg width="16" height="16" className="mr-2" viewBox="0 0 24 24" fill="none">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {project.location}
                  </div>
                  <p className="text-sm text-white/80">
                    {project.highlights}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-roadpro-yellow text-roadpro-black hover:bg-roadpro-yellow">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
