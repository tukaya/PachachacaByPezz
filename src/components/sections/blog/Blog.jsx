import React, { Component } from 'react';
import axios from 'axios';
import {
  Card,
  Icon,
  Image,
  Item,
  Grid,
  CardGroup,
  GridColumn,
  GridRow,
  Segment,
  Header,
} from 'semantic-ui-react';
import Darkmode from 'darkmode-js';
new Darkmode().showWidget();

const photos = [
  'https://source.unsplash.com/featured/?{horizon}',
  'https://source.unsplash.com/featured/?{nature}',
  'https://source.unsplash.com/featured/?{sun}',
  'https://source.unsplash.com/featured/?{bird}',
  'https://source.unsplash.com/featured/?{valley}',
  'https://source.unsplash.com/featured/?{sky}',
  'https://source.unsplash.com/featured/?{desert}',
  'https://source.unsplash.com/featured/?{child}',
  'https://source.unsplash.com/featured/?{community}',
  'https://source.unsplash.com/featured/?{forrest}',
  'https://source.unsplash.com/featured/?{grass}',
  'https://source.unsplash.com/featured/?{sunset}',
];
const number = Math.floor(Math.random() * 150);

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=20')
      .then((res) => {
        this.setState({ posts: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div
        style={{
          padding: '3em',
          fontFamily: 'Optima',
          fontSize: '1.2rem',
        }}
      >
        <Header as='h2'>Our Blog Posts</Header>
        {this.state.posts.map((post, index) => {
          return (
            <Segment>
              <Grid columns={2}>
                <Grid.Row>
                  <Grid.Column>
                    <Image
                      src={photos[index]}
                      size='medium'
                      centered
                      bordered
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Header as='h3'>{post.title}</Header>
                    <p>{post.body}</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          );
        })}
      </div>
    );
  }
}
export default Blog;
