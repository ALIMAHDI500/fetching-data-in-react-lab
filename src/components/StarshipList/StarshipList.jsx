import React from 'react'
import StarshipCard from '../StarshipCard/StarshipCard';


const StarshipList = ({ starships }) => {
 
  if (!starships || starships.length === 0) {
     return <p>No starships found.</p>;
  }

  return (
  <>
  <div className='continer'> 
      {starships.map((star, index) => (
        <StarshipCard key={index} starship={star} />
      ))}
      </div>
    </>
  );
};
export default StarshipList;