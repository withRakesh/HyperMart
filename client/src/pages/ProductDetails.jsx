import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://hypermart-fqba.onrender.com/api/get/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exists = cart.find((p) => p._id === item._id);

    if (exists) {
      exists.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("product add to cart");
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
       <h1 className="text-xl font-bold text-gray-700 py-5 text-center ">Product Details</h1>
      <div className="px-6 py-7 flex flex-col bg-white md:flex-row gap-6 justify-center">

        {/* Image */}
        <img
          src={product.image}
          className="w-full md:w-96 h-72 rounded-lg shadow-sm object-cover"
          alt={product.name}
        />

        {/* Details */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            {product.name}
          </h2>
          <p className="text-gray-500 text-sm mt-2">{product.description}</p>

          <p className="text-xl font-bold mt-4 text-[#0a0a0a]">
            ₹ {product.price}
            <span className="text-gray-500 text-sm"> {product.unit}</span>
          </p>

          <p className="mt-2 text-gray-600">⭐ {product.rating}</p>
          <p className="mt-1 mb-4 text-gray-700">Stock: {product.stock}</p>

          <Link

            to={"/cart"}
            onClick={() => addToCart(product)}
            className="mt-5 bg-[#3EB0E8] text-white px-5 py-2  rounded-lg hover:bg-[#1F8CCB]"
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
