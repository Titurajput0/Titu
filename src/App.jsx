import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Company from './Pages/Company'
import Services from './Pages/Services'
import Portfolio from './Pages/Portfolio'
import Career from './Pages/Career'
import Blog from './Pages/Blog'
import Awards from './Pages/Awards'
import ContactUs from './Pages/ContactUs'
import Nabvar from './Components/Nabvar'

const App = () => {
  return (
    <>
      <Router>
        <Nabvar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/company' element={<Company />} />
          <Route path='/services' element={<Services />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/career' element={<Career />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/awards' element={<Awards />} />
          <Route path='/contactUs' element={<ContactUs />} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App
