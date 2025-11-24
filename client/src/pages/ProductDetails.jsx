import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://hypermart-fqba.onrender.com/api/get/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      <Navbar />

      <div className="px-6 py-8 flex flex-col md:flex-row gap-6 justify-center">
        {/* Image */}
        <img
          src={product.image}
          className="w-full md:w-96 h-72 rounded-lg object-cover"
          alt={product.name}
        />

        {/* Details */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
          <p className="text-gray-500 text-sm mt-2">{product.description}</p>

          <p className="text-xl font-bold mt-4 text-[#0a0a0a]">
            ₹ {product.price}
            <span className="text-gray-500 text-sm"> {product.unit}</span>
          </p>

          <p className="mt-2 text-gray-600">⭐ {product.rating}</p>
          <p className="mt-1 text-gray-700">Stock: {product.stock}</p>

          <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
