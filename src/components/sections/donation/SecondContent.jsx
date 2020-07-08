import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import LogoDon from './LogoDon';

const CardExampleImageCard = () => (
<div className='styleDonate'>
<Card fluid>
    <Card.Content style={{columns: '50px 2'}}>
      <Card.Header>Donors</Card.Header>
        <Card.Meta>Thanks to all donors, including:</Card.Meta>
            <Card.Description>
                <a herf='' target='_blank' ><Icon name='heart' color='red'/>Anna Muntz Foundation</a><br />
                <a herf='' target='_blank' ><Icon name='heart' color='red'/>Co Schippers Fund</a><br />
                <a herf='' target='_blank' ><Icon name='heart' color='red'/>Hofstee Foundation</a><br />
                <a herf='' target='_blank' ><Icon name='heart' color='red'/>Inmenszo</a><br />
                <a herf='' target='_blank' ><Icon name='heart' color='red'/>Johanna Donk-Grote Foundation</a><br />
                <a herf='' target='_blank' ><Icon name='heart' color='red'/>Johannes Foundation</a><br />
                <a herf='' target='_blank' ><Icon name='heart' color='red'/>Mano BV</a><br />
                <a herf='' target='_blank' ><Icon name='heart' color='red'/>Alle Beetjes Foundation</a><br />
                <a herf='' target='_blank' ><Icon name='heart' color='red'/> The Lark Foundation</a><br />
                <a herf='' target='_blank' ><Icon name='heart' color='red'/>Fair Share Foundation</a><br />
                <a herf='' target='_blank' ><Icon name='heart' color='red'/>Elise Spykman Foundation</a><br />
                <a herf='' target='_blank' ><Icon name='heart' color='red'/>  Middelbusker Stevens Foundation</a><br />
                <a herf='' target='_blank' ><Icon name='heart' color='red'/>Mundo Crastino Melio Foundation</a><br />
                <a herf='' target='_blank' ><Icon name='heart' color='red'/>Qbusfonds Foundation</a><br />
            </Card.Description>
      </Card.Content>
      <LogoDon />
  </Card>
</div>
)

export default CardExampleImageCard