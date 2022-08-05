import React from 'react'

function JobDescription({currentJob, setFavorite}){

    function handleAddFavorite(){
        // this may not work, you need to update the array
        setFavorite(currentJob.id)
    }

 
    return(
        <div class="ruby-job">
            <h5>{currentJob.name}</h5>
            <button id="favorite-me"><span className="fa fa-star" onClick={handleAddFavorite}></span></button>
            {/* we need to do some css here where if we click it, it will stay colored */}
            <p>{currentJob.name}</p>
            <p><strong>{currentJob.location.name}</strong></p>
            <p>{currentJob.company.name}</p>
            <p>{currentJob.description}</p>
            <button /*href={`${currentJob.url}`}*/>Apply</button>
        </div>
    )
}

export default JobDescription

