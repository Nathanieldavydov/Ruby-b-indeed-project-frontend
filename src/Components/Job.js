import React, {useState} from 'react'
import JobCard from './JobCard'
import JobDescription from './JobDescription'



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
          <JobDescription currentJob={currentJob} setFavorites={setFavorites}/>
          {jobCard}
        </div>

        <div id="jobs">
          <label className="container">
          <button id="favorite-me"><span className="fa fa-star"></span></button>
          </label>
          
        </div>

        <div className="footer"></div>
        <div className="footer2"></div>
    </div>
  )

} 
export default Job