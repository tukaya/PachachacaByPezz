import _ from 'lodash'
import React, { Component, Fragment } from 'react'
import { Button, Card, Divider, Image, Placeholder } from 'semantic-ui-react'
import one from '../../images/one.jpg'
import two from '../../images/two.jpg'

const cards = [
  {
    avatar: one,
    date: 'Joined in 2013',
    header: 'Liesbeth Kerstens',
    description: 'estudió gestión de cultura en la facultad de Turismo y Transporte de Breda – Holanda y luego realizó una maestría en Desarrollo Internacional en la Universidad de Amsterdam. Vivió en Cusco (Perú) entre 2004 y 2009. Aquí fundó la organización peruana Asociación Pasa la Voz. El ámbito de gestión de Pasa la Voz es la región de Cusco, donde uno de los principales objetivos de esta es mejorar la vida de los niños que crecen bajo diferentes formas de acogida. Pasa la Voz capacita al personal de las organizaciones anfitrionas y promueve la participación de los niños. Debido al éxito de Pasa la Voz en Cusco, el método fue adaptado al contexto holandés para ser utilizado en Rotterdam; esto a petición del municipio de esta ciudad. Como resultado, se fundó la fundación Hoedje van Papier de la cual Liesbeth es la directora desde 2009. Esta fundación ayuda a enseñar a los ciudadanos de Rotterdam, tanto niños como adultos en situación de vulnerabilidad, habilidades para participar tan activamente como sea posible dentro de la sociedad holandesa. La fundación Hoedje van Papier fue seleccionada por la organización Oranjefonds para el denominado Programa de Crecimiento. Gracias a su participación en este programa, Liesbeth recibió un diploma del rey Willem-Alexander debido a su compromiso con la sociedad holandesa',
  },
  {
    avatar: two,
    date: 'Joined in 2015',
    header: 'Pavel Marmanillo Barrio de Mendoza',
    description: 'estudió ingeniería de minas en la Universidad de San Antonio Abad en Cusco. Terminó sus estudios en la Universidad de Piura, en el norte del Perú. Pavel es colíder de un pequeño negocio que tiene objetivos tanto comerciales como sociales. En 2006 vivió varios meses en Brasil, donde trabajó para la sucursal de su empresa. En 2012, junto con sus hermanas, fundó la asociación cultural "La Familia" y, además de su trabajo, es activo como músico y escritor. Ha compartido estos talentos como voluntario en diversos proyectos sociales que, en gran medida, están destinados a cuidar de las mujeres, los niños, el medio ambiente y los Derechos Humanos. Su experiencia fue adquirida en países como Perú, Colombia, Brasil, India, Nepal, Palestina y Holanda.',
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
    )
  }
}