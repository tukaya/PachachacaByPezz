import React from 'react';
import { Image, Header } from 'semantic-ui-react';

const GridExampleColumnWidth = () => (
  <div className='div-vision'>
    <Header
      as='h1'
      style={{
        fontFamily: 'sans-serif',
        // fontSize: '3.2rem',
        // paddingTop: '2%',
        textAlign: 'center',
        // letterSpacing: '0.8rem',
      }}
    >
      Vision & Mission
      <hr />
    </Header>
    <Image
      src={'https://i.postimg.cc/L6cQxmpY/do-something-great.jpg'}
      // size='massive'
    />
    <br />
    <Header
      as='h2'
      style={{
        fontFamily: 'sans-serif',
        // fontSize: '3rem',
        textAlign: 'center',
      }}
    >
      Pachachaca
    </Header>
    <p className='pVision'>
      We work from the vision that everything must be done to improve the
      household situation of children who are in social risk situations.
      Preventative home response is mostly neglected by government authorities
      due to a lack of resources. These agencies cannot effectively provide this
      attention except in response to reports of serious situations and often
      that response comes too late. This is why we visit the families from
      Pachachaca with ambulatory workers. Together with the families and parents
      we look at what solutions are possible within the family household. In
      addition, we offer the children a safe place to play, do homework and
      develop themselves. With a number of motivated mothers, we aim to set up a
      micro-business with which they can generate independent income. But, this
      must be a shared responsibility and commitment: the parents actively
      participate in information meetings and workshops and contribute to
      Pachachaca, for example by helping in the garden or cooking.
      <br />
      All Pachachaca activities contribute to improving the life of our
      children. The goal of the Pachachaca project is: "Providing educational
      support, contributing to a safe living environment and an integrated
      education for children and young adults, so that they have better
      opportunities to develop as children and young people with skillful
      behavior in their daily life and living environment. Ultimately, they must
      be able to become part of society as full citizens".
    </p>
    <Header
      as='h2'
      style={{
        fontFamily: 'sans-serif',
        // fontSize: '3rem',
        textAlign: 'center',
      }}
    >
      Yoreem Foundation
    </Header>
    <p className='pVision'>
      We support projects that we trust. And we only have trust if we know
      project are thought through and contribute to an integral, long term
      development in that area. They have to offer perspective on a decent life.
      Economic development is important, but we can only achieve that when we
      make good education, infrastructure and health care available for all.
    </p>
  </div>
);

export default GridExampleColumnWidth;
