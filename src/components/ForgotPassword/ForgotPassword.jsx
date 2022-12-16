import React,{useState} from 'react'
import classes from './ForgotPassword.module.css'
import axios from 'axios'


const ForgotPassword = () => {
  const [email,setEmail] = useState('');
  const [otp,setOTP] = useState('')
  const [newPassword,setNewPassword] =useState('')
  const [newConfirmPassword,setConfirmPassword] = useState('')
  
  const emailChangeHandler =(e)=>{
    setEmail(e.target.value)
  }
  const otpChangeHandler = (e)=>{
    setOTP(e.target.value)
  }

  const passwordChangeHandler =(e)=>{
    setNewPassword(e.target.value)
  }
const newpasswordHandler =(e)=>{
  setConfirmPassword(e.target.value)
}

const submitHandler =(e)=>{
  e.preventDefault();
  axios.post(`${VITE_APP_DOMAIN}/api/account-recovery`,{
    verification_code:otp,
    password:newPassword,
    password_confirmation:newConfirmPassword,
    email_or_phone:email

  },{
    method:"POST",
    headers:{
      authorization: localStorage.getItem("lToken"),
      accept: "application/json",
    }
  })
}
  const { VITE_APP_DOMAIN } = import.meta.env;
  return (
    <div className={classes.container}>
        <div className={classes.btnContainer}>
            <div className={classes.otp}>
            <input type='text' placeholder='Email or Phone' value={email} onChange={emailChangeHandler}></input>
            <button>Get Otp</button>
            </div>
            <input type='text' placeholder='OTP Code' onChange={otpChangeHandler}></input>
            <input type='text' placeholder='New Password' onChange={passwordChangeHandler}></input>
            <input type='text' placeholder='Confirm Password' onChange={newpasswordHandler}></input>
            <button>Submit</button>
        </div>
    </div>
  )
}

export default ForgotPassword