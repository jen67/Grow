import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="flex justify-center items-center pt-16 pb-0 px-8 md:py-20 bg-grey">
      <div className="relative w-full md:w-3/4">
        <input
          type="search"
          placeholder="Search for courses..."
          onChange={handleSearchChange}
          className="w-full h-16 pl-10 pr-20 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-primary text-center"
        />
        <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-lg" color="darkgrey" />
      </div>
    </div>
  );
};

export default SearchBar;