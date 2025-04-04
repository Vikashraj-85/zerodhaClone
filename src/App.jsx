import { useState } from 'react'
import img from './assets/images/coin.png'
import HomePage from './components/HomePage/HomePage'
import Signup from './components/Signup/SignupPage.jsx'
import About from './components/About/AboutPage.jsx'
import Products from './components/Products/ProductPage.jsx'
import Pricing from './components/Pricing/PricingPage.jsx'
import Support from './components/Support/SupportPage.jsx'
import { Route,Routes } from 'react-router-dom';


function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/support' element={<Support/>}/>
        
      </Routes>
      
    </>
  )
}

export default App
