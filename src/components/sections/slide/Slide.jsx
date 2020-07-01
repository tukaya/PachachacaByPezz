

import React, { Component } from 'react'
import Styled from 'styled-components'
import Slider from 'react-slick'


const Wrapper = Styled.div`width :100%`;
const Photo = Styled.div`width :100%`;

 class Slide extends Component {

    render() {
        return (
            <Wrapper>
                <Slider speed={1000} slidesToShow={1}
                slidesToScroll={1} infinite={false}
                dots={true}>
                    <Photo>1</Photo>
                    <Photo>2</Photo>
                    <Photo>3</Photo>
                </Slider>
            </Wrapper>
           
        )
    }    

    
}
export default Slide   
