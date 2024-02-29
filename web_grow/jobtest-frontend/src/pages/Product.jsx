import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/WhiteNav";

function Product() {
  return (
    <div className="bg-white">
      <Navbar />
      <Link to="/dashboard">Product</Link>
    </div>
  );
}

export default Product;