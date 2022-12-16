import React, { useState, useEffect } from "react";
import userImage from "../../../assets/icons/profile1.png";
import axios from "axios";
import style from "./Profile.module.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
// import Logout from "./Logout";
function Profile(props) {
  const { VITE_APP_DOMAIN } = import.meta.env;
  const [dataResponse, setDataResponse] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
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
        setDataResponse(res.data.data);
        if (res.status === "success") {
          navigate("/home");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // console.log(dataResponse);
  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <div className="sm:flex sm:flex-col md:flex-row sm:items-center">
          {/* user image */}
          <div className="flex justify-center pt-3 pb-3">
            <img
              src={userImage}
              alt=""
              className="rounded-full sm: w-28 md:w-48 md:ml-5 border"
              // style={{ width: "100px" }}
            />
          </div>
          {/* user info */}
          <div className="card bg-white md:ml-5">
            <table className="text-black sm:w-96">
              <tbody>
                <tr>
                  <td className={style.caption}>Name -</td>
                  <td className={style.details}>{dataResponse?.name}</td>
                </tr>
                <tr>
                  <td className={style.caption}>Email -</td>
                  <td className={style.details}>{dataResponse?.email}</td>
                </tr>
                <tr>
                  <td className={style.caption}>Country -</td>
                  <td className={style.details}>{dataResponse?.region?.country_name}</td>
                </tr>
                <tr>
                  <td className={style.caption}>Balance -</td>
                  <td className={style.details}>{dataResponse?.wallet?.main_unit} Units</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Button group */}
          <div className="">
            <div className="sm:flex  md:flex-col sm:flex-wrap sm: items-center sm: justify-center mt-5 md:ml-5">
              <a
                href="/recordlist"
                className="btn bg-white text-black m-2 md:w-80 border-white sm: w-44 p-2">
                Bet Record
              </a>
              <a
                href="/setting/profile/changepassword"
                className="btn bg-white text-black m-2 md:w-80 border-white sm: w-44 p-2">
                Change Password
              </a>
              <a className="btn bg-white text-black m-2 md:w-80 border-white sm: w-44 p-2">
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  style={{ color: "#000" }}>
                  Language
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}>
                  <MenuItem onClick={handleClose}>English</MenuItem>
                  <MenuItem onClick={handleClose}>Myanmar Unicode</MenuItem>
                  <MenuItem onClick={handleClose}>Myanmar Zawgyi</MenuItem>
                </Menu>
              </a>
              <a
                href="/setting/profile/connectagent"
                className="btn bg-white text-black m-2 md:w-80 border-white sm: w-44 p-2">
                Connect Agent
              </a>

              <a href="" className="btn  bg-red-700 text-white sm: m-8 w-80 p-2" onClick={logout}>
                Log Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
