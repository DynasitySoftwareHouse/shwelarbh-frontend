import React, { useState, useEffect } from "react";
import style from "./CurrentBetHistory.module.css";
// MUI
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

import axios from "axios";
import lToken from "../../../services/Token";

import resultBanner from "../../../assets/history.jpeg";

function FootballResult() {
  const { VITE_APP_DOMAIN } = import.meta.env;
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [betHistory, setBetHistory] = useState([]);
  const [mainHistory, setMainHistory] = useState([]);

  console.log("Bet History :", betHistory);
  console.log("Main History :", mainHistory);
  useEffect(() => {
    axios
      .get(
        `${VITE_APP_DOMAIN}api/football-bettings/bet-user-table-report?start_date=${startDate}&end_date=${endDate}&status`,
        {
          methods: "GET",
          headers: {
            authorization: lToken,
            accept: "application/json",
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          setBetHistory(response.data.data[0].detail);
          setMainHistory(response.data.data);
          console.log("success");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [
    `${VITE_APP_DOMAIN}api/football-bettings/bet-user-table-report?start_date=${startDate}&end_date=${endDate}&status`,
  ]);

  // console.log(value[0].$d.toLocaleDateString(), value[1].$d.toLocaleDateString());
  return (
    <div className={style.mainContainer}>
      <div className="pt-2">
        <img src={resultBanner} alt="" className=" w-96 m-auto rounded-lg" />
      </div>
      <div className=" flex justify-around mt-5 p-2">
        <p className={`text-center text-black p-2`}>From</p>
        <input
          type="date"
          className={`p-2 rounded-lg`}
          value={startDate}
          onChange={(e) => {
            setStartDate(e.target.value);
          }}
        />
        <p className={`text-center text-black p-2`}>To</p>
        <input
          type="date"
          className={`p-2 rounded-lg`}
          value={endDate}
          onChange={(e) => {
            setEndDate(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        {betHistory ? (
          betHistory.map((item) => (
            <div key={item.id} className={`w-11/12`}>
              <div className={`bg-slate-300 rounded-lg m-2 p-4 border-red-400 border-2`}>
                <p className={`text-black p-3`}>
                  {new Date(item.created_at).toLocaleDateString()}
                  <span className={`ml-3 `}>{`( ${new Date(
                    item.created_at
                  ).toLocaleTimeString()} )`}</span>
                </p>
                <p className={`px-4`}>
                  {item.bet_fixtures[0].bet_type === "body" ? (
                    <p className={`text-black`}> Body + Total </p>
                  ) : (
                    "DonneMoung"
                  )}
                </p>
                <table className={`w-full text-center text-black`}>
                  <tbody>
                    <tr className={`w-full`}>
                      <td> Stake :</td>
                      <td>{item.amount} Unit</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className={`text-green-700`}>Accept</td>
                    </tr>
                  </tbody>
                </table>
                <p className={`text-black px-4`}>
                  Winnings:{" "}
                  <span className={`ml-5`}>{item.amount * 2 - item.amount * 0.1} Unit</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-red-700 font-bold">No History</p>
        )}
      </div>
    </div>
  );
}

export default FootballResult;
