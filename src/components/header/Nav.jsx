

import React from 'react'
import { Link } from 'react-router-dom'

 const Nav = () => {
    return (
        <div>
            <ul className='header'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/vision-mission'>VisionMission</Link></li>
                <li><Link to='/albums'>Albums</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/donation'>Donation</Link></li>
            </ul>
        </div>
    )
}
export default Nav
