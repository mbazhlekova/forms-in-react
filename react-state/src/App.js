import React, { Component } from "react";
import { Card, Elevation } from "@blueprintjs/core";
import styled from "styled-components";

import Form from "./Form";
import GlobalStyle from "./globalStyle";

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <CenteredCard interactive={true} elevation={Elevation.THREE}>
          <Form />
        </CenteredCard>
      </div>
    );
  }
}

const CenteredCard = styled(Card)`
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 50%
  height: 50%
`;

export default App;
