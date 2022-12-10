import React, { useState } from "react";
import style from "./CurrentBetHistory.module.css";
// MUI
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

import resultBanner from "../../../assets/history.jpeg";

function FootballResult() {
  const [value, setValue] = React.useState([null, null]);

  return (
    <div className={style.mainContainer}>
      <div className="pt-2">
        <img src={resultBanner} alt="" className=" w-96 m-auto rounded-lg" />
      </div>
      <div className="mt-5 p-2">
        <LocalizationProvider dateAdapter={AdapterDayjs} localeText={{ start: "From", end: "To" }}>
          <DateRangePicker
            className="text-white"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} className="bg-red-200 rounded-lg md:w-96 md:ml-24  " />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} className="bg-red-200 rounded-lg md:w-96 md:ml-24 " />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>
      </div>
      <div className="flex justify-center items-center pt-52">
        <p className="text-red-700 font-bold">No History</p>
      </div>
    </div>
  );
}

export default FootballResult;
