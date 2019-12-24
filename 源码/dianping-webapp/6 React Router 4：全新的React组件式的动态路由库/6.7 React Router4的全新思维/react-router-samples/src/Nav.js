import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/user/1">User1</Link>
              </li>
              <li>
                <Link to="/user/2">User2</Link>
              </li>
            </ul>
          </nav>
      </div>
    );
  }
}

export default Nav;