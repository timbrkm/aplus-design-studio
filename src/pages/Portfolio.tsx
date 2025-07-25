import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ConstructionBanner from "@/components/ConstructionBanner";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("alle");

  const filters = [
    { id: "alle", label: "Alle" },
    { id: "print", label: "Print" },
    { id: "web", label: "Web" },
    { id: "editorial", label: "Editorial" },
    { id: "branding", label: "Branding" }
  ];

  const projects = [
    { id: 1, title: "Projekt 1", category: "print", description: "Print Design Projekt" },
    { id: 2, title: "Projekt 2", category: "web", description: "Web Design Projekt" },
    { id: 3, title: "Projekt 3", category: "editorial", description: "Editorial Design" },
    { id: 4, title: "Projekt 4", category: "branding", description: "Branding Projekt" }
  ];

  const filteredProjects = activeFilter === "alle" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-portfolio">
      <ConstructionBanner />
      
      <div className="pt-16 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-portfolio-foreground hover:opacity-70 transition-opacity"
              aria-label="Zurück zur Startseite"
            >
              <ArrowLeft size={20} />
              <span>Zurück</span>
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-light mb-8 text-portfolio-foreground">
            Portfolio
          </h1>

          <div className="flex flex-wrap gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-portfolio-foreground text-portfolio'
                    : 'bg-transparent border border-portfolio-foreground text-portfolio-foreground hover:bg-portfolio-foreground hover:text-portfolio'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white/10 backdrop-blur-sm p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square bg-white/20 mb-4"></div>
                <h3 className="text-xl font-light mb-2 text-portfolio-foreground">
                  {project.title}
                </h3>
                <p className="text-portfolio-foreground/80">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;