


import per from '../../images/per.jpg'
import ContactB from './ContactB'
import ContactY from './ContactY'

import React from 'react'

 const Contact = () => {
    return (
        <div className='mian_div_contact '>
            {/* <img className='mian_div_contact ' width='100%' src={per} alt="google map"/> */}
            <div className='the_tob_div '>
                <ContactB/>
                <ContactY/>
            </div>
            
            
        </div>
    )
}
export default  Contact         