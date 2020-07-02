
import React, { Component } from 'react';
import OurTeam from '../about/OurTeam';
import AboutUs from '../about/AboutUs';
import Videoabout from '../about/Videoabout';
import { Container } from 'semantic-ui-react';

class About extends Component {
  render() {
    return (
      <div style={{marginTop:'80px', textAlign:'center'}} className='imgA'>
        <Container>
          <h1>Video</h1>
            <Videoabout />
          <h1>About us</h1>
            <AboutUs />
          <h1>Our Team</h1>
            <OurTeam /> 
        </Container>
      </div>
    );
  }
}

export default About;