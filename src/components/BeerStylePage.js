import React from "react";
import { connect } from "react-redux";
import BeerStyleCard from "./BeerStyleCard";
import { beerNameSelector } from "../redux/selectors/beerSelector";
import { styleSelector, beerSelector } from "../redux/selectors/beerSelector";

const BeerStylePage = props => {
  return (
    <div>
      <BeerStyleCard
        beers={beerSelector(props.beers, props.match.params.id)}
        style={props.match.params.id}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    beers: state.beer
  };
};

export default connect(mapStateToProps)(BeerStylePage);
