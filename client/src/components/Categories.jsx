import React from "react";
import {
  FaStore,
  FaTshirt,
  FaUtensils,
  FaLaptop,
  FaHandSparkles,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const icons = [
  { name: "Groceries", icon: FaStore, link: "/groceries" },
  { name: "Fashion", icon: FaTshirt, link: "/fashion" },
  { name: "Kitchen Essentials", icon: FaUtensils, link: "/kitchen" },
  { name: "Electronics", icon: FaLaptop, link: "/electronics" },
  { name: "Beauty Care", icon: FaHandSparkles, link: "/beauty" },
];

const Categories = () => {
  return (
    <div className="container w-full mx-auto px-4 py-8 mb-5" id="categories">
      <div className="heading">
        <h1 className="font-bold  text-2xl text-gray-700 mb-5 py-2">
          Categories
        </h1>

        <ul className="grid  grid-cols-2  lg:grid-cols-5 gap-6">
          {icons.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link to={item.link}  key={index}>
                <li
                  className="p-6 text-center bg-white flex flex-col items-center shadow-md rounded-xl hover:bg-gray-50 transition"
                >
                  <Icon
                    className="text-3xl mb-2 text-gray-700 "
                    style={{ color: "#2ecc71" }}
                  />
                  <p className="font-medium text-gray-700">{item.name}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
