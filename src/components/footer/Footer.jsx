

import React from 'react'
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


 const Footer = () => {
    return (
        <div className='maindivF'>
            <div className='SOSIAL'>
                <h2>SOSIAL CONTACT</h2>
                <a href='#' target='_blank'>
                <Icon circular className='Icon'   name='facebook' size='big'/></a>

                <a href='#' target='_blank'>
                <Icon circular className='Icon'   name='linkedin' size='big'/></a>

                <a href='#' target='_blank'>
                <Icon circular className='Icon'   name='twitter' size='big'/></a>
            </div>
            
            <div className='SOSIAL'>
                <h2>ALLIES</h2>
                <p>ALLIES</p>
                <p>ALLIES</p>
                
            </div>

            <div className='SOSIAL'>
                <h2>CONTACT</h2>
                <p>CONTACT</p>
                <p>CONTACT</p>
                
            </div>
            <h6>Copy Right</h6>
            <a id='thebottom' href="#thebottom"><button className='maindivF_btn2 maindivF_btn' >DW</button></a>
            <a href="#thetop"><button className='maindivF_btn' >UP</button></a>
            
        </div>
    )
}
export default Footer