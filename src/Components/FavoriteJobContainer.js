import React from 'react'
import FavoriteJobCard from './FavoriteJobCard'



function FavoriteJobContainer({favorites, listings}){
    let hash = {}

    favorites.forEach( favorite => {
        hash[favorite.id] = favorite.listing_id
    })

    const mappedListings = []
    
    listings.map(listing => {
        if(listing.id in hash){
            mappedListings.push(listing)
        }
    })


    const mappedFavorites = mappedListings.map(favorite => <FavoriteJobCard key = {favorite.id} favorite = {favorite}/>)


    return(
        <div>
            {mappedFavorites}
        </div>
    )
}

export default FavoriteJobContainer
