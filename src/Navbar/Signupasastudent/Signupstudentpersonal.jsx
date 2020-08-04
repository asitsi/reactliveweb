// PersonalDetails.jsx
import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { throws } from "assert";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

class Signupstudentpersonal extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    return (
      <div className="Personal_details">
        <Form color="blue">
          <h1 className="ui centered">Enter Personal Details</h1>
          <Form.Field>
            <label>Age</label>
            <input
              placeholder="Age"
              onChange={this.props.handleChange("age")}
              defaultValue={values.age}
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              placeholder="City"
              onChange={this.props.handleChange("city")}
              defaultValue={values.city}
            />
          </Form.Field>
          <Form.Field>
            <label>Country</label>
            <input
              placeholder="Country"
              onChange={this.props.handleChange("country")}
              defaultValue={values.country}
            />
          </Form.Field>
          <Button onClick={this.back}>Back</Button>
          <Button onClick={this.saveAndContinue}>Save And Continue </Button>
        </Form>
      </div>
    );
  }
}

export default Signupstudentpersonal;
