import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addItem } from "../redux/actions/cartActions";

const BeerCard = ({ beer, items, dispatch }) => {
  return (
    <div className="beer__card">
      <div className="beer__card--header">
        <p className="beer__style--tape">
          {beer.style ? beer.style : "Special"}
        </p>
        <h2 className="beer__name">{beer && beer.name}</h2>
        <p className="beer__style-">{beer.abv ? beer.abv + " alcohol" : ""} </p>
        <p className="beer__style--">{beer.ibu ? beer.ibu + " ibu" : ""} </p>
        <p className="beer__style--">{beer && beer.ounces} ounces</p>
      </div>
      <div
        className="beer__cart--button"
        onClick={e => {
        items.length!==0? items.forEach(item => {
            item.id === beer.id
              ? dispatch(addItem({ ...item, count: item.count + 1 }))
              : dispatch(addItem({ ...item, count:1 }));
          }):dispatch(addItem({ ...beer, count:1 }))
          
        }}
      >
        Add To Cart
      </div>
    </div>
  );
};

BeerCard.propTypes = {
  beer: PropTypes.object
};

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps)(BeerCard);
