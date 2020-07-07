

import React from 'react'
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


 const Footer = () => {
    return (
        <div className='maindivF'>
            <div
             style={{ marginRight: '30% '}}
             >
                <div className='SOSIAL'>
                    <h3>SOSIAL CONTACT</h3>
                    <span> <a href='#' target='_blank'>
                    <Icon circular className='Icon'   name='facebook' size='large'/></a></span>
                    <span><a href='#' target='_blank'>
                    <Icon circular className='Icon'   name='linkedin' size='large'/></a></span>
                    <span><a href='#' target='_blank'>
                    <Icon circular className='Icon'   name='twitter' size='large'/></a></span>
                    
                </div>
                
                <div className='SOSIAL SOSIAL_border'>
                    <h3>ALLIES</h3>
                    <p> Anna Muntz Foundation</p>
                    {/* <p>Co Schippers Fund </p>
                    <p>Hofstee Foundation </p>
                    <p>Inmenszo </p>
                    <p>Johanna Donk-Grote Foundation </p>
                    <p>Johannes Foundation </p>
                    <p>Mano BV </p>
                    <p> Alle Beetjes Foundation </p>
                    <p>The Lark Foundation  </p>
                    <p> Fair Share Foundation </p>
                    <p> Elise Spykman Foundation </p>
                    <p> Middelbusker Stevens Foundation </p>
                    <p> Mundo Crastino Melio Foundation </p>
                    <p> Qbusfonds Foundation </p> */}
                </div>

                <div className='SOSIAL'>
                    <h3>CONTACT</h3>
                    <p>CONTACT</p>
                    <p>CONTACT</p>
                    
                </div>
               
            </div>
            
           
            <a id='thebottom' href="#thebottom"><button className='maindivF_btn2 maindivF_btn' >DW</button></a>
            <a href="#the_logos"><button className='maindivF_btn' >UP</button></a>
            <h6>Copy Right</h6>
        </div>
    )
}
export default Footer