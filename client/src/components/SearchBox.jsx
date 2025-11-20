import React from "react";
import { FaSearch, FaMicrophone } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div className="grid place-items-center py-7 px-4">
      <div className="bg-white rounded-lg p-5 w-full max-w-screen-lg">
        <div
          className="
          grid grid-cols-[auto_1fr] 
          items-center 
          gap-3 
          border border-gray-300 
          px-4 py-3 
          rounded-lg 
          w-full 
          max-w-xl 
          mx-auto
        "
        >
          <FaSearch className="w-5 h-5 text-gray-500" />
          <div className="flex">
            <input
              type="text"
              placeholder="Search here"
              className="w-full border-r border-gray-300  text-sm sm:text-base focus:outline-none"
            />
            <FaMicrophone className="w-5 h-5 text-gray-500 mx-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
