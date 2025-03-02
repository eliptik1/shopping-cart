import ProductCard from "../components/ui/ProductCard";

function Products() {
  // Demo product data
  const placeholderImage = "https://placehold.co/150x200";
  const products = [
    {
      id: 1,
      title: "Red T-Shirt",
      price: 129.99,
      image: placeholderImage,
    },
    {
      id: 2,
      title: "Blue Jeans",
      price: 249.99,
      image: placeholderImage,
    },
    {
      id: 3,
      title: "Black Shoes",
      price: 349.99,
      image: placeholderImage,
    },
    {
      id: 4,
      title: "White Shirt",
      price: 189.99,
      image: placeholderImage,
    },
    {
      id: 5,
      title: "Green Jacket",
      price: 499.99,
      image: placeholderImage,
    },
    {
      id: 6,
      title: "Gray Sweatshirt",
      price: 219.99,
      image: placeholderImage,
    },
  ];

  return (
    <div className="max-w-7xl w-full mx-auto my-16">
      <h1 className="text-3xl font-bold mb-8">Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
