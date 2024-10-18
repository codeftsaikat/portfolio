import React from 'react'
import Hero from './Hero/Hero'
import About from './About/about'

const Home = () => {
  return (
    <div className='overflow-hidden'>
          <Hero/>
          <About/>
    </div>
  )
}

export default Home