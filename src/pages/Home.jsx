import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'




const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
     
      <Footer />
      <Newsletter />
    </div>
  )
}

export default Home