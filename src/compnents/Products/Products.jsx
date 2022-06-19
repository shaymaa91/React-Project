import React, { Component } from 'react'
import axios from 'axios';
import style from "./Products.module.css"

export default class Products extends Component {

    state = {
        Prod: []
    }

    getProducts = async () => {
        let { data } = await axios.get("https://forkify-api.herokuapp.com/api/search?q=pizza");
        console.log("data===>");
        console.log(data);
        this.setState({ Prod: data.recipes });
        console.log("Prod Array");
        console.log(this.state.Prod);
    }

    componentDidMount() {
        this.getProducts();
        console.log("compDidMount");
    }
    render() {
        return (
            <>

                <div>
                    <h1 className='text-center bg-success'>Our Products</h1>
                    <div className="row text-center">

                        {this.state.Prod.map((p) =>
                            <div className="col-md-3">
                                <div class={`${style.card} card my-3`} >
                                    <img src={p.image_url} class={`${style.imgHight} card-img-top img-fluid`} alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">{p.title}</p>
                                        <p class="card-text">{p.publisher}</p>
                                        <p class="card-text">{p.social_rank}</p>
                                    </div>
                                </div>
                            </div>

                        )}

                    </div>
                </div>
            </>
        )
    }
}
