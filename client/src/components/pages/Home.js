import React, { Component } from "react";
import { withAuth } from "@okta/okta-react";
import "./Home.css";
import Health from "./Health";

export default withAuth(
  class Home extends Component {
    state = { authenticated: null };

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login("/");
    };

    logout = async () => {
      this.props.auth.logout("/");
    };
    

    render() {
      if (this.state.authenticated === null) return null;

      const mainContent = this.state.authenticated ? (
        // HEALTH COMPONENT
        <div className="container">
          <Health logout={this.logout} />
        </div>
      ) : (
        <div style={styleCard} className="card mb-3 text-center">
          <img
            style={styleImg}
            src={require("../assets/img/maincopy.png")}
            className="card-img-top"
            alt="..."
          />
          <div style={cardBody} className="card-body">
            <h3 className="card-title pt-2 welcome-title">Welcome to Sparta</h3>
            <p className="lead welcome-subtitle">
              The web app designed to help you track your workouts,
              measurements, and more. Click ahead to learn more!
            </p>
            <button
              className="btn btn-primary btn-fab btn-icon btn-round mt-3"
              onClick={this.login}
            >
              
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>

          <div style={{ height: " 70px" }}></div>
        </div>
      );

      return <div className="container">{mainContent}</div>;
    }
  }
);

const cardBody = {
  backgroundColor: "#171941"
};
const styleCard = {
  background: "none",
  boxShadow: "none",
  borderRadius: "none",
  backgroundColor: "#171941"
};

const styleImg = {
  borderRadius: "none"
};


