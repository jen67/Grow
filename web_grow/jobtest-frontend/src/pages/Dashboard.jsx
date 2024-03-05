import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/LightThemeLogo.png";
import { FaUser, FaBook, FaCog, FaThLarge } from 'react-icons/fa';

function Dashboard() {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div className="flex h-screen bg-white">
                <div
                    className={`bg-grey text-black w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
                        isOpen ? "translate-x-0" : "-translate-x-full"
                    } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
                >
                    <div className="flex justify-between items-center">
                        <img src={logo} alt="logo" className="w-48" />
                        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-black">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </button>
                    </div>
                    <nav>
                        <Link
                            to="/dashboard"
                            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-secondary hover:text-white"
                        >
                            <FaThLarge className="inline-block mr-2" /> Dashboard
                        </Link>
                        <Link
                            to="/profile"
                            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-secondary hover:text-white"
                        >
                            <FaUser className="inline-block mr-2" /> Profile
                        </Link>
                        <Link
                            to="/Product"
                            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-secondary hover:text-white"
                        >
                            <FaBook className="inline-block mr-2" /> Courses
                        </Link>
                        <Link
                            to="/settings"
                            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-secondary hover:text-white"
                        >
                            <FaCog className="inline-block mr-2" /> Settings
                        </Link>
                    </nav>
                </div>
                <div className="flex-1 flex flex-col overflow-hidden">
                    <header className="flex justify-between items-center p-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-black focus:outline-none md:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                    </header>
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                        
                            

                        
                    </main>
                </div>
            </div>
        );
}

export default Dashboard;