import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ConstructionBanner from "@/components/ConstructionBanner";

const About = () => {
  return (
    <div className="min-h-screen bg-about">
      <ConstructionBanner />
      
      <div className="pt-16 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-about-foreground hover:opacity-70 transition-opacity"
              aria-label="Zurück zur Startseite"
            >
              <ArrowLeft size={20} />
              <span>Zurück</span>
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-light mb-16 text-about-foreground">
            Über mich
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-light mb-6 text-about-foreground">
                  Werte
                </h2>
                <p className="text-lg leading-relaxed text-about-foreground/90">
                  Reduktion, Klarheit, Konzeptstärke. Diese drei Prinzipien leiten meine Arbeit als Designerin für visuelle Kommunikation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-6 text-about-foreground">
                  Arbeitsweise
                </h2>
                <p className="text-lg leading-relaxed text-about-foreground/90">
                  Recherchebasiert, typografisch präzise, intuitiv reduziert. Jedes Projekt beginnt mit einer gründlichen Analyse und entwickelt sich zu einer klaren visuellen Lösung.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-6 text-about-foreground">
                  Kurzvita
                </h2>
                <p className="text-lg leading-relaxed text-about-foreground/90">
                  Designstudium mit Fokus auf Editorial Design und Corporate Identity. Erfahrung in verschiedenen Projekten von kleinen Start-ups bis zu etablierten Unternehmen.
                </p>
              </section>
            </div>

            <div className="lg:pl-8">
              <div className="aspect-square bg-white/20 mb-8"></div>
              <p className="text-about-foreground/80 text-center italic">
                Antje Solenski
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;