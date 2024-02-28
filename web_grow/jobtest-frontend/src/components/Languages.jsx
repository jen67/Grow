import React from "react";
import cplusplus from "../assets/C++.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import python from "../assets/python.png";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";

function languages() {
  return (
    <div className="w-full bg-black md:py-10 py-6  px-4 md:px-8">
      <h1 className="text-white text-3xl font-bold font-inter text-center md:pb-12 pt-12  pb-4 sm:text-4xl md:text-5xl">
        We Speak These Languages
      </h1>

      <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4 max-w-2/4 pt-7 pb-4">
        <img
          src={javascript}
          alt="Javascript language icon"
          className="w-[40px] md:w-[80px]"
        />
        <img
          src={cplusplus}
          alt="C plus language icon"
          className="w-[40px] md:w-[80px]"
        />
        <img
          src={css}
          alt="css  icon"
          className="w-[50px] md:w-[90px] mt-[-1rem]"
        />

        <img src={python} alt="Python icon" className="w-[40px] md:w-[80px]" />
        <img src={html} alt="html icon" className="w-[40px] md:w-[70px]" />

        <img
          src={typescript}
          alt="Typescript icon"
          className="w-[40px] md:w-[80px]"
        />
      </div>
    </div>
  );
}

export default languages;
