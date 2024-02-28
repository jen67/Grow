import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Languages from "../components/Languages";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Languages />

    </div>
  );
}

export default Home;
