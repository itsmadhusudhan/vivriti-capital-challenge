import React from "react";
import PropTypes from "prop-types";

const BeerCard = props => {
  return (
    <div className="beer__card">
      <div className="beer__card--header">
        <p className="beer__style--tape">{props.beer.style?props.beer.style:"Special"}</p>
        <h2 className="beer__name">{props.beer && props.beer.name}</h2>
        <p className="beer__style-">{props.beer.abv? props.beer.abv+" alcohol":""} </p>
        <p className="beer__style--">{props.beer.ibu? props.beer.ibu+" ibu":""} </p>
        <p className="beer__style--">{props.beer && props.beer.ounces} ounces</p>
        
      </div>
      <div className="beer__cart--button">Add To Cart</div>
    </div>
  );
};

BeerCard.propTypes = {
  beer: PropTypes.object
};

export default BeerCard;
