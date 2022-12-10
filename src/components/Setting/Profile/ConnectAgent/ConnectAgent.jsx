import React from "react";
import style from "./ConnectAgent.module.css";

function ConnectAgent() {
  return (
    <div className={style.mainContainer}>
      <form action="" className={style.form}>
        <input type="text" className={style.referralCode} placeholder="Enter Referral Code" />
        <button className={`${style.connectBtn} bg-red-700`}>Connect Agent</button>
      </form>
    </div>
  );
}

export default ConnectAgent;
