import React from "react";
import style from "./FootballBetting.module.css";
// image
import footballBodyBetting from "../../assets/icons/footballBetting.jpeg";
import footballMaungBetting from "../../assets/betFootball2.jpeg";
import footballXMaungBetting from "../../assets/betFootball3.jpeg";
import footballResult from "../../assets/icons/footballResult1.jpeg";
import currentBetHistory from "../../assets/icons/currentBetHistory1.jpeg";

function FootballBetting() {
  return (
    <div className={style.mainContainer}>
      <div className="flex md:flex-wrap min-[320px]:flex-col justify-center items-center">
        <div>
          <a
            href="/footballbetting/body_betting"
            className="btn bg-transparent mt-5 border-none h-52 w-52 rounded-lg">
            <img src={footballBodyBetting} alt="" className="rounded-lg w-52 h-40" />
          </a>
          <p className="text-white text-center" style={{ textShadow: "#000000 5px 5px 10px" }}>
            Football Body Betting
          </p>
        </div>

        <div>
          <a
            href="/footballbetting/donne-moung_betting"
            className="btn bg-transparent mt-5 border-none h-52 w-52 rounded-lg">
            <img src={footballMaungBetting} alt="" className="rounded-lg w-52 h-40" />
          </a>
          <p
            className="text-white text-shadow-lg text-center"
            style={{ textShadow: "#00000080 5px 5px 5px" }}>
            Football Maung Betting
          </p>
        </div>

        <div>
          <a
            href="/footballbetting/xmoung_betting"
            className="btn bg-transparent mt-5 border-none h-52 w-52 rounded-lg">
            <img src={footballXMaungBetting} alt="" className="rounded-lg w-52 h-40" />
          </a>
          <p
            className="text-white text-shadow-lg text-center"
            style={{ textShadow: "#00000080 5px 5px 5px" }}>
            Football X-Maung Betting
          </p>
        </div>

        <div>
          <a
            href="/footballbetting/football_result"
            className="btn bg-transparent mt-5 border-none h-52 w-52 rounded-lg">
            <img src={footballResult} alt="" className="rounded-lg w-52 h-40" />
          </a>
          <p
            className="text-white text-shadow-lg text-center"
            style={{ textShadow: "#00000080 5px 5px 5px" }}>
            Football Result
          </p>
        </div>

        <div className="mb-5">
          <a
            href="/footballbetting/current_bet_history"
            className="btn bg-transparent mt-5 border-none h-52 w-52 rounded-lg">
            <img src={currentBetHistory} alt="" className="rounded-lg w-52 h-40" />
          </a>
          <p
            className="text-white text-shadow-lg text-center"
            style={{ textShadow: "#00000080 5px 5px 5px" }}>
            Current Bet History
          </p>
        </div>
      </div>
    </div>
  );
}

export default FootballBetting;
