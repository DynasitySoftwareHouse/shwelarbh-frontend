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
                {new Date(Number(item.fixture_timestamp)).toLocaleString()}
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
                  {`${
                    item?.over_team_data.team_type === "home"
                      ? item?.over_team_data?.name
                      : item?.under_team_data?.name
                  }` + `${" (" + item.body + ")"}`}
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
                  {`${
                    item?.under_team_data.team_type === "away"
                      ? item?.under_team_data?.name
                      : item?.over_team_data?.name
                  }`}
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
                  {item?.over_team_data.team_type === "home" ? (
                    <p className={`text-lime-600 flex `}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ width: "12px", marginRight: "10px" }}
                        fill="green"
                        viewBox="0 0 384 512">
                        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                      </svg>{" "}
                      Over
                    </p>
                  ) : (
                    <p className={`text-red-600 flex`}>
                      Under{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="red"
                        style={{ width: "12px", marginLeft: "10px" }}
                        viewBox="0 0 384 512">
                        <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                      </svg>{" "}
                    </p>
                  )}
                </ToggleButton>
                <div
                  className={`text-center flex justify-center items-center text-black`}
                  style={{
                    width: "15vw",
                    height: "48px",
                    borderColor: "#7f7f7f",
                    borderWidth: "1px",
                  }}>
                  {item.total}
                </div>
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
                  {item?.under_team_data.team_type === "away" ? (
                    <p className={`text-red-600 flex`}>
                      Under{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ width: "12px", marginLeft: "10px" }}
                        fill="red"
                        viewBox="0 0 384 512">
                        <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                      </svg>{" "}
                    </p>
                  ) : (
                    <p className={`text-lime-600 flex`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="green"
                        style={{ width: "12px", marginRight: "10px" }}
                        viewBox="0 0 384 512">
                        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                      </svg>{" "}
                      Over
                    </p>
                  )}
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
          <p className={`text-red-600 m-auto`}>No Match</p>
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
