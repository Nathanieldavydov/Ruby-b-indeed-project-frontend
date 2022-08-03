
import React from 'react'



function JobDescription({currentJob, setFavorites}){

    function handleAddFavorite(event){
        // this may not work, you need to update the array
        setFavorites(currentJob)
    }

    return(
        <div class="ruby-jobs">
            <h5>{currentJob.jobTitle}</h5>
            <button id="favorite-me"><span class="fa fa-star" onClick={handleAddFavorite}></span></button>
            {/* we need to do some css here where if we click it, it will stay colored */}
            
            <p>{currentJob.jobDescription}</p>
            <p>{currentJob.jobCity}</p>
            <p>{currentJob.jobSalary}</p>
            <p>{currentJob.jobParagraph}</p>
        </div>
    )
}

export default jobDescription


