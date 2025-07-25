import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ConstructionBanner from "@/components/ConstructionBanner";
import { projects, Project } from "@/data/projects";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<string>("alle");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { id: "alle", label: "Alle" },
    { id: "print", label: "Print" },
    { id: "web", label: "Web" },
    { id: "editorial", label: "Editorial" },
    { id: "branding", label: "Branding" }
  ];

  const filteredProjects = activeFilter === "alle" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleModalClose = () => {
    setSelectedProject(null);
  };

  return (
    <>
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
                <button
                  key={project.id}
                  onClick={() => handleProjectClick(project)}
                  className="block bg-white/10 backdrop-blur-sm p-6 hover:bg-white/20 transition-all duration-300 text-left"
                >
                  <div className="aspect-square bg-white/20 mb-4"></div>
                  <h3 className="text-xl font-light mb-2 text-portfolio-foreground">
                    {project.title}
                  </h3>
                  <p className="text-portfolio-foreground/80">
                    {project.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={handleModalClose}>
        <DialogContent className="sm:max-w-[80vw] h-[90vh] flex flex-col">
          <DialogHeader>
            <DialogTitle className="text-3xl font-light">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="capitalize">
              {selectedProject?.category}
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="flex-grow">
            <div className="pr-6">
              <p className="my-4">{selectedProject?.longDescription}</p>
              {selectedProject?.images && selectedProject.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {selectedProject.images.map((image, index) => (
                    <img 
                      key={index} 
                      src={image} 
                      alt={`${selectedProject.title} Bild ${index + 1}`} 
                      className="w-full h-auto object-cover rounded-md"
                    />
                  ))}
                </div>
              )}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Portfolio;
