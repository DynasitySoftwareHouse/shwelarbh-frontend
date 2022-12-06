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

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* football betting */}
      <Route path="/footballbetting" element={<FootballBetting />}></Route>
      <Route path="/footballbetting/body_betting" element={<FootballBodyBetting />}></Route>
      <Route path="/footballbetting/football_result" element={<FootballResult />}></Route>
      <Route path="/footballbetting/current_bet_history" element={<CurrentBetHistory />}></Route>

      <Route path="/livefootball" element={<LiveFootball />}></Route>
      {/* setting */}
      <Route path="/setting" element={<Setting />}></Route>
      <Route path="setting/profile" element={<Profile />}></Route>
      <Route path="/setting/transition" element={<TransitionHistory />}></Route>
      {/* 2d */}
      <Route path="/myanmar2d" element={<Myanmar2d />}></Route>
      <Route path="/myanmar2d/color_description" element={<ColorDescription />}></Route>
      <Route path="/myanmar2d/lottery" element={<LuckyNumber />}></Route>
      <Route path="/myanmar2d/two_d_list" element={<TwoDList />}></Route>
      {/* 3d */}
      <Route path="/myanmar3d" element={<Myanmar3d />}></Route>
      {/* winner list */}
      <Route path="/winnerlist" element={<WinnerList />}></Route>
      <Route path="/shwelarb" element={<About />}></Route>

      {/* Error */}
      <Route path="/*" element={<Error />}></Route>
    </Routes>
  );
}

export default Router;
