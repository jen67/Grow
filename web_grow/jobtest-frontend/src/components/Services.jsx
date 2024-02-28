import React, { useState, useEffect } from 'react';
import Card from './card';
import CardSkeleton from './CardSkeleton';
import platformCardsData from "../data.json";

function Services() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data loading delay
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="w-full bg-grey py-24 px-4 flex items-center flex-col">
      <header className="capitalize font-bold text-3xl md:text-5xl sm:text-4xl text-center font-inter ">
        why use our platform
      </header>

      <div className=" container py-16 px-4 gap-4 flex flex-col justify-center items-center w-full md:flex-row flex-wrap">
        {loading ? (
          Array(platformCardsData.platformCards.length).fill().map((_, index) => <CardSkeleton key={index} />)
        ) : (
          platformCardsData.platformCards.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.cardImage}
              title={card.cardHeader}
              description={card.bodyText}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Services;