import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default class About extends Component {
  render() {
    return (
      <>
      <h1 className='bg-danger'>Hello from About jsx</h1>
      <nav>
        <ul>
          <li>
            <Link to="Portfolio">Portfolio</Link>\
            <Link to="History">History</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      </>
    )
  }
}
