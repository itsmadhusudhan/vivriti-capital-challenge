import React from 'react';
import BeerCard from './BeerCard';

const BeerStyleCard=(props)=>{
  return(
    <div className="beer__style--container">
      <h2>{props.style}</h2>
      <div className="beer__style">
      {
        props.beers.map(beer=>{
          return <BeerCard key={beer.id} beer={beer}/>
        })
      }
      </div>
    </div>
  )
}

export default BeerStyleCard;