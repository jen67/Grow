import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/LightThemeLogo.png";

function Navbar() {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  return (
    <div className="flex justify-between items-center h-16  mx-auto  px-4  md:px-16 lg:px-20 text-black bg-white cursor-pointer font font-roboto shadow-lg">
      <header className="w-full">
        <img src={logo} alt="logo" className="w-48" />
      </header>
      <ul className="hidden md:flex">
        <li className="p-4 border-b-4 border-transparent  hover:border-dark-green transition duration-200 ease-in-out font-roboto">
          <Link to="/">Home</Link>
        </li>

        <li className="p-4 border-b-4 border-transparent  hover:border-dark-green transition duration-200 ease-in-out font-roboto">
          <Link to="/About">About</Link>
        </li>

        <li className="p-4 border-b-4 border-transparent  hover:border-dark-green transition duration-200 ease-in-out font-roboto">
          <Link to="/Product">Product</Link>
        </li>

        <li className="p-4 border-b-4 border-transparent  hover:border-dark-green transition duration-200 ease-in-out font-roboto">
          <Link to="/Contact">Contact</Link>
        </li>

        <button className="bg-dark-green text-white rounded-lg px-8 py-2 m-2  inline-block flex whitespace-nowrap hidden md:inline-block  hover:ring-2 hover:ring-primary">
          <Link to="/signUP">Get Started</Link>
        </button>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white text-black ease-in-out duration-300"
            : "fixed left-[-100%] md:hidden"
        }
      >
        <header className="w-full pt-5 m-4">
          <img src={logo} alt="logo" className="w-48" />
        </header>
        <ul className="uppercase p-4">
          <li className="p-4 border-b-4 border-transparent  hover:border-dark-green transition duration-200 ease-in-out font-roboto">
            <Link to="/" onClick={handleNav}>
              Home
            </Link>
          </li>
          <li className="p-4 border-b-4 border-transparent  hover:border-dark-green transition duration-200 ease-in-out font-roboto">
            <Link to="/About" onClick={handleNav}>
              About
            </Link>
          </li>
          <li className="p-4 border-b-4 border-transparent  hover:border-dark-green transition duration-200 ease-in-out font-roboto">
            <Link to="/Product" onClick={handleNav}>
              Product
            </Link>
          </li>
          <li className="p-4 border-b-4 border-transparent  hover:border-dark-green transition duration-200 ease-in-out font-roboto">
            <Link to="/Contact" onClick={handleNav}>
              Contact
            </Link>
          </li>
          <button className="bg-dark-green text-white rounded-lg px-8 py-2 m-2  hover:ring-2 hover:ring-primary">
            <Link to="/signUP" onClick={handleNav}>
              Get Started
            </Link>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
