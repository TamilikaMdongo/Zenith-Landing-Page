import React from 'react'
import buy from './assets/1.png'

const Buy = () => {
  return (
    <div className='buy'>
      <div className="buy-text">
    <h1>Buy and Sell Tickets</h1>
    <p>Buy and sell event tickets in one place—fast, easy, and secure. <br></br> Whether you're looking for your next concert, expo, or party,<br></br> or need to sell a ticket you can’t use, our platform handles it all.<br></br> Browse verified listings, list your own tickets in minutes, and enjoy <br></br> instant delivery and fast payouts. </p>
      </div>
      <div className="buy-image">
    <img src={buy} height={400}/>
      </div>
    </div>
  )
}

export default Buy
