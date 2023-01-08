import React, { useEffect, useState } from "react";
import style from "./FootballResult.module.css";

// MUI
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import lToken from "../../../services/Token";
import axios from "axios";

function FootballResult() {
  const { VITE_APP_DOMAIN } = import.meta.env;
  const [value, setValue] = useState(new Date().toLocaleDateString("fr-ca"));
  const [matchData, setMatchData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "de5a6e2786mshd2cca000412558cp179a11jsn95a05a041a22",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .get(`https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${value}`, options)
      .then((response) => {
        // return response.response;
        console.log(response.data.response);
        setMatchData(response.data.response);
      })
      .catch((err) => console.error(err));
  }, []);

  const football_fixtures = (value) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "de5a6e2786mshd2cca000412558cp179a11jsn95a05a041a22",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    console.log("selected date is == " + value);

    return fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${value}`, options)
      .then((response) => response.json())
      .then((response) => {
        // return response.response;
        setMatchData(response.response);
        return response.response;
      })
      .catch((err) => console.error(err));
    // break football_fixtures
  };
  // football_fixtures(value);
  console.log(value);
  console.log(matchData);
  // console.log(new Date(value.$d).toLocaleDateString("fr-CA"));

  return (
    <>
      <div
        className={`${
          (matchData?.length === 0 && `${style.heightFull}`) ||
          (matchData?.length >= 1 && `${style.mainContainer}`)
        }`}>
        <div className={style.datePickerContainer}>
          <div className="flex justify-between items-center p-5">
            <p className="m-5">Select Date</p>
            <input
              style={{ padding: "5px 10px", fontSize: "20px" }}
              type="date"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                football_fixtures(e.target.value);
              }}
            />
          </div>
        </div>
        <div className={`${style.matchMainContainer}`}>
          {matchData ? (
            matchData?.map((match) => (
              <div className={`${style.card} text-center`} key={match.fixture.id}>
                <p className={`font-bold py-3`}>{match.league.name}</p>
                <div className={`flex`}>
                  <div className={`w-5/12`}>
                    <div className={`${style.home}`}>
                      <p className={`text-xl px-3`}>{match.goals.home}</p>
                      <img className={`w-20`} src={match.teams.home.logo} alt="" />
                    </div>
                    <p className={`text-center`}>{match.teams.home.name}</p>
                  </div>
                  <span className={`text-2xl font-bold m-auto`}>VS</span>
                  <div className={`w-5/12`}>
                    <div className={`${style.away}`}>
                      <p className={`text-xl px-3`}>{match.goals.away}</p>
                      <img className={`w-20`} src={match.teams.away.logo} alt="" />
                    </div>
                    <p className={`text-center`}>{match.teams.away.name}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-white">There is no Match</p>
          )}
        </div>
      </div>
    </>
  );
}

export default FootballResult;
