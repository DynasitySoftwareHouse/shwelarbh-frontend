import React from 'react'
import classes from './ForgotPassword.module.css'

const ForgotPassword = () => {
  return (
    <div className={classes.container}>
        <div className={classes.btnContainer}>
            <div className={classes.otp}>
            <input type='text' placeholder='Email or Phone' ></input>
            <button>Get Otp</button>
            </div>
            <input type='text' placeholder='OTP Code'></input>
            <input type='text' placeholder='New Password'></input>
            <input type='text' placeholder='Confirm Password'></input>
            <button>Submit</button>
        </div>
    </div>
  )
}

export default ForgotPassword