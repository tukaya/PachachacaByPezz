
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import NewsletterFirst from './NewslatterFirst'
import NewsletterSecond from './NewsletterSecond';

class About extends Component {
  render() {
    return (
      <div className='main_div_Newsletter'>
        <NewsletterFirst />
        <NewsletterSecond />
      </div>
        
    );
  }
}

export default About;