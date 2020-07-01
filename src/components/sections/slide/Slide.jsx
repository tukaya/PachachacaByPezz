

import React, { Component } from 'react'
import { css, jsx } from '@emotion/core'

 class Slide extends Component {

    render() {
        return (
        // const Slide = ({ content, width }) => (
        <div
            css={css`
            height: 100%;
            width: ${width}px;
            background-image: url('${content}');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            `}
        > </div>
        )
    }    

    
}
export default Slide   
