import React, { useState, useEffect } from "react";
import style from "./Home.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// image
import units from "../../assets/icons/balance.png";
import footballBetting from "../../assets/icons/footballBettingIcon.png";
import liveFootball from "../../assets/icons/liveFootball.png";
import setting from "../../assets/icons/setting.png";
import myanmar2d from "../../assets/icons/myanmar2D.png";
import myanmar3d from "../../assets/icons/myanmar3D.png";
import winnerList from "../../assets/icons/winnerList.png";
import shwelarb from "../../assets/shwelarbh.png";
import withdraw from "../../assets/icons/wallet.png";
import transition from "../../assets/icons/notes.png";

function Home() {
  const [dataResponse, setDataResponse] = useState({});
  const navigate = useNavigate();
  const { VITE_APP_DOMAIN } = import.meta.env;
  const MySwal = withReactContent(Swal);

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
        if (res.data.status === "success") {
          console.log("login success");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={style.mainContainer}>
      {/* Header section user name and units */}
      <header>
        <div className=" pt-8 flex justify-around ">
          <a href="/setting/profile" className="p-3 flex border w-40 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "16px" }}
              fill="#007bff"
              viewBox="0 0 448 512">
              <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
            <p className="ml-3">{dataResponse.name}</p>
          </a>
          <div className="p-3 flex border w-40 rounded-full">
            <img src={units} alt="" style={{ width: "20px" }} />
            <p className="ml-3">{dataResponse?.wallet?.main_unit} Units</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "16px", marginLeft: "15px" }}
              fill="#fff "
              viewBox="0 0 448 512">
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
          </div>
        </div>
      </header>
      {/* Body section Betting  */}
      <section>
        {/* football betting section */}
        <div>
          <div className="flex justify-center pt-5">
            <a
              href="/footballbetting"
              className="flex justify-center rounded-md"
              style={{ width: "90VW", backgroundColor: "#fff" }}>
              <img src={footballBetting} style={{ width: "200px" }} alt="" />
            </a>
          </div>
          <p className="text-center pt-2">Football Betting</p>
        </div>
        {/* bottom betting section */}
        <div>
          <div className={style.rowResponsive}>
            {/* row1 */}

            <div className="pt-4  flex justify-evenly md:flex-col">
              {/* live football section */}
              <div>
                <div className="md:mt-7">
                  <a href="/livefootball">
                    <img src={liveFootball} alt="" className="w-28 rounded-3xl" />
                  </a>
                </div>
                <p className="pt-1 text-center">Live Football</p>
              </div>
              {/* setting section */}
              <div>
                <div className="md:mt-7">
                  <a href="/setting">
                    <img src={setting} alt="" className="w-28 rounded-3xl" />
                  </a>
                </div>
                <p className="pt-1 text-center">Setting</p>
              </div>
            </div>

            {/* row2 */}

            <div className="pt-4  flex justify-evenly md:flex-col">
              {/* live football section */}
              <div>
                <div className="md:mt-7">
                  <a href="/myanmar2d">
                    <img src={myanmar2d} alt="" className="w-28 rounded-3xl" />
                  </a>
                </div>
                <p className="pt-1 text-center">Myanmar 2D</p>
              </div>
              {/* setting section */}
              <div>
                <div className="md:mt-7">
                  <a href="/myanmar3d">
                    <img src={myanmar3d} alt="" className="w-28 rounded-3xl" />
                  </a>
                </div>
                <p className="pt-1 text-center">Myanmar 3D</p>
              </div>
            </div>

            {/* row3 */}

            <div className="pt-4  flex justify-evenly md:flex-col">
              {/* live football section */}
              <div>
                <div className="md:mt-7">
                  <a href="/winnerlist">
                    <img src={winnerList} alt="" className="w-28 rounded-3xl" />
                  </a>
                </div>
                <p className="pt-1 text-center">Winner List</p>
              </div>
              {/* setting section */}
              <div>
                <div className="md:mt-7">
                  <a href="/shwelarb">
                    <img src={shwelarb} alt="" className="w-28 rounded-3xl bg-slate-900" />
                  </a>
                </div>
                <p className="pt-1 text-center">About Us</p>
              </div>
            </div>

            {/* row 4 */}
            <div className="pt-4  flex justify-evenly md:flex-col">
              {/* live football section */}
              <div>
                <div className="md:mt-7">
                  <a href="/recordlist">
                    <img src={transition} alt="" className="w-28 rounded-3xl" />
                  </a>
                </div>
                <p className="pt-1 text-center">Record List</p>
              </div>
              {/* setting section */}
              <div>
                <div className="md:mt-7">
                  <a href="/transition">
                    <img src={withdraw} alt="" className="w-28 rounded-3xl bg-slate-900" />
                  </a>
                </div>
                <p className="pt-1 text-center">Transition</p>
              </div>
            </div>
          </div>

          {/* developed by Dynasity Software House */}
          <div>
            <p className=" pt-4 text-center text-slate-400">
              Developed by{" "}
              <a href="" className="underline text-white">
                Dynasity Software House
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
