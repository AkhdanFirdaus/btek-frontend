import React from 'react';

function Card({ data }) {
  return (
    <div className="bg-amber-300 p-5">
      <img src={data.image} alt={data.name} className="w-full object-cover" />
      <h5>{data.name}</h5>
    </div>
  );
}

export default Card;
