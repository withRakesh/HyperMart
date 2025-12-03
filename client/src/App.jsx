import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Groceries from "./pages/Groceries";
import Fashion from "./pages/Fashion";
import Electronics from "./pages/Electronics";
import Beauty from "./pages/Beauty";
import Kitchen from "./pages/Kitchen";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Categories from "./components/Categories";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Profile from "./pages/Profile";
import Layout from "./pages/Layout";
import ElectronicProductDetails from "./pages/ElectronicProductDetails";
import FationProductDetails from "./pages/FationProductDetails";
import GroceriesProductDetails from "./pages/GroceriesProductDetails";
import BeautyProductDetails from "./pages/BeautyProductDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/groceries" element={<Groceries />}></Route>
          <Route path="/fashion" element={<Fashion />}></Route>
          <Route path="/electronics" element={<Electronics />}></Route>
          <Route path="/beauty" element={<Beauty />}></Route>
          <Route path="/kitchen" element={<Kitchen />}></Route>
          <Route path="/Kitchenproduct/:id" element={<ProductDetails />} />
          <Route path="/Electronicproduct/:id" element={<ElectronicProductDetails />} />
          <Route path="/Fationproduct/:id" element={<FationProductDetails />} />
          <Route path="/Groceriesproduct/:id" element={<GroceriesProductDetails />} />
          <Route path="/Beautyproduct/:id" element={<BeautyProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<Banner />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
