
import React, { Component } from 'react';
import OurTeam from './OurTeam';
import AboutUs from './AboutUs';
import VideoAbout from './VideoAbout';
import { Container } from 'semantic-ui-react';
import Logo from './Logo';

class About extends Component {
  render() {
    return (
      <div className='imgA'>
        <Container>
          <div>
            <h1 className='shadow'>Video</h1>
              <VideoAbout />
                <div className='shadow'>
                  <h1>About us</h1>
                </div>
              <AboutUs />
                <div  style={{marginTop:'50px'}}>
                 <h1 className='shadow'>Our Team</h1>
                </div>
              <OurTeam /> 
              <Logo />
          </div>
        </Container>
      </div>
    );
  }
}

export default About;