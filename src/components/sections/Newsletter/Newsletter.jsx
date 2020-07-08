
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import NewsletterFirst from './NewslatterFirst'
import NewsletterSecond from './NewsletterSecond';
import NewsletterThird from './NewsletterThird';
import NewsletterFourth from './NewsLetterFourth';
import NewsletterFive from './NewsletterFive';
import NewsletterSix from './NewsletterSix';
import NewsletterSeven from './NewsletterSeven';

class About extends Component {
  render() {
    return (
        <Container>
            <NewsletterFirst />
            <NewsletterSecond />
            <NewsletterThird />
            <NewsletterFourth />
            <NewsletterFive />
            <NewsletterSix />
            <NewsletterSeven />
        </Container>
    );
  }
}

export default About;