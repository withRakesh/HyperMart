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
    <nav className="sticky top-0 z-50 shadow-sm bg-[#57C2F2] text-white py-5 flex justify-between items-center px-4">
      {/* Logo */}
      <h1 className="font-bold text-[20px]">HYPER MART</h1>

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
      <div className="flex items-center gap-3" ref={dropdownRef}>
        {/* Profile */}
        <Link
          to="/profile"
          className="p-2 rounded-full bg-white text-black"
        >
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

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <FaBars className="text-white w-8 h-8" />
        </button>

        {/* Mobile Dropdown */}
        {open && (
          <div className="absolute top-[70px] right-4 bg-white rounded-lg shadow-lg md:hidden w-48">
            <ul className="flex flex-col text-center text-black">
              <Link to="/" className="py-3 hover:bg-gray-100">
                Home
              </Link>
              <Link to="/categories" className="py-3 hover:bg-gray-100">
                Categories
              </Link>
              <Link to="/orders" className="py-3 hover:bg-gray-100">
                Orders
              </Link>
              <Link to="/cart" className="py-3 hover:bg-gray-100">
                Cart
              </Link>
              <Link to="/about" className="py-3 hover:bg-gray-100">
                About
              </Link>
              <Link to="/contact" className="py-3 hover:bg-gray-100">
                Contact
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
