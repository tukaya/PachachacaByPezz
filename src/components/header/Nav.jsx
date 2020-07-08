

import React from 'react'
import { Link } from 'react-router-dom'
import { Icon,Button } from 'semantic-ui-react'
import l from '../images/Logo/l.png'
import c from '../images/Logo/c.png'

 const Nav = () => {
    return (
        <div className="main_div_A">
            <div className="div_logo">
                <div id='the_logos' >
                    <div style={{display: 'inline-block',textAlign:'center',marginRight:'2%'}}>
                        <img src={l} alt="logo PACHACHACA"/>
                        <p>PACHACHACA</p>
                    </div>
                    <div style={{display: 'inline-block',textAlign:'center'}}>
                        <span> <img src={c} alt="logo PACHACHACA"/></span>
                        <p>Yoreem</p>
                    </div>
                </div>
                <div style={{textAlign: 'right'}} className="color_div_ ulN">
                    
                    <p className="ulN"> <a href='#' target='_blank'>
                    <Icon circular className='sossial_icon'   name='facebook' size='large'/></a></p>
                    <p className="ulN"><a href='#' target='_blank'>
                    <Icon circular className='sossial_icon'   name='linkedin' size='large'/></a></p>
                    <p className="ulN"><a href='#' target='_blank'>
                    <Icon circular className='sossial_icon'   name='twitter' size='large'/></a></p>
                    <br/>
                    <Button compact><Link to='/contact'>Contact Us</Link></Button>
                </div>

                   
                    
                    
                
            </div>
            
            
            <div className="color_div_ ">
                <div  className="ui menu ">
                    <div className="item"><Link to='/'>Home</Link></div>
                        <div className="ui simple dropdown item ">
                            <Link >Programs</Link>
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                <div className="item "><Link to='/blog'>Blog</Link></div>
                                <div className="item "><Link to='/Program1'>Program1</Link></div>
                                <div className="item "><Link  to='/Program2'>Program2 </Link></div>
                            </div>
                        </div>
                    <div className="item"><Link to='/vision-mission'>Vision & Mission</Link></div>
                    <div className="item"><Link to='/about'>Who are we</Link></div>
                    <div className="item"><Link to='/albums'>Photos</Link></div>
                    <div className="ui simple dropdown item ">
                            <Link >Newsletter & Yearly reports</Link>
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                <div className="item "><Link></Link></div>
                                <div className="item "><Link>Choice 2</Link></div>
                                <div className="item "><Link>Choice 3</Link></div>
                            </div>
                        </div>
                    <div className="item"><Link to='/donation'>Donation</Link></div>
                </div>  
            </div>
            
        </div>
    )
}
export default Nav

