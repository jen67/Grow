import React from "react";
import data from "../data.json";

const CardComponent = () => {
  return (
    <div>
      {data.platformCards.map((card, index) => (
        <div key={index}>
          <img
            src={card.cardImage}
            alt={card.cardHeader}
          />
          <h2>{card.cardHeader}</h2>
          <p>{card.bodyText}</p>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;