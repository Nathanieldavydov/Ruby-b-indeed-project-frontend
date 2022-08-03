import React from 'react'



function Nav ({search, setSearch}){
   
    function handleStyleChange(event){
        const key = event.target.id
        console.log(event.target.value)
        setSearch({...search, [key]:event.target.value, all: false})
    }

    
    function handleClick(event){
        setSearch({...search, all: true})
    }

  
 
    return(
       <div id="nav"> 
            <h3>Search for Jobs</h3>
            <input type="text" id="searchName" placeholder="Job title, keywords, or company" onChange={handleStyleChange}/>
            <div id="nav-buttons">
                <div className="dropdown">
                    <button id="city" className="dropbtn" onChange={handleStyleChange}>City</button>
                    <div id="myDropdown" className="dropdown-content" >
                        <a>Atlanta</a>
                        <a>Boston</a>
                        <a>Charlotte</a>
                        <a>Chicago</a>
                        <a>Dallas</a>
                        <a>Denver</a>
                        <a>DC</a>
                        <a>Houston</a>
                        <a>Los Angeles</a>
                        <a>Miami</a>
                        <a>Nashville</a>
                        <a>New York</a>
                        <a>Oakland</a>
                        <a>Portland</a>
                        <a>Salt Lake City</a>
                        <a>San Francisco</a>
                        <a>Seattle</a>
                    </div>
                </div>

                <div className="dropdown">
                    <button id="languages" className="dropbtn" onChange={handleStyleChange}>Languages</button>
                    <div id="myDropdown" className="dropdown-content" >
                        <a>C#</a>
                        <a>C++</a>
                        <a>Python</a>
                        <a>React</a>
                        <a>SQL</a>
                        <a>Angular</a>
                        <a>Node</a>
                        <a>JavaScript</a>
                    </div>
                </div>

                <div className="dropdown">
                    <button id="company" className="dropbtn" onChange={handleStyleChange}>Company</button>
                    <div id="myDropdown" className="dropdown-content" >
                        <a>Amazon</a>
                        <a>Apple</a>
                        <a>Google</a>
                        <a>Meta</a>
                        <a>Netflix</a>
                        <a>Tesla</a>
                        <a>Twitter</a>
                        <a>Spotify</a>
                    </div>
                </div>


                <div className="dropdown">
                    <button id="salary" className="dropbtn" onChange={handleStyleChange}>Salary</button>
                    <div id="myDropdown" className="dropdown-content" >
                        <a>$0 - $75,000</a>
                        <a>$75,000 - $90,000</a>
                        <a>$90,000 - $100,000</a>
                        <a>$100,000 - $200,000</a>
                        <a>$200,000+</a>
                    </div>
                </div>

                <button id="all" className="all" onClick={handleClick}>All Jobs</button>
            </div>


        </div>
    )

} 
export default Nav