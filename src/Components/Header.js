import React from 'react'
import bIndeed_logo from '../images/bIndeed_logo.png'



function Header (){
 
 
    return(
        <div id="header"> 
            <img src={bIndeed_logo} alt="bIndeed Logo" id="logo"/>
          {/*  <FontAwesomeIcon icon="fa-solid fa-floppy-disk" /> */}   
          <button id="myfavorites"><span class="fa fa-star"></span></button>

         </div>
    )

} 
export default Header