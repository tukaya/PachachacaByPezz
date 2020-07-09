
import React, { Component } from 'react';
import OurTeam from './OurTeam';
import AboutUs from './AboutUs';

class About extends Component {
  render() {
    return (
      <div className='main_div_about'>
        <AboutUs />
        <OurTeam /> 
      </div>
    );
  }
}

export default About;