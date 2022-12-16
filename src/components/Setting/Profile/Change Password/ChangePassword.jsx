import React, { useState } from "react";
import style from "./ChangePassword.module.css";
import Swal from "sweetalert2";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
function ChangePassword() {
  const { VITE_APP_DOMAIN } = import.meta.env;
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const MySwal = withReactContent(Swal);
  const newPassHandler = (e) => {
    setNewPassword(e.target.value);
  };
  const oldPassHandler = (e) => {
    setOldPassword(e.target.value);
  };
  const newConfirmPassHandler = (e) => {
    setConfirmNewPassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`${VITE_APP_DOMAIN}/api/change-password`, {
      
        old_password:oldPassword,
        password:newPassword,
       password_confirmation:confirmNewPassword
      },{
        method:"POST",
        headers:{
          authorization: localStorage.getItem("lToken"),
          accept: "application/json",
        }
      })
      .then((response) => {
        console.log(response)
        if (response.data.status === "success") {
          MySwal.fire({
            title: <p className="text-lime-600">Success</p>,
            text: "Password Changed Successfully",
            confirmButtonText: "ok",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        MySwal.fire({
          title: <p className="text-red-600">Error</p>,
          text: error.response.data.message,
          confirmButtonText: "ok",
        });
      });
  };
  return (
    <div className={style.mainContainer}>
      <form  className={style.form} onSubmit={submitHandler}>
        <input
          type="text"
          value={oldPassword}
          onChange={oldPassHandler}
          className={style.passwordChange}
          placeholder="Old Password"
        />
        <input
          type="text"
          value={newPassword}
          onChange={newPassHandler}
          className={style.passwordChange}
          placeholder="New Password"
        />
        <input
          type="text"
          value={confirmNewPassword}
          onChange={newConfirmPassHandler}
          className={style.passwordChange}
          placeholder="Confirm New Password"
        />
        <button className="btn bg-blue-400 text-black w-56 mt-10">Submit</button>
      </form>
    </div>
  );
}

export default ChangePassword;
