import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import React, { useState, useRef, useEffect } from "react";
import classes from "./Login.module.css";
import logo from "../../assets/shwelarbh.png";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import axios from "axios";
import lToken from "../../services/Token";

const Login = () => {
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const { VITE_APP_DOMAIN } = import.meta.env;

  const loginHandler = (e) => {
    e.preventDefault();
    setEmail(emailRef.current.value);
    setPassword(passwordRef.current.value);
    axios
      .post(`${VITE_APP_DOMAIN}/api/login`, {
        email,
        password,
      })
      .then((res) => {
        if (res.data.status === "success") {
          localStorage.setItem("status", res.data.status);
          localStorage.setItem("lToken", res.data.data["l_token"]);
          const MySwal = withReactContent(Swal);
          MySwal.fire({
            title: <p className="text-lime-600">Success</p>,
            text: "Login Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          navigate("/home");
        }
      })
      .catch((err) => {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
          title: <p className="text-red-600">Error</p>,
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "ok",
        });
      });
  };
  useEffect(() => {
    axios
      .get(`${VITE_APP_DOMAIN}/api/get-login-user`, {
        method: "GET",
        headers: {
          authorization: lToken,
          accept: "application/json",
        },
      })
      .then((response) => {
        if (response.data.status === "success") {
          console.log("success");
          window.location.href = "/home";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.formContainer}>
        <div className="mb-10">
          <img src={logo} className="w-40 flex justify-center items-center"></img>
        </div>
        <form onSubmit={loginHandler}>
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="input mb-5 w-full focus:outline-none text-black"
            ref={emailRef}
            onChange={emailChangeHandler}></input>

          <div className="relative">
            <div>
              <input
                type={open ? "text" : "password"}
                placeholder="Password"
                ref={passwordRef}
                onChange={passwordChangeHandler}
                className="input mb-5 w-full text-black"></input>
            </div>
            <div className="absolute top-3 right-4 text-xl">
              {open ? (
                <AiFillEye onClick={() => setOpen(!open)}></AiFillEye>
              ) : (
                <AiFillEyeInvisible onClick={() => setOpen(!open)}></AiFillEyeInvisible>
              )}
            </div>
          </div>
          <button className={`${classes.btn} btn btn-md `}>Log in</button>
        </form>
        <a className={classes.pass} href="/forgot_password">
          Forgot Password?
        </a>
        <p className="text-white text-center mt-8">
          Don't have an account?{" "}
          <a href="/signup">
            <span className={classes.singup}>Sing Up</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
