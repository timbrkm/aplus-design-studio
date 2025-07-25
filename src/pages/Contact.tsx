import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ConstructionBanner from "@/components/ConstructionBanner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Nachricht gesendet!",
        description: "Vielen Dank für Ihre Nachricht. Ich melde mich bald bei Ihnen.",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-contact">
      <ConstructionBanner />
      
      <div className="pt-16 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-contact-foreground hover:opacity-70 transition-opacity"
              aria-label="Zurück zur Startseite"
            >
              <ArrowLeft size={20} />
              <span>Zurück</span>
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-light mb-16 text-contact-foreground">
            Kontakt
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xl mb-12 text-contact-foreground">
                Ich freue mich auf Ihre Nachricht.
              </p>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <Input
                    type="text"
                    placeholder="Name"
                    required
                    className="bg-white/20 border-white/30 text-contact-foreground placeholder:text-contact-foreground/70 focus:border-white"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="E-Mail"
                    required
                    className="bg-white/20 border-white/30 text-contact-foreground placeholder:text-contact-foreground/70 focus:border-white"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Nachricht"
                    required
                    rows={6}
                    className="bg-white/20 border-white/30 text-contact-foreground placeholder:text-contact-foreground/70 focus:border-white resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-contact hover:bg-white/90 transition-colors px-8 py-3"
                >
                  {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                </Button>
              </form>
            </div>

            <div className="lg:pl-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-light mb-4 text-contact-foreground">
                    Direkter Kontakt
                  </h3>
                  <a
                    href="mailto:hello@aplus-design.de"
                    className="flex items-center gap-3 text-contact-foreground hover:opacity-70 transition-opacity"
                  >
                    <Mail size={20} />
                    hello@aplus-design.de
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-light mb-4 text-contact-foreground">
                    Social Media
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="flex items-center gap-2 text-contact-foreground hover:opacity-70 transition-opacity"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-contact-foreground hover:opacity-70 transition-opacity"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;