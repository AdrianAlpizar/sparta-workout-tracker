import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BottomNavbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar fixed-bottom"
      >
        <div className="container bottomnavbar-width">
        <Link to="/" className="nav-link ">
          <i className="fas fa-heartbeat nav-icon"></i>
          
        </Link>
        <Link to="/progress" className="nav-link ">
          <i className="fas fa-chart-bar nav-icon"></i>
        </Link>
        </div>
      </nav>
    );
  }
}

// Styling

export default Navbar;
