import React from "react";

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="card  md:h-[450px] lg:h-[470px] w-full md:max-w-[330px] lg:w-[400px] lg:max-w-none  xl:w-[370px] larger:w-[400px] larger:p-6 p-5 bg-white rounded-lg font-roboto">
      <img src={imageSrc} alt="Cards" className="w-full rounded-lg" />
      <div className="card-body">
        <h2 className="py-4 text-black text-lg font-black font-inter">{title}</h2>
        <p className="text-base text-black">{description}</p>
      </div>
    </div>
  );
};


export default Card;
