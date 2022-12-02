import { useState } from 'react'
import './App.css'
import Router from './components/routes/Router.jsx'
import {BrowserRouter} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
    <div className="App">
      <Router></Router>
    </div>
   </BrowserRouter>
  )
}

export default App
