import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Kitchen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://hypermart-fqba.onrender.com/api/get/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center text-center items-center ">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-[#f8f9fa]  ">
      <div className="py-5 px-3 md:px-6 lg:px-10">
        <h1 className="mb-3 font-bold text-2xl text-gray-700">Kitchen Essentials</h1>
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
          {products.map((item, index) => (
            <li
              key={index}
              className="p-4 bg-white rounded-lg hover:shadow-lg duration-300"
            >
              <Link to={`/product/${item._id}`}>
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-md w-full h-28 sm:h-32 md:h-36 lg:h-40 xl:h-44 object-cover"
                />

                {/* Category */}
                <p className="text-gray-500 text-[10px] sm:text-xs pt-1 leading-tight">
                  {item.category}
                </p>

                {/* Name */}
                <p className="font-semibold text-gray-700 text-xs sm:text-sm leading-snug">
                  {item.name}
                </p>

                {/* Description */}
                <p className="text-[11px] sm:text-sm text-gray-500 truncate leading-snug">
                  {item.description}
                </p>

                {/* Price & Rating */}
                <div className="flex justify-between items-center mt-2">
                  <p className="text-[11px] sm:text-sm font-medium text-gray-700">
                    ₹ {item.price}
                    <span className="text-gray-500 text-[10px]">
                      {" "}
                      {item.unit}
                    </span>
                  </p>
                  <p className="text-[11px] sm:text-sm text-gray-600">
                    ⭐ {item.rating}
                  </p>
                </div>

                {/* Stock */}
                <p className="text-gray-700 text-[10px] sm:text-xs mt-1">
                  Stock: {item.stock}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Kitchen;
