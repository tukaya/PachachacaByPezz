

import React, { Component } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import a from"../../images/a.jpg"
import b from"../../images/b.jpg"
import c from"../../images/c.jpg"



 class Slide extends Component {

    
    componentDidMount(){
      
        this.slider.slickPlay();

    }
    
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 500,
            pauseOnHover: false

          };
        return (
            
            <div className='imgH'>
            <Slider 
            ref={slider => (this.slider = slider)}
            {...settings}

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
