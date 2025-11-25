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
        <div className=" bg-[#57C2F2]   rounded-xl p-6  flex items-center justify-center gap-3">
          <div>
            <h3 className="text-lg font-bold text-white">
              Working Hours
            </h3>
            <div className="grid grid-cols-2">
              <div>
                <p className="text-white">Mon – Sat </p>
                <p className="text-white">Sunday</p>
              </div>
              <div className="">
                <p className="text-white"> 9:00 AM – 9:00 PM</p>
                <p className="text-white"> 10:00 AM – 6:00 PM</p>
              </div>
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
