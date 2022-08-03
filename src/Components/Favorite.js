import React/*, {useState}*/ from 'react'



function Favorite ({favorites, setFavorites}){
    
    // create 
    function handleDeleteClick() {
        fetch(`from a json in a different file,`, {
        method: "DELETE",
        })
        .then((r) => r.json())
        .then((deletedJob) => (setFavorites(favorites.filter(!deletedJob))));
    }

    // post


    // patch 
     
    return(
        <div> 
            <div id="filtered">
                <h5>Favorite Jobs</h5>
                <button onClick={handleDeleteClick} class="fa-solid fa-trash-can"></button>
                <div class="ruby-jobs">
                    <h5>Job Title</h5>
                    <p>Job Description</p>
                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    <p>Job Salary</p>
                </div>
            </div>
        </div>
    )

} 
export default Favorite