import React from 'react';
import Card from './card';
import platformCardsData from "../data.json";


console.log(platformCardsData);
function Services() {
  return (
    <div className="w-full bg-grey py-24 px-4 flex items-center flex-col">
      <header className="capitalize font-bold text-xl md:text-4xl sm:text-3xl text-center font-inter ">
        why use our platform
      </header>

      <div className=" container py-16 px-4 gap-4 flex flex-col justify-center items-center w-full md:flex-row flex-wrap">
        {platformCardsData.platformCards.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.cardImage}
            title={card.cardHeader}
            description={card.bodyText}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;