import { Link } from "react-router-dom";

interface GridTileProps {
  title: string;
  slug: string;
  colorClass: string;
  ariaLabel: string;
  preview?: string;
}

const GridTile = ({ title, slug, colorClass, ariaLabel, preview }: GridTileProps) => {
  return (
    <div className="relative">
      {slug === "ueber-mich" && (
        <div className="absolute top-4 right-4 text-4xl font-thin z-20">+</div>
      )}
      <Link
        to={`/${slug}`}
        className={`grid-tile ${colorClass} group`}
        aria-label={ariaLabel}
      >
        <div className="grid-tile-content">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-light tracking-wide">
            {title}
          </h2>
          {preview && (
            <p className="text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-xs">
              {preview}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default GridTile;
