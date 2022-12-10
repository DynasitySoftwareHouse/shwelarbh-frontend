import React from "react";
import classes from "./Login.module.css";
import logo from "../../assets/shwelarbh.png";

const Login = () => {
  return (
    <div className={classes.container}>
      <div className={classes.formContainer}>
        <div className="mb-10">
          <img src={logo} className="w-40 flex justify-center items-center"></img>
        </div>
        <input
          type="text"
          placeholder="Enter Email or Phone"
          className="input mb-5 w-full focus:outline-none"></input>
        <div>
          <input type="password" placeholder="Password" className="input mb-5 w-full"></input>
          <div></div>
        </div>
        <button className={`${classes.btn} btn btn-md `}>Log in</button>
        <a href="" className={classes.pass}>
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
