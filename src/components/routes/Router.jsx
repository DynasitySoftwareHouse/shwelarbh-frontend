import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "../Home/Home.jsx";
import Setting from "../Setting/Setting";
import Error from "../Error/Error";
import Profile from "../Setting/Profile/Profile";
import Myanmar3d from "../Myanmar3d/Myanmar3d";
import About from "../AboutUs/About";
import LiveFootball from "../LiveFootball/LiveFootball";
import WinnerList from "../WinnerList/WinnerList";
import Myanmar2d from "../2D/TwoD";
import FootballBetting from "../FootballBetting/FootballBetting";
import TransitionHistory from "../Setting/TransitionHistory/TransitionHistory";
import FootballBodyBetting from "../FootballBetting/FootballBodyBetting/FootballBodyBetting";
import CurrentBetHistory from "../FootballBetting/CurrentBetHistory/CurrentBetHistory";
import FootballResult from "../FootballBetting/FootballResult/FootballResult";
import ColorDescription from "../2D/ColorDescription/ColorDescription";
import LuckyNumber from "../2D/LuckyNumber/LuckyNumber";
import TwoDList from "../2D/2DLists/TwoDLists";

import Login from "../Login/Login";
import RecordList from "../RecordList/RecordList";
import Transition from "../Transition/Transition";
import SignUp from "../Login/SignUp/SignUp";
import ChangePassword from "../Setting/Profile/Change Password/ChangePassword";
import ConnectAgent from "../Setting/Profile/ConnectAgent/ConnectAgent";

function Router() {
  return (
    <Routes>
      <Route exact index path="/" element={<Login />}></Route>
      <Route exact path="/signup" element={<SignUp />}></Route>
      <Route exact path="/home" element={<Home />}></Route>
      {/* football betting */}
      <Route exact path="/footballbetting" element={<FootballBetting />}></Route>
      <Route exact path="/footballbetting/body_betting" element={<FootballBodyBetting />}></Route>
      <Route exact path="/footballbetting/football_result" element={<FootballResult />}></Route>
      <Route
        exact
        path="/footballbetting/current_bet_history"
        element={<CurrentBetHistory />}></Route>

      <Route exact path="/livefootball" element={<LiveFootball />}></Route>
      {/* setting */}
      <Route exact path="/setting" element={<Setting />}></Route>
      <Route exact path="setting/profile" element={<Profile />}></Route>
      <Route exact path="setting/profile/changepassword" element={<ChangePassword />}></Route>
      <Route exact path="/setting/profile/connectagent" element={<ConnectAgent />}></Route>
      <Route exact path="/setting/transition" element={<TransitionHistory />}></Route>
      {/* 2d */}
      <Route exact path="/myanmar2d" element={<Myanmar2d />}></Route>
      <Route exact path="/myanmar2d/color_description" element={<ColorDescription />}></Route>
      <Route exact path="/myanmar2d/lottery" element={<LuckyNumber />}></Route>
      <Route exact path="/myanmar2d/two_d_list" element={<TwoDList />}></Route>
      {/* 3d */}
      <Route exact path="/myanmar3d" element={<Myanmar3d />}></Route>
      {/* winner list */}

      <Route exact path="/winnerlist" element={<WinnerList />}></Route>

      {/* Record List */}
      <Route exact path="/recordlist" element={<RecordList />} />
      {/* Transition */}
      <Route exact path="/transition" element={<Transition />} />

      {/* Error */}
      <Route exact path="/*" element={<Error />}></Route>
    </Routes>
  );
}

export default Router;
