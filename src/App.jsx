import React from 'react'
import HeroSection from './Components/HeroSection'
import AllProject from './Components/AllProject'
import ReadyWork from './Components/ReadyWork'
import Email from './Components/Email'
import SliderCarousel from './Components/SliderCarousel'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'







const App = () => {
  return (
    <div>
    <Navbar/>
 <HeroSection/>
  <AllProject/> 
<SliderCarousel/>
<ReadyWork/>
<Email/> 
<Footer/>
    </div>
  )
}

export default App
