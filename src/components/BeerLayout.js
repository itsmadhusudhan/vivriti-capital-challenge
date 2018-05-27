import React from 'react';
import { connect } from 'react-redux';
import { fetchBeerWithRedux } from '../redux/actions/apiActions';
import Navbar from './Navbar';

class BeerLayout extends React.Component{
  componentDidMount(){
    // this.props.dispatch(fetchBeerWithRedux())
  }

  render(){
    return(
      <div>
        <Navbar/>
      </div>
    )
  }
}

export default connect()(BeerLayout);