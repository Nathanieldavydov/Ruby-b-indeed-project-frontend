import React from 'react'



function FavoriteJobCard({favorite, favorites, setFavorites}){

    function handleAddFavorite(){
        fetch(`http://localhost:9292/favorites/${favorite.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
              }
        })
        
        .then(res => res.json())
        .then(data => setFavorites(favorites.filter((fav)=> fav.id != data.id)) )

    }

    return(
        <div class="favorite-ruby-jobs">
        <button id="favorite-me-active"><span className="fa fa-star" onClick={handleAddFavorite}></span></button>
        <h3>{favorite.name}</h3>
  
        <p>{favorite.name}</p>
        <p><strong>{favorite.location.name}</strong></p>
        <p>{favorite.company.name}</p>
        <p>{favorite.description}</p>
        <a href={`${favorite.url}`} target = "_blank">
            <button >Apply</button>
        </a>
    </div>
    )
}

export default FavoriteJobCard
