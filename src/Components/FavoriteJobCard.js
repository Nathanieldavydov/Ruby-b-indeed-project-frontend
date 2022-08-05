import React from 'react'



function FavoriteJobCard({favorite}){
    console.log(favorite.url)


    return(
        <div className="ruby-jobs">
            <h5>{favorite.name}</h5>
            <p>{favorite.description}</p>
            <p>{favorite.company.name}</p> 
        </div>
    )
}

export default FavoriteJobCard
