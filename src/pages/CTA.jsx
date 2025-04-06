import React from 'react'
import { Link } from 'react-router-dom';
const CTA = () => {
    let width = screen.width;
    console.log(width)
  return (
    <div className='CTA'>
      <h1>Coming to Google Playstore Soon</h1>
      <h3>Sign up to gain early access to our beta version</h3>
      <Link to='/signup'>
      <button >Signup</button>
      </Link>
    </div>
  )
}


export default CTA
