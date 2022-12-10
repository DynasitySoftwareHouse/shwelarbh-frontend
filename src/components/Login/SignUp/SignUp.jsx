import React from "react";
import classes from "./SignUp.module.css";
import logo from "../../../assets/shwelarbh.png";

const SignUp = () => {
  return (
    <div className={classes.container}>
      <div className={classes.formContainer}>
        <form className="w-96 pt-10 pl-4">
          <input
            type="text"
            placeholder="Full Name"
            className="input mb-5 w-full focus:outline-none"
          />
          <input type="text" placeholder="Email or phone" className="input mb-5 w-full"></input>
          <input type="text" placeholder="Referral Code" className="input mb-5 w-full"></input>
          <p className="input bg-slate-50 text-black p-3 mb-5">Country Code</p>
          <input type="password" placeholder="Password" className="input mb-5 w-full"></input>
          <input
            type="password"
            placeholder="Confirm Password"
            className="input mb-5 w-full"></input>
          <button className={`${classes.btn} btn btn-md `}>Create Account</button>
        </form>
      </div>
      <p className="text-center">
        Already have an account?{" "}
        <a href="/" className="text-red-500">
          Log In
        </a>
      </p>
    </div>
  );
};

export default SignUp;
