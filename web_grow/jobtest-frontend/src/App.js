import React from "react";
import { Route, Routes } from "react-router-dom";



import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
    
  );
}

export default App;