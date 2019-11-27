import React, { Component } from "react";
import { withAuth } from "@okta/okta-react";
import "./User.css";
export default withAuth(
  class User extends Component {
    state = {
      currentUserName: "",
      currentUserEmail: ""
    };

    componentDidMount() {
      const idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
      this.setState({
        currentUserEmail: idToken.idToken.claims.email,
        currentUserName: idToken.idToken.claims.name
      });
    }

    logout = async () => {
      this.props.auth.logout("/");
    };

    render() {
      const { currentUserEmail, currentUserName } = this.state;

      return (
        <div>
          <div className="container">
            <div style={styleCard} className="">
              <div class="card-body pt-3 pb-3">
                <div class="row">
                  <div class="col ml-auto pr-4half pl-4half">
                    <div class="info-horizontal pt-0">
                      <img
                        src={require("../assets/img/profile.jpg")}
                        width="70"
                        height="70"
                        class="rounded-circle float-right"
                        alt="..."
                        data-toggle="tooltip"
                        data-html="true"
                        title="img"
                      />

                      <div class="description ">
                        <h4 className="mb-0 title-font text-white">
                          {" "}
                          Good Morning
                        </h4>
                        <h4 className="mb-0 title-font text-white">
                          {" "}
                          <strong>{currentUserName}</strong>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-3 mt-3">
              <div class="card-body text-center">
                <div class="row">
                  <div class="col ml-auto">
                    <div className="mb-2">
                      <button
                        style={{ padding: "11px 30px" }}
                        className="btn btn-primary btn-round mr-2"
                        onClick={this.logout}
                      >
                        Logout
                      </button>
                    </div>
                    <div className="text-white title-font">
                      Email: {currentUserEmail}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="container">
              <div style={{ height: "30px" }}></div>
            </div>
          </div>
        </div>
      );
    }
  }
);

const styleCard = {
  borderTopRightRadius: "25px",
  borderTopLeftRadius: "25px"
};
