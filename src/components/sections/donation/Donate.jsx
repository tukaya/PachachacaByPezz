
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Form from '../donation/Form';
import FirstContent from '../donation/FirstContent';
import SecondContent from '../donation/SecondContent';

class About extends Component {
  render() {
    return (
        <Container style={{fontFamily:'sans-serif'}}>
          <Form />
          <FirstContent />
          <SecondContent />
        </Container>
    );
  }
}

export default About;