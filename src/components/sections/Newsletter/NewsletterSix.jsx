import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Homeschool1 from '../../images/Newsletter/Homeschool/homeschool1.JPG';
import Homeschool2 from '../../images/Newsletter/Homeschool/homeschool2.JPG';

const CardExampleImageCard = () => (
  <div className='newsletterStyle'>
      <Card fluid color='teal'>
    <Card.Content>
      <Card.Header>Homeschooling in times of quarantine</Card.Header>
      <Card.Meta>summer workshops - april 2020</Card.Meta>

      <Card.Description style={{columns: '50px 3'}}>
      We have prepared a lesson schedule for the children
        from Pachachacha now that they cannot go to school.
        Here in Peru, giving online classes is by no means
        naturally.
        Many classmates do not have internet at home.
        Because the kids just got three months of summer vacation
        sitting longer is not an option.
        That's why we have a lockdown after just a few days
        the children decided to homeschooling anyway
        let them learn and study.
        They are taught literature, language, mathematics,
        English and yoga. They also receive homework from
        sent their school by mobile phone,
        where we support them. Also the teachers
        homework guidance that normally every
        we asked to come to Pachachaca in the afternoon
        to do homework assignments by mobile phone
        to send.
        This way the children still have a regular daily routine,
        in which they also spend their time usefully and we can
        simply pay our staff. They too can
        don't miss their income!
   </Card.Description>
    </Card.Content>
    <Image.Group style={{textAlign:'center'}} size='medium'>
      <Image src={Homeschool1} />
      <Image src={Homeschool2} />
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