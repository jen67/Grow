import React from 'react';

const CourseSkeleton = () => {
    return (
        <div className="skeleton-card w-full md:w-1/3 p-8 md:px-4 mt-4 lg:mt-8 lg:p-8">
            <div className="skeleton-image h-32 md:h-48 bg-gray-300 rounded-lg"></div>
            <div className="skeleton-body flex flex-col items-center justify-center text-center">
                <div className="mt-8 mb-8 h-6 bg-gray-300 rounded w-3/4"></div>
                <div className="mt-2 h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="mt-2 h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="mt-2 h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="mt-2 h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="mt-2 h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="mt-2 h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
            <div className="shimmer absolute top-0 left-0 w-full h-full"></div>
        </div>
    );
};

export default CourseSkeleton;