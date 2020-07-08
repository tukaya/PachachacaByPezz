import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import nieuwbriefApr from '../../images/Newsletter/nieuwbriefApr.JPG';
import nieuwBriefTwo from '../../Pdffile/nieuwsbriefApr.pdf';

const CardExampleImageCard = () => (
  <div className='newsletterStyle'>
      <Card fluid color='teal'>
    <Card.Content>
      <Card.Header>Pachachaca</Card.Header>
      <Card.Meta>nieuwsbrief - april 2020</Card.Meta>
      {/* <Image src={nieuwbriefApr} /> */}
      <Card.Description style={{columns: '50px 3'}}>
      </Card.Description>
      <embed  src={nieuwBriefTwo} width="100%" height="700"></embed >
    </Card.Content>
    <Image.Group style={{textAlign:'center'}} size='medium'>
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
