import React from "react";
import supportImg from "../assets/image7.jpg";

function Section4() {
  return (
    <div className="bg-white py-8 px-4 md:px-8 flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center w-[95vw] md:w-[70vw] shadow-custom rounded-lg px-4 md:px-8 py-8 mt-4 md:my-20 md:py-16">
        <h4 className="text-2xl font-bold text-center mt-4 font-inter md:text-4xl">
          We Got Everyone Covered
        </h4>
        <img
          src={supportImg}
          alt="support"
          className="w-[250px] md:w-[400px] rounded-t-lg mt-4"
        />

        <div className="flex flex-wrap items-center justify-center md:flex-row text-center gap-4 md:gap-8 font-roboto mt-8">
          <div className="text-black text-base  md:text-xl text-left">
            <p>Backend developers</p>
            <p>Frontend developers</p>
          </div>
          <div className="text-black text-base md:text-xl text-left">
            <p>Software engineers </p>
            <p>Ui/Ux designers</p>
          </div>
          <div className="text-black text-base md:text-xl text-left">
            <p>Cybersecurity</p>
            <p>DevOps</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
