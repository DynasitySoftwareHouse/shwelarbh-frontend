import React from 'react'
import {Routes,BrowserRouter,Route} from'react-router-dom';
import Home from '../Home/Home.jsx';
import Setting from '../Setting/Setting'
import Error from '../Error/Error'
import Profile from '../Setting/Profile/Profile'

function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Home/> }></Route>
      <Route path="/setting" element={ <Setting/> }></Route>
      <Route path="setting/profile" element={<Profile/>}></Route>

      {/* Error */}
      <Route path="/*" element={ <Error/> }></Route>
    </Routes>
  )
}

export default Router