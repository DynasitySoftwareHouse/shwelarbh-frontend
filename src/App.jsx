
=======
import { useState } from 'react'
import './App.css'
import Router from './components/routes/Router.jsx'
import {BrowserRouter} from 'react-router-dom';
import ColorDescription from './components/2D/ColorDescription/ColorDescription'
function App() {
  return (


   <BrowserRouter>
    <div className="App">
      <Router></Router>

    </div>
   </BrowserRouter>
  )
}

export default App