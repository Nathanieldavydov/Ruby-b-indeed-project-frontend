import React, {useState} from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom"

import './style/App.css'
import './style/Nav.css'


import Header from './Components/Header.js';
import Search from './Components/Search';
import Favorite from './Components/Favorite';

function App() {

  // every time we click on the little star in a job card, we will eventually push that one singular job onject 
  // to the Favorites table. This will fulfill one of the CURD requirements for the project

  const [favorites, setFavorites] = useState(0)


  return (
    <BrowserRouter>

     <Header/>
     <Routes >       
        <Route path="/" element={<Search setFavorites={setFavorites}/>}/>
        <Route path="/favorites" element={<Favorite favorites={favorites} setFavorites={setFavorites} />}/>
     </Routes >       
    </BrowserRouter>
  );
}

export default App;