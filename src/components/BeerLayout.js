import React from 'react';
import { connect } from 'react-redux';
import { fetchBeerWithRedux } from '../redux/actions/apiActions';
import Navbar from './Navbar';
import { styleSelector, beerSelector } from '../redux/selectors/beerSelector';
import BeerCard from './BeerCard';
import BeerStyleCard from './BeerStyleCard';

class BeerLayout extends React.Component{
  componentDidMount(){
    // this.props.dispatch(fetchBeerWithRedux())
  }

  render(){
    return(
      <div className="wrapper">
        {
          this.props.styles.map(style=>{
           return <BeerStyleCard key={style} beers={beerSelector(this.props.beers,style)} style={style}/>
         })
        }
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    beers:state.beer,
    styles:styleSelector(state.beer)
  }
}

export default connect(mapStateToProps)(BeerLayout);