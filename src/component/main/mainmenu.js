import React from 'react'
import './mainmenu.scss'
import {Link} from 'react-router-dom'

function MainMenu({value}){
    return(
            <div className = 'main__menu'>
                <Link to={'/' + value.toLowerCase()} style={{ textDecoration: 'none', color:'black' }}><span>{value}</span></Link>
            </div>
    )
}

export default MainMenu