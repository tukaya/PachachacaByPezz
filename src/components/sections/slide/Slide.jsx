

import React, { Component } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import a from"../../images/a.jpg"
import b from"../../images/b.jpg"
import c from"../../images/c.jpg"



 class Slide extends Component {

    render() {
        return (
            
            <div className='widH'>
            <Slider speed={500} slidesToShow={1}
            slidesToScroll={1} infinite={true}
            >
                <div className='imgH'><img className='widH' src={a} alt="a"/></div>
                <div className='imgH'><img className='widH' src={b} alt="b"/></div>
                <div className='imgH'><img className='widH' src={c} alt="c"/></div>
                
            </Slider>
            </div>
            
            
           
        )
    }    

    
}
export default Slide   
