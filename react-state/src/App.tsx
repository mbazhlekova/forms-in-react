import * as React from "react";

import styled, { keyframes } from "styled-components";

import logo from "./logo.svg";

class App extends React.Component {
  public render() {
    return (
      <AppWrapper>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle>Welcome to React</AppTitle>
        </AppHeader>
        <AppIntro>
          To get started, edit <CodeWrapper>src/App.tsx</CodeWrapper> and save
          to reload.
        </AppIntro>
      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div`
  text-align: center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const AppLogo = styled.img`
  animation: ${rotate360} infinite 120s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`;
const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;
const AppTitle = styled.h1`
  font-size: 1.3em;
`;
const AppIntro = styled.p`
  font-size: large;
`;

const CodeWrapper = styled.code`
  font-size: 1.3rem;
`;

export default App;
