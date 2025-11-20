import React, { useEffect, useState, useRef } from "react";
import { FaMoon, FaSun, FaBars, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { menus } from "../lists/responsiveMenus";
import { dropDown } from "../lists/dropdown";

const Navbar = () => {
  const [dark, setDark] = useState(false);
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

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <nav className="bg-[#57C2F2] text-white py-5 flex justify-between items-center px-4">
        {/* logo section */}
        <h1 className="font-bold text-[20px]">HYPER MART</h1>

        {/* Desktop Menus */}
        <ul className="hidden md:flex gap-x-8">
          {menus.map((item, index) => (
            <li key={index}>
              <a href="#" className="font-small">
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-3" ref={dropdownRef}>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white dark:bg-gray-800 transition"
          >
            {dark ? (
              <FaSun className="text-yellow-400 w-4 h-4" />
            ) : (
              <FaMoon className="text-gray-800 w-4 h-4" />
            )}
          </button>
          <button className="p-2 rounded-full bg-white text-black text-gray-600">
            <FaUser/>
          </button>

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
              <ul className="flex flex-col text-center">
                {dropDown.map((item, index) => (
                  <a href="#">
                    {" "}
                    <li
                      key={index}
                      className="py-3  h:bg-[#f8f9fa] text-black hover:bg-gray-100"
                    >
                      {item.title}
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
