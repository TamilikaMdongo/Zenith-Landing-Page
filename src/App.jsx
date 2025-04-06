import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Landing from './pages/Landing'
import Signup from './pages/Signup';

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element ={<Landing/>}/>
          <Route path='/signup' element ={<Signup/>}/>
        </Routes>
        </Router>
    </>
  )
}

export default App
