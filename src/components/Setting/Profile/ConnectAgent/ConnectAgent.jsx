import React,{useState} from "react";
import style from "./ConnectAgent.module.css";
import axios from 'axios'

function ConnectAgent() {
  const {VITE_APP_DOMAIN} = import.meta.env;
  const [agentId,setAgentId] = useState('')

  const submitHandler =(e)=>{
    e.preventDefault();
    axios.post(`${VITE_APP_DOMAIN}/api/customers/connect-agent/2`,{
      agent_id:agentId
    },{
      method:"POST",
      headers:{
        authorization: localStorage.getItem("lToken"),
        accept: "application/json",
      }
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    
  }
  

  return (
    <div className={style.mainContainer}>
     
      <form action="" className={style.form} onSubmit={submitHandler}>
        <input type="text" className={style.referralCode} placeholder="Enter Referral Code" onChange={(e)=>setAgentId(e.target.value)} />
        <button className={`${style.connectBtn} bg-red-700`}>Connect Agent</button>
      </form>
    </div>
  );
}

export default ConnectAgent;
