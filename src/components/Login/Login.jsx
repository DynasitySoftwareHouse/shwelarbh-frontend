import React,{useState,useRef,useEffect} from 'react'
import classes from './Login.module.css'
import logo from '../../assets/shwelarbh.png'
import {useNavigate} from 'react-router-dom'
import { AiFillEye ,AiFillEyeInvisible} from 'react-icons/ai';

import axios from 'axios'

const Login = () => {
  const [open,setOpen] = useState(false);
  let navigate = useNavigate();
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const emailRef = useRef()
useEffect(()=>{
  emailRef.current.focus()

},[])
  const emailChangeHandler = (e)=>{
   setEmail(e.target.value)
  }
  const passwordChangeHandler = (e)=>{
  setPassword(e.target.value)
 }
  const {VITE_APP_DOMAIN} = import.meta.env;
 const loginHandler = (e)=>{
    e.preventDefault()
 axios.post(`${VITE_APP_DOMAIN}/api/login`,{
  email,
  password
 }).then((res)=>{
    if(res.data.status==='success')
    console.log(res.data.data['l_token']);
    localStorage.setItem('status', res.data.status);
    localStorage.setItem('lToken', res.data.data['l_token']);
    navigate('/home')
}).catch(err=>{
  console.log(err
    );
})
  }

  return (
<div className={classes.container}>
 <div className={classes.formContainer}>
  <div className='mb-10'>
    <img src={logo} className='w-40 flex justify-center items-center'></img>
  </div>
  <form onSubmit={loginHandler}>
  <input type='text' placeholder='Email or Phone Number' className='input mb-5 w-full focus:outline-none' ref={emailRef} onChange={emailChangeHandler}></input>
  
  <div className='relative'>
    <div>
    <input type={open?'text':'password'} placeholder='Password' onChange={passwordChangeHandler} className='input mb-5 w-full'></input>
    </div>
   <div className='absolute top-3 right-4 text-xl'>
    {
      open?<AiFillEye onClick={()=>setOpen(!open)}></AiFillEye>:<AiFillEyeInvisible onClick={()=>setOpen(!open)}></AiFillEyeInvisible>
    }

    

   </div>
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