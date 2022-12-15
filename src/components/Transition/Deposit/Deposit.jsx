import React, { useEffect, useState } from "react";
import style from "./Deposit.module.css";
import axios from "axios";

function Deposit() {
  const { VITE_APP_DOMAIN } = import.meta.env;
  const [announcement, setAnnouncement] = useState({});
  const lToken = localStorage.getItem("lToken");
  useEffect(() => {
    axios
      .get(`${VITE_APP_DOMAIN}/api/admin/configuration-setting`, {
        method: "GET",
        headers: {
          authorization: lToken,
          accept: "application/json",
        },
      })
      .then((response) => {
        setAnnouncement(response.data.data);
        if (response.status === "success") {
          console.log("success");
        }
      });
  }, []);
  return (
    <div className={style.mainContainer}>
      <div className={style.noticeSection}>
        <div className={style.noticeContainer}>
          <h1 className={style.titleNotice}>အကြံပြုချက်</h1>
          <p className={style.bodyNotice}>{announcement.payment_announcement_deposit}</p>
        </div>
      </div>
      <div className={style.bankSection}>
        <div className={`flex flex-wrap`}>
          <div className={style.bankContainer}>
            <div className="">
              <h1>Hello</h1>
            </div>
            <div className="">
              <h1>Hello</h1>
            </div>
            <div className="">
              <h1>Hello</h1>
            </div>
            <div className="">
              <h1>Hello</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deposit;
