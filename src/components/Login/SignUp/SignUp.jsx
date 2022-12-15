import React, { useEffect, useState, useRef } from "react";
import classes from "./SignUp.module.css";
import logo from "../../../assets/shwelarbh.png";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [rCode, setRCode] = useState("");
  const [validated, setValidated] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [userObj, setUserObj] = useState({});
  const [open, setOpen] = useState(false);

  const MySwal = withReactContent(Swal);

  let navigate = useNavigate();

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
    setConfirmPassword(e.target.value);
  };

  const { VITE_APP_DOMAIN } = import.meta.env;
  const confirmHandler = (e) => {
    e.preventDefault();
    if (userName === "" || email === "" || password === "" || confirmPassword === "") {
      console.log("error please fill the input areas");
      const MySwal = withReactContent(Swal);

      MySwal.fire({
        title: <p className="text-red-600">Error</p>,
        text: "Please Fill all fields",
        confirmButtonText: "ok",
      });
    } else {
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

            MySwal.fire({
              title: <p className="text-lime-700">Success</p>,
              text: "Successfully Account Created",
              confirmButtonText: "ok",
            });
            window.location.href = "/";
          }
        })
        .catch((error) => {
          MySwal.fire({
            title: <p className="text-red-600">Error</p>,
            text: error.response.data.message,
            confirmButtonText: "ok",
          });
          console.log(error);
        });
    }
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

          MySwal.fire({
            title: <p className="text-lime-700">Success</p>,
            text: "Verification Code has been sent",
            confirmButtonText: "Ok",
          });
        }
      })
      .catch((error) => {
        MySwal.fire({
          title: <p className="text-red-600">Error</p>,
          text: error.response.data.message,
          confirmButtonText: "ok",
        });
        console.log(error);
      });
  };

  return (
    <div className={classes.container}>
      <div className={classes.formContainer}>
        <form className="w-96 pt-10 pl-4" onSubmit={confirmHandler}>
          <input
            type="text"
            placeholder="Full Name"
            className="text-black input mb-5 w-full focus:outline-none"
            value={userName}
            onChange={nameHandler}
          />
          <input
            type="text"
            placeholder="Email"
            className="text-black input mb-5 w-full"
            value={email}
            onChange={emailHandler}></input>
          <input
            type="text"
            placeholder="Referral Code"
            className="text-black input mb-5 w-full"></input>
          <p className="input bg-slate-50 text-black p-3 mb-5">Country Code</p>
          <form className={`form-control my-5 pr-4`}>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter OTP Code"
                onChange={otpCodeInputHandler}
                value={otpCode}
                className="text-black input input-bordered"
              />
              <button className={`px-5 bg-red-600 text-white`} onClick={otpHandler}>
                Send OTP
              </button>
            </label>
          </form>
          <div className="relative">
            <div>
              <input
                type={open ? "text" : "password"}
                placeholder="Password"
                className="input text-black mb-5 w-full"
                value={password}
                onChange={passwordHandler}></input>
            </div>
            <div className="absolute top-4 right-10 text-xl">
              {open ? (
                <AiFillEye onClick={() => setOpen(!open)}></AiFillEye>
              ) : (
                <AiFillEyeInvisible onClick={() => setOpen(!open)}></AiFillEyeInvisible>
              )}
            </div>
          </div>

          <div className="relative">
            <div>
              <input
                type={open ? "text" : "password"}
                placeholder="Confirm Password"
                vlaue={confirmPassword}
                className="input text-black mb-5 w-full"
                onChange={confirmPassHandler}></input>
            </div>
            <div className="absolute top-4 right-10 text-xl">
              {open ? (
                <AiFillEye onClick={() => setOpen(!open)}></AiFillEye>
              ) : (
                <AiFillEyeInvisible onClick={() => setOpen(!open)}></AiFillEyeInvisible>
              )}
            </div>
          </div>
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
