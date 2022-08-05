import React from 'react'



function JobCard({job, setCurrentJob}){

    function handleShowJob(){
        setCurrentJob(job)
    }

    return(
        <div className="ruby-jobs" onClick={handleShowJob}>
            <h5>{job.name}</h5>
            <p className='card-description'>{job.description}</p>
            <p>{job.company.name}</p> 
        </div>
    )
}

export default JobCard
