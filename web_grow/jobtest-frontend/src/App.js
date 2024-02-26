import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Signup from "./components/Signup";
import About from "./components/About";
import Contact from "./components/Contact";
import Lang from "./components/Lang";
import Footer from "./components/Footer";
import CardComponent from "./components/card";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      <Lang />
      <Signup />
      <About />
      <Contact />
      <Footer />
      <CardComponent />
    </>
  );
}

export default App;
