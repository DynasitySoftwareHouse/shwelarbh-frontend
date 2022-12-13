import React, { useEffect, useState, useRef } from "react";
import classes from "./SignUp.module.css";
import logo from "../../../assets/shwelarbh.png";

import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [rCode, setRCode] = useState("");
  const [validated, setValidated] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [userObj, setUserObj] = useState({});

  // const functon = CustomGetFunction(`api/send-email-otp`, [
  //   {
  //     email: email,
  //   },
  //   {},
  // ]);
  //     user_name: userName,
  //     password: password,
  //     password_confirmation: confirmPassword,
  //     verification_code: otpCode,

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const nameHandler = (e) => {
    setUserName(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const otpCodeInputHandler = (e) => {
    setOtpCode(e.target.value);
  };

  const confirmPassHandler = (e) => {
    e.preventDefault();
    setConfirmPassword(e.target.value);
  };

  const { VITE_APP_DOMAIN } = import.meta.env;
  const confirmHandler = (e) => {
    e.preventDefault();
    setUserObj({
      user_name: userName,
      email: email,
      password: password,
      password_confirmation: confirmPassword,
    });
    axios
      .post(`${VITE_APP_DOMAIN}/api/register-email`, {
        email: email,
        verification_code: otpCode,
        password: password,
        password_confirmation: confirmPassword,
        currency_code: "MMK",
        name: userName,
      })
      .then((res) => {
        if (res.data.status === "success") {
          console.log("account created");
        }
      });
  };

  const otpHandler = (e) => {
    e.preventDefault();
    axios
      .post(`${VITE_APP_DOMAIN}/api/send-email-otp`, {
        email,
      })
      .then((res) => {
        if (res.data.status === "success") {
          console.log("code sent");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.container}>
      <div className={classes.formContainer}>
        <form className="w-96 pt-10 pl-4" onSubmit={confirmHandler}>
          <input
            type="text"
            placeholder="Full Name"
            className="input mb-5 w-full focus:outline-none"
            value={userName}
            onChange={nameHandler}
          />
          <input
            type="text"
            placeholder="Email"
            className="input mb-5 w-full"
            value={email}
            onChange={emailHandler}></input>
          <input type="text" placeholder="Referral Code" className="input mb-5 w-full"></input>
          <p className="input bg-slate-50 text-black p-3 mb-5">Country Code</p>
          <form className={`form-control my-5 pr-4`}>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter OTP Code"
                onChange={otpCodeInputHandler}
                value={otpCode}
                className="input input-bordered"
              />
              <button className={`px-5 bg-red-600 text-white`} onClick={otpHandler}>
                Send OTP
              </button>
            </label>
          </form>
          <input
            type="password"
            placeholder="Password"
            className="input mb-5 w-full"
            value={password}
            onChange={passwordHandler}></input>
          <input
            type="password"
            placeholder="Confirm Password"
            vlaue={confirmPassword}
            className="input mb-5 w-full"
            onChange={confirmPassHandler}></input>
          <button className={`${classes.btn} btn btn-md`}>Create Account</button>
        </form>
      </div>
      <p className="text-center">
        Already have an account?
        <a href="/" className="text-red-500">
          Log In
        </a>
      </p>
      {/* {res.data.status === true ? (
        <div>
          <form action="">
            <input type="number" />
            <button className={`btn`}>Confirm</button>
          </form>
        </div>
      ) : (
        <div></div>
      )} */}
    </div>
  );
};

export default SignUp;
