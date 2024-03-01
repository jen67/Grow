import React from "react";

const shimmerStyle = {
    background: 'linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.2) 80%, transparent 100%)',
    animation: 'shimmer 2s infinite',
};

const CardSkeleton = () => {
    return (
        <div className="card md:h-[450px] lg:h-[470px] w-full md:max-w-[330px] lg:w-[400px] lg:max-w-none xl:w-[370px] larger:w-[400px] larger:p-6 p-5 bg-gray-200 rounded-lg font-roboto overflow-hidden relative">
            <div className="w-full h-32 md:h-48 bg-gray-300 rounded-lg"></div>
            <div className="card-body">
                <div className="mt-8 mb-8 h-6 bg-gray-300 rounded w-3/4"></div>
                <div className="mt-2 h-4 bg-gray-300 rounded w-full"></div>
                <div className="mt-2 h-4 bg-gray-300 rounded w-full"></div>
                <div className="mt-2 h-4 bg-gray-300 rounded w-full"></div>
                <div className="mt-2 h-4 bg-gray-300 rounded w-full"></div>
                <div className="mt-2 h-4 bg-gray-300 rounded w-full"></div>
                <div className="mt-2 h-4 bg-gray-300 rounded w-full"></div>
            </div>
            <div className="shimmer absolute top-0 left-0 w-full h-full" style={shimmerStyle}></div>
        </div>
    );
};

export default CardSkeleton;