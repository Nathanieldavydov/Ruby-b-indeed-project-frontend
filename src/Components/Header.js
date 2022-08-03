import React from 'react'
import { useNavigate } from 'react-router-dom'

import bIndeed_logo from '../images/bIndeed_logo.png'



function Header (){
 
    let navigate = useNavigate(); 

    function handleFavoritesClick(event){
        navigate('./favorites');
    }

    function handleHomeClick(event){
        navigate('/');
        console.log("you clicked home!")
    }

 
    return(
        <div id="header"> 
            {/* link this image in the header plz to */}
            <img src={bIndeed_logo} alt="bIndeed Logo" id="logo" onClick={handleHomeClick}/> 
            <button id="myfavorites"><span class="fa fa-star" onClick={handleFavoritesClick}></span></button>

         </div>
    )

} 
export default Header