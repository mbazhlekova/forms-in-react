import React, { Component } from "react";
import { Card, Flex, Heading } from "rebass";

class Form extends Component {
  render() {
    return (
      <Flex>
        <Card
          p={4}
          py={6}
          mx="auto"
          backgroundImage="url(https://source.unsplash.com/random/1024x768)"
          backgroundSize="cover"
          borderRadius={8}
          color="white"
          bg="darkgray"
        >
          <Heading textAlign="center" fontSize={[5, 6]}>
            Background Image
          </Heading>
        </Card>
      </Flex>
    );
  }
}

export default Form;
