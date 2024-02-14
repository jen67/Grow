import React from "react";
import aboutus from '../assets/collaborate 3.png';

function About() {
  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-[1240px] mx-auto px-6 grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="font-bold text-xl uppercase"> About us</h2>
          <p>
            Learn more about our mission at Grow, dedicated to empowering
            individuals in their job interview preparation journey
          </p>
        </div>
        <div>
            <img className="w-[360px] mx-auto my-4" src={aboutus} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
