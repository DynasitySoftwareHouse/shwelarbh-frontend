import React from 'react'
import {Routes,BrowserRouter,Route} from'react-router-dom';
import Home from '../Home/Home.jsx';

function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Home/> }></Route>
    </Routes>
  )
}

export default Router