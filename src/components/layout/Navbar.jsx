import { Link } from "react-router-dom";
import CartIcon from "../CartIcon";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 max-w-7xl ">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            ShoppingApp
          </Link>

          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/products" className="hover:text-gray-300">
              Products
            </Link>
            <Link to="/cart" className="relative">
              <CartIcon />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
