import React, {useState} from 'react'
import JobCard from './JobCard'
import JobDescription from './JobDescription'


//Job will take in the searched items 

//and will filter through listing

//to determine what to display

function Job ({listings, searched, location, company, experience}){
  const [currentJob, setCurrentJob] = useState({
    "id": 16,
    "name": "Jr. Software Developer",
    "description": "Our full-time software developers are willing and able to mentor exceptional student developers.Currently enrolled in a Bachelor's program in Computer Science…View all Amazon.com Services LLC jobs in Irvine, CA - Irvine jobsSalary Search: Jr. Software Developer salaries in Irvine, CASee popular questions & answers about Amazon.com Services LLC",
    "company_id": 14,
    "location_id": 3,
    "experience": "Entry",
    "jobType": "Full-time",
    "company": {
        "id": 14,
        "name": "Amazon.com Services LLC"
    },
    "location": {
        "id": 3,
        "name": "CA"
    }
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




      <div className="footer"></div>
      <div className="footer2"></div>
{/* 

        <div id="jobs">
          <label className="container">
          <JobDescription currentJob={currentJob} setFavorite={setFavorite}/>
          </label>
          
        </div>
 */}
    </div>
  )

} 
export default Job