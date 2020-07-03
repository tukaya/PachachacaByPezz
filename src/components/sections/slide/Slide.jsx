

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
            autoplay: false,
            autoplaySpeed: 5000,
            pauseOnHover: false

          };
        return (
            
            <div >
            <Slider 
            ref={slider => (this.slider = slider)}
            {...settings} >
                <div ><img className='widH' src={a} alt="a"/></div>
                <div ><img className='widH' src={b} alt="b"/></div>
                <div ><img className='widH' src={c} alt="c"/></div>
            </Slider>
            </div> 
        )
    }     
}
export default Slide   
