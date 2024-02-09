import React from "react";
import { ReactTyped, Typed } from "react-typed";

function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        {/* <p className="text-[#00df9a] font-bold p-2">
          Welcome to Grow, your go-to platform for mastering job interviews.
        </p> */}
        <h2 className="uppercase md:text-7xl sm:text-5xl text-4xl font-bold md:py-6">
          Ace Your Job Interviews with Grow app
        </h2>
        <div>
          <ReactTyped className="md:text-4xl sm:text-3xl text-xl font-bold text-[#00df9a] uppercase pl-2"
            strings={[
              "Elevate your skills,",
              "prepare with confidence,",
              "and land your dream job.",
            ]}
            typeSpeed={120}
            backSpeed={100}
            loop
          />
        </div>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
      </div>
    </div>
  );
}

export default Hero;
