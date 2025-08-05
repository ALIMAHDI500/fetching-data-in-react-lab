
import React from 'react'
const StarshipCard = ({ starship }) => {
  return (
        <div className='card'>
      <h3>{starship.name}</h3>
     <p><b>Class:</b> {starship.starship_class}</p>
      <p><b>Model:</b> {starship.model}</p>
      <p><b>Manufacturer:</b> {starship.manufacturer}</p>
       </div>
  );
};



export default StarshipCard;