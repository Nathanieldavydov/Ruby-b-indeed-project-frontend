import React/*, {useState}*/ from 'react'
import FavoriteJobCard from './FavoriteJobCard'



function Favorite ({favorites, setFavorites}){
    
    const jobCard = favorites.map((job) => 
    <FavoriteJobCard 
      key = {job.id}
      job={job}
      setFavorites={setFavorites}
    />)


    // delete 
    function handleDeleteClick() {
        fetch(`from a json in a different file,`, {
        method: "DELETE",
        })
        .then((r) => r.json())
        .then((deletedJob) => (setFavorites(favorites.filter(!deletedJob))));
    }

    // post
    //add favorite id to the other table .id
    //

    // patch 

    function handleComment(event, key){
        setFavorites({...favorites, [key]:event.target.value, all: false})
    }
     
    return(
        <div> 
            <div id="filtered">
                <h3>Favorite Jobs</h3>
                <button onClick={handleDeleteClick} class="fa-solid fa-trash-can">Delete</button>
                {jobCard}
            </div>
            
            <input type="text" id="favoriteComment" placeholder="Add your comment here" onChange={(e) => handleComment(e,'favoriteComment')}/>
        </div>
    )

} 
export default Favorite


