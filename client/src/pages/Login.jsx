import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleEvent = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!user.email || !user.password) {
        alert("please enter all feilds");
        return;
      }

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        user
      );
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      alert("login successfully");
      setUser({ email: "", password: "" });
      navigate("/");
    } catch (err) {
      console.log(err);
      alert(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="bg-[#e0f2fe] h-screen flex justify-center items-center p-4">
      <div className="bg-white/50 backdrop-blur-xl p-8 w-full max-w-md rounded-2xl shadow-lg">
        <h1 className="text-3xl text-center font-bold text-gray-600 mb-6">
          Login
        </h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleEvent}
              placeholder="enter your email"
              className="border px-4 py-2 border-gray-300 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleEvent}
              placeholder="enter your password"
              className="border px-4 py-2 border-gray-300 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>
         
            <button
              type="submit"
              className="bg-[#f39c12] text-white w-full py-2 rounded-lg  font-semibold transition duration-300"
            >
              Login
            </button>
      
        </form>
        <p className="text-center text-sm mt-3 text-gray-700">
          create new account?{" "}
          <a
            href="/register"
            className="text-blue-500 hover:underline font-medium"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
