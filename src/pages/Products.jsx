import { useState, useEffect } from "react";
import ProductCard from "../components/ui/ProductCard";
import { calculatePrice } from "../components/utils/calculatePrice";
import { useCartStore } from "../components/store/cartStore";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCartStore();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/products?limit=12");

        if (!response.ok) {
          throw new Error("An error occurred while loading products");
        }

        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
        console.error("Data fetching error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl w-full mx-auto my-16 px-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>

      {loading && (
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-5 border-gray-200  border-t-blue-600 mb-4"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
          <p>Please try again later or refresh the page.</p>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => {
            const priceInfo = calculatePrice(
              product.price,
              product.discountPercentage
            );
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={priceInfo.discounted || product.price}
                originalPrice={priceInfo.original}
                image={product.thumbnail || "https://placehold.co/150x200"}
                rating={product.rating}
                stock={product.stock}
                brand={product.brand}
                addToCart={addToCart}
              />
            );
          })}
        </div>
      )}

      {!loading && !error && products.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">No products found.</p>
        </div>
      )}
    </div>
  );
}

export default Products;
