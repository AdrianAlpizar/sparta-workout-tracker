import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-transparent">
        <div className="container topavbar-width">
          <a href="https://github.com/AdrianAlpizar">
            <i className="fas fa-file-code nav-icon"></i>
            </a>
          <Link className="nav-link" to="/user">
            <i className="fas fa-user-circle nav-icon"></i>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
