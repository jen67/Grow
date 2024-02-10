import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Signup from "./components/Signup";
import About from "./components/About";
import contact from "./components/Contact";
import Lang from "./components/Lang";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      <Signup />
      <About />
      <Footer />
    </>
  );
}

export default App;
