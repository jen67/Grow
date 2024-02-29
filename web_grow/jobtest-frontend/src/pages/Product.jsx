import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/WhiteNav";
import Footer from "../components/Footer";
import Courses from "../components/Courses";

function Product() {
  return (
    <div className="">
      <Navbar />
      <Courses />

      <Link to="/dashboard">Product</Link>
      <Footer />
    </div>
  );
}

export default Product;