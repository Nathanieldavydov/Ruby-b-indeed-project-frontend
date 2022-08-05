import React, {useEffect} from 'react'
import FavoriteJobCard from './FavoriteJobCard'



function Favorite ({favorite, jobCard}){
    
    
    useEffect(() => {
        // console.log("useEffect is starting")
        fetch(`http://localhost:9292/favorites/${favorite}`)
        .then(response => response.json())
        .then((fav) => {
            const  jobCard=fav.map((job) => 
                <FavoriteJobCard 
                key = {job.id}
                job={job}
                />)
            })
    }, [])

    // fml this is supposed to be a post but it's going to be another patch 
    //add favorite id to the other table .id
  
        

    // delete, I'm not sure if I did this correctly...
    function handleDeleteClick(event, key) {
        fetch(`localhost:9292/favorites/${key}`, {
        method: "DELETE",
        })
    }

   

    // patch 

    function handleComment(event, key){
        fetch(`https://example.com/profile/${key}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(event.target.value),
        })
    }
     
    return(
        <div> 
            <div id="filtered">
                <h3>Favorite Jobs</h3>
                <button onClick={(e) => handleDeleteClick(e,'foreign_id')} class="fa-solid fa-trash-can">Delete</button>
                {/* name foreign id */}
                {jobCard}
            </div>
            
            <input type="text" id="favoriteComment" placeholder="Add your comment here" onChange={(e) => handleComment(e,'favoriteComment')}/>
        </div>
    )

} 
export default Favorite


