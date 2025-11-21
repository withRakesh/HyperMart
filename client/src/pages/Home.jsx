import React from 'react'
import Navbar from '../components/Navbar'
import SearchBox from '../components/SearchBox'
import ImageSlider from '../components/slider/ImageSlider'
import Categories from '../components/Categories'
import Deals from '../components/Deals'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='bg-[#f8f9fa] h-auto'>
      <Navbar/>
      <SearchBox />
      <ImageSlider />
      <Categories />
      <Deals />
      <Banner />
      <Contact />
      <Footer />
    
    </div>
  )
}

export default Home