import React, {useState, useEffect} from 'react'
import FavoriteJobContainer from './FavoriteJobContainer'




function Favorite ({listings, favorites, setFavorites}){


    return(
        <div> 
            <div id="favorited">
                <h3>Favorite Jobs</h3>
                <FavoriteJobContainer favorites = {favorites} listings = {listings} setFavorites={setFavorites}/>
            </div>
            
        </div>
    )
}
 
export default Favorite


