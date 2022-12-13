import React, { useState } from "react";
import style from "./ChangePassword.module.css";
import Swal from "sweetalert2";
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
    e.prventDefault();
    axios
      .post(`${VITE_APP_DOMAIN}/api/reset-password`, {
        new_password: newPassword,
        new_password_confirmation: confirmNewPassword,
      })
      .then((response) => {
        if (response.statue === "success") {
          MySwal.fire({
            title: <p className="text-lime-600">Success</p>,
            text: "Password Changed",
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
      <form action="" className={style.form}>
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
