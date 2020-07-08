import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Header } from 'semantic-ui-react';
import Darkmode from 'darkmode-js';
new Darkmode().showWidget();

const photos = [
  'https://source.unsplash.com/featured/?{horizon}',
  'https://source.unsplash.com/featured/?{nature}',
  'https://source.unsplash.com/featured/?{mountain}',
  'https://source.unsplash.com/featured/?{bird}',
  'https://source.unsplash.com/featured/?{valley}',
  'https://source.unsplash.com/featured/?{sky}',
  'https://source.unsplash.com/featured/?{desert}',
  'https://source.unsplash.com/featured/?{forrest}',
  'https://source.unsplash.com/featured/?{grass}',
  'https://source.unsplash.com/featured/?{sunset}',
];

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
      .get('https://jsonplaceholder.typicode.com/posts?_limit=8')
      .then((res) => {
        this.setState({ posts: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className='divBlog'>
        <Header
          className='hBlog'
          as='h1'
          style={{
            fontFamily: 'Optima, Helvetica, sans-serif',
            fontSize: '3.2rem',
            paddingTop: '2%',
            textAlign: 'center',
            letterSpacing: '0.8rem',
          }}
        >
          Our Blog Posts
        </Header>
        <br />
        {this.state.posts.map((post, index) => {
          return (
            <Grid className='gridBlog'>
              <Grid.Column width={4}>
                <img className='imgBlog' alt='image blog' src={photos[index]} />
              </Grid.Column>
              <Grid.Column width={10}>
                <Header className='hBlogBody' as='h2'>
                  {post.title}
                </Header>
                <p className='pBlog'>{post.body}</p>
              </Grid.Column>
            </Grid>
          );
        })}
      </div>
    );
  }
}
export default Blog;
