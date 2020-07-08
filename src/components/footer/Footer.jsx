

import React from 'react'
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import yu from '../images/yu.png'
import ba from '../images/ba.png'

 const Footer = () => {
    return (
        <div className='maindivF'>
            <div
             style={{ marginRight: '10% '}}
             >
                <div className='SOSIAL'>
                    <h3>CONTACT PACHACHACA</h3>
                    <p><span>Address</span> : Prolongación calle Lamar<br/> s/n – Calca – Calca – Cusco</p>
                    <p><span>Tel</span> : +51 84 612495 | +51 84 612603<br/>
                            +51 984119405 | +51 993876434
                    </p>
                    <p><span>Email Address</span> : <a href='https://info@pachachaca.org'target='_blank' >info@pachachaca.org</a></p>
                    
                </div>

                <div className='SOSIAL SOSIAL_border'>
                    <h3>CONTACT YOREEM </h3>
                    <p><span>Address</span> : Bergweg 209b
                    <br/>3037 EJ Rotterdam </p>
                    <p><span>Tel</span> : 0636143980</p>
                    <p><span>Email</span> : <a href='https://www.google.com/intl/nl/gmail/about/'target='_blank'>yoreemfoundation@gmail.com</a></p>
                </div>

                <div className='SOSIAL'
                style={{ marginLeft: '2%'}}
                >
                    <img  src={ba} alt="logo PACHACHACA"/>
                    <img src={yu} alt="logo Yoreem"/><br/><br/>
                    <a href='https://www.facebook.com/PachachacaCalca' target='_blank'>
                    <Icon circular className='sossial_icon'   name='facebook' size='large'/></a>
                    <a href='https://www.instagram.com/pachachaca.calca/' target='_blank'>
                    <Icon circular className='sossial_icon'   name='instagram' size='large'/></a>
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