import   { useState } from "react";
  
import React from 'react'

const Order = () => {
 const [order, setOrder] = useState({
    name: "",
    address: "",
    phone: "",
    payment: "cod",
  });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    alert("Order Placed Successfully 🎉");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6">🛍️ Order Summary</h1>

      {/* Delivery Details */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 border">
        <h2 className="text-xl font-semibold mb-4">Delivery Details</h2>

        <div className="grid gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="border p-3 rounded-xl w-full"
          />

          <textarea
            name="address"
            placeholder="Full Address"
            onChange={handleChange}
            className="border p-3 rounded-xl w-full"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="border p-3 rounded-xl w-full"
          />
        </div>
      </div>

      {/* Payment */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 border">
        <h2 className="text-xl font-semibold mb-4">💳 Payment Method</h2>

        <label className="flex items-center gap-3 p-3 border rounded-xl">
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={order.payment === "cod"}
            onChange={handleChange}
          />
          Cash On Delivery
        </label>

        <label className="flex items-center gap-3 p-3 border rounded-xl mt-3">
          <input
            type="radio"
            name="payment"
            value="online"
            checked={order.payment === "online"}
            onChange={handleChange}
          />
          Online Payment
        </label>
      </div>

      {/* Delivery Info */}
      <div className="bg-white shadow-lg rounded-2xl p-6 border">
        <h2 className="text-xl font-semibold mb-4">🚚 Delivery Info</h2>

        <p className="text-gray-600">Estimated Delivery: <strong>2–4 Days</strong></p>
        <p className="text-gray-600 mb-6">Shipping Charge: <strong>Free</strong></p>

        <button
          onClick={placeOrder}
          className="w-full bg-blue-600 text-white text-lg py-3 rounded-xl"
        >
          Place Order
        </button>
      </div>
    </div>
    )
};

export default Order