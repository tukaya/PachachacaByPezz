import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import boom1 from '../../images/Newsletter/Boom/boom1.JPG';
import boom2 from '../../images/Newsletter/Boom/boom2.JPG';
import boom3 from '../../images/Newsletter/Boom/boom3.JPG';

const CardExampleImageCard = () => (
  <div className='newsletterStyle'>
      <Card fluid color='teal'>
    <Card.Content>
      <Card.Header>1200 new trees.</Card.Header>
      <Card.Meta>summer workshops - april 2020</Card.Meta>

      <Card.Description style={{columns: '50px 3'}}>
      High in the mountains, close to our village Calca, we have in
         February with the children of the family house 1200 trees
         planned. We did this together with the women and
         men from one of the communities. In this way
         we make our children aware of the importance of
         take care of the earth around us; the earth on which
         and what we live on. It is also a beautiful way
         to cooperate in an equivalent way with the
         communities around us. When the trees are big
         the community here will be literally and figuratively
         to reap the benefits.
         The trees were donated from private funds from the
         initiators of Pachachaca, friends and family, ter
         compensation of their ecological footprint.
      </Card.Description>
    </Card.Content>
    <Image.Group style={{textAlign:'center'}} size='medium'>
      <Image src={boom1} />
      <Image src={boom2} />
      <Image src={boom3} />
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