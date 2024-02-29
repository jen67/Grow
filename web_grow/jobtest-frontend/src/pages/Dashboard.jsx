import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBook, FaCog, FaTimes } from 'react-icons/fa';

function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-200">
            <div className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out`}>
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-extrabold">Dashboard</h2>
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                        <FaTimes className="text-white"/>
                    </button>
                </div>
                <nav>
                    <Link to="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                        <FaHome className="inline-block mr-2"/> Dashboard
                    </Link>
                    <Link to="/profile" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                        <FaUser className="inline-block mr-2"/> Profile
                    </Link>
                    <Link to="/courses" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                        <FaBook className="inline-block mr-2"/> Courses
                    </Link>
                    <Link to="/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                        <FaCog className="inline-block mr-2"/> Settings
                    </Link>
                </nav>
            </div>
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="flex justify-between items-center p-4">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 focus:outline-none md:hidden">
                        <svg width="20" height="20" fill="currentColor" className="h-8 w-8">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 6a1 1 0 100 2h12a1 1 0 100-2H4zm1 5a1 1 0 011-1h12a1 1 0 110 2H5a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </header>
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    {/* Dashboard content goes here */}
                </main>
            </div>
        </div>
    );
}

export default Dashboard;