import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-10" id="contact">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-start">
        Contact
      </h1>

      {/* Top Contact Info Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {/* Phone */}
        <div className="bg-white shadow-md p-6 rounded-xl flex flex-col items-center text-center">
          <FaPhoneAlt className="text-yellow-500 text-3xl mb-3" />
          <h2 className="font-semibold text-lg text-gray-800">
            Customer Support
          </h2>
          <p className="text-gray-600 mt-1">+91 81246 06122</p>
          <p className="text-gray-600">+91 80727 52955</p>
        </div>

        {/* Email */}
        <div className="bg-white shadow-md p-6 rounded-xl flex flex-col items-center text-center">
          <FaEnvelope className="text-yellow-500 text-3xl mb-3" />
          <h2 className="font-semibold text-lg text-gray-800">Email Us</h2>
          <p className="text-gray-600 mt-1">support@hypermart.com</p>
          <p className="text-gray-600">help@hypermart.com</p>
        </div>

        {/* Location */}
        <div className="bg-white shadow-md p-6 rounded-xl flex flex-col items-center text-center">
          <FaMapMarkerAlt className="text-yellow-500 text-3xl mb-3" />
          <h2 className="font-semibold text-lg text-gray-800">
            Store Location
          </h2>
          <p className="text-gray-600 mt-1">Hyper Mart Main Branch</p>
          <p className="text-gray-600">Tirunelveli, Tamil Nadu</p>
        </div>
      </div>

      {/* Contact Form + Map */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Working Hours */}
<div className="bg-white shadow-sm rounded-xl p-6">
  <div className="flex items-center gap-4 mb-4">
    <div className="p-3 bg-blue-100 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-6 h-6 text-blue-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6l4 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-gray-800">Working Hours</h3>
  </div>

  <div className="space-y-3 text-gray-700 text-base">
    <div className="flex justify-between">
      <span>Mon – Sat</span>
      <span>9:00 AM – 9:00 PM</span>
    </div>
    <div className="flex justify-between">
      <span>Sunday</span>
      <span>10:00 AM – 6:00 PM</span>
    </div>
  </div>
</div>


        {/* Google Map */}
        <div className="rounded-xl overflow-hidden shadow-xl h-80">
          <iframe
            title="Hyper Mart Map"
            className="w-full h-full"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.7809360915676!2d77.7275!3d8.7274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411d47c97d93f%3A0x8b38dfb3dfcc5b5!2sTirunelveli!5e0!3m2!1sen!2sin!4v1699999999999"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
