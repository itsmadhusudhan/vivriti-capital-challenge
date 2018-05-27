import React from 'react';
import {connect} from "react-redux";
import BeerCard from './BeerCard';
import {beerNameSelector}  from "../redux/selectors/beerSelector";

const BeerStyleCard=(props)=>{
  return(
    <React.Fragment>
    {
      beerNameSelector(props.beers,props.filters.name).length!==0?
      <div className="beer__style--container">
      <h2>{props.style}</h2>
      <div className="beer__style--card">
      {
      beerNameSelector(props.beers,props.filters.name).map(beer=>{
          return <BeerCard key={beer.id} beer={beer}/>
        })
      }
      </div>
    </div>:""
  }
  </React.Fragment>
  )
}

const mapStateToProps=(state)=>{
  return{
    filters:state.filters
  }
}


export default connect(mapStateToProps)(BeerStyleCard);