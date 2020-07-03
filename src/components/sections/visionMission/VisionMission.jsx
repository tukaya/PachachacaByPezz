

import React from 'react';
import Darkmode from 'darkmode-js';
// import Darkmode from 'darkmode-js';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';


new Darkmode().showWidget();

// const useStyles = makeStyles({
//   root: {
//     maxWidth: '100%',
//   },
// });

export default function ImgMediaCard() {
  // const classes = useStyles();

  return (
    <div className='divwidthV'>
      <div>
        <img className='widthimg'
          src={require('./do-something-great.jpg')}
        
          alt='do-something-great'
        />
      </div>
      <h2 style={{ textDecoration: 'underline' }}>Mission  Vision</h2>
      <p
        style={{
          fontSize: '1.3em',
          textAlign: 'justify',
        }}
      >
        We work from the vision that everything must be done to improve the
        household situation of children who are in social risk situations.
        Preventative home response is mostly neglected by government authorities
        due to a lack of resources. These agencies cannot effectively provide
        this attention except in response to reports of serious situations and
        often that response comes too late. This is why we visit the families
        from Pachachaca with ambulatory workers. Together with the families and
        parents we look at what solutions are possible within the family
        household. In addition, we offer the children a safe place to play, do
        homework and develop themselves. With a number of motivated mothers, we
        aim to set up a micro-business with which they can generate independent
        income. But, this must be a shared responsibility and commitment: the
        parents actively participate in information meetings and workshops and
        contribute to Pachachaca, for example by helping in the garden or
        cooking.
        <br />
        <br />
        All Pachachaca activities contribute to improving the life of our
        children. The goal of the Pachachaca project is: "Providing educational
        support, contributing to a safe living environment and an integrated
        education for children and young adults, so that they have better
        opportunities to develop as children and young people with skillful
        behavior in their daily life and living environment. Ultimately, they
        must be able to become part of society as full citizens".
      </p>
    </div>
  );
}
