import React, {useState ,useEffect} from 'react'
import Job from './Job.js'
import Nav from './Nav.js'



function Search ({setFavorites}){

    const [search, setSearch]= useState({ 
        searchName: null,
        city: null,
        languages: null,
        company: null,
        salary: null,
        all: true
    })


    const [display, setDisplay]= useState([]
    // Whatever we decide to scrape, we will get this from the backend, so we can wait for
    // that info when we get it!
    )
    
    useEffect(() => {
        // console.log("useEffect is starting")
        fetch(`http://local.....?????`)
        .then(response => response.json())
        .then((jobs) => setDisplay(jobs))
    },[])

 
    return(
       <div> 
            <Nav search = {search} setSearch={setSearch}/>
            <Job display={display} setFavorites={setFavorites} search={search} setDisplay={setDisplay}/>
        </div>
    )

}
export default Search