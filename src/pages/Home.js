import React from 'react'
import About from '../components/About/About'
import Blog from '../components/Blog/Blog'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Foot/Footer'
import Hero from '../components/Hero/Hero'
import Nav from '../components/Nav/Nav'
import Service from '../components/Sevice/Service'
import Shop from '../components/Shop/Shop'

const Home = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Service/>
    <Shop/>
    <Blog/>
    <Contact/>
    </>
  )
}

export default Home