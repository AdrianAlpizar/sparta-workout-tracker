import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addWeight } from "../../actions/weightActions";

class WeightModal extends Component {
  state = {
    modal: false,
    weight: 0
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newWeight = {
      weight: this.state.weight
    };

    // Add item via addItem action
    this.props.addWeight(newWeight);

    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div style={{marginBottom:"80px"}} className="fixed-bottom text-right mr-3">
        <Button
          style={{ paddingTop: "14px", paddingBottom: "14px" }}
          className="rounded-circle"
          size="sm"
          color="primary"
          onClick={this.toggle}
        >
          <i className="fas fa-plus-circle"></i>
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Weight Tracker</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="weight">Weight</Label>
                <Input style={{color:'black'}}
                  type="text"
                  name="weight"
                  id="weight"
                  placeholder="Add current weight"
                  onChange={this.onChange}
                ></Input>
                <Button block>Add</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weight: state.weight
});
export default connect(
  mapStateToProps,
  { addWeight }
)(WeightModal);
