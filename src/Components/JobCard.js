import React from 'react'



function JobCard({job, setCurrentJob}){

    function handleShowJob(){
        setCurrentJob(job)
    }

    return(
        <div className="ruby-jobs" onClick={handleShowJob}>
            <h5>{job.name}</h5>
            <p>{job.description}</p>
            <p>{job.company.name}</p> 
            <button>Apply</button>
        </div>
    )
}

export default JobCard
