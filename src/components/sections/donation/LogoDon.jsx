import React from 'react'
import { Divider, Image } from 'semantic-ui-react';
import Mano from '../../images/Logo/LogoMano.png';
import Annamuntz from '../../images/Logo/Annamuntz.jpg';
import logoyoreem from '../../images/Logo/logoyoreem.png';
import Logo from '../../images/Logo/logo.jpg';
import haella from '../../images/Logo/haella.png';
import Hofstee from '../../images/Logo/Hofstee.png';
import Marina from '../../images/Logo/Marina.png';
import Weeshuis from '../../images/Logo/Weeshuis.png';
import WG from '../../images/Logo/WG.png';


// const src = '/images/wireframe/image.png'
const ImageExampleGroupSize = () => (
  <div style={{margin:'0 30%'}}>
    <Image.Group size='tiny'>
      <Image src={Mano} />
      <Image src={Logo} /> 
      <Image src={logoyoreem} />
      <Image src={Annamuntz} />
    </Image.Group>
    <Image.Group size='tiny'>
      <Image src={Hofstee} />
      <Image src={Marina} />
      <Image src={Weeshuis} />
      <Image src={WG} /> 
      <Image src={haella} />
    </Image.Group>
  </div>
)

export default ImageExampleGroupSize

