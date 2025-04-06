import React from 'react'
import heroImage from './assets/explore.png'

const Browse = () => {
  return (
    <div className='browse'>
      <div className="browse-text">
        <h1>Find Events</h1>
        <p>View events on the platform 
and purchase tickets to attend <br></br>
the event.Scroll through a curated list of upcoming events  <br></br>business, lifestyle, entertainment whatever you’re into. <br></br>  Tap, explore, and book in seconds.</p>
      </div>
      <div className="browse-image">
        <img src={heroImage} height={500} />
      </div>
    </div>
  )
}

export default Browse
