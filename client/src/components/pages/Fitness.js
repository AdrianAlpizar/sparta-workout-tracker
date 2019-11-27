import React, { Component } from "react";
import { Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getWeights, deleteWeight } from "../../actions/weightActions";
import PropTypes from "prop-types";
import { FormattedDate } from "react-intl";

import "./Fitness.css";
import WeightModal from "./WeightModal";
class Fitness extends Component {

  componentDidMount() {
    this.props.getWeights();
  }

  onDeleteClick = id => {
    this.props.deleteWeight(id);
  };


  render() {
    const { weights } = this.props.weight;
    
    return (
      <div className="container widescreen">
          <div style={{ height: "calc(100vh - 170px)" }}>
            <div
              style={{ fontSize: "20px" }}
              className="mb-4 mt-4 text-white title-font text-center"
            >
              <strong>Weight Entries</strong>
            </div>

            <TransitionGroup className="weights-list">
              {weights.map(({ _id, weight, date }) => (
                <CSSTransition key={_id} timeout={500} classNames="fade">
                  <div style={styleCard} className="card">
                    <div className="card-body">
                      <div className="row pr-2 pl-2">
                        <div style={{ paddingTop: "5px" }} className="col-3">
                          <Button
                            className="btn-clear text-center rounded-circle"
                            size="sm"
                            style={{
                              paddingRight: "10px",
                              paddingLeft: "10px",
                              paddingTop: "6.5px",
                              paddingBottom: "6.5px",
                              margin: "0"
                            }}
                          >
                            <i className="fas fa-calendar-week font-15"></i>
                          </Button>
                        </div>
                        <div
                          style={{ paddingTop: "10px", paddingLeft: "0" }}
                          className="col-4"
                        >
                          <div className="text-white title-font">
                            <FormattedDate
                              value={date}
                              day="numeric"
                              month="numeric"
                              year="numeric"
                            />
                          </div>
                        </div>
                        <div style={{ paddingTop: "10px" }} className="col-3">
                          <div className="text-white title-font">
                            {weight}lb
                          </div>
                        </div>
                        <div style={{ paddingTop: "5px" }} className="col-2">
                          <div
                            style={{ right: "0px" }}
                            className="float-right text-white title-font"
                          >
                            <Button
                              color="danger"
                              size="sm"
                              className="rounded-circle"
                              style={{
                                paddingRight: "10px",
                                paddingLeft: "10px",
                                margin: "0"
                              }}
                              onClick={this.onDeleteClick.bind(this, _id)}
                            >
                              &times;
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CSSTransition>
              ))}
            </TransitionGroup>

            <WeightModal />

            <div style={{ height: "70px" }}></div>
          </div>
        </div>
    );
  }
}
const styleCard = {
  borderRadius: "30px"
};

Fitness.propTypes = {
  getWeights: PropTypes.func.isRequired,
  weight: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  weight: state.weight
});

export default connect(
  mapStateToProps,
  { getWeights, deleteWeight }
)(Fitness);

          
          
          
          
          
          
          
          
          
        
          
         