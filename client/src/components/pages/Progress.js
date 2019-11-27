import React, { Component } from "react";
import "./Progress.css";
import Chart from "./Chart";
import { connect } from "react-redux";
import { getWeights, deleteWeight } from "../../actions/weightActions";
import PropTypes from "prop-types";
import * as moment from "moment";

class Progress extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    };
  }

  componentWillMount() {
    this.getChartData();
    this.props.getWeights();
  }

  getChartData() {
    const { weights } = this.props.weight;

    // Ajax calls here

    const dateArray = [];
    const weightArray = [];

    weights.map(
      ({ _id, weight, date }) =>
        weightArray.push(weight) &&
        dateArray.push(moment(date).format("DD/MM/YYYY")),

      this.setState({
        chartData: {
          labels: dateArray,
          datasets: [
            {
              label: "Weight",
              borderColor: "#f96332",
              pointBorderColor: "#FFF",
              pointBackgroundColor: "#f96332",
              pointBorderWidth: 2,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 1,
              pointRadius: 4,
              fill: true,
              borderWidth: 2,
              data: weightArray
            }
          ]
        }
      })
    );
  }

  render() {
    return (
      <div className="container">
        <div className="container">
          <div style={{ height: "calc(100vh - 170px)" }}>
            <div
              style={{ fontSize: "20px" }}
              className="mb-4 mt-4 text-white title-font text-center"
            >
              <strong>Weight Progress</strong>
            </div>

            <div className="card">
              <div className="card-body">
                <Chart chartData={this.state.chartData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Progress.propTypes = {
  getWeights: PropTypes.func.isRequired,
  weight: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  weight: state.weight
});

export default connect(
  mapStateToProps,
  { getWeights, deleteWeight }
)(Progress);
