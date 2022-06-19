import React, { Component } from 'react';
import axios from 'axios';
import style from './Home.module.css';

export default class Home extends Component {
  state = {
    Recipes: []
  }

  getRecipes = async () => {
    let { data } = await axios.get("https://forkify-api.herokuapp.com/api/search?q=pizza");
    this.setState({ Recipes: data.recipes })
    console.log(this.state.Recipes);

  }

  componentDidMount() {
    this.getRecipes();
  }

  render() {
    return (
      <>
        <h2 className='bg-success text-center' >Hello from Home page</h2>
        <div className="row bg-danger text-center">
          {this.state.Recipes.map((recipe,index) =>
            <div className="col-md-3 my-2 " key={index}>
              <div className="card mx-4 h-100" >
                <img src={recipe.image_url} className={`${style.imgHight} card-img-top img-fluid`} alt="..." />
                <div className="card-body">
                  <h4 className="card-text">{recipe.title}</h4>
                </div>
                <div className='fixed left-0 bg-info'>{index}</div>
              </div>



            </div>
          )}
        </div>

      </>
    )
  }
}
