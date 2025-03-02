import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

function Home() {
  return (
    <div className="flex flex-1 items-center">
      <div className="flex flex-col items-center w-full h-full">
        <div className="text-center max-w-2xl mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to the Shopping App
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            An online shopping experience where you can find the best products
            at affordable prices.
          </p>
          <Link to="/products">
            <Button className="px-8 py-3 text-lg">Start Shopping</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-3">New Arrivals</h2>
            <p className="text-gray-600 mb-4">
              Discover the latest added products and stay on top of trends.
            </p>
            <Link
              to="/products"
              className="text-blue-600 font-medium hover:underline"
            >
              Browse new arrivals &rarr;
            </Link>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Deals</h2>
            <p className="text-gray-600 mb-4">
              Don't miss out on special discounted products, grab them before
              stocks run out.
            </p>
            <Link
              to="/products"
              className="text-green-600 font-medium hover:underline"
            >
              Explore discounts &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
