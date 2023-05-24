import { useState } from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Burger from './components/Burger/Burger'

function App() {
  return (
    <div className=' overflow-hidden'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/make-a-burger" element={<Burger />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
