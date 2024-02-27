// import React from 'react';
// import data from '../data.json'; // replace with the path to your JSON file


// const Card = ({ card }) => (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
//         <img className="w-100%" src={card.image} alt={card.heading} />
//         <div className="px-6 py-4">
//             <div className="font-bold text-xl mb-2">{card.heading}</div>
//             <p className="text-gray-700 text-base">{card.bodyText}</p>
//             <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                 {card.button}
//             </button>
//         </div>
//     </div>
// );

// const CardsContainer = () => (
//     <div className="flex flex-wrap justify-around">
//         {data.frontendCards.map((card, index) => (
//             <Card key={index} card={card} />
//         ))}
//         {data.backendCards.map((card, index) => (
//             <Card key={index} card={card} />
//         ))}
//         {data.devOpsCards.map((card, index) => (
//             <Card key={index} card={card} />
//         ))}
//     </div>
// );

// export default CardsContainer;