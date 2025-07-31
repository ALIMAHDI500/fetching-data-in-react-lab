////src/components/StarshipCard/StarshipCard

import React from 'react'
const StarshipCard = ({ starship }) => (
  <div >
    <h3>{starship.name}</h3>
    <p><b>Class:</b> {starship.starship_class}</p>
    <p><b>Manufacturer:</b> {starship.manufacturer}</p>
    <p><b>Model:</b> {starship.model}</p>
  </div>
);

export default StarshipCard;