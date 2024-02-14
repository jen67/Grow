import React from "react";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-7 text-gray-300">
      <div className="lg:flex lg:flex-col lg:justify-center">
        <header className="w-full text-3xl font-bold text-[#00df9a]">
          Grow App &#8805;
        </header>
        <p className="py-4">Elevating Developers for Success in Interviews</p>
        <div className="flex justify-btween md:w-[75%] my-6">
          <a href="http://github.com/jen67">
            <button className=" mx-2 bg-[#00df9a] w-[100px] rounded-md text-black font-medium">
              <FaGithub size={28} />
              Gift{" "}
            </button>
          </a>
          <a href="http://github.com/Eniola011">
            <button className=" mx-2 bg-[#00df9a] w-[100px] rounded-md text-black font-medium">
              <FaGithub size={28} />
              Eniola{" "}
            </button>
          </a>
          <a href="http://github.com/Just337ine">
            <button className=" mx-2 bg-[#00df9a] w-[120px] rounded-md text-black font-medium">
              <FaGithub size={28} />
              Justine{" "}
            </button>
          </a>
        </div>
      </div>

      <div className="lg:col-span-2 flex justify-between lg:mt-6">
        <div>
          <h5 className="font-medium text-gray-400">Solutions</h5>
          <ul>
            <li className="py-2 text-sm">Interview Training</li>
            <li className="py-2 text-sm">Resume Review</li>
            <li className="py-2 text-sm">Mock Interviews</li>
            <li className="py-2 text-sm">Collaborative Learning</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-400">Support</h5>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-400">Company</h5>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Team</li>
            <li className="py-2 text-sm">Product</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-400">Legal</h5>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
