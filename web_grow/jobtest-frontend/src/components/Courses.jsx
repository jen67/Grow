import React, { useState } from "react";
import CourseCards from "./CourseCards";
import data from "../data.json"; 
import { FaSearch } from "react-icons/fa";

const Courses = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCourses = data.courses.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.sections.some(section => 
            section.cards.some(card => card.heading.toLowerCase().includes(searchTerm.toLowerCase()))
        )
    );

    return (
        <div className="w-full bg-grey py-24 px-4 md:px-8 lg:px-16 flex flex-col items-center">
            <div className="relative w-full md:w-3/4 mb-8">
                <input
                    type="search"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full h-16 pl-10 pr-20 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-primary text-center"
                />
                <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-lg" color="darkgrey" />
            </div>
            {filteredCourses.map((course, index) => (
                <div key={index} className="flex flex-col w-full items-center justify-center gap-4 md:gap-0">
                    <header className="py-4 px-8 border-dark-green border-solid border-2 mt-24 mb-8 text-center max-w-[400px] rounded">
                        <h1 className="rounded-lg text-dark-green font-bold text-xl md:text-3xl font-inter">
                            {course.title}
                        </h1>
                    </header>
                    {course.sections.map((section, index) => (
                        <div key={index} className="flex flex-wrap gap-4 md:gap-4 lg:gap-8 md:flex-nowrap">
                            {section.cards.map((card, index) => (
                                <CourseCards
                                    key={index}
                                    imageSrc={card.image}
                                    title={card.heading}
                                    description={card.bodyText}
                                    button={card.button}
                                    className="w-full md:w-1/3 p-8 md:px-4 mt-4 lg:mt-8 lg:p-8"
                                />
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Courses;