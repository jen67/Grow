import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between items-center px-44 py-3 mb-5 cursor-pointer'>
        <header className='text-[#EDA751] font-bold text-lg'>Grow App</header>
        <ul className='flex gap-10'>
            <li>Our Platform</li>
            <li>About us</li>
            <li>Our Product</li>
            <li>Langugage</li>
        </ul>
        <button className='outline outline-1 outline-[#EDA751] px-4 py-2 rounded-lg hover:bg-[#EDA751]'>Sign In</button>
    </nav>
  )
}

export default Navbar