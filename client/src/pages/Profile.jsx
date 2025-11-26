import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";

const Profile = () => {
  
  const [user, setUser] = useState(null)

  useEffect(()=>{
    const userInfo = localStorage.getItem('user');

    if(userInfo){
      setUser(JSON.parse(userInfo));
    }
 

  }, []);

  
  if (!user) {
    return <p className="text-center text-xl">Loading...</p>;
  }


  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-4">My Profile</h2>

        {/* Profile Card */}
        <div className="bg-white p-5 rounded-xl shadow mb-5">
          <h3 className="text-lg font-semibold mb-3">Personal Information</h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <p>
              <span className="font-semibold">Name: </span>{user.userName}
            </p>
            <p>
              <span className="font-semibold">Email: </span>{user.email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +91 9876543210
            </p>
            <p>
              <span className="font-semibold">Joined On:</span>{new Date(user.createdAt).toLocaleDateString()}
            </p>
          </div>

          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Edit Profile
          </button>
        </div>

        {/* Address */}
        <div className="bg-white p-5 rounded-xl shadow mb-5">
          <h3 className="text-lg font-semibold mb-3">Default Address</h3>

          <p className="text-gray-700">
            Rakesh Kumar <br />
            23, Gandhi Street, Anna Nagar <br />
            Chennai, Tamil Nadu - 600040 <br />
            Phone: +91 9876543210
          </p>

          <div className="mt-4 flex gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Edit Address
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
              Add New Address
            </button>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white p-5 rounded-xl shadow mb-5">
          <h3 className="text-lg font-semibold mb-3">Recent Orders</h3>

          <div className="border rounded-lg p-4 mb-3">
            <p className="font-semibold">Order ID: HM-982134</p>
            <p>Date: 15 Feb 2025</p>
            <p>Items: 3</p>
            <p>
              Status:{" "}
              <span className="text-green-600 font-semibold">Delivered</span>
            </p>
            <p>Total: ₹ 1,420</p>
            <button className="mt-2 text-blue-600 underline">View Order</button>
          </div>

          <div className="border rounded-lg p-4 mb-3">
            <p className="font-semibold">Order ID: HM-982120</p>
            <p>Date: 10 Feb 2025</p>
            <p>Items: 2</p>
            <p>
              Status:{" "}
              <span className="text-yellow-600 font-semibold">Pending</span>
            </p>
            <p>Total: ₹ 899</p>
            <button className="mt-2 text-blue-600 underline">View Order</button>
          </div>
        </div>

        {/* Wishlist */}
        <div className="bg-white p-5 rounded-xl shadow mb-5">
          <h3 className="text-lg font-semibold mb-3">Wishlist</h3>
          <p className="text-gray-600">
            You haven't added any products to your wishlist yet.
          </p>
        </div>

        {/* Account Settings */}
        <div className="bg-white p-5 rounded-xl shadow mb-5">
          <h3 className="text-lg font-semibold mb-3">Account Settings</h3>

          <ul className="space-y-2">
            <li className="text-blue-600 underline cursor-pointer">
              Change Password
            </li>
            <li className="text-blue-600 underline cursor-pointer">
              Manage Notifications
            </li>
            <li className="text-red-600 underline cursor-pointer">
              Delete Account
            </li>
          </ul>
        </div>

        {/* Logout */}
        <div className="text-center">
          <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
