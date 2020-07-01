

import React, { Component } from 'react'

import Slider from 'react-slick'



 class Slide extends Component {

    render() {
        return (
            <div style={{width :'100%'}}>
                <Slider speed={1000} slidesToShow={1}
                slidesToScroll={1} infinite={true}>
                    <div style={{width :'100%'}}>1</div>
                    <div style={{width :'100%'}}>2</div>
                    <div style={{width :'100%'}}>3</div>
                </Slider>
            </div>
           
        )
    }    

    
}
export default Slide   
