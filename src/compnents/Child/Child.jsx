import React, { Component } from 'react'
import './Child.css';

export default class Child extends Component {
  render() {
      console.log(this.props);
      let {id,name,cat,price} = this.props.productInfo;
    return (
        <>
        
        <div className='col-md-3 p-2 text-center'>
            <h1>Child{id}</h1>
            <h2>{name}</h2>
            <h2>{cat}</h2>
            <h2>{price}</h2>
            <button className='btn btn-danger mx-2' onClick={()=>this.props.deleteProd(this.props.productInfo)}>Delete</button>
            <button className='btn btn-success mx-2' onClick={()=>this.props.updateProd(this.props.productInfo)}>Update</button>
        </div>
        </>
      
    )
  }
}
