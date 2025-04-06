import React from 'react'
import create from './assets/create.png'


const Create = () => {
  return (
    <div className='create'>
      <div className="create-image">
    <img src={create} height={450}/>
      </div>
      <div className="create-text">
        <h1>Create events</h1>
        <p>Set up your event without dealing with complicated forms or tech.<br></br> Add your details, set your price, and publish.<br></br> Whether you’re hosting a small meetup or a major function,<br></br> we’ve got you covered.</p>
      </div>
    </div>
  )
}

export default Create
