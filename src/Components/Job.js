import React, {useState} from 'react'
import JobCard from './JobCard'



function Job ({display, setFavorites, search, setDisplay}){
 
  const [currentJob, setCurrentJob] = useState()
    
  const jobCard = display.map((job) => <JobCard 
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
          <label class="container">
          </label>
          <JobDescription currentJob={currentJob} setFavorites={setFavorites}/>
        </div>

      <div id="footer"></div>
    </div>
  )

} 
export default Job