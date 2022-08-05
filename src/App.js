import React, {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom"

import './style/App.css'
import './style/SearchAndDropdown.css'
import './style/Jobs.css'
import './style/Favorite.css'



import Header from './Components/Header.js';
import Search from './Components/Search';
import Favorite from './Components/Favorite';

function App() {

  // every time we click on the little star in a job card, we will eventually push that one singular job onject 
  // to the Favorites table. This will fulfill one of the CURD requirements for the project

  const [favorites, setFavorites] = useState([{}])
  const [jobs, setJobs] = useState([])

  useEffect( () => {
    fetch(`http://localhost:9292/listings`)
    .then(res => res.json())
    .then((data) => setJobs(data))
  }, [])  

  useEffect( () => {
      fetch(`http://localhost:9292/list-favorites`)
      .then(res => res.json())
      .then(data => setFavorites(data))
  }, [])

  return (
    <BrowserRouter>

     <Header/>
     <Routes >       
        <Route path="/" element={<Search listings = {jobs} favorites={favorites} setFavorites={setFavorites}/>}/>
        <Route path="/favorites" element={<Favorite listings = {jobs} favorites={favorites} setFavorites={setFavorites}/>}/>
     </Routes >       
    </BrowserRouter>
  );
}

export default App;