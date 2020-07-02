
import React, { Component } from 'react';
import OurTeam from '../about/OurTeam';
import AboutUs from '../about/AboutUs';
import VideoAbout from '../about/VideoAbout';
import { Container } from 'semantic-ui-react';

class About extends Component {
  render() {
    return (
      <div  className='imgA'>
        <Container>
          <h2>Video</h2>
            <VideoAbout />
          <h1>About us</h1>
            <AboutUs />
          <h3>Our Team</h3>
            <OurTeam /> 
        </Container>
      </div>
    );
  }
}

export default About;