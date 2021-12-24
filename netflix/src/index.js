import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {originals, action, ComedyMovies, HorrorMovies, RomanceMovies, Documentaries} from './urls'

import Movies from "./Components/Movies/Movies";
import {BrowserRouter as Router, Route, Routes, Link, useNavigate} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
          <Router>
        <Routes>
          <Route exact path='/' element={<App/>} />
          <Route element={<App />} path='/' />
          <Route path='movies' element={<Movies url={Documentaries} title='Documentries' />}/>
        </Routes>
      </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);


