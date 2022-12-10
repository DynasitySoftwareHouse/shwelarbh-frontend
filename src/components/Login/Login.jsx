
import React,{useState} from 'react'
import classes from './Login.module.css'
import logo from '../../assets/shwelarbh.png'


const Login = () => {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [user,setUser] = useState({})
  const [err,setError] = useState('')
  const [success,setSuccess] = useState('')
  // Name
  const nameChangeHandler = (e) =>{
    setName(e.target.value)
  }
  // Email
  const emailChangeHandler = (e)=>{
    setEmail(e.target.value)
  }
  // User
  const userSubmitHandler = (e)=>{
    e.preventDefault()
    setUser({name,email})
    localStorage.setItem('name',name)
    localStorage.setItem('email',email)
    setName("")
    setEmail("")
  

  }

  console.log(name);
console.log(email);
console.log(user);
  return (

<div className={classes.container}>
 <div className={classes.formContainer}>
  <div className='mb-10'>
    <img src={logo} className='w-40 flex justify-center items-center'></img>
  </div>
  <form onSubmit={userSubmitHandler}>
  <input type='text' placeholder='Enter Email or Phone' className='input mb-5 w-full focus:outline-none' onChange={nameChangeHandler}></input>
  <div>
   <input type='password' placeholder='Password' className='input mb-5 w-full' onChange={emailChangeHandler}></input>
   <div></div>
    </div>
      <button className={`${classes.btn} btn btn-md `}>Log in</button>
  </form>
  <a className={classes.pass}>Forgot Password?</a>
  <p className="text-white text-center mt-8">
          Don't have an account?{" "}
          <a href="/signup">
            <span className={classes.singup}>Sing Up</span>
          </a>
        </p>
 </div>
 </div>
  )
}

export default Login;
