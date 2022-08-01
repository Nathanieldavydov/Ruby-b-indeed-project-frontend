import React from 'react'
import bIndeed_logo from '../images/bIndeed_logo.png'



function Header (){
 
 
    return(
        <div id="header"> 
            <img src={bIndeed_logo} alt="bIndeed Logo" />
            <FontAwesomeIcon icon="fa-solid fa-floppy-disk" />        </div>
    )

} 
export default Header