import React, {useState ,useEffect} from 'react'
import Job from './Job.js'
import Nav from './Nav.js'



function Search ({setFavorites}){

    const [searchedLocation, setSearchedLocation] = useState("")
    const [searchedCompany, setSearchedCompany] = useState("")
    const [searchedExperience, setSearchedExperience] = useState("") 

    // const [search, setSearch]= useState({ 
    //     location: null,
    //     experience: null,
    //     company: null,
    //     all: true
    // })

    // const [display, setDisplay]= useState([{}])
    
    // useEffect(() => {
    //     console.log("useEffect is starting")
    //     fetch(`http://localhost:9292/listings`)
    //     .then(response => response.json())
    //     .then((searchedJobs) => {
    //         let jobs = []
    //         searchedJobs.forEach(element => {
    //             jobs.push(element)
    //         });

    //         setDisplay(jobs)

    //         // setDisplay(jobs.filter((displayedJobs)=> {
    //         //     return (search.all 
    //         //         ?
    //         //         displayedJobs
    //         //         : 
    //         //         (search.location !== null
    //         //         ?
    //         //         displayedJobs.location.name.includes(search.location)
    //         //         :
    //         //         search.all)
    //         //         &&
    //         //         (search.company !== null
    //         //             ?
    //         //             displayedJobs.company.name.includes(search.company)
    //         //             :
    //         //             search.all
    //         //             )
    //         //         &&
    //         //         (
    //         //             search.experience !== null
    //         //             ?
    //         //             displayedJobs.experience.includes(search.experience)
    //         //             :
    //         //             search.all
    //         //         )
    //                 // (
    //                 //     if (search.location !== null){
    //                 //         displayedJobs.location.includes(search.location)
    //                 //     }
    //                 //     if (search.company !== null){
    //                 //         displayedJobs.company.includes(search.company)
    //                 //     }
    //                 //     if (search.experience !== null){
    //                 //         displayedJobs.experience.includes(search.experience)
    //                 //     }
    //                 // )
    
    //                 //)
    //             //})   
    //         //)
    //     })

    // },[])



    



 
    return(
       <div> 
            {/* <Nav search = {search} setSearch={setSearch}/> */}
            {/* <Job display={display} setFavorites={setFavorites} search={search} setDisplay={setDisplay}/> */}
        </div>
    )

}
export default Search