import _ from 'lodash'
import React, { Component, Fragment } from 'react'
import { Button, Card, Divider, Image, Placeholder } from 'semantic-ui-react'

const cards = [
  {
    avatar: '/Images/one.jpg',
    date: 'Joined in 2013',
    header: 'Liesbeth Kerstens',
    description: 'Para nosotros poder compartir parte de nosotros con los niños es una gran oportunidad',
  },
  {
    avatar: '/Images/two.jpg',
    date: 'Joined in 2013',
    header: 'Pavel Marmanillo Barrio de Mendoza',
    description: ' A pesar del crecimiento económico que el Perú viene ostentando en los últimos años, la desigualdad social sigue siendo clara y tangible en las zonas andinas de donde provienen los niños de Calca e incluso en los barrios donde se ven niños trabajando en el mercado y que no asisten al colegio. ',
  },
  {
    avatar: '/Images/one.jpg',
    date: 'Joined in 2013',
    header: 'Liesbeth Kerstens',
    description: 'Para nosotros poder compartir parte de nosotros con los niños es una gran oportunidad',
  },
]

export default class PlaceholderExampleCard extends Component {
  state = { loading: false }

  handleLoadingClick = () => {
    this.setState({ loading: true })

    setTimeout(() => {
      this.setState({ loading: false })
    }, 3000)
  }

  render() {
    const { loading } = this.state

    return (
      <Fragment>
        <Button loading={loading} onClick={this.handleLoadingClick} primary>
          Simulate loading
        </Button>
        <Divider />

        <Card.Group doubling itemsPerRow={5} stackable>
          {_.map(cards, (card) => (
            <Card key={card.header}>
              {loading ? (
                <Placeholder>
                  <Placeholder.Image square />
                </Placeholder>
              ) : (
                <Image src={card.avatar} />
              )}

              <Card.Content>
                {loading ? (
                  <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Line length='very short' />
                      <Placeholder.Line length='medium' />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                      <Placeholder.Line length='short' />
                    </Placeholder.Paragraph>
                  </Placeholder>
                ) : (
                  <Fragment>
                    <Card.Header>{card.header}</Card.Header>
                    <Card.Meta>{card.date}</Card.Meta>
                    <Card.Description>{card.description}</Card.Description>
                  </Fragment>
                )}
              </Card.Content>

              <Card.Content extra>
                <Button disabled={loading} primary>
                  Add
                </Button>
                <Button disabled={loading}>Delete</Button>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Fragment>
    )
  }
}