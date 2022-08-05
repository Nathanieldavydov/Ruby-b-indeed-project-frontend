import React from 'react'

function JobDescription({currentJob, favorites, setFavorites}){

    function handleAddFavorite(){
        console.log(`you are patching `)
        fetch(`http://localhost:9292/favorites/${currentJob.id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => setFavorites([...favorites, data]))
    }


    
    
    let hash = {}

    favorites.forEach( favorite => {
        hash[favorite.id] = favorite.listing_id
    })


   const buttonDisplay = currentJob.id in hash ? "favorite-me-active" : "favorite-me"

    
    return(
        <div class="ruby-job">
            <br/>
            <button id={buttonDisplay}><span className="fa fa-star" onClick={handleAddFavorite}></span></button>
            <h3>{currentJob.name}</h3>
            <p>{currentJob.name}</p>
            <p><strong>{currentJob.location.name}</strong></p>
            <p>{currentJob.company.name}</p>
            <p>{currentJob.description}</p>
            <br/>
            <a href={`${currentJob.url}`} target = "_blank">
                <button >Apply</button>
            </a>
        </div>
    )
}

export default JobDescription

