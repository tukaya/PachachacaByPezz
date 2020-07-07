
import React, { Component } from 'react';
import OurTeam from './OurTeam';
import AboutUs from './AboutUs';
import VideoAbout from './VideoAbout';
import { Container } from 'semantic-ui-react';
import Logo from './Logo';

class About extends Component {
  render() {
    return (
      <div style={{width:'80%', height:'80%',margin: '0 auto', textAlign:'center'}} className='imgA'>
        <Container>
          <div>
            <h1>Video</h1>
              <VideoAbout />
            <h1>About us</h1>
              <AboutUs />
            <h1>Our Team</h1>
              <OurTeam /> 
              <Logo />
          </div>
        </Container>
      </div>
    );
  }
}

export default About;