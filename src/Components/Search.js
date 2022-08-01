import React, {useState /*,useEffect*/} from 'react'
import Job from './Job.js'
import Filter from './Filter.js'
import Nav from './Nav.js'


function Search (){
const [search, setSearch]=useState({ 
    searchName: null,
    city: null,
    languages: null,
    company: null,
    salary: null,
    all: true
})


const [display, setDisplay]= useState({
    // Whatever we decide to scrape, we will get this from the backend, so we can wait for
    // that info when we get it!
})

 
    return(
       <div> 
            <Nav setSearch={setSearch} search={search}/>
            <Filter search={search} setDisplay={setDisplay}/>
            <Job display={display}/>
        </div>
    )

} 
export default Search