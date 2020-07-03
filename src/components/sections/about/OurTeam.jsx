import _ from 'lodash'
import React, { Component, Fragment } from 'react'
import { Button, Card, Divider, Image, Placeholder } from 'semantic-ui-react'
import one from '../../images/About/one.jpg'
import two from '../../images/About/two.jpg'

const cards = [
  {
    avatar: one,
    date: '(1975)',
    header: 'Liesbeth Kerstens',
    description: ' studied Leisure Management at the College of Tourism and Traffic in Breda and completed a master s degree in International Development Studies at the University of Amsterdam. She relocated and lived in Cusco, Peru between 2004 and 2009, during which time she created the Peruvian foundation Asociación Pasa la Voz. This foundation used to operate in the Cusco region to improve the living conditions of children who grow up in different forms of childcare. Pasa la Voz trained the staff of childcare organizations on pedagogical levels and promoted the active participation of children. Due to the success of Pasa la Voz, their methodologies had been translated into the Dutch environment at the request of the Municipality of Rotterdam. This led to the establishment of the Hoedje van Papier foundation, with Liesbeth as the then director in 2009. This foundation assists Rotterdammer’s adults and children in vulnerable situations to acquire skills toward active participation in society. Hoedje van Papier foundation was selected by the Oranjefonds (Royal funding organization in Holland) for the so-called ‘Growth Program’. Thanks to participation in this program and because of her commitment to the Dutch society, Liesbeth received a award from King Willem-Alexander.',
  },
  {
    avatar: two,
    date: '(1981)' ,
    header: 'Pavel Marmanillo Barrio de Mendoza',
    description: ' studied mining at the University of San Antonio Abad del Cusco. He completed his studies and graduated from the University of Piura, Peru. Pavel runs a small family business together with his father, which maintains both socially conscious and commercial goals. In 2006 the business operations brought him to Brazil where he lived for a time. In addition to his work in the family business, Pavel is an active musician and writer. He combined these talents with volunteer work for various social projects which focus on care for women and children and environmental issues. His experience has been international in countries such as Peru, Colombia, Brazil, India, Nepal, Palestine and the Netherlands.  Liesbeth and Pavel have been living and working together in the Family Home of Pachachaca since 2016, where they support children in disadvantaged situations. Together they shape a life in which living and working is integrated in their shared vision. They apply their years of  knowledge and experience to the success of Pachachaca’s mission. Yoreem is a foundation (Stichting Yoreem Foundation). This foundation was founded in 2006 and has ANBI-approval. The board consists of Daphne Hebing, Wim Wesselo and René Sueters. They are very involved in the activities of Pachachaca, and are very happy to contribute their knowledge to the project.',
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
      <div>
        <Fragment>
        <Button loading={loading} onClick={this.handleLoadingClick} primary>
          Simulate loading
        </Button>
        <Divider />

        <Card.Group doubling itemsPerRow={2} stackable>
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
                <Button circular color='facebook' icon='facebook' />
                <Button circular color='twitter' icon='twitter' />
                <Button circular color='linkedin' icon='linkedin' />
                <Button circular color='google plus' icon='google plus'/>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Fragment>
      </div>
    )
  }
}