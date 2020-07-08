// import React from 'react';
// import { Grid, Image } from 'semantic-ui-react';
// import logoabout from '../../images/Logo/logoabout.png';

// const GridExampleCelled = () => (
//   <div>
//     <Grid celled>
//     <Grid.Row>
//       <Grid.Column width={3}>
//         <Image src={logoabout} />
//       </Grid.Column>
//       <Grid.Column width={13}>
//         <h3>
//             Pachachaca is an organization that provides care for orphaned children and children at social risk who cannot live at home due to neglect, domestic violence and abuse. In addition, Pachachaca aims to be an active organization within the community by opening its doors and organizing different activities, both for children and families. Finally, Pachachaca strives as much as possible to be self-sustainable by developing small-scale food projects and the (re) use of water and energy, as well as the adequate treatment of solid waste.
//             Pachachaca is a place where children receive attention and care. One of our purposes is to stimulate their potential by developing different skills in areas such as friendship, sharing, participation, patience, and different skills in areas such as friendship, sharing, asking others, taking initiative, following directions, staying focused on tasks. , accepting differences, active listening, recognizing the skills and qualities of others, positive communication and interaction, having a social and environmental conscience. All these qualities are stimulated in music, video and theater workshops which are given by professionals with many years of experience in the field of children's homes.
//         </h3>
//       </Grid.Column>
//     </Grid.Row>
//     </Grid>
//   </div>
// )

// export default GridExampleCelled

// import _ from 'lodash'
// import React, { Component, Fragment } from 'react'
// import { Button, Card, Divider, Image, Placeholder } from 'semantic-ui-react'
// import logoabout from '../../images/Logo/logoabout.png';
// import logoyoreem from '../../images/Logo/logoyoreem.png';

// const cards = [
//   {
//     avatar: logoabout,
//     header: 'Pachachaca',
//     description: ' Pachachaca is an organization that provides care for orphaned children and children at social risk who cannot live at home due to neglect, domestic violence and abuse. In addition, Pachachaca aims to be an active organization within the community by opening its doors and organizing different activities, both for children and families. Finally, Pachachaca strives as much as possible to be self-sustainable by developing small-scale food projects and the (re) use of water and energy, as well as the adequate treatment of solid waste. Pachachaca is a place where children receive attention and care. One of our purposes is to stimulate your potential by developing different skills in areas such as friendship, sharing, participation, patience, and different skills in areas such as friendship, sharing, asking others, taking initiative, following directions, staying focused on tasks. , accepting differences, active listening, recognizing the abilities and qualities of others, positive communication and interaction, having a social and environmental conscience. All these qualities are stimulated in music, video and theater workshops which are given by professionals with many years of experience in the field of childrens homes. ',
//   },
//   {
//     avatar: logoyoreem,
//     header: 'Yoreem Foundation',
//     description: ' We only support projects if we have confidence in them. And we are only confident if projects are well thought out and contribute to the integral, sustainable development of the area in question. They must offer perspective on a dignified existence. Economic development is important, but it will only get a chance if attention is also paid to education, good infrastructure and health facilities that are also financially accessible to everyone. The cohesion that we have in mind can be achieved within a Yoreem project. But it also happens that we participate in projects of partner organizations that are active in the region. By properly coordinating cooperation, sharing knowledge and experience and efforts, we use everyones expertise and realize projects in a good and efficient manner. ',
//   },
// ]

// export default class PlaceholderExampleCard extends Component {
//   state = { loading: false }
//   render() {
//     const { loading } = this.state

//     return (
//       <div>
//         <Fragment>
//         <Divider />
//         <Card.Group doubling itemsPerRow={2} stackable>
//           {_.map(cards, (card) => (
//             <Card key={card.header}>
//               {loading ? (
//                 <Placeholder>
//                   <Placeholder.Image square />
//                 </Placeholder>
//               ) : (
//                 <Image src={card.avatar} />
//               )}

//               <Card.Content>
//                 {loading ? (
//                   <Placeholder>
//                     <Placeholder.Header>
//                       <Placeholder.Line length='very short' />
//                       <Placeholder.Line length='medium' />
//                     </Placeholder.Header>
//                     <Placeholder.Paragraph>
//                       <Placeholder.Line length='short' />
//                     </Placeholder.Paragraph>
//                   </Placeholder>
//                 ) : (
//                   <Fragment>
//                     <Card.Header>{card.header}</Card.Header>
//                     <Card.Meta>{card.date}</Card.Meta>
//                     <Card.Description>{card.description}</Card.Description>
//                   </Fragment>
//                 )}
//               </Card.Content>

//               <Card.Content extra>
//                 <Button circular  href='https://www.facebook.com/Casa-Familiar-Ecol%C3%B3gica-Pachachaca-635301843320489/' color='facebook' icon='facebook' />
//                 <Button circular href='https://www.linkedin.com/company/casa-familiar-pachachaca/' color='linkedin' icon='linkedin' />
//               </Card.Content>
//             </Card>
//           ))}
//         </Card.Group>
//       </Fragment>
//       </div>
//     )
//   }
// }

import React from 'react'
import { Divider, Grid, Image, Segment,Icon} from 'semantic-ui-react'
import logoabout from '../../images/Logo/logoabout.png';
import logoyoreem from '../../images/Logo/logoyoreem.png';
const DividerExampleVertical = () => (
  <Segment>
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
        <div style={{width:'100px', height:'100px', marginBottom:'35px'}}>
        <Image src={logoabout} />
        </div>
        <div>
        <h2>Pachachaca </h2>
            <p style={{textAlign:'left',columns: '50px 2'}}>
              Pachachaca is an organization that provides care for orphaned children and children at social risk who cannot live at home due to neglect, domestic violence and abuse. In addition, Pachachaca aims to be an active organization within the community by opening its doors and organizing different activities, both for children and families. Finally, Pachachaca strives as much as possible to be self-sustainable by developing small-scale food projects and the (re) use of water and energy, as well as the adequate treatment of solid waste. Pachachaca is a place where children receive attention and care. One of our purposes is to stimulate your potential by developing different skills in areas such as friendship, sharing, participation, patience, and different skills in areas such as friendship, sharing, asking others, taking initiative, following directions, staying focused on tasks. , accepting differences, active listening, recognizing the abilities and qualities of others, positive communication and interaction, having a social and environmental conscience. All these qualities are stimulated in music, video and theater workshops which are given by professionals with many years of experience in the field of childrens homes.
            </p>
        </div>
      </Grid.Column>
      <Grid.Column>
        <div style={{width:'100px', height:'100px', marginBottom:'35px'}}>
        <Image src={logoyoreem} />
        </div>
        <div>
            <h2>Yoreem</h2>
            <p style={{textAlign:'left',columns: '50px 2' }}>
              We only support projects if we have confidence in them. And we are only confident if projects are well thought out and contribute to the integral, sustainable development of the area in question. They must offer perspective on a dignified existence. Economic development is important, but it will only get a chance if attention is also paid to education, good infrastructure and health facilities that are also financially accessible to everyone. The cohesion that we have in mind can be achieved within a Yoreem project. But it also happens that we participate in projects of partner organizations that are active in the region. By properly coordinating cooperation, sharing knowledge and experience and efforts, we use everyones expertise and realize projects in a good and efficient manner.
            </p>
        </div>

      </Grid.Column>
    </Grid>

    <Divider vertical><Icon name='d and d' /></Divider>
  </Segment>
)

export default DividerExampleVertical