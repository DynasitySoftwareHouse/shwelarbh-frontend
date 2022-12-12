import React,{useState,useRef} from 'react'
import classes from './Login.module.css'
import logo from '../../assets/shwelarbh.png'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  let navigate = useNavigate();
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const emailRef = useRef()
  const passwordRef = useRef()
  const {VITE_APP_DOMAIN} = import.meta.env;
 


  const loginHandler = (e)=>{
    e.preventDefault()
    setEmail(emailRef.current.value);
    setPassword(passwordRef.current.value)
 axios.post(`${VITE_APP_DOMAIN}/api/login`,{
  email,
  password
 }).then((res)=>{
    if(res.data.status==='success')
    localStorage.setItem('status', res.data.status);
    localStorage.setItem('jToken', res.data.data['j_token']);
    localStorage.setItem('lToken', res.data.data['l_token']);
    navigate('/home')
}).catch(err=>{
  console.log(err);
})
  }

  return (
<div className={classes.container}>
 <div className={classes.formContainer}>
  <div className='mb-10'>
    <img src={logo} className='w-40 flex justify-center items-center'></img>
  </div>
  <form onSubmit={loginHandler}>
  <input type='text' placeholder='Enter Email or Phone' className='input mb-5 w-full focus:outline-none' ref={emailRef}></input>
  <div>
   <input type='password' placeholder='Password' className='input mb-5 w-full' ref={passwordRef}></input>
   <div></div>
    </div>
      <button className={`${classes.btn} btn btn-md `}>Log in</button>
  </form>
  <a className={classes.pass}>Forgot Password?</a>
  <p className='text-white text-center mt-8'>Don't have an account? <a><span className={classes.singup}>Sing Up</span></a></p>
 </div>
 </div>
  )
}

export default Login