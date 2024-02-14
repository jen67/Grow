import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Signup from "./components/Signup";
import About from "./components/About";
import Contact from "./components/Contact";
import Lang from "./components/Lang";
import Footer from "./components/Footer";

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
    </>
  );
}

export default App;
