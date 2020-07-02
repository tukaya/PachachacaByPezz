import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import logoabout from '../../images/Logo/logoabout.png';

const GridExampleCelled = () => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src={logoabout} />
      </Grid.Column>
      <Grid.Column width={13}>
        <h3>
            Pachachaca is an organization that provides care for orphaned children and children at social risk who cannot live at home due to neglect, domestic violence and abuse. In addition, Pachachaca aims to be an active organization within the community by opening its doors and organizing different activities, both for children and families. Finally, Pachachaca strives as much as possible to be self-sustainable by developing small-scale food projects and the (re) use of water and energy, as well as the adequate treatment of solid waste.
            Pachachaca is a place where children receive attention and care. One of our purposes is to stimulate their potential by developing different skills in areas such as friendship, sharing, participation, patience, and different skills in areas such as friendship, sharing, asking others, taking initiative, following directions, staying focused on tasks. , accepting differences, active listening, recognizing the skills and qualities of others, positive communication and interaction, having a social and environmental conscience. All these qualities are stimulated in music, video and theater workshops which are given by professionals with many years of experience in the field of children's homes.
        </h3>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleCelled