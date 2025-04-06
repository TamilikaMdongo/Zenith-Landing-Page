import React from 'react'
import Navbar from './Navbar'
import heroImage from './assets/banner.png'

const Hero = () => {
  return (
    <div className='Hero'>
      <Navbar/>
      <div className="hero-section">
        <div className="hero-text">
            <h1>Taking your Events experience to the next level</h1>
            <p>Your all in one events management platform</p>
            <button>Signup</button>
        </div>
        <div className="div hero-image">
        <img src={heroImage} height={500} width={700} />
        </div>
      </div>
     

    </div>
  )
}

export default Hero
