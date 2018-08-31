import * as React from "react";

import TextField from "@material-ui/core/TextField";

import styled from "styled-components";

export interface IFormState {
  email: string;
  name: string;
}

export default class Form extends React.Component<any, IFormState> {
  public state: IFormState = { email: "", name: "" };

  public render() {
    return (
      <StyledForm>
        <TextField />
        <TextField />
      </StyledForm>
    );
  }
}

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
