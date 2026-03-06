import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Sun, ShoppingCart, Menu, X } from "lucide-react";
import logo from "../assets/logo/logo.png";
import About from "./About.jsx";
import Account from "./Account";
import Contact from "./Contact.jsx";
import Product from "./Product.jsx";
import Footer from "./Footer.jsx";
import Banner from "./Banner.jsx";
import Categories from "./categories/Categories.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <BrowserRouter>
        <nav className="bg-white text-gray-800 font-semibold flex justify-between items-center px-6 py-4 shadow-lg border-b-2 border-gray-200">
          <img
            src={logo}
            alt="web logo"
            className="h-12 hover:scale-110 transition"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-row gap-8">
            <Link
              to="/"
              className="hover:text-gray-600 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/product"
              className="hover:text-gray-600 transition duration-300"
            >
              Product
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-600 transition duration-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-600 transition duration-300"
            >
              Contact
            </Link>
            <Link
              to="/account"
              className="hover:text-gray-600 transition duration-300"
            >
              Account
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6 text-gray-800">
            <ShoppingCart
              className="cursor-pointer hover:scale-110 transition"
              size={24}
            />
            <Sun
              className="cursor-pointer hover:scale-110 transition"
              size={24}
            />

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden hover:scale-110 transition"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t-2 border-gray-200 flex flex-col gap-4 p-6">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-gray-600 font-semibold"
            >
              Home
            </Link>
            <Link
              to="/product"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-gray-600 font-semibold"
            >
              Product
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-gray-600 font-semibold"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-gray-600 font-semibold"
            >
              Contact
            </Link>
            <Link
              to="/account"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-gray-600 font-semibold"
            >
              Account
            </Link>
          </div>
        )}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Categories />
                <Product />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/product"
            element={
              <>
                <Product />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/account"
            element={
              <>
                <Account />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
