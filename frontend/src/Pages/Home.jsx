import React from 'react'
import HeroSection from '../Components/HeroSection'
import About from '../Components/About'
import Qualities from '../Components/Qualities'
import Menu from '../Components/Menu'
import WhoAreWe from '../Components/WhoAreWe'
const Home = () => {
  return (
    <div>
        <HeroSection/>
        <About/>
        <Qualities/>
        <Menu/>
        <WhoAreWe/>
    </div>
  )
}

export default Home