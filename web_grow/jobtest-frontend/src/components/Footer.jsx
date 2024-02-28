import React from "react";
// import { Link } from "react-router-dom";
import Github from "../assets/Github1.png";
import Twitter from "../assets/Twitter1.png";
import Linkedin from "../assets/Linkedin1.png";
import Facebook from "../assets/Facebook1.png";
import Instagram from "../assets/Instagram1.png";
import logo from "../assets/DarkThemeLogo.png";


function Footer() {
  return (
    <div className="mx-auto py-16 px-6 md:px-10 lg:px-20 flex flex-col md:flex-row md:space-evenly items-center justify-center text-center gap-7 text-gray-300 w-full">
      <div className="w-1/4">
        <header className="w-full">
          <img src={logo} alt="logo" className="w-48 " />
        </header>
        <div className="flex flex-row mt-8 gap-4" >
          <img src={Instagram} alt="Instagram icon" className="cursor-pointer "></img>
          <img src={Twitter} alt="Twitter icon" className="cursor-pointer "></img>
          <img src={Facebook} alt="Facebook icon" className="cursor-pointer "></img>
          <img src={Github} alt="Github icon" className="cursor-pointer "></img>
          <img src={Linkedin} alt="Github icon" className="cursor-pointer "></img>
        </div>
      </div>

      <div className="flex flex-wrap md:flex-row gap-8 md:justify-between items-center text-left font-roboto text-base w-3/4 md:text-center">
        <div>
          <h5 className="font-medium text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
            Solutions
          </h5>
          <ul>
            <li className="py-2  hover:text-white  transition-colors duration-200 cursor-pointer">
              Interview Training
            </li>
            <li className="py-2  hover:text-white transition-colors duration-200 cursor-pointer">
              Resume Review
            </li>
            <li className="py-2  hover:text-white  transition-colors duration-200 cursor-pointer">
              Mock Interviews
            </li>
            <li className="py-2  hover:text-white  transition-colors duration-200 cursor-pointer">
              Collaborative Learning
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
            Support
          </h5>
          <ul>
            <li className="py-2  hover:text-white  transition-colors duration-200 cursor-pointer">
              Pricing
            </li>
            <li className="py-2  hover:text-white  transition-colors duration-200 cursor-pointer">
              Documentation
            </li>
            <li className="py-2  hover:text-white  transition-colors duration-200 cursor-pointer">
              Guides
            </li>
            <li className="py-2  hover:text-white transition-colors duration-200 cursor-pointer">
              API Status
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
            Company
          </h5>
          <ul>
            <li className="py-2  hover:text-white  transition-colors duration-200 cursor-pointer">
              About
            </li>
            <li className="py-2  hover:text-white transition-colors duration-200 cursor-pointer">
              Blog
            </li>
            <li className="py-2  hover:text-white transition-colors duration-200 cursor-pointer">
              Team
            </li>
            <li className="py-2  hover:text-white transition-colors duration-200 cursor-pointer">
              Product
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-400 hover:text-white  transition-colors duration-200 cursor-pointer">
            Legal
          </h5>
          <ul>
            <li className="py-2  hover:text-white transition-colors duration-200 cursor-pointer">
              Claim
            </li>
            <li className="py-2 hover:text-white transition-colors duration-200 cursor-pointer">
              Policy
            </li>
            <li className="py-2  hover:text-white transition-colors duration-200 cursor-pointer">
              Terms
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
