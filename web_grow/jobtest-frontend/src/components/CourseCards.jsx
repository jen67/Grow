import React from "react";
import { Link } from "react-router-dom";

const CourseCards = ({ imageSrc, title, description, button, className }) => {
  return (
    <div className={`bg-white ${className}`}>
      <img src={imageSrc} alt="Cards" />
      <div className="card-body flex flex-col items-center justify-center text-center ">
        <h2 className="pt-6 pb-4 text-black text-lg font-black font-inter">
          {title}
        </h2>
        <p className="text-base text-black font-roboto">
          {description}
        </p>
        <Link
          to="/opened-course"
          className="mt-4 inline-block bg-primary text-black rounded px-4 py-2 w-full md:w-[150px]"
        >
          {button}
        </Link>
      </div>
    </div>
  );
};

export default CourseCards;