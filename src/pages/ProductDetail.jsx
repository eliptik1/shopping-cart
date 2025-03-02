import { useParams } from "react-router-dom";
import Button from "../components/ui/Button";

function ProductDetail() {
  const { id } = useParams();

  // Demo product details - in a real application, data would be fetched based on the id
  const product = {
    id: id,
    title: "Sample Product",
    price: 199.99,
    image: "https://placehold.co/400",
    description:
      "Detailed description about this amazing product. Made with high-quality materials, this product is durable and long-lasting. Available in different color options.",
    features: [
      "High-quality fabric",
      "Durable stitching",
      "Easy to wash",
      "Modern design",
    ],
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 mt-16 max-w-7xl w-full mx-auto">
      <div className="md:w-1/2">
        <img
          src={product.image}
          alt={product.title}
          className="w-full rounded-lg shadow-md"
        />
      </div>

      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-2xl font-bold text-blue-600 mb-6">
          {product.price} TL
        </p>

        <div className="mb-6 text-left">
          <h2 className="text-lg font-semibold mb-2">Product Description</h2>
          <p className="text-gray-700">{product.description}</p>
        </div>

        <div className="mb-8 text-left">
          <h2 className="text-lg font-semibold mb-2">Features</h2>
          <ul className="list-disc pl-5">
            {product.features.map((feature, index) => (
              <li key={index} className="text-gray-700 mb-1">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center border rounded">
            <button className="w-10 h-10 flex items-center justify-center">
              -
            </button>
            <span className="w-10 h-10 flex items-center justify-center">
              1
            </span>
            <button className="w-10 h-10 flex items-center justify-center">
              +
            </button>
          </div>

          <Button className="px-8">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
