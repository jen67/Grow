import React from "react";
import "../index.css";

function SkillScroll() {
  const skills = ["Array", "Recursion", "Hash Table", "Big O", "Graphs", "Strings", "Linked list", "Stack and ques", "Team-work", "Searching and sorting", "Dynamic Programming", "collaboration", "co-oporation"];

  return (
    <>
      <h3 className="text-white text-center my-4 text-base md:text-3xl font-bold font-inter">
        {" "}
        Topics covered{" "}
      </h3>
      <div className="scroller flex py-1 overflow-hidden relative mx-auto lg:w-3/5 font-roboto mb-16">
        <div className="animate-scroll whitespace-nowrap">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="lang-button inline-block mx-2 hover:text-black hover:bg-primary"
            >
              {skill}
            </div>
          ))}
          {skills.map((skill, index) => (
            <div
              key={index}
              className="lang-button inline-block mx-2  hover:text-black hover:bg-primary"
            >
              {skill}
            </div>
          ))}
        </div>
        <div className="fade-left absolute top-0 bottom-0 left-0 w-10"></div>
        <div className="fade-right absolute top-0 bottom-0 right-0 w-10"></div>
      </div>
    </>
  );
}

export default SkillScroll;