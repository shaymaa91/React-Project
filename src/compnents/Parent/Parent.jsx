import React, { Component } from 'react'
import Child from '../Child/Child'

export default class Parent extends Component {
    state = {
        products: [
            { id: 1, name: 'iphone', cat: 'mobile',price:1000 },
            { id: 2, name: 'Hwawi', cat: 'mobile', price:2000},
            { id: 3, name: 'samsung', cat: 'mobile',price:1500 },
            { id: 4, name: 'shawmi', cat: 'mobile',price:3000 },

        ]
    }
    deleteProd = (currentProd) => {
        // alert(currentProd);
        // console.log(currentProd);
        let products = this.state.products;
        let currentIndex = products.indexOf(currentProd);
        products.splice(currentIndex,1);
        console.log(products);
        this.setState({products});
        // console.log(currentIndex);
    }

    updateProd=(currentProd)=>{
        //console.log(currentProd);
        let products = this.state.products;
        currentProd.price = currentProd.price+200;
        this.setState({products})
        console.log(currentProd);

    }
    render() {
        return (
            <>
                <div>Parent</div>
                <div className='row'>
                    {this.state.products.map((product) => <Child
                        key={product.id}
                        productInfo={product}
                        deleteProd={this.deleteProd}
                        updateProd={this.updateProd}
                        />)}

                </div>
            </>

        )
    }
}
