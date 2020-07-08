

import React from 'react'
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


 const Footer = () => {
    return (
        <div className='maindivF'>
            <div
            //  style={{ marginRight: '30% '}}
             >
                <div className='SOSIAL'>
                    <h3>CONTACT PACHACHACA</h3>
                    <p>Adres: Prolongación calle Lamar<br/> s/n – Calca – Calca – Cusco</p>
                    <p>Tel: +51 84 612495 | +51 84 612603<br/>
                            +51 984119405 | +51 993876434
                    </p>
                    <p>Email Address: <a href='https://info@pachachaca.org'target='_blank' >info@pachachaca.org</a></p>
                    
                </div>

                <div className='SOSIAL'>
                    <h3>CONTACT YOREEM </h3>
                    <p>Adres: Bergweg 209b
                    <br/>3037 EJ Rotterdam </p>
                    <p>Tel: 0636143980</p>
                    <p>Email: <a href='https://www.google.com/intl/nl/gmail/about/'target='_blank'>yoreemfoundation@gmail.com</a></p>
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
                    <h3>SOSIAL CONTACT</h3>
                    <p> <a href='#' target='_blank'>
                    <Icon circular className='sossial_icon'   name='facebook' size='large'/></a></p>
                    <p><a href='#' target='_blank'>
                    <Icon circular className='sossial_icon'   name='linkedin' size='large'/></a></p>
                    <p><a href='#' target='_blank'>
                    <Icon circular className='sossial_icon'   name='twitter' size='large'/></a></p>
                    
                </div>
                
                
                        
               

                
            </div>
            
            
            <a className=' maindivF_btn' href="#the_logos" >
                <Icon className='btn_icon' circular name='angle up' size='large'/></a>
            <a  href="#thebottom" className='maindivF_btn2' >
                <Icon className='btn_icon' circular name='angle down' size='large'/></a>
            <h6 id='thebottom'>Copy Right</h6>
        </div>
    )
}
export default Footer