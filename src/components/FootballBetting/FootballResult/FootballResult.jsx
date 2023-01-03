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

  useEffect(() => {
    axios
      .get(
        `${VITE_APP_DOMAIN}api/football-fixtures?source=dashboard&sortColumn=id&sortDirection=desc&limit=10&mm_football_category=body_total`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === "success") {
          console.log("success");
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [value, setValue] = React.useState(null);
  // console.log(new Date(value.$d).toLocaleDateString("fr-CA"));

  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.datePickerContainer}>
          <div className="flex justify-between items-center p-5 fixed top-0">
            <p className="m-5">Select Date</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                className={style.label}
                label="Select Date"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div className="flex justify-center items-center" style={{ height: "100vh" }}>
          <p className="text-center text-white">There is no Match</p>
        </div>
      </div>
    </>
  );
}

export default FootballResult;
