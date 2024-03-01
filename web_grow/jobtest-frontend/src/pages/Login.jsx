import React, { useState } from "react";
import Navbar from "../components/WhiteNav";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validate(email, password);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log({ email, password });
      setIsModalOpen(true);
    }
   
  };

  const validate = (email, password) => {
    const errors = {};
    if (!email) errors.email = "Email is required.";
    if (!password) errors.password = "Password is required.";
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
            We are happy to have you here. Login to enjoy our services and
            prepare for interviews. We always got you covered.
          </p>
        </div>
        <form
          className=" flex flex-col max-w-xl w-[90vw] px-4 mb-9 md:mb-28 md:px-8 bg-grey py-9 rounded-xl"
          onSubmit={handleSubmit}
        >
          <h1 className=" font-inter text-3xl md:text-4xl font-bold mb-4 text-left text-dark-green">
            {" "}
            Login
          </h1>
          <div className="mb-4">
            <input
              className="w-full px-3 py-4 border  border-gray-300 rounded-md outline-none hover:border hover:border-gray-900 focus:border focus:border-gray-900"
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
          <button
            className="w-full py-[14px] bg-primary text-black rounded-md transition duration-500 ease-in-out  hover:bg-emerald-700 hover:text-white"
            type="submit"
          >
            LOGIN
          </button>
          <div className="flex flex-col md:flex-row justify-between items-center md:pt-2">
            <p className="mt-4 text-center text-[#646464]">
              Don't have an account yet?{" "}
              <Link to="/signup" className="text-black pl-2 underline">
                SignUp
              </Link>
            </p>
            <p className="mt-2 text-center md:mt-4 text-[#646464]">
              <Link to="/forgotpassword" className="text-black underline">
                Forgotten password?
              </Link>
            </p>
          </div>
        </form>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white px-10 py-16 rounded-md relative w-[90vw] md:max-w-[40vw]">
            <button
              onClick={() => {
                setIsModalOpen(false);
                setEmail("");
                setPassword("");
                setErrors({});
                navigate("/dashboard");
              }}
              className="absolute top-2 right-8 text-lg font-bold"
            >
              X
            </button>
            <h2 className="text-base md:text-xl">Welcome back!</h2>
            <p>You have successfully logged in.</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Login;
