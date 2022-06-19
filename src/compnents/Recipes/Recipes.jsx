import React, { Component } from 'react'
import axios from 'axios';
import style from './Recipes.module.css';


export default class Recipes extends Component {
    state = {
        Recipes: []
    }

    getRecipes = async () => {
        let { data } = await axios.get("https://forkify-api.herokuapp.com/api/search?q=pizza");
        console.log("new data is here");

        this.setState({ Recipes: data.recipes });
        console.log(this.state.Recipes);
    }

    componentDidMount() {
        console.log('this is recipes comp did mount');
        this.getRecipes();
    }
    render() {
        return (
            <>

                <h1 className=' text-center bg-danger'>All Recipes</h1>
                <div className='bg-info'><i class="fas fa-kiwi-bird"></i> </div>
                <div className="row ">
                    {(this.state.Recipes.length > 0) ? (this.state.Recipes.map((recipe, index) =>

                        <div className="col-md-3" key={index}>
                            <div class="card bg-dark text-white my-3">
                                <img src={recipe.image_url} class={`${style.imgHight} card-img`} alt="..." />
                                <div class="card-img-overlay">
                                    <h5 class="card-title">{recipe.title}</h5>
                                    <p class="card-text">{recipe.publisher}</p>
                                    <p class="card-text">{recipe.social_rank}</p>
                                </div>
                            </div>
                        </div>


                    )) :
                        <i className='fas fa-spinner fa-spin'></i>
                    }
                </div>

            </>
        )
    }
}
