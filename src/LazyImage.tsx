import React, { useState } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, onError }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => setLoaded(true);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setLoaded(true);
    setError(true);
    if (onError) onError(e);
  };

  return (
    <div className="w-full h-full relative">
      {/* Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 skeleton-shimmer" />
      )}
      {/* Image */}
      <img
        src={src}
        alt={alt}
        className={`${className ?? ""} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default LazyImage;
