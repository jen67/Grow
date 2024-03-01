import React, { useState } from "react";
import CourseCards from "./CourseCards";
import data from "../data.json";
import { FaSearch } from "react-icons/fa";

const Courses = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCourses = data.courses.reduce((acc, course) => {
        let filteredSections;

        if (course.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            // If the course title matches the search term, include all sections and cards
            filteredSections = course.sections;
        } else {
            // Otherwise, only include sections and cards that match the search term
            filteredSections = course.sections
                .map((section) => {
                    const filteredCards = section.cards.filter((card) =>
                        card.heading.toLowerCase().includes(searchTerm.toLowerCase())
                    );
                    return { ...section, cards: filteredCards };
                })
                .filter((section) => section.cards.length > 0);
        }

        if (filteredSections.length > 0) {
            return [...acc, { ...course, sections: filteredSections }];
        }
        return acc;
    }, []);

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
                <FaSearch
                    className="absolute top-1/2 left-3 transform -translate-y-1/2 text-lg"
                    color="darkgrey"
                />
            </div>
            {filteredCourses.length > 0 ? (
                filteredCourses.map((course, index) => (
                    <div
                        key={index}
                        className="flex flex-col w-full items-center justify-center gap-4 md:gap-0"
                    >
                        <header className="py-4 px-8 border-dark-green border-solid border-2 mt-24 mb-8 text-center max-w-[400px] rounded">
                            <h1 className="rounded-lg text-dark-green font-bold text-xl md:text-3xl font-inter">
                                {course.title}
                            </h1>
                        </header>
                        {course.sections.map((section, index) => (
                            <div
                                key={index}
                                className="flex flex-wrap gap-4 md:gap-4 lg:gap-8 md:flex-nowrap"
                            >
                                {section.cards.map((card, index) => {
                                    const cardWidth = section.cards.length === 1 ? "md:w-[330px] lg:w-[420px]" : "w-full md:w-1/3";
                                    return (
                                        <CourseCards
                                            key={index}
                                            imageSrc={card.image}
                                            title={card.heading}
                                            description={card.bodyText}
                                            button={card.button}
                                            className={`${cardWidth} p-8 md:px-4 mt-4 lg:mt-8 lg:p-8`}
                                        />
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                ))
            ) : (
                <div className="text-center mt-10">
                    <h2 className="text-2xl">No courses found for "{searchTerm}"</h2>
                    <p className="mt-2 text-gray-500">
                        Please try searching with a different term.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Courses;