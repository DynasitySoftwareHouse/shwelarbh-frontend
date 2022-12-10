import React from "react";
import style from "./ChangePassword.module.css";

function ChangePassword() {
  return (
    <div className={style.mainContainer}>
      <form action="" className={style.form}>
        <input type="text" className={style.passwordChange} placeholder="Old Password" />
        <input type="text" className={style.passwordChange} placeholder="New Password" />
        <input type="text" className={style.passwordChange} placeholder="Confirm New Password" />
        <button className="btn bg-blue-400 text-black w-56 mt-10">Submit</button>
      </form>
    </div>
  );
}

export default ChangePassword;
