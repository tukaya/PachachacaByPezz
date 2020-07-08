import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const CardExampleImageCard = () => (
  <div className='newsletterStyle'>
      <Card fluid color='teal'>
    <Card.Content>
      <Card.Header>Newsletter September 2019</Card.Header>
      <Card.Meta>Dear reader,</Card.Meta>
      <Card.Description style={{columns: '50px 2'}}>
        We appreciate your involvement in our project, thank you for that.
        I would also like to pay attention to a change of board members within the Yoreem foundation.
        Judith Ravestein, who has been working as a secretary at the Yoreem foundation for many years, has decided that it is time to hand over the baton. She has made a huge contribution to Pachachaca as well as to Yoreem Foundation with her involvement and hard work, and we are very grateful for this. We would like to express our thanks in this way.
        Myself, Daphne Hebing, will take over her duties. I work for the Hoedje van Papier foundation in Rotterdam, where I met Liesbeth Kerstens and Pavel Marmanillo, initiators of Pachachaca.
        As a cultural anthropologist I have a lot of experience with, and interest in, projects across borders. I was therefore honored to be able to take over the duties of Judith Ravestein.
        I look forward to staying in touch with you and am open to any questions and suggestions.
        I hope you will read the newsletter with interest, and if you prefer not to receive a newsletter, I would also like to hear that.
         For further information about the tax consequences of donations by both individuals and companies, please contact Wim Wesselo (wwesselo@outlook.com or 06-51147924).
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <h3>Daphne Hebing <br />Yoreem Foundation</h3>
        <a>
        <Icon name='heart' />
      </a>
    </Card.Content>
  </Card>
  </div>
)

export default CardExampleImageCard