import React from 'react'



function JobCard({job, setCurrentJob}){

    function handleShowJob(event){
        setCurrentJob(job)
    }

    return(
        <div className="ruby-jobs" onClick={handleShowJob}>
            {/*<h5>{jobTitle}</h5>
            <p>{jobSalary}</p>
    <p>{jobCity}</p>*/}
        </div>
    )
}

export default JobCard
