import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import en1 from '../../images/Newsletter/Seven/en1.JPG';

const CardExampleImageCard = () => (
  <div className='newsletterStyle'>
      <Card fluid color='teal'>
    <Card.Content>
      <Card.Header>Finally</Card.Header>
      <Card.Meta>summer workshops - april 2020</Card.Meta>
      <Card.Description style={{columns: '50px 2'}}>
         Pachachaca also has a deeper meaning
         within the vision of the inhabitants of the Andes
         the world around them.
         Pacha, or Earth, becomes as a Living Being
         considered. Chaca, aka Brug, also becomes
         used to express Unit. Pachachaca
         therefore also means "Unity of everything
         Soil'.
         It is nice partly thanks to your support
         this unity and sense of community
         to experience. Thank you!
         We wish everyone good luck and strength in this
         disruptive times.
       </Card.Description>
    </Card.Content>
    <Image.Group style={{textAlign:'center'}} size='medium'>
      <Image src={en1} />
    </Image.Group>
    <Card.Content extra>
        <a>
        <Icon name='heart' />
      </a>
    </Card.Content>
  </Card>
  </div>
)

export default CardExampleImageCard