import React, { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would typically send a request to your server
        console.log(`Password reset link sent to ${email}`);
        setIsModalOpen(true);
    };

    return (
        <div className="flex justify-center flex-col items-center py-10 font-roboto bg-white h-screen">
            <h1 className="font-inter text-3xl md:text-4xl font-bold mb-12 text-center text-dark-green">
                Forgot Password
            </h1>
            <form className="flex flex-col max-w-xl w-[90vw] px-4 mb-9 md:mb-28 md:px-8 bg-grey py-9 rounded-xl" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-4 border border-gray-300 rounded-md outline-none hover:border hover:border-gray-900 focus:border focus:border-gray-900"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button className="w-full py-[14px] bg-primary text-black rounded-md transition duration-500 ease-in-out hover:bg-emerald-700 hover:text-white" type="submit">
                    Send Password Reset Link
                </button>
                <p className="mt-4 text-center text-[#646464]">
                    Remember your password?{" "}
                    <Link to="/login" className="text-black pl-2">
                        Login
                    </Link>
                </p>
            </form>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white px-10 py-16 rounded-md relative w-[90vw] md:max-w-[40vw]">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-2 right-2 text-lg font-bold"
                        >
                            X
                        </button>
                        <h2 className="text-base md:text-xl">Password Reset</h2>
                        <p>A password reset link has been sent to {email}.</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ForgotPassword;