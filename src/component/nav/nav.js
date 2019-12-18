import React from 'react'
import './nav.scss'
import {Link} from 'react-router-dom'

function NavBar() {
    return(
        <div className='nav'>
            <div className='nav__title'>
                <span>My Portfolio</span>
            </div>
            <div className='nav__image'>
                <Link to='/'><img src='https://image.flaticon.com/icons/png/512/271/271218.png' alt='back'/></Link>
            </div>
        </div>
    )
}

export default NavBar