import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Languages from "../components/Languages";
import SkillScroll from "../components/CoursePills";
import Section4 from "../components/Section4";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Languages />
      <SkillScroll />
      <Section4 />
      <Footer />
    </div>
  );
}

export default Home;
