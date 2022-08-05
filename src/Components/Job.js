import React, {useState} from 'react'
import JobCard from './JobCard'
import JobDescription from './JobDescription'



function Job ({display, setFavorite, search, setDisplay}){
 
  const [currentJob, setCurrentJob] = useState(display[0])
    
  const jobCard = display.map((job) => 
  
  <JobCard 
    key = {job.id}
    job={job}
    setCurrentJob={setCurrentJob}
  />)


  return(
    <div id="block">

        <div id="filtered">
          <h3>Filtered Jobs</h3>
          {jobCard}
        </div>

        <div id="jobs">
          <label className="container">
          <JobDescription currentJob={currentJob} setFavorite={setFavorite}/>
          </label>
          
        </div>

        <div className="footer"></div>
        <div className="footer2"></div>
    </div>
  )

} 
export default Job