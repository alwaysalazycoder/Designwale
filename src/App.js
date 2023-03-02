import React from 'react'
import "./styles/app.css"
import { Link, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';

import UploadPoster from './components/Admin/UploadPoster.jsx';
import UploadTestimony from './components/Admin/UploadTestimony';
import "./styles/header.css"
import "./styles/home.css"
import UploadReels from './components/Admin/UploadReels';
import Login from './components/Admin/Login';
import "./styles/mediaQueries.css"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path= "/" element = {<Main/>} />
          <Route exact path= "/admin/upload/posters" element = {<UploadPoster />} />
          <Route exact path= "/admin/upload/testimony" element = {<UploadTestimony />} />
          <Route exact path= "/admin/upload/reels" element = {<UploadReels/>} />
          <Route exact path = "/admin/login" element = {<Login/>} />
          
        </Routes>
      </Router>




    </>
  )
}

export default App