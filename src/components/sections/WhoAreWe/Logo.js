import React from 'react'
import { Divider, Image } from 'semantic-ui-react';
import logoyoreem from '../../images/Logo/logoyoreem.png';
import Logo from '../../images/Logo/logo.jpg';


// const src = '/images/wireframe/image.png'
const ImageExampleGroupSize = () => (
  <div>
    <Image.Group size='tiny'>
  <Divider />
      <Image src={Logo} /> 
      <Image src={logoyoreem} />
    </Image.Group>
  </div>
)

export default ImageExampleGroupSize

