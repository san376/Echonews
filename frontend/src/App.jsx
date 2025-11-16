import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Selectnews from './pages/Selectnews'
import About from './pages/About'
import Footer from './components/Footer'
import Login from './pages/Login'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/select-news' element={<Selectnews/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<About/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
