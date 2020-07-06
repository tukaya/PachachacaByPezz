// import React from 'react';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import Button from '@material-ui/core/Button';
// import { Input } from '@material-ui/core';
// import Container from '@material-ui/core/Container';
// import { Image } from 'semantic-ui-react';
// import Ideal from '../../images/Donation/ideal1.jpg';

// export default function RadioButtonsGroup() {
//   const [value, setValue] = React.useState('female');

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <Container fixed style={{ padding:'100px'}}>
//   <div style={{ float:'right'}}>
//     <FormControl component="fieldset">
//       <FormLabel component="legend">Online Donation Process</FormLabel>
//       <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
//         <FormControlLabel value="€ 10 Donation" control={<Radio />} label="€ 10 Donation" />
//         <FormControlLabel value="€ 25 Donation" control={<Radio />} label="€ 25 Donation" />
//         <FormControlLabel value="€ 50 Donation" control={<Radio />} label="€ 50 Donation" />
//         <FormControlLabel value="€ 100 Donation" control={<Radio />} label="€ 100 Donation" />
//         <FormControlLabel value="€ 200 Donation" control={<Radio />} label="€ 200 Donation" />
//         <FormControlLabel value="€ 250 Donation" control={<Radio />} label="€ 250 Donation" />
//       <FormLabel component="legend">Or please enter your own amount below</FormLabel>
//       </RadioGroup>
//       <br />
//       <Input type='text' placeholder='please enter your own amount'/>
//       <Button style={{ marginTop:'30px'}} variant="outlined" color="secondary">
//        Donate
//       </Button>
//     </FormControl>
//     </div>
//       <Image src={Ideal}/>
//     </Container>
//   );
// }
 

import React, { Component } from 'react'
import { Form, Radio,Button,Input,Card,Icon,Container,Image,Label } from 'semantic-ui-react'
import Ideal from '../../images/Donation/ideal1.jpg';

export default class RadioExampleRadioGroup extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Container>
      
      <div className='styleDo'>
      <Card fluid color='teal'>
    <Card.Content>
      <Card.Header>Donate</Card.Header>
      <Card.Meta></Card.Meta>
      <Card.Description>
      <Form >
        <Form.Field>
          <Radio
            label=' €10 Donation '
            name='radioGroup'
            value='€10 Donation'
            checked={this.state.value === '€10 Donation'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='€25 Donation'
            name='radioGroup'
            value='€25 Donation'
            checked={this.state.value === '€25 Donation'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='€50 Donation'
            name='radioGroup'
            value='€50 Donation'
            checked={this.state.value === '€50 Donation'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='€100 Donation'
            name='radioGroup'
            value='€100 Donation'
            checked={this.state.value === '€100 Donation'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='€200 Donation'
            name='radioGroup'
            value='€200 Donation'
            checked={this.state.value === '€200 Donation'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='€250 Donation'
            name='radioGroup'
            value='€250 Donation'
            checked={this.state.value === '€250 Donation'}
            onChange={this.handleChange}
          />
      <div>
          <br />
          <Label size={"large"} style={{width:'200px', height:'50px', float:'left'}}>Or please enter your own amount </Label>
          <Input size={"large"} style={{width:'200px', height:'50px', float:'left'}} onChange={this.handleChange} placeholder='enter your own amount €'/>
      </div>
        </Form.Field>
      <Form.Field>
          <br />
          Your Donation: <b>{this.state.value}</b>
        </Form.Field>
        <Image src={Ideal}/>

      <div>
        <Button animated>
          <Button.Content visible>Donate</Button.Content>
          <Button.Content hidden>
            <Icon name='heart' color='red'/>
          </Button.Content>
        </Button>
      </div>
      </Form>
      </Card.Description>
    </Card.Content>
  </Card>
  </div>
    
      </Container>
    )
  }
}