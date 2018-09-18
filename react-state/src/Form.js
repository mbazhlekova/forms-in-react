import React, { Component } from "react";
import { FormGroup, InputGroup } from "@blueprintjs/core";

class Form extends Component {
  render() {
    return (
      <FormGroup
        helperText="Helper text with details..."
        label="Label A"
        labelFor="text-input"
        labelInfo="(required)"
      >
        <InputGroup id="text-input" placeholder="Placeholder text" />
      </FormGroup>
    );
  }
}

export default Form;
