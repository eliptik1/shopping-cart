import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-dvh flex flex-col bg-white ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
