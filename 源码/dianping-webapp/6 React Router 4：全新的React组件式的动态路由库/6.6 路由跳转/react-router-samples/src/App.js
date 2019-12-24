import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import User from "./User";
import Nav from "./Nav";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/about" render={props => <About {...props} />} />
          <Route
            path="/contact"
            children={props => <div>{props.match ? "active" : "inactive"}</div>}
          />
          <Route path="/user/:user" component={User} />
        </div>
      </Router>
    );
  }
}

export default App;
