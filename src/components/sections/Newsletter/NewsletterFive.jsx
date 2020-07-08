import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Tuin1 from '../../images/Newsletter/Tuin/tuin1.JPG';
import Tuin2 from '../../images/Newsletter/Tuin/tuin2.JPG';

const CardExampleImageCard = () => (
  <div className='newsletterStyle'>
      <Card fluid color='teal'>
    <Card.Content>
      <Card.Header>Beautiful workshop space and garden for Mujer Nueva.</Card.Header>
      <Card.Meta>summer workshops - april 2020</Card.Meta>

      <Card.Description style={{columns: '50px 3'}}>
      For the announcement of the entering of a lockdown,
        we started with great enthusiasm
        women's project Mujer Nueva. The women of it
        project helped to improve their future
        make workshop space and garden beautiful and ready.
        Many women have worked hard in the garden,
        so that they can put their herbs and plants in here
        remodel. With these plants and herbs will
        she, together with a teacher, natural products
        (learn to) make. This applies to the workshop space
        it is prepared for the silver lessons
        making jewelry. The materials, tools
        and other supplies are ready for use
        and the jewelry making teacher has her lesson plan
        ready.
        Now we have to wait until we can get back together.
        In any case, we are ready for the start! During this
        crisis we have a lot of contact with the women and also
        they receive a food package from us every week.
        After all, they had signed up for a reason
        for this project to get more income
        to generate. We therefore have no doubt that we
        to continue with great enthusiasm
        with the project when this is possible again.
   </Card.Description>
    </Card.Content>
    <Image.Group style={{textAlign:'center'}} size='medium'>
      <Image src={Tuin1} />
      <Image src={Tuin2} />
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