// Confirmation.jsx
import React, { Component } from "react";
import { Button, List } from "semantic-ui-react";

class Signupstudentconfirmation extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, age, city, country },
    } = this.props;

    return (
      <div className="Confermation">
        <div>
          <h1 className="ui centered">Confirm your Details</h1>
          <p>
            ** Click Confirm if the following details have been correctly
            entered **
          </p>
          <List>
            <List.Item>
              <List.Icon name="users" />
              <List.Content className="Confermation_details">
                First Name: {firstName}
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="users" />
              <List.Content className="Confermation_details">
                Last Name: {lastName}
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="mail" />
              <List.Content className="Confermation_details">
                <a href="mailto:jack@semantic-ui.com">{email}</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="calendar" />
              <List.Content className="Confermation_details">
                Age: {age} Years
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="marker" />
              <List.Content className="Confermation_details">
                {city}, {country}
              </List.Content>
            </List.Item>
          </List>

          <Button onClick={this.back}>Back</Button>
          <Button onClick={this.saveAndContinue}>Confirm</Button>
        </div>
      </div>
    );
  }
}

export default Signupstudentconfirmation;
