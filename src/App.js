import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom"

import './style/App.css'
import './style/Nav.css'


import Header from './Components/Header.js';
import Job from './Components/Job';
import Search from './Components/Search';
import Favorite from './Components/Favorite';

function App() {


  return (
    <BrowserRouter>

     <Header/>
     <Routes >       
        <Route path="/" element={<Search/>}/>
        <Route path="/favorites" element={<Favorite/>}/>
     </Routes >       
    </BrowserRouter>
  );
}

export default App;