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
import ForgotPassword from "../ForgotPassword/ForgotPassword.jsx";

import Login from "../Login/Login";
import RecordList from "../RecordList/RecordList";
import Transition from "../Transition/Transition";
import SignUp from "../Login/SignUp/SignUp";
import ChangePassword from "../Setting/Profile/Change Password/ChangePassword";
import ConnectAgent from "../Setting/Profile/ConnectAgent/ConnectAgent";
import Deposit from "../Transition/Deposit/Deposit";
import Withdraw from "../Transition/Withdraw/Withdraw";
import XMoung from "../FootballBetting/XMoung/XMoung";
import DonneMoung from "../FootballBetting/DonneMoung/DonneMoung";
// import DepositForm from "../Transition/Deposit/DepositForm/DepositForm";
// import WithdrawForm from "../Transition/Withdraw/WithdrawForm/WithdrawForm";

import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext(null);
function Router() {
  const { VITE_APP_DOMAIN } = import.meta.env;
  const [dataResponse, setDataResponse] = useState({});
  useEffect(() => {
    axios
      .get(`${VITE_APP_DOMAIN}/api/get-login-user`, {
        method: "GET",
        headers: {
          authorization: localStorage.getItem("lToken"),
          accept: "application/json",
        },
      })
      .then((res) => {
        setDataResponse(res.data.data.customer);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <UserContext.Provider value={dataResponse}>
      <Routes>
        <Route exact index path="/" element={<Login />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/forgot_password" element={<ForgotPassword />}></Route>

        {/* football betting */}
        <Route path="/footballbetting" element={<FootballBetting />}></Route>
        <Route path="/footballbetting/body_betting" element={<FootballBodyBetting />}></Route>
        <Route path="/footballbetting/xmoung_betting" element={<XMoung />}></Route>
        <Route path="/footballbetting/donne-moung_betting" element={<DonneMoung />}></Route>
        <Route path="/footballbetting/football_result" element={<FootballResult />}></Route>
        <Route path="/footballbetting/current_bet_history" element={<CurrentBetHistory />}></Route>

        <Route path="/livefootball" element={<LiveFootball />}></Route>
        {/* setting */}
        <Route path="/setting" element={<Setting />}></Route>
        <Route path="setting/profile" element={<Profile />}></Route>
        <Route path="setting/profile/changepassword" element={<ChangePassword />}></Route>
        <Route path="/setting/profile/connectagent" element={<ConnectAgent />}></Route>
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

        {/* Record List */}
        <Route path="/recordlist" element={<RecordList />} />
        {/* Transition */}
        <Route path="/transition" element={<Transition />}></Route>
        <Route path="/transition/deposit" element={<Deposit />}></Route>
        <Route path="/transition/withdraw" element={<Withdraw />}></Route>

        {/* <Route path={"/transition/deposit/depositform"} element={<DepositForm />}></Route>
      <Route path={"/transition/withdraw/withdrawform"} element={<WithdrawForm />}></Route> */}

        {/* Error */}
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default Router;
