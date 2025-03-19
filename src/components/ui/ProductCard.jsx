import { Link } from "react-router-dom";
import Button from "./Button";

function ProductCard({
  id,
  title,
  price,
  originalPrice,
  image,
  rating,
  stock,
  brand,
}) {
  // Determine message and color based on stock status
  const stockStatus = () => {
    if (stock <= 5)
      return { message: "Limited Stock", color: "bg-red-100 text-red-800" };
    if (stock <= 20)
      return { message: "Running Low", color: "bg-yellow-100 text-yellow-800" };
    return { message: "In Stock", color: "bg-green-100 text-green-800" };
  };

  const { message, color } = stockStatus();

  return (
    <div className="bg-white rounded-lg shadow-[0px_1px_20px_8px_#00000024] overflow-hidden hover:shadow-[0px_1px_20px_15px_#00000024] transition-shadow duration-300">
      <div className="group">
        <Link to={`/products/${id}`} className="block relative h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-contain group-hover:scale-120 transition-all"
          />
        </Link>
        <div className="relative p-4 bg-white z-10">
          <div className="flex justify-between items-start mb-2">
            <Link to={`/products/${id}`}>
              <h3 className="text-lg font-medium group-hover:text-blue-600 line-clamp-2 h-12">
                {title}
              </h3>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-4 pb-4 bg-white">
        <div className="text-sm text-gray-500 mb-2">{brand}</div>

        <div className="flex items-center mb-2">
          {rating && (
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-1 text-sm text-gray-500">({rating})</span>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center mb-4">
          <div>
            {originalPrice && originalPrice > price ? (
              <div className="flex items-center">
                <p className="text-gray-700 font-bold">${price}</p>
                <p className="text-gray-500 text-sm line-through ml-2">
                  ${originalPrice}
                </p>
              </div>
            ) : (
              <p className="text-gray-700 font-bold">${price}</p>
            )}
          </div>
          <span className={`text-xs px-2 py-1 rounded-full ${color}`}>
            {message}
          </span>
        </div>

        <Button className="w-full">Add to Cart</Button>
      </div>
    </div>
  );
}

export default ProductCard;
