import React, {useState ,useEffect} from 'react'
import Job from './Job.js'

function Search ({listings}){

    const [searchedLocation, setSearchedLocation] = useState("All")
    const [searchedCompany, setSearchedCompany] = useState("All")
    const [searchedExperience, setSearchedExperience] = useState("All") 
    const [searched, setSearched] = useState("")



    useEffect( () => {
        fetch(`http://localhost:9292/locations`)
        .then(res => res.json())
        .then((data) => renderLocations(data))
    },[])


    useEffect( () => {
        fetch(`http://localhost:9292/companies`)
        .then(res => res.json())
        .then((data) => renderCompanies(data))
    },[])


    function renderCompanies(companyData){
        var select = document.getElementById("myDropdown3")
        select.innerHTML = ""
        companyData.forEach(company => {
            var option = company.name
            var el = document.createElement("a")
            el.textContent = option 
            el.value = option
            select.append(el)
        })
    }

    function renderLocations(locationData){
        var select = document.getElementById("myDropdown1")
        select.innerHTML = ""
        locationData.forEach(location => {
            var option = location.name 
            var el = document.createElement("a")
            el.textContent = option
            el.value = option
            select.append(el)
        });
    }


    function handleLocationClick(e){
        setSearchedLocation(e.target.value)
    }

    function handleExperienceClick(e){
        setSearchedExperience(e.target.innerText)
    }

    function handleCompanyClick(e){
        setSearchedCompany(e.target.value)
    }

    function handleAllClick(e){
        setSearchedCompany("All")
        setSearchedExperience("All")
        setSearchedLocation("All")
    }

    function handleSearchChange(e){
        setSearched(e.target.value)
    }

    return(
        <div id="nav"> 
            <h3>Search for Jobs</h3>
            <input type="text" id="searchName" placeholder="Job title, keywords, or company" onChange={handleSearchChange}/>

            <div id="nav-buttons">
                <div className="dropdown">
                    <button id="location" className="dropbtn" >Location</button>
                    <div id="myDropdown1" className="dropdown-content" onClick={(e) => handleLocationClick(e)}/>
                </div>

                <div className="dropdown">
                    <button id="experience" className="dropbtn">Experience</button>
                        <div id="myDropdown2" className="dropdown-content" onClick={(e) => handleExperienceClick(e)}>
                            <a>Entry</a>
                            <a>Mid</a>
                            <a>Senior</a>
                        </div>
                </div>

                <div className="dropdown">
                    <button id="company" className="dropbtn">Company</button>
                        <div id="myDropdown3" className="dropdown-content" onClick={(e) => handleCompanyClick(e)} />
                </div>


                <button id="all" className="all" onClick={handleAllClick}>All Jobs</button>
            </div>
            <Job listings = {listings} searched = {searched} location = {searchedLocation} company = {searchedCompany} experience = {searchedExperience} />
        </div>
     )
}
export default Search