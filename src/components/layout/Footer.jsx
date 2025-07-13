import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4 max-w-7xl ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Shopping Cart App
            </p>
          </div>
          <a
            href="https://github.com/eliptik1"
            className="text-sm hover:text-gray-300"
          >
            <div className="flex items-center gap-2">
              <FaGithub size={18} />
              Developed by Eliptik1
            </div>
          </a>
          <div className="flex space-x-4">
            <a href="#" className="text-sm hover:text-gray-300">
              About Us
            </a>
            <a href="#" className="text-sm hover:text-gray-300">
              Contact
            </a>
            <a href="#" className="text-sm hover:text-gray-300">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
