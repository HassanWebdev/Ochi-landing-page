import React from 'react';
import Navbar from './Components/Navbar'
import Landingpage from './Components/LandingPage'
import Text from './Components/animate'
import Stay from './Components/statis'
import Plafull from './Components/Playfull'
import Featured from './Components/Featured';
import  Rating  from './Components/Rating';
import Footer from './Components/Footer'
  import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full  overflow-hidden '>
      <Navbar />
      <Landingpage />
      <Text />
      <Stay/>
      <Plafull/>
      <Featured/>
      <Rating/>
      <Footer/>
    </div>
  )
}

export default App
