import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Image } from 'semantic-ui-react';
import Ideal from '../../images/Donation/ideal1.jpg';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Container fixed style={{ padding:'100px'}}>
    <div style={{ float:'right'}}>
    <FormControl component="fieldset">
      <FormLabel component="legend">Online Donation Process</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="£10 Donation" control={<Radio />} label="£10 Donation" />
        <FormControlLabel value="£25 Donation" control={<Radio />} label="£25 Donation" />
        <FormControlLabel value="£50 Donation" control={<Radio />} label="£50 Donation" />
        <FormControlLabel value="£100 Donation" control={<Radio />} label="£100 Donation" />
        <FormControlLabel value="£200 Donation" control={<Radio />} label="£200 Donation" />
        <FormControlLabel value="£250 Donation" control={<Radio />} label="£250 Donation" />
      <FormLabel component="legend">Or please enter your own amount below</FormLabel>
      </RadioGroup>
      <br />
      <Input type='text' placeholder='please enter your own amount'/>
      <Button style={{ marginTop:'30px'}} variant="outlined" color="secondary">
        Submit
      </Button>
    </FormControl>
    </div>
      <Image src={Ideal}/>
    </Container>
  );
}
 

