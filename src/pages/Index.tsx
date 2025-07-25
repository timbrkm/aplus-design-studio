import GridTile from "@/components/GridTile";

const Index = () => {
  const navigationTiles = [
    {
      title: "Portfolio",
      slug: "portfolio",
      colorClass: "tile-portfolio",
      ariaLabel: "Zum Portfolio",
      preview: "Eine Auswahl von Projekten aus verschiedenen Designbereichen."
    },
    {
      title: "Über mich",
      slug: "ueber-mich",
      colorClass: "tile-about",
      ariaLabel: "Zur Seite Über mich",
      preview: "Werte, Arbeitsweise und Hintergrund."
    },
    {
      title: "Kontakt",
      slug: "kontakt",
      colorClass: "tile-contact",
      ariaLabel: "Zur Kontaktseite",
      preview: "Ich freue mich auf Ihre Nachricht."
    },
    {
      title: "Statement",
      slug: "statement",
      colorClass: "tile-statement",
      ariaLabel: "Zum Design-Statement",
      preview: "Meine Philosophie zu Design und visueller Kommunikation."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="text-center" style={{ paddingTop: 'clamp(2rem, 10vw, 4rem)', paddingBottom: 'clamp(1rem, 5vw, 2rem)' }}>
        <h1 className="font-light tracking-wide text-foreground" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.25rem)' }}>
          a+design antje solenski
        </h1>
        <p className="text-muted-foreground mt-2 tracking-wider" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>
          Portfolio und Studioseite für visuelle Kommunikation und Grafikdesign
        </p>
      </header>

      {/* Main Grid */}
      <main className="px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 gap-1 md:gap-2">
            {navigationTiles.map((tile) => (
              <GridTile
                key={tile.slug}
                title={tile.title}
                slug={tile.slug}
                colorClass={tile.colorClass}
                ariaLabel={tile.ariaLabel}
                preview={tile.preview}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
