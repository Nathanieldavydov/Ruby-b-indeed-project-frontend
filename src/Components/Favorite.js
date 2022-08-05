import React, {useState, useEffect} from 'react'
import FavoriteJobContainer from './FavoriteJobContainer'




function Favorite ({listings}){

    const [favorites, setFavorites] = useState([{}])

    useEffect( () => {
        fetch(`http://localhost:9292/list-favorites`)
        .then(res => res.json())
        .then(data => setFavorites(data))
    }, [])

    

    



    // fml this is supposed to be a post but it's going to be another patch 
    //add favorite id to the other table .id
  
        

    // delete, I'm not sure if I did this correctly...
    // function handleDeleteClick(event, key) {
    //     fetch(`localhost:9292/favorites/${key}`, {
    //     method: "DELETE",
    //     })
    // }

   

    // patch 

    // function handleComment(event, key){
    //     fetch(`https://example.com/profile/${key}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(event.target.value),
    //     })
    // }
     
    return(
        <div> 
            <div id="filtered">
                <h3>Favorite Jobs</h3>
                    <FavoriteJobContainer favorites = {favorites} listings = {listings}/>
            </div>
            
        </div>
    )
}
 
export default Favorite


