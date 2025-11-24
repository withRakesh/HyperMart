import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Kitchen = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://hypermart-fqba.onrender.com/api/get/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className='bg-[#f8f9fa]'>
      <Navbar />

      <div className='py-5 px-4'>
        <ul className='grid grid-cols-2 md:grid-cols-3 gap-5 '>
          {products.map((item, index) => (
            <li key={index} className='p-5   bg-white rounded-lg hover:shadow-md duration-200    lg:w-full '>
              <Link to={`/product/${item._id}`}>
                <img src={item.image} alt={item.name} className='rounded-md w-full lg:h-36 lg:object-cover  '  />
                <p className='text-gray-500 text-xs py-1'>{item.category}</p>
                <p className='font-semibold text-gray-700 text-sm'>{item.name}</p>
                <p className='text-sm text-gray-500 truncate'>{item.description}</p>

                <div className='flex w-full justify-between mt-2'>
                  <p className='text-sm font-medium text-gray-700'>
                    ₹ {item.price} <span className='text-gray-500 text-xs'>{item.unit}</span>
                  </p>
                  <p className='text-sm text-gray-600'>
                    <span className='text-gray-400'>Rating </span>⭐ {item.rating}
                  </p>
                </div>

                <p className='text-gray-700 text-xs mt-1'>Stock: {item.stock}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </div>
  )
}

export default Kitchen
