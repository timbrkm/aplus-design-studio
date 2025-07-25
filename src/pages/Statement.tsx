import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown } from "lucide-react";
import ConstructionBanner from "@/components/ConstructionBanner";

const Statement = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-statement relative">
      <ConstructionBanner />
      
      <div className="pt-16 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-statement-foreground hover:opacity-70 transition-opacity"
              aria-label="Zurück zur Startseite"
            >
              <ArrowLeft size={20} />
              <span>Zurück</span>
            </Link>
          </div>

          <div className="min-h-[70vh] flex items-center justify-center">
            <div 
              className={`text-center transition-all duration-1000 ease-in-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-relaxed text-statement-foreground max-w-4xl">
                Design ist
                <br />
                funktionale Schönheit.
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                  Alles hat eine Aufgabe.
                </span>
                <br />
                <span className="text-xl md:text-2xl lg:text-3xl xl:text-4xl opacity-90">
                  Die Form ist die Folge.
                </span>
              </h1>
              
              <div className="mt-16 text-statement-foreground/70">
                <p className="text-sm tracking-wider">
                  — Antje Solenski
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="text-statement-foreground/50 animate-bounce">
              <ChevronDown size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statement;