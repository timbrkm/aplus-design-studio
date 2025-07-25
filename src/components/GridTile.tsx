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
    <Link
      to={`/${slug}`}
      className={`grid-tile ${colorClass} group`}
      aria-label={ariaLabel}
    >
      <div className="grid-tile-content text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">
          {title}
        </h2>
        {preview && (
          <p className="absolute top-1/2 left-0 right-0 px-4 mt-8 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {preview}
          </p>
        )}
      </div>
    </Link>
  );
};

export default GridTile;
