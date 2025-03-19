import { useParams } from "react-router-dom";
import Button from "../components/ui/Button";
import { useState } from "react";
import { useEffect } from "react";
import OptimizedImage from "../components/utils/OptimizedImage";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products/${id}`);

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();
        setProduct(data);
        console.log(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 mt-16 max-w-7xl w-full mx-auto px-4">
      <div className="md:w-1/2">
        <OptimizedImage
          src={product.images[0]}
          alt={product.title}
          className="w-full rounded-lg shadow-[0px_1px_20px_8px_#00000024]"
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
          <h2 className="text-lg font-semibold mb-2">Details</h2>
          <ul className="list-disc pl-5">
            <li className="text-gray-700 mb-1">Brand: {product.brand}</li>
            <li className="text-gray-700 mb-1">Category: {product.category}</li>
            <li className="text-gray-700 mb-1">Rating: {product.rating}</li>
            <li className="text-gray-700 mb-1">Stock: {product.stock}</li>
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
