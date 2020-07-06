

// import React, { Component } from 'react';

// class Albums extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Albums page</h2>
//         <p>This is Albums page.</p>
//       </div>
//     );
//   }
// }

// export default Albums;


import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AlbumSlide from '../albums/AlbumSlide';
import p4 from"../../images/Albums/p4.jpg";
import p5 from"../../images/Albums/p5.jpg";
import p6 from"../../images/Albums/p6.jpg";
import p7 from"../../images/Albums/p7.jpg";
import p8 from"../../images/Albums/p8.jpg";
import p9 from"../../images/Albums/p9.jpg";
import p10 from"../../images/Albums/p10.jpg";
import p11 from"../../images/Albums/p11.jpg";
import p12 from"../../images/Albums/p12.jpg";
import p13 from"../../images/Albums/p13.jpg";
import p14 from"../../images/Albums/p14.jpg";
import p15 from"../../images/Albums/p15.jpg";
import p16 from"../../images/Albums/p16.jpg";
import p17 from"../../images/Albums/p17.jpg";
import p18 from"../../images/Albums/p18.jpg";

import { Container, Image ,Divider,Grid,Segment} from 'semantic-ui-react';


 class Slide extends Component {

      render() {
        return (
            <Container fluid>
              <AlbumSlide />
                              <Grid stackable columns={2}>
                                <Grid.Column>
                                  <Segment>
                                    <Image src={p4} />
                                    <Image src={p5} />
                                    <Image src={p6} />
                                    <Image src={p7} />
                                    <Image src={p8} />
                                    <Image src={p9} />
                                    <Image src={p10} />
                                    <Image src={p11} />
                                  </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                  <Segment>

                                    <Image src={p12} />
                                    <Image src={p13} />
                                    <Image src={p14} />
                                    <Image src={p15} />
                                    <Image src={p16} />
                                    <Image src={p17} />
                                    <Image src={p18} />
                                  </Segment>
                                </Grid.Column>
                              </Grid>
                <div>
                  <Image.Group size='large'>
                    <Image src={p4} />
                    <Image src={p5} />
                    <Image src={p6} />
                    <Image src={p7} />
                    <Image src={p8} />
                    <Image src={p9} />
                  {/* </Image.Group> */}
                  {/* <Divider hidden /> */}
                  {/* <Image.Group size='large'> */}
                    <Image src={p10} />
                    <Image src={p11} />
                    <Image src={p12} />
                    <Image src={p13} />
                    <Image src={p14} />
                    <Image src={p15} />
                    <Image src={p16} />
                    <Image src={p17} />
                    <Image src={p18} />
                  </Image.Group>
                </div>
            </Container>
        )
    }     
}
export default Slide   
