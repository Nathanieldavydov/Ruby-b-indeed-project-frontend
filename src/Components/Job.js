import React, {useState} from 'react'
import JobCard from './JobCard'
import JobDescription from './JobDescription'


//Job will take in the searched items 

//and will filter through listing

//to determine what to display

function Job ({listings, searched, location, company, experience}){
  const [currentJob, setCurrentJob] = useState({
    "company": {},
    "location": {}
})


  let filteredListings = listings

  if(searched !== ''){
    filteredListings = filteredListings.filter(listing => listing.name.toLowerCase().includes(searched.toLowerCase()) 
    || listing.company.name.toLowerCase().includes(searched.toLowerCase()) 
    || listing.location.name.toLowerCase().includes(searched.toLowerCase()))
  }
  if( location !== 'All'){
    filteredListings = filteredListings.filter(listing => listing.location.name === location)
  }
  if( company !== 'All'){
    filteredListings = filteredListings.filter(listing => listing.company.name === company)
  }
  if( experience !== 'All'){
    filteredListings = filteredListings.filter(listing => listing.experience === experience)
  }
  if( experience == 'All' && company == 'All' && location == 'All' && searched === ''){
    filteredListings = listings
  }


  const jobCards = filteredListings.map((job) => {
    return <JobCard key = {job.id} job = {job} setCurrentJob = {setCurrentJob}/>
  }
  )
 
    


  return(
    <div id="block">
      <div id = "filtered">
        <h3>Filtered Jobs</h3>
          {jobCards}
      </div>

      <div id = "jobs">
        <label className = "container">
          <JobDescription currentJob={currentJob}/>
        </label>
      </div>
    </div>
  )

} 
export default Job