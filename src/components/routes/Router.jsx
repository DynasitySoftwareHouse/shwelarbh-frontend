import React from 'react'
import {Routes,BrowserRouter,Route} from'react-router-dom';
import Home from '../Home/Home.jsx';
import Setting from '../Setting/Setting'
import Error from '../Error/Error'
import Profile from '../Setting/Profile/Profile'
import Myanmar3d from '../Myanmar3d/Myanmar3d'
import About from '../AboutUs/About'

function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Home/> }></Route>
      <Route path="/setting" element={ <Setting/> }></Route>
      <Route path="setting/profile" element={<Profile/>}></Route>
      <Route path="/myanmar3d" element={<Myanmar3d/> }></Route>
      <Route path="/shwelarb" element={<About/>}></Route>

      {/* Error */}
      <Route path="/*" element={ <Error/> }></Route>
    </Routes>
  )
}

export default Router