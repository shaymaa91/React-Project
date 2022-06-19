import React, { Component } from 'react'
import { Outlet,Link } from 'react-router-dom'


export default class Contact extends Component {
  state = {
    // name: 'Shaymaa',
    // age: 30
  }

  // changeAge() {
  //   let newAge = this.state.age;
  //   newAge = newAge + 1;
  //   this.setState({ age: newAge })

  // }
  // changeName() {
  //   let newName = this.state.name;
  //   // console.log(newName);
  //   if (newName == 'Shaymaa') {
  //     // alert('hhh');
  //     newName = 'Ahmad';
  //   }
  //   else {
  //     // alert('ggg');
  //     newName = 'Shaymaa';
  //   }
  //   this.setState({ name: newName })

  // }
  render() {
    return (
      <>
        <h1>Hello from Contact jsx</h1>
        <nav>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="Projects">Projects</Link>

            </li>

            <li className="nav-item">
              <Link className="nav-link" to="Services">Services</Link>
            </li>

            


          </ul>
        </nav>
        <Outlet />
        {/* <h2>{this.state.name}</h2>
        <h2>{this.state.age}</h2>
        <button className='btn btn-success m-2' onClick={() => this.changeAge()} >Change</button>
        <button className='btn btn-danger m-2' onClick={() => this.changeName()} >Change Name</button> */}
      </>
    )
  }
}
