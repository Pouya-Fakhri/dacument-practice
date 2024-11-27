import React from "react";
import { Link } from "react-router-dom";

function Card({ card }) {
  return (
    <div className=" w-1/4 h-72 m-1 border-4 border-gray-600 p-2">
      <img src="#" alt="" className="w-full h-2/3 bg-slate-400" />
      <h2 className="text-2xl font-bold font-sans ">{card.title}</h2>
      <p >{card.description}</p>
      <Link to={`/cards/${card.id}`}>View Details</Link>
    </div>
  );
}

export default Card;
