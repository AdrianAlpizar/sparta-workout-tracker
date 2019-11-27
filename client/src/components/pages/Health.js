import React, { Component } from "react";
import "./Health.css";
import { connect } from "react-redux";
import { getWeights, deleteWeight } from "../../actions/weightActions";
import PropTypes from "prop-types";

class Health extends Component {
  componentWillMount() {
    this.props.getWeights();
  }
  render() {
    const { weights } = this.props.weight;
    return (
      <div style={{ height: "calc(100vh - 170px)" }}>
        <div
          style={{ fontSize: "20px" }}
          className="mb-0 mt-4 text-success title-font"
        >
          <strong>Healthy</strong>
        </div>
        <div class="row mb-4">
          <div
            style={{ fontSize: "70px" }}
            class="col-3 text-success title-font"
          >
            92
          </div>
          <div class="col-6 pt-4 text-muted subtitle-font">
            <span className="text-white ">Health Index</span> <br /> Your weight
            is at standard level.
          </div>
          <div class="col pt-4 text-right">
            <button
              style={{ padding: "6px 12px", margin: "0" }}
              className="btn btn-primary"
            >
              <i className="fas fa-weight"></i>
            </button>
          </div>
        </div>

        <h4 className="text-white title-font"> Body Statistics</h4>

        <div style={styleCard} className="card">
          <div className="card-body">
            <div className="row pr-4 pl-4">
              <div className="col-3">
                <div
                  style={{
                    padding: "8px 1px",
                    margin: "0",
                    borderRadius: "50%"
                  }}
                  className="btn-clear text-center"
                >
                  <i class="fas fa-diagnoses font-15"></i>
                </div>
              </div>
              <div
                style={{ paddingTop: "10px", paddingLeft: "0" }}
                className="col-6"
              >
                <div className="text-white title-font">Body Fat %</div>
              </div>
              <div style={{ paddingTop: "10px" }} className="col">
                <div
                  style={{ right: "0px" }}
                  className="float-right text-white title-font"
                >
                  8%
                </div>
              </div>
            </div>

            <div className="row pr-4 pl-4"></div>
          </div>
        </div>
        {weights.map(({ _id, weight, date }) => (
        <div style={styleCard} className="card">
          <div className="card-body">
            <div className="row pr-4 pl-4">
              <div className="col-3">
                <div
                  style={{
                    padding: "8px 1px",
                    margin: "0",
                    borderRadius: "50%"
                  }}
                  className="btn-clear text-center"
                >
                  <i className="fas fa-weight font-15"></i>
                </div>
              </div>
              <div
                style={{ paddingTop: "10px", paddingLeft: "0" }}
                className="col-5"
              >
                <div className="text-white title-font">Weight</div>
              </div>
              <div style={{ paddingTop: "10px" }} className="col">
                <div
                  style={{ right: "0px" }}
                  className="float-right text-white title-font"
                >
                  {weight}
                </div>
              </div>
            </div>

            <div className="row pr-4 pl-4"></div>
          </div>
        </div>
        ))}

        <div style={styleCard} className="card">
          <div className="card-body">
            <div className="row pr-4 pl-4">
              <div className="col-3">
                <div
                  style={{
                    padding: "8px 1px",
                    margin: "0",
                    borderRadius: "50%"
                  }}
                  className="btn-clear text-center"
                >
                  <i class="fas fa-balance-scale-right font-15"></i>
                </div>
              </div>
              <div
                style={{ paddingTop: "10px", paddingLeft: "0" }}
                className="col-5"
              >
                <div className="text-white title-font">Lean Body Mass</div>
              </div>
              <div style={{ paddingTop: "10px" }} className="col">
                <div
                  style={{ right: "0px" }}
                  className="float-right text-white title-font"
                >
                  15.2LB
                </div>
              </div>
            </div>

            <div className="row pr-4 pl-4"></div>
          </div>
        </div>

        <div style={{ height: "70px" }}></div>
      </div>
    );
  }
}

const styleCard = {
  borderRadius: "30px"
};

Health.propTypes = {
  getWeights: PropTypes.func.isRequired,
  weight: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  weight: state.weight
});

export default connect(
  mapStateToProps,
  { getWeights, deleteWeight }
)(Health);
