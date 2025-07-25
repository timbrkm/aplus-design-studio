export interface Project {
  id: number;
  title: string;
  slug: string;
  category: "print" | "web" | "editorial" | "branding";
  description: string;
  // Zukünftige Felder für die Detailansicht
  longDescription?: string;
  images?: string[];
  client?: string;
  year?: number;
}

export const projects: Project[] = [
  { 
    id: 1, 
    title: "Projekt 1", 
    slug: "projekt-1",
    category: "print", 
    description: "Print Design Projekt",
    longDescription: "Dies ist eine längere Beschreibung für Projekt 1. Hier könnten Details über den Designprozess, die verwendeten Werkzeuge und das Ergebnis stehen.",
    images: ["/placeholder.svg", "/placeholder.svg"]
  },
  { 
    id: 2, 
    title: "Projekt 2", 
    slug: "projekt-2",
    category: "web", 
    description: "Web Design Projekt",
    longDescription: "Dies ist eine längere Beschreibung für Projekt 2. Fokus auf responsivem Design und Benutzererfahrung.",
    images: ["/placeholder.svg"]
  },
  { 
    id: 3, 
    title: "Projekt 3", 
    slug: "projekt-3",
    category: "editorial", 
    description: "Editorial Design",
    longDescription: "Dies ist eine längere Beschreibung für Projekt 3. Layout und Typografie für ein Magazin.",
    images: []
  },
  { 
    id: 4, 
    title: "Projekt 4", 
    slug: "projekt-4",
    category: "branding", 
    description: "Branding Projekt",
    longDescription: "Dies ist eine längere Beschreibung für Projekt 4. Entwicklung einer kompletten Markenidentität.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  }
];
