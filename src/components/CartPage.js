import React from 'react';
import { connect } from 'react-redux';
import { cartItemSelector } from '../redux/selectors/beerSelector';

const CartPage=(props)=>{
  return(
    <div>
      {
        cartItemSelector(props.items).map(item=>{
          return (<div key={item.id}>
                    {item.name}-{item.count}
                </div>)
        })
      }
    </div>
  )
}

const mapStateToProps=(state)=>{
  return{
    items:state.items
  }
}

export default connect(mapStateToProps)(CartPage);