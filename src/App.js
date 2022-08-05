import React, {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom"

import './style/App.css'


import Header from './Components/Header.js';
import Search from './Components/Search';
import Favorite from './Components/Favorite';

function App() {

  // every time we click on the little star in a job card, we will eventually push that one singular job onject 
  // to the Favorites table. This will fulfill one of the CURD requirements for the project

  const [favorite, setFavorite] = useState(0)
  const [jobs, setJobs] = useState([])

  useEffect( () => {
    fetch(`http://localhost:9292/listings`)
    .then(res => res.json())
    .then((data) => setJobs(data))
  }, [])  

  return (
    <BrowserRouter>

     <Header/>
     <Routes >       
        <Route path="/" element={<Search listings = {jobs}/>}/>
        <Route path="/favorites" element={<Favorite favorite={favorite} />}/>
     </Routes >       
    </BrowserRouter>
  );
}

export default App;