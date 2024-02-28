import React, { useState } from "react";
import Navbar from "../components/WhiteNav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function SignUp() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validate(fullname, email, password, confirmPassword);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log({ fullname, email, password });
      setIsModalOpen(true);
    }
  };

  const validate = (fullname, email, password, confirmPassword) => {
    const errors = {};
    if (!fullname) errors.fullname = "Fullname is required.";
    if (!email) errors.email = "Email is required.";
    if (!password) errors.password = "Password is required.";
    if (password !== confirmPassword) errors.confirmPassword = "Passwords do not match.";
    if (email && !/\S+@\S+\.\S+/.test(email))
      errors.email = "Email is not valid.";
    return errors;
  };

  return (
    <div>
      <Navbar />
      <div className="bg-white flex justify-center flex-col items-center py-10 font-roboto">
        <div className="px-8 md:max-w-[500px] md:pt-12">
          <h1 className=" font-inter text-3xl md:text-4xl font-bold mb-4 text-center text-dark-green">
            Welcome To Grow
          </h1>
          <p className="mb-8  md:mb-12 text-center ">
            We are happy to have you here. Create a free account to enjoy our services and prepare for interviews. We always got you covered.
          </p>
        </div>
        <form
          className=" flex flex-col max-w-xl w-[90vw] px-4 mb-9 md:mb-28 md:px-8 bg-grey py-9 rounded-xl"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <input
              className="w-full px-3 py-4 border  border-gray-300 rounded-md outline-none hover:border hover:border-gray-900 focus:border focus:border-gray-900"
              type="text"
              placeholder="Fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            {errors.fullname && (
              <p className="text-red-500">{errors.fullname}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              className="w-full px-3 py-4 border border-gray-300 rounded-md outline-none hover:border hover:border-gray-900 focus:border focus:border-gray-900"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <input
              className="w-full px-3 py-4 border border-gray-300 rounded-md outline-none hover:border hover:border-gray-900 focus:border focus:border-gray-900"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              className="w-full px-3 py-4 border border-gray-300 rounded-md outline-none hover:border hover:border-gray-900 focus:border focus:border-gray-900"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword}</p>
            )}
          </div>
          <button
            className="w-full py-[14px] bg-primary text-black rounded-md transition duration-500 ease-in-out  hover:bg-emerald-700 hover:text-white"
            type="submit"
          >
            SIGN UP
          </button>
          <p className="mt-4 text-center text-[#646464]">
            Already have an account? <Link to="/Login" className="text-black pl-2">Login</Link>
          </p>
        </form>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white px-10 py-16 rounded-md relative w-[90vw] md:max-w-[40vw]">
            <button
              onClick={() => {
                setIsModalOpen(false);
                setFullname("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setErrors({});
              }}
              className="absolute top-2 right-2 text-lg font-bold"
            >
              X
            </button>
            <h2 className="text-base md:text-xl">Thank you, {fullname}!</h2>
            <p>Your account has been created and you can now login.</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default SignUp;