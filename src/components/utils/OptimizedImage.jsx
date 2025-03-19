import { useState, useEffect } from "react";

const OptimizedImage = ({
  src,
  alt,
  className,
  maxWidth = 500,
  maxHeight = 500,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };
    img.src = src;

    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <div className="relative w-full flex items-center justify-center h-full">
      {isLoading && (
        <div className="flex justify-center items-center w-full h-48">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-blue-600"></div>
        </div>
      )}

      {imageSrc && (
        <img
          loading="lazy"
          src={imageSrc}
          alt={alt}
          className={`${className} ${
            isLoading ? "opacity-0" : "opacity-100"
          } transition-opacity duration-300`}
          style={{
            objectFit: "contain",
            maxWidth: `${maxWidth}px`,
            maxHeight: `${maxHeight}px`,
          }}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
