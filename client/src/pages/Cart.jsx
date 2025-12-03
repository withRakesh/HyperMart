import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    calculateTotal(storedCart);
    setLoading(false);
  }, []);

  // Update total
  const calculateTotal = (updatedCart) => {
    const totalAmount = updatedCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(totalAmount);
  };

  // Increase quantity
  const increaseQty = (id) => {
    const updatedCart = cart.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    const updatedCart = cart.map((item) =>
      item._id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const deleteCart = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-xl font-bold">
        Loading...
      </div>
    );
  }
  return (
    <>
      <div className="p-4 min-h-screen">
        <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item._id} className="bg-white p-3 mb-3 rounded shadow">
                <img src={item.image} alt="" className="h-20 rounded mt-1" />
                <p className="font-semibold">{item.name}</p>
                <p>₹ {item.price}</p>

                <p className="flex items-center gap-2 my-2">
                  Qty:
                  <button
                    className="px-3 bg-[whitesmoke]"
                    onClick={() => decreaseQty(item._id)}
                  >
                    –
                  </button>
                  {item.quantity}
                  <button
                    className="px-3 bg-[whitesmoke]"
                    onClick={() => increaseQty(item._id)}
                  >
                    +
                  </button>
                </p>

                <button
                  onClick={() => deleteCart(item._id)}
                  className="bg-[red] text-white p-1 mt-2 text-sm rounded"
                >
                  Delete Cart
                </button>
                
                <Link to={'/order'}>
                <button>Place order</button>
                </Link>
              </div>
            ))}

            {/* Total Section */}
            <div className="text-right mt-4 p-3 bg-gray-100 rounded shadow">
              <h3 className="text-lg font-semibold">
                Total Amount: <span className="text-green-600">₹ {total}</span>
              </h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
