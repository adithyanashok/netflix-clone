import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import './App.css'
import {originals, action, ComedyMovies, HorrorMovies, RomanceMovies, Tv} from './urls'
import {BrowserRouter as Router, Route, Routes, Link, useNavigate} from 'react-router-dom'

import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/Rowpost/Rowpost";
import Movies from "./Components/Movies/Movies";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Originals' />
      <Rowpost url={action} title='Action' isSmall />
      <Rowpost url={ComedyMovies} title='Comedy' isSmall />
      <Rowpost url={HorrorMovies} title='Horror' isSmall />
      <Rowpost url={RomanceMovies} title='Romance' isSmall />
      
    </div>
  );
}

export default App;
