
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import NewsletterFirst from './NewslatterFirst'
import NewslatterSecond from './NewsletterSecond';

class About extends Component {
  render() {
    return (
        <Container>
            <NewslatterSecond />
            <NewsletterFirst />
            <NewslatterSecond />
        </Container>
    );
  }
}

export default About;