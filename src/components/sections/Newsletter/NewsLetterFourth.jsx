import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Corona1 from '../../images/Newsletter/Corona/corona1.JPG';
import Corona2 from '../../images/Newsletter/Corona/corona2.JPG';
import Corona3 from '../../images/Newsletter/Corona/corona3.JPG';

const CardExampleImageCard = () => (
  <div className='newsletterStyle'>
      <Card fluid color='teal'>
    <Card.Content>
      <Card.Header>Pachachaca plays important role in Calca community at times from corona.</Card.Header>
      <Card.Meta>summer workshops - april 2020</Card.Meta>
      <Card.Description style={{columns: '50px 3'}}>
      How different Pachachaca looks now,
        less than a month later. How different looks
        the world around us. We have
        more than ever to appreciate what we do
        to have; enough food, health, a lot
        space and each other. A great good at this
        times, what here in Peru is not for everyone
        goes without saying.
        Many families currently earn,
        where there is a lockdown all over Peru,
        no money as they are not as normal
        their food on the street
        sales or other work
        can perform. They can do that
        do not meet basic needs, such as
        sufficient food or medicines.
        Children do not have daytime activities and
        because of the small space in which often
        sick families have to stay
        domestic violence.
        Unfortunately we have many activities of
        Shut down Pachachaca like the
        homework assistance and home visits
        for outpatient assistance to
        the families in the neighborhood.
        But we are not sitting still. The social workers
        have telephone contact with all families
        and since the start of the lockdown we are
        make food packages for the families
        around us who are most affected.
        Then it turned out that the lockdown was probably long
        we prepared a letter for
        friends, family and donors, in which we
        asked for donations to the food packages
        to be able to stay in the near future
        offer to those otherwise without
        food or medicines get stuck.
        And successfully. We raised a lot of money
        so we can stay this weekly
        to do. And for even more families who need it
        to have. To support the children with
        we now also add a sensible daytime activity
        add extra materials to the food packages.
        Unfortunately in Peru all shops are closed except where it is
        involves the sale of food and medicines.
        The purchase of games, writing and drawing materials is
        Unfortunately impossible. With the children from the family home
        that is why we have toys and craft materials
        collected to give as a gift to the children. Moreover
        we have created a rotating library with
        books of Pachachaca that we lend to the families.
        For example, we have distributed a food package to one
        single mother who takes care of 10 children. Normal
        spoken she sells corn beer on the street, with which she
        earns just enough to be able to eat something daily
        buy for her family, but that is not possible now.
        Another package was picked up by a 13-year-old girl who
        lives alone. Her parents left a month ago
        and left just enough food for two
        survive for weeks. She is still there a month later
        always alone and the food is finished. Also a granny that
        only cares for her grandson, but is sick in bed with
        cancer, got a package from us. Her treatment is on
        quiet and she herself cannot get the necessary medicines.
        Just a few examples of the harrowing cases
        in which the consequences of the lock down are far-reaching
        to have consequences.
      </Card.Description>
      </Card.Content>
      <Image.Group style={{textAlign:'center'}} size='medium'>
        <Image src={Corona1} />
        <Image src={Corona2} />
        <Image src={Corona3} />
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