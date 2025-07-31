import React from 'react'
// src/components/StarshipList/StarshipList.jsx
import StarshipCard from '../StarshipCard/StarshipCard';


const StarshipList = ({ starship }) => {
  return (
    <div >
      {starship.length > 0 ? (
        starship.map((star, index) => (
          <StarshipCard key={index} starship={star} />
        ))
      ) : (
        <p>No starships found failed to render data</p>
      )}
    </div>
  );
};

export default StarshipList;