import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/DarkThemeLogo.png";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight ||
        document.body.offsetHeight <= window.innerHeight;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
      if (isAtBottom !== atBottom) {
        setAtBottom(isAtBottom);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      // cleanup
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, atBottom]);

  if (atBottom) {
    return null;
  }


  return (
    <>
      <div
        className={`flex justify-between items-center h-20 md:py-8 mx-auto px-6 md:px-10 lg:px-20 text-white cursor-pointer font-roboto bg-black z-50 ${
          scrolled
            ? "fixed top-0 w-full shadow-md bg-black backdrop-blur-md  bg-opacity-90"
            : "bg-black"
        } `}
      >
        <header className="w-full">
          <img src={logo} alt="logo" className="w-48 " />
        </header>
        <ul className="hidden md:flex">
          <li className=" p-4 lg:p-4 md:px-2 md:py-4 md:border-b-4 border-transparent hover:border-primary transition duration-200 ease-in-out">
            <Link to="/">Home</Link>
          </li>

          <li className=" p-4 lg:p-4 md:px-2 md:py-4 md:border-b-4 border-transparent hover:border-primary transition duration-200 ease-in-out">
            <Link to="/About">About</Link>
          </li>

          <li className=" p-4 lg:p-4 md:px-2 md:py-4 md:border-b-4 border-transparent hover:border-primary transition duration-200 ease-in-out">
            <Link to="/Product">Product</Link>
          </li>

          <li className=" p-4 lg:p-4 md:px-2 md:py-4 md:border-b-4 border-transparent hover:border-primary transition duration-200 ease-in-out">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>

        <button className="bg-primary text-black rounded-lg px-8 py-2 m-2 whitespace-nowrap hidden md:inline-block hover:ring-2 hover:ring-grey">
          <Link to="/signUP">Get Started</Link>
        </button>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      {nav && (
        <div className="fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300 z-50">
          <header className="w-full pt-5 m-4">
            <img src={logo} alt="logo" className="w-48" />
          </header>
          <ul className="uppercase p-4">
            <li className="p-4 border-b-4 border-transparent hover:border-primary transition duration-200 ease-in-out text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4 border-b-4 border-transparent hover:border-primary transition duration-200 ease-in-out text-white">
              <Link to="/About" onClick={handleNav}>
                About
              </Link>
            </li>
            <li className="p-4 border-b-4 border-transparent hover:border-primary transition duration-200 ease-in-out text-white">
              <Link to="/Product" onClick={handleNav}>
                Product
              </Link>
            </li>
            <li className="p-4 border-b-4 border-transparent hover:border-primary transition duration-200 ease-in-out text-white">
              <Link to="/Contact" onClick={handleNav}>
                Contact
              </Link>
            </li>

            <button className="bg-primary text-black rounded-lg px-8 py-2 m-2 hover:ring-2 hover:ring-grey">
              <Link to="/signUP" onClick={handleNav}>
                Get Started
              </Link>
            </button>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
