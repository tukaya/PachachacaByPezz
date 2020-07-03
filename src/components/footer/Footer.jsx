

import React from 'react'
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


 const Footer = () => {
    return (
        <div className='maindivF'>
            <div className='SOSIAL'>
                <h2>SOSIAL CONTACT</h2>
                <a href='#' target='_blank'>
                <Icon circular className='Icon'   name='linkedin' size='big'/></a>

                <a href='#' target='_blank'>
                <Icon circular className='Icon'   name='linkedin' size='big'/></a>

                <a href='#' target='_blank'>
                <Icon circular className='Icon'   name='linkedin' size='big'/></a>
            </div>
            
            <div className='SOSIAL'>
                <h2>ALLIES</h2>
                <p>ALLIES</p>
                <p>ALLIES</p>
                <p>ALLIES</p>
                <p>ALLIES</p>
            </div>

            <div className='SOSIAL'>
                <h2>CONTACT</h2>
                <p>CONTACT</p>
                <p>CONTACT</p>
                <p>CONTACT</p>
                <p>CONTACT</p>
                <p>CONTACT</p>
            </div>
            <h3>Copy Right</h3>
        </div>
    )
}
export default Footer