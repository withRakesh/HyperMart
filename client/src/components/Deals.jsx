import React from "react";
import { FaShoppingCart, FaBolt, FaTags, FaStar, FaLock } from "react-icons/fa";

const Deals = () => {
  return (
    <div className="  w-full max-w-screen-xl mx-auto py-8  px-2 mb-5">
      <div className="w-full mx-auto ">
        <h1 className="font-bold text-2xl text-gray-700 mb-8">
          Hot Deals of the Day – Don’t Miss Out!
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-4 gap-3">
          <li className="  bg-white shadow-sm rounded-lg  xs:p-5">
            <div>
              <img
                src="https://res.cloudinary.com/dec2rowhi/image/upload/v1763286512/g-img4_wyime3_f8c9d3.jpg"
                className="w-full h-auto rounded"
                alt=""
              />
            </div>
            <div>
              <div className="p-4 ">
                <h3 className="text-lg font-semibold">Fresh Fruit Deal</h3>
                <p className="text-gray-500 text-sm my-2">
                  Get the best quality at the price
                </p>
              </div>
            </div>
          </li>

          <li className="bg-white shadow-sm rounded-lg xs:p-5">
            <div>
              <img
                src="https://res.cloudinary.com/dec2rowhi/image/upload/v1763286920/e-img6_dypxym_c4a06d.jpg"
                className="w-full h-auto rounded"
                alt=""
              />
            </div>
            <div>
              <div className="p-4 ">
                <h3 className="text-lg font-semibold">Laptop speacial offer</h3>
                <p className="text-gray-500 text-sm my-2">
                  Premium tech at a smart price
                </p>
              </div>
            </div>
          </li>

          <li className=" bg-white shadow-sm rounded-lg    xs:p-5">
            <div>
              <img
                src="https://res.cloudinary.com/dec2rowhi/image/upload/v1763288400/g-img7_f329tu_ab4ab5.jpg"
                className="w-full h-auto rounded"
                alt=""
              />
            </div>
            <div>
                <div className="p-4 ">
                <h3 className="text-lg font-semibold">spice combo deal</h3>
                <p className="text-gray-500 text-sm my-2">
                  Add flavour & save more
                </p>
              </div>
            </div>
          </li>

          <li className=" bg-white shadow-sm rounded-lg    xs:p-5">
            <div>
              <img
                src="https://res.cloudinary.com/dec2rowhi/image/upload/v1763288914/cld-sample-5_353bf8.jpg"
                className="w-full h-auto rounded"
                alt=""
              />
            </div>
            <div>
               <div className="p-4 ">
                <h3 className="text-lg font-semibold">Trending Footwear Deal</h3>
                <p className="text-gray-500 text-sm my-2">
                  Comfort + style at a discount
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
   

      {/* <div className="w-full container grid grid-cols-1 md:grid-cols-2  xs:gap-3 mx-auto px-4 py-8 my-8">
        <div className="bg-white p-6 rounded shadow-lg py-8 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Why Hyper Mart?
          </h2>
          <ul className="space-y-3 text-gray-700 text-[16px]">
            <li className="flex items-center gap-3 mb-3">
              <FaShoppingCart style={{ color: "#f39c12" }} />
              <span className="font-semibold">Wide product range</span> – All
              categories in one place
            </li>
            <li className="flex items-center gap-3 mb-3">
              <FaBolt style={{ color: "#f39c12" }} />
              <span className="font-semibold">Fast delivery</span> – Quick &
              reliable service
            </li>
            <li className="flex items-center gap-3 mb-3">
              <FaTags style={{ color: "#f39c12" }} />
              <span className="font-semibold">Affordable prices</span> – Daily
              deals & special offers
            </li>
            <li className="flex items-center gap-3 mb-3">
              <FaStar style={{ color: "#f39c12" }} />
              <span className="font-semibold">Quality guarantee</span> – Trusted
              brands & verified products
            </li>
            <li className="flex items-center gap-3">
              <FaLock style={{ color: "#f39c12" }} />
              <span className="font-semibold">Secure checkout</span> – Safe &
              fast payments
            </li>
          </ul>
        </div>
        <div className="">
<img src="https://res.cloudinary.com/dec2rowhi/image/upload/v1763362827/banner_gfkpdp.png" alt="" className="rounded-lg w-full h-full object-contain" />
        </div>
      </div> */}
    </div>
  );
};

export default Deals;
