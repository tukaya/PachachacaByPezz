
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Form from '../donation/Form';
import FirstContent from '../donation/FirstContent';
import SecondContent from '../donation/SecondContent';
// import VideoDo from '../donation/VideoDo';

class About extends Component {
  render() {
    return (
        <Container>
          <Form />
          <FirstContent />
          <SecondContent />
        </Container>
    );
  }
}

export default About;