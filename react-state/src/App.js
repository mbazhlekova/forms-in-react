import React, { Component, Fragment } from "react";
import Form from "./Form";
import GlobalStyle from "./globalStyle";

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Form />
      </Fragment>
    );
  }
}

export default App;
