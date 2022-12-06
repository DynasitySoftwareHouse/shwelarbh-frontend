import React from "react";
import style from "./FootballResult.module.css";

// MUI
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function FootballResult() {
  const [value, setValue] = React.useState(null);

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
