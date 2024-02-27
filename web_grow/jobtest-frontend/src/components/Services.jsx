import React from "react";
import personalized from "../assets/image2.png";
// import mock from "../assets/mock2.jpg";
// import collaborative from "../assets/collaborative 2.jpg";
// import review from "../assets/Resume Review.png";

function Services() {
  return (
    <div className="w-full bg-white py-11 px-4">
      <header className="uppercase font-bold text-xl md:text-4xl sm:text-3xl text-center pb-4 ">
        why use our platform
      </header>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={personalized} alt="/" />
        <div className="flex flex-col justify-center">
          <h2 className="font-bold text-[#00df9a] text-xl mx-auto">
            Personalized Interview Training
          </h2>
          <p>
            Tailor your interview preparation with personalized training
            sessions, ensuring you focus on areas that matter most for your
            target job.
          </p>
        </div>
      </div>
      {/* <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={mock} alt="/" />
        <div className="flex flex-col justify-center">
          <h2 className="font-bold text-[#00df9a] text-xl mx-auto">
            Mock Interviews
          </h2>
          <p>
            Sharpen your skills through realistic mock interviews, simulating
            real-world scenarios and providing valuable feedback.
          </p>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={collaborative} alt="/" />
        <div className="flex flex-col justify-center">
          <h2 className="font-bold text-[#00df9a] text-xl mx-auto">
            Collaborative Learning
          </h2>
          <p>
            Engage with our community of job seekers, sharing tips, experiences,
            and supporting each other on the journey to success.
          </p>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={review} alt="/" />
        <div className="flex flex-col justify-center">
          <h2 className="font-bold text-[#00df9a] text-xl mx-auto">
            Resume and Portfolio Review
          </h2>
          <p>
            Get expert feedback on your resume and portfolio, ensuring you
            present your achievements and skills in the best light.
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default Services;
