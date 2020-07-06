

import React from 'react'
import { Link } from 'react-router-dom'

 const Nav = () => {
    return (
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
        </div>
    )
}
export default Nav
