import React, { useEffect, useState } from "react";
import style from "./FootballBodyBetting.module.css";
import axios from "axios";

import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function FootballBodyBetting() {
  const [alignment, setAlignment] = React.useState("");
  const [home, setHome] = useState({});
  const [away, setAway] = useState({});

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const { VITE_APP_DOMAIN } = import.meta.env;
  const [match, setMatch] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${VITE_APP_DOMAIN}/api/football-fixtures?source=frontend&sortColumn=id&sortDirection=desc&limit=10&mm_football_category=body_total`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      )
      .then((response) => {
        setMatch(response.data.data);
        if (response?.data?.data[0]?.under_team_data?.team_type === "home") {
          setHome(response?.data?.data[0]?.under_team_data);
          setAway(response?.data?.data[0]?.over_team_data);
        } else {
          setHome(response?.data?.data[0]?.over_team_data);
          setAway(response?.data?.data[0]?.under_team_data);
        }
        if (response.data.status === "success") {
          console.log("success");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(match);
  // console.log(home);

  // api/football-bettings    api for submit betting
  return (
    <div className={style.mainContainer}>
      <div className="text-end p-2">
        <p>ဘော်ဒီ/ဂိုးပေါင်း</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        {match.length ? (
          match?.map((item) => (
            <div className={`bg-slate-300 w-11/12 rounded-lg mt-3`}>
              <div className={`text-white rounded-lg mb-3 py-1 text-center bg-red-600`}>
                {new Date(item.mm_football_category.created_at).toLocaleString()}
              </div>
              <ToggleButtonGroup
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  paddingBottom: "10px",
                }}
                color="primary"
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment">
                <ToggleButton
                  value="left"
                  aria-label="left aligned"
                  style={{
                    fontSize: "12px",
                    width: "40vw",
                    borderWidth: "1px",
                    borderColor: "#7f7f7f",
                    borderRadius: "3px ",
                    margin: "1px",
                  }}>
                  {item?.over_team_data.team_type === "home"
                    ? item?.over_team_data?.name
                    : item?.under_team_data?.name}
                </ToggleButton>
                <ToggleButton
                  value="right"
                  aria-label="right aligned"
                  style={{
                    fontSize: "12px",
                    width: "40vw",
                    borderWidth: "1px",
                    borderColor: "#7f7f7f",
                    borderRadius: "3px ",
                    margin: "1px",
                  }}>
                  {item?.under_team_data.team_type === "away"
                    ? item?.under_team_data?.name
                    : item?.over_team_data?.name}
                </ToggleButton>
                <ToggleButton
                  value="home"
                  aria-label="home aligned"
                  style={{
                    fontSize: "12px",
                    width: "30vw",
                    borderWidth: "1px",
                    borderColor: "#7f7f7f",
                    borderRadius: "3px ",
                    margin: "1px",
                  }}>
                  <h1>hello</h1>
                </ToggleButton>
                <div style={{ width: "15vw" }}></div>
                <ToggleButton
                  value="away"
                  aria-label="away aligned"
                  style={{
                    fontSize: "12px",
                    width: "30vw",
                    borderWidth: "1px",
                    borderColor: "#7f7f7f",
                    borderRadius: "3px ",
                    margin: "1px",
                  }}>
                  <h1>Hello</h1>
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          ))
        ) : (
          // <div className="">
          //   <ToggleButtonGroup
          //     color="primary"
          //     value={alignment}
          //     exclusive
          //     onChange={handleAlignment}
          //     aria-label="text alignment">
          //     <ToggleButton style={{ width: "40vw" }} value="left" aria-label="left aligned">
          //       {/* <h1>Home</h1> */}
          //       {home.name}
          //     </ToggleButton>
          //     <ToggleButton style={{ width: "40vw" }} value="center" aria-label="centered">
          //       {away.name}
          //     </ToggleButton>
          //   </ToggleButtonGroup>
          // </div>
          <p className={`text-red-600`}>No Match</p>
        )}
      </div>
      <div className=" fixed bottom-0 pb-2 bg-slate-800 w-full h-16 pt-2">
        <div className="form-group flex justify-around h-12">
          <p className="w-36">ထိုးမည့်ပမာဏကိုထည့်ပါ</p>
          <input
            type="number"
            className="form-control text-center text-black rounded-xl mr-1 sm:w-52 md:w-full bg-slate-200"
          />
          <button className="btn rounded-full border bg-red-600 text-white">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default FootballBodyBetting;
