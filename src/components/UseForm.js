/* eslint-disable default-case */
import React, { Component } from "react";
import FromUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Succes from "./Succes";

export class UseForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Proceed to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleEvent = (input) => (z) => {
    this.setState({ [input]: z.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, bio, city } = this.state;
    const values = { firstName, lastName, email, occupation, bio, city };
    switch (step) {
      case 1:
        return (
          <FromUserDetails
            nextStep={this.nextStep}
            handleEvent={this.handleEvent}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleEvent={this.handleEvent}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Succes />;
    }
  }
}

export default UseForm;
