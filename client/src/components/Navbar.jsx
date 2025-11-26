import React, { useEffect, useState, useRef } from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [loged, setLoged] = useState(false);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setLoged(true);
  }, []);

  return (
    <nav className="sticky top-0 z-50 shadow-sm bg-[#1F8CCB] text-white py-5 flex justify-between items-center px-4">
      <div ref={dropdownRef}>
        
        {/* Mobile Menu Icon */}
        <div className="flex gap-3">
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <FaBars className="text-white w-8 h-8" />
          </button>

          {/* Logo */}
          <h1 className="text-2xl font-extrabold tracking-wide">
            HYPER <span className="text-yellow-300">MART</span>
          </h1>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="absolute top-[70px] left-0 bg-white rounded-lg h:md-screen shadow-lg md:hidden w-sm">
            <ul className="flex flex-col text-center text-black">
              <Link
                to="/"
                className="py-3 w-full flex justify-center  "
                onClick={() => setOpen(false)}
              >
                <div className="p-3 bg-[lightgray] rounded-full text-white">
                  <FaUser></FaUser>
                </div>
              </Link>
              <hr className="w-50 mx-auto text-[lightgray] mb-1" />
              <Link
                to="/"
                className="py-3 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/categories"
                className="py-3 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Categories
              </Link>
              <Link
                to="/orders"
                className="py-3 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Orders
              </Link>
              <Link
                to="/cart"
                className="py-3 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Cart
              </Link>
              <Link
                to="/about"
                className="py-3 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="py-3 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="py-3 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              ></Link>
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-x-8">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/categories">
          <li>Categories</li>
        </Link>
        <Link to="/orders">
          <li>Orders</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Profile */}
        <Link to="/profile" className="p-2 rounded-full bg-white text-black">
          <FaUser />
        </Link>

        {/* Login Button */}
        {!loged && (
          <Link to="/login">
            <button className="bg-white px-4 text-black py-1 rounded-lg">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
