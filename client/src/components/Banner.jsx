import React from "react";
import { FaShoppingCart, FaBolt, FaTags, FaStar, FaLock } from "react-icons/fa";

const benefits = [
  {
    icon: <FaShoppingCart className="text-[#6FBCE4] text-xl" />,
    title: "Wide product range",
    desc: "All categories in one place",
  },
  {
    icon: <FaBolt className="text-[#6FBCE4]  text-xl" />,
    title: "Fast delivery",
    desc: "Quick & reliable service",
  },
  {
    icon: <FaTags className="text-[#6FBCE4]  text-xl" />,
    title: "Affordable prices",
    desc: "Daily deals & special offers",
  },
  {
    icon: <FaStar className="text-[#6FBCE4] text-xl" />,
    title: "Quality guarantee",
    desc: "Trusted brands & verified products",
  },
  {
    icon: <FaLock className=" text-[#6FBCE4]  text-xl" />,
    title: "Secure checkout",
    desc: "Safe & fast payments",
  },
];

const Banner = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 pb-5   ">
      <div className="grid md:grid-cols-2 bg-white shadow-xl rounded-xl overflow-hidden">
        
        {/* LEFT CONTENT */}
        <div className="p-8 flex flex-col justify-center  ">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Why Hyper Mart?
          </h2>
           <div className="grid w-full justify-center">
                <ul className="space-y-5 grid grid-cols-1 sm:grid-cols-2">
            {benefits.map((item, index) => (
              <li key={index} className="flex items-start  gap-4">
                {item.icon}
                <div>
                  <p className="font-semibold text-gray-800 text-[17px]">{item.title}</p>
                  <p className="text-gray-600 text-[15px] leading-tight">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>

           </div>
       
        </div>

        {/* RIGHT IMAGE BLOCK */}
        <div className="relative h-full">
          <img
            src="https://res.cloudinary.com/dec2rowhi/image/upload/v1763366007/banner2_hg6bbs.png"
            alt="Hyper Mart Banner"
            className="w-full h-full object-cover"
          />
    
        </div>

      </div>
    </div>
  );
};

export default Banner;
