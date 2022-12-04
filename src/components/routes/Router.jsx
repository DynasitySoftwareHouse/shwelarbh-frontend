import React from 'react'
import {Routes,BrowserRouter,Route} from'react-router-dom';
import Home from '../Home/Home.jsx';
import Setting from '../Setting/Setting'
import Error from '../Error/Error'
import Profile from '../Setting/Profile/Profile'
import Myanmar3d from '../Myanmar3d/Myanmar3d'
import About from '../AboutUs/About'
import LiveFootball from '../LiveFootball/LiveFootball'
import WinnerList from '../WinnerList/WinnerList'
import Myanmar2d from '../2D/TwoD'
import FootballBetting from '../FootballBetting/FootballBetting'

function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Home/> }></Route>
      <Route path="/footballbetting" element={<FootballBetting/>}></Route>
      <Route path="/livefootball" element={<LiveFootball/>}></Route>
      <Route path="/setting" element={ <Setting/> }></Route>
      <Route path="setting/profile" element={<Profile/>}></Route>
      <Route path="/myanmar2d" element={<Myanmar2d/>}></Route>
      <Route path="/myanmar3d" element={<Myanmar3d/> }></Route>
      <Route path="/winnerlist" element={<WinnerList/>}></Route>
      <Route path="/shwelarb" element={<About/>}></Route>

      {/* Error */}
      <Route path="/*" element={ <Error/> }></Route>
    </Routes>
  )
}

export default Router