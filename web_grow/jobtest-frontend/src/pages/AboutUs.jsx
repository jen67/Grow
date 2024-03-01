import React from "react";
import Navbar from "../components/Navbar";
import OurVission from "../assets/vision.jpg";
import OurMission from "../assets/Mission.jpg";
import Gift from "../assets/Gift.png";
import Eniola from "../assets/Eniola.webp";
import Justine from "../assets/Justine.png";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Footer from "../components/Footer";

function AboutUs() {
    return (
      <div className="bg-black">
        <Navbar />
        <div className="py-32 text-white mx-auto px-4 bg-black flex flex-col items-center text-center justify-center w-full max-w-[900px] font-roboto">
          <h1 className="md:text-[4rem] sm:text-5xl text-4xl font-bold md:py-6 font-inter ">
            About Us
          </h1>
          <p className="text-base py-4 md:py-6 mt-4 px-4 md:max-w-[50vw] xl:max-w-[35vw] text-center">
            Grow is a website dedicated to preparing individuals for
            tech-related interviews. We provide comprehensive resources and
            guidance to help candidates succeed in their job search and land
            their dream roles in the tech industry.
          </p>
        </div>

        <div className="bg-white font-roboto grid md:grid-cols-2">
          <img
            src={OurVission}
            alt="Our Vision"
            className="w-full h-full object-cover"
          />
          <div className="p-8 bg-whhite xl:px-28 flex flex-col justify-center">
            <h2 className="text-3xl font-bold font-inter pb-4 text-left">
              Our Vision
            </h2>
            <p className="text-black text-base xl:text-[1.1rem]">
              Driven by our passion for excellence, we strive to exceed
              expectations by consistently adapting to the evolving needs of our
              community. With a focus on fostering diversity and empowerment, we
              recognize and celebrate the unique strengths and contributions of
              every individual, fostering a culture of belonging and support.
              Our dedication to innovation pushes us to explore new horizons,
              pioneering cutting-edge solutions that redefine industry standards
              and inspire positive change.
            </p>
          </div>
        </div>

        <div className="bg-white font-roboto grid md:grid-cols-2">
          <img
            src={OurMission}
            alt="Our Mission"
            className="w-full h-full object-cover md:order-last"
          />
          <div className="p-8 bg-whhite xl:px-28 flex flex-col justify-center">
            <h2 className="text-3xl font-bold font-inter pb-4 ">Our Mission</h2>
            <p className="text-black text-base xl:text-[1.1rem]">
              Our mission is to empower individuals to excel in the
              ever-evolving landscape of technology interviews. We strive to
              provide comprehensive resources and personalized support that
              equip candidates with the confidence, skills, and knowledge needed
              to succeed in their career aspirations. By fostering an
              environment of continuous learning, collaboration, and innovation,
              we aim to bridge the gap between ambition and achievement,
              empowering every individual to unlock their full potential and
              thrive in the tech industry.
            </p>
          </div>
        </div>
        <div className="bg-grey flex flex-col md:flex-row justify-around items-center md:justify-center md:flex-wrap  lg:flex-nowrap p-4 lg:py-24 lg:px-8 xl:px-24  xl:py-56 font-roboto">
          <div className="bg-white shadow-lg rounded-lg p-6 m-4 flex flex-col items-center w-[300px] max-w-[600px] lg:w-[450px] h-[500px]">
            <img
              src={Eniola}
              alt="Enioloa Agbalu"
              className="rounded-full border-green-500 border-2 w-[150px] h-[150px]"
            />
            <h2 className="text-xl font-bold mt-4 font-inter">
              Enioloa Agbalu
            </h2>
            <p className="text-center py-4">
              Eniola is a dedicated backend developer with some years of
              experience. She specializes in the use of python, C language, node
              and many more. She Handled the backend for this project.
            </p>
            <p className="text-center font-semibold">Backend Developer</p>
            <div className="flex justify-around mt-4 gap-3">
              <a
                href="github_link"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="linkedin_link"
                className="text-blue-600 hover:text-blue-900"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="twitter_link"
                className="text-blue-400 hover:text-blue-700"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="instagram_link"
                className="text-pink-600 hover:text-pink-900"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 m-4 flex flex-col items-center w-[300px] max-w-[600px] lg:w-[450px] h-[500px]">
            <img
              src={Justine}
              alt="Justine Ugwu"
              className="rounded-full border-green-500 border-2 w-[150px] h-[150px]"
            />
            <h2 className="text-xl font-bold mt-4 font-inter">Justine Ugwu</h2>
            <p className="text-center py-4">
              justine is a dedicated frontend developer known for his passion
              for creating captivating web experiences. With a keen eye for
              detail and a commitment to excellence, he consistently delivers
              high-quality results.
            </p>
            <p className="text-center font-semibold">Frontend Developer</p>
            <div className="flex justify-around mt-4 gap-3">
              <a
                href="github_link"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="linkedin_link"
                className="text-blue-600 hover:text-blue-900"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="twitter_link"
                className="text-blue-400 hover:text-blue-700"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="instagram_link"
                className="text-pink-600 hover:text-pink-900"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 m-4 flex flex-col items-center w-[300px] lg:w-[450px] max-w-[600px] h-[500px]">
            <img
              src={Gift}
              alt="Gift Amachree"
              className="rounded-full border-green-500 border-2 w-[150px] h-[150px]"
            />
            <h2 className="text-xl font-bold mt-4 font-inter">Gift Amachree</h2>
            <p className="text-center py-4">
              Gift is a passionate frontend developer and a life long learner.
              She specializes in the use of html, css,javascript, nodejs, sass
              etc. And she also does some designing with figma and canva
            </p>
            <p className="text-center font-semibold">Frontend Developer</p>
            <div className="flex justify-around mt-4 gap-3">
              <a
                href="github_link"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="linkedin_link"
                className="text-blue-600 hover:text-blue-900"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="twitter_link"
                className="text-blue-400 hover:text-blue-700"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="instagram_link"
                className="text-pink-600 hover:text-pink-900"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default AboutUs;