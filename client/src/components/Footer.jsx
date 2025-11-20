import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-10">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        
        {/* GRID SECTIONS */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* LOGO + ABOUT */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Hyper <span className="text-yellow-500">Mart</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted online store for groceries, fashion, electronics, 
              home essentials & more. Quality products. Fast delivery. Best prices.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5 text-xl">
              <FaFacebook className="hover:text-yellow-500 cursor-pointer transition" />
              <FaInstagram className="hover:text-yellow-500 cursor-pointer transition" />
              <FaTwitter className="hover:text-yellow-500 cursor-pointer transition" />
              <FaYoutube className="hover:text-yellow-500 cursor-pointer transition" />
            </div>
          </div>

          {/* SHOP LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-yellow-500 cursor-pointer">Groceries</li>
              <li className="hover:text-yellow-500 cursor-pointer">Electronics</li>
              <li className="hover:text-yellow-500 cursor-pointer">Fashion</li>
              <li className="hover:text-yellow-500 cursor-pointer">Home & Kitchen</li>
              <li className="hover:text-yellow-500 cursor-pointer">Personal Care</li>
            </ul>
          </div>

          {/* CUSTOMER SUPPORT */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Customer Support</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-yellow-500 cursor-pointer">Help Center</li>
              <li className="hover:text-yellow-500 cursor-pointer">FAQs</li>
              <li className="hover:text-yellow-500 cursor-pointer">Shipping Info</li>
              <li className="hover:text-yellow-500 cursor-pointer">Return Policy</li>
              <li className="hover:text-yellow-500 cursor-pointer">Track Order</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>

            <div className="flex items-start gap-3 mb-4">
              <FaPhoneAlt className="text-yellow-500 text-lg mt-1" />
              <p className="text-sm">
                +91  81246 06122 <br /> +91 80727 52955
              </p>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <FaEnvelope className="text-yellow-500 text-lg mt-1" />
              <p className="text-sm">support@hypermart.com</p>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-yellow-500 text-lg mt-1" />
              <p className="text-sm">
                Hyper Mart Main Branch <br /> Tirunelveli, Tamil Nadu
              </p>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 border-t border-gray-700 pt-5 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Hyper Mart. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
