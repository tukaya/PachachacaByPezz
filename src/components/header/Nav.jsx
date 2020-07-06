

import React from 'react'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'

 const Nav = () => {
    return (
<<<<<<< HEAD
        <div className='ulN'>
            <ul id='thetop' >
                <li><Link className='ulLN' to='/'>Home</Link></li>
                <li><Link className='ulLN' to='/blog'>Blog</Link></li>
                <li><Link className='ulLN' to='/Who-are-we'>Who are we</Link></li>
                <li><Link className='ulLN' to='/vision-mission'>Vision & Mission</Link></li>
                <li><Link className='ulLN' to='/albums'>Albums</Link></li>
                <li><Link className='ulLN' to='/contact'>Contact</Link></li>
                <li><Link className='ulLN' to='/donation'>Donation</Link></li>
            </ul>
=======
        <div className="main_div_A">
            <Paper>
            <div className="ui menu ulN ">
                <div className="item"><Link to='/'>Home</Link></div>
                <div className="item"><Link to='/blog'>Blog</Link></div>
                <div className="item"><Link to='/about'>About</Link></div>
                <div className="item"><Link to='/vision-mission'>Vision & Mission</Link></div>
                <div className="item"><Link to='/albums'>Albums</Link></div>
                <div className="item"><Link to='/contact'>Contact</Link></div>
                <div className="item"><Link to='/donation'>Donation</Link></div>
                <div className="ui compact menu">
                    <div className="ui simple dropdown item ">
                    <Link >Dropdown</Link>
                        <i className="dropdown icon"></i>
                        <div className="menu">
                            <div className="item "><Link>Choice 1</Link></div>
                            <div className="item "><Link>Choice 2</Link></div>
                            <div className="item "><Link>Choice 3</Link></div>
                            
                        </div>
                    </div>
                </div>
            </div>  
            </Paper>
>>>>>>> cb721dbdf6ef4af66cf7d29813157a84476a7e33
        </div>
    )
}
export default Nav

