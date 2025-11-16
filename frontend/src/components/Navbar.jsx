import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo1 from '../assets/logo1.jpeg'
import logo2 from '../assets/logo2.png'


const Navbar = () => {

  const navigate= useNavigate()

  return (
    <div className='flex items-center grid-cols-3 justify-between text:sm py-4 border-b border-gray-400'>
        <div>
          <img src={logo1} alt="" className='w-25 h-18 rounded-full' />
        </div>
      <div className=' md:flex items-start gap-6 font-medium'>
         <NavLink to='/'>
            <p className='border-b-2 border-transparent hover:border-blue-400' >Home</p>
         </NavLink>
          <NavLink to='/select-news'>
            <p className='border-b-2 border-transparent hover:border-blue-400'>Select-News</p>
         </NavLink>
          <NavLink to='/about'>
            <p className='border-b-2 border-transparent hover:border-blue-400'>About</p>
         </NavLink>
          <NavLink to='/contact'>
            <p className='border-b-2 border-transparent hover:border-blue-400'>Contact</p>
         </NavLink>
      </div>
      <div>
         <p onClick={()=>navigate('/login')}  className='bg-primary text-white px-8 py-3 rounded-full font-medium  md:block mr-10 hover:cursor-pointer'>Create Account</p>
      </div>
    </div>
  )
}

export default Navbar
