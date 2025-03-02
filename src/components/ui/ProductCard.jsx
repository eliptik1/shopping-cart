import { Link } from "react-router-dom";
import Button from "./Button";

function ProductCard({ id, title, price, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/products/${id}`}>
        <img
          src={image || "https://placehold.co/150"}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/products/${id}`}>
          <h3 className="text-lg font-medium mb-2 hover:text-blue-600">
            {title}
          </h3>
        </Link>
        <p className="text-gray-700 font-bold mb-4">{price} TL</p>
        <Button className="w-full">Add to cart</Button>
      </div>
    </div>
  );
}

export default ProductCard;
