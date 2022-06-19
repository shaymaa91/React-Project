import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="Home">Home</Link>

              </li>

              <li className="nav-item">
                <Link className="nav-link" to="About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Recipes">Recipes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="News">Latest News</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Contact">Contact</Link>
              </li>


            </ul>

            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="Login">Login</Link>

              </li>

              <li className="nav-item">
                <Link className="nav-link" to="Register">Register</Link>
              </li>


            </ul>

          </div>
        </div>
      </nav>
    )
  }
}
