import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Zomer1 from '../../images/Newsletter/Zomer/zomer1.JPG';
import Zomer2 from '../../images/Newsletter/Zomer/zomer2.JPG';
import Zomer3 from '../../images/Newsletter/Zomer/zomer3.JPG';
import Zomer4 from '../../images/Newsletter/Zomer/zomer4.JPG';
import Zomer5 from '../../images/Newsletter/Zomer/zomer5.JPG';
import Zomer6 from '../../images/Newsletter/Zomer/zomer6.JPG';
import Zomer7 from '../../images/Newsletter/Zomer/zomer7.JPG';

const CardExampleImageCard = () => (
  <div className='newsletterStyle'>
      <Card fluid color='teal'>
    <Card.Content>
      <Card.Header>More than a hundred children during the
        summer workshops of Pachachaca.</Card.Header>
      <Card.Meta>summer workshops - april 2020</Card.Meta>

      <Card.Description style={{columns: '50px 3'}}>
        An image that is almost unthinkable at the time of writing
        is; more than a hundred children on the grounds every day
        from Pachachaca. The children in the neighborhood were able to
        participate in our teaching program throughout February
        for the summer. A teaching program that consisted of
        math, language and English in the morning, and sports, games,
        dance, music or theater in the afternoon. Every day was before
        prepared a healthy meal for all children.
        These activities were completed at the end of the month
        closed with beautiful presentations, performances and
        good food. We are proud of all children, volunteers
        and the teachers. So much has been learned, friendships
        closed, played and made fun!
      </Card.Description>
    </Card.Content>
    <Image.Group style={{textAlign:'center'}} size='medium'>
      <Image src={Zomer1} />
      <Image src={Zomer2} />
      <Image src={Zomer3} />
      <Image src={Zomer4} />
      <Image src={Zomer5} />
      <Image src={Zomer6} />
      <Image src={Zomer7} />
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