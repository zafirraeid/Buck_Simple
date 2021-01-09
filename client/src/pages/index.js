import React from 'react'
import Navbar from '../components/NavBar/NavBar'
import HeroSection from '../components/HeroSection'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'


const Home = () => {
    return (
        <>
          <Navbar/>
          <HeroSection/>
          <About/>
          <Footer/>
        </>
    )
}

export default Home

