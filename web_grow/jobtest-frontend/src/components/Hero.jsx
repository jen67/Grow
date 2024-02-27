import React from "react";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[900px]  w-full py-32 mx-auto text-center flex flex-col justify-center">
        <h1 className="uppercase md:text-[4rem] sm:text-5xl text-4xl font-bold md:py-6 font-inter">
          Ace Your Job Interviews with Grow app
        </h1>
        <div>
          <ReactTyped
            className="md:text-4xl sm:text-3xl text-xl font-bold text-[#00df9a] uppercase pl-2 font-inter"
            strings={[
              "Elevate your skills,",
              "prepare with confidence,",
              "and land your dream job.",
              "we always got your back.",
            ]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
        </div>
        <button className="bg-primary w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black font-roboto hover:ring-4 hover:ring-grey transition">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
