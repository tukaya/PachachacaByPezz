
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import nieuwbriefJan from '../../images/Newsletter/nieuwbriefJan.JPG';
import nieuwBriefOne from '../../Pdffile/nieuwsbriefJan.pdf';

const CardExampleImageCard = () => (
  <div className='newsletterStyle'>
      <Card fluid color='teal'>
    <Card.Content>
      <Card.Header>Pachachaca</Card.Header>
      <Card.Meta>nieuwsbrief - januari 2020</Card.Meta>
      {/* <Image src={nieuwbriefJan} /> */}
      <Card.Description style={{columns: '50px 3'}}>
      </Card.Description>
      <embed  src={nieuwBriefOne} width="100%" height="700"></embed >
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