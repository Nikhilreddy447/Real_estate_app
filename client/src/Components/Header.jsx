import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className=' bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 shadow-xl '>
        <div className=" flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to='/' >
        <h1 className=' font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className=' text-white'>Nikhil</span>
            <span className=' text-slate-300'>Estate</span>
        </h1>
        </Link>
        <form className=' bg-slate-100 p-3 rounded-lg flex items-center '>
            <input type="text" placeholder='Search...' className=' bg-transparent focus:outline-none w-24 sm:w-64 md:40' />
            <FaSearch className=' text-slate-600' />
        </form>
        <ul className='flex gap-3 items-center justify-center'>
            <Link to='/'>
            <li className='hidden sm:inline text-blue-600 font-bold hover:bg-blue-500   hover:text-white  bg-white p-2 rounded-lg h-auto' >Home</li>
            </Link>
            
            <Link to='/about'>
            <li className='hidden sm:inline text-blue-600 hover:bg-blue-500 hover:text-white font-bold bg-white p-2 rounded-lg h-auto'>About</li>
            </Link>
            <Link to='/sign-in'>
            <li className=' text-blue-600 hover:bg-blue-500 hover:text-white font-bold bg-white px-2 py-1.5 rounded-lg h-auto '>Sign in</li>
            </Link>
        </ul>
        </div>
        
    </header>
  )
}
