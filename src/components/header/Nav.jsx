

import React from 'react'
import { Link } from 'react-router-dom'

 const Nav = () => {
    return (
        <div className="main_div_A">
            <div className="ui menu ulN ">
                <div className="item"><Link to='/'>Home</Link></div>
                
                <div className="ui compact menu">
                    <div className="ui simple dropdown item ">
                    <Link >Programs</Link>
                        <i className="dropdown icon"></i>
                        <div className="menu">
                            <div className="item "><Link to='/blog'>Blog</Link></div>
                            <div className="item "><Link>Choice 2</Link></div>
                            <div className="item "><Link>Choice 3</Link></div>
                            
                        </div>
                    </div>
                </div>



                <div className="item"><Link to='/vision-mission'>Vision & Mission</Link></div>
                <div className="item"><Link to='/about'>Who are we</Link></div>
                
                <div className="item"><Link to='/albums'>Photos</Link></div>
                <div className="item"><Link to='/contact'>Contact</Link></div>
                <div className="item"><Link to='/donation'>Donation</Link></div>
                
            </div>  
        </div>
    )
}
export default Nav

