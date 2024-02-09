import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }
  return (
    <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white cursor-pointer">
      <header className="w-full text-3xl font-bold text-[#00df9a]">
        Grow App &#8805;
      </header>
      <ul className="hidden md:flex">
        <li className="p-4">Product</li>
        <li className="p-4">Language</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      {/* <button className="outline outline-1 outline-[#00df9a] px-4 py-2 rounded-lg hover:bg-[#00df9a]">
        Sign In
      </button> */}

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300" : 'fixed left-[-100%]'}>
        <header className="w-full text-3xl font-bold text-[#00df9a] m-4">
          Grow App &#8805;
        </header>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Product</li>
          <li className="p-4 border-b border-gray-600">Language</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
