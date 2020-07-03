

import React, { Component } from 'react';
import Slide from '../slide/Slide';
import Activities from './Activities'
// import d from '../../images/d.jpg';



class Home extends Component {

  render() {
    return (
      <div className='minedivH'>
        <Slide/>

        <div className='poTH'>
          <h2>You can make difference</h2>
          <hr/>
          <p>¡Vivir en Pachachaca fue una 
            experiencia increíble! Todo ese tiempo me sentí seguro y tranquilo;
            y eso me motivó a seguir adelante y ponerme de pie, así como a crecer como
            una persona independiente.
            Viví en Pachachaca casi diez años, y ahora que vivo en 
            Lima extraño la tranquilidad. </p>
        </div>
        
        <div  className='imgH2'>
          <div className='chailddiv'>
            <h1 >WLCOM TO PACHACHACA</h1>
            <hr/>
            <h2>PERU , WHERE IT ALL STARTED</h2>
            <h2>PERU , WHERE IT ALL STARTED</h2>
            <h2>PERU , WHERE IT ALL STARTED</h2>
            <button>DONATE NOW</button>
          </div>
        </div >
        <Activities/>
      </div>
    );
  }
}

export default Home;
