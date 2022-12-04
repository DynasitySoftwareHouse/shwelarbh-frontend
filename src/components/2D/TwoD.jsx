import React from 'react'
import classes from  './TwoD.module.css'
const TwoD = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
      <div className={classes.fcontainer} >
        <h1>31</h1>
        <div className={classes.scontainer}>
          <div>
            <h3>Set</h3>
            <h3>641.63</h3>
          </div>
          <div>
            <h3>Value</h3>
            <h3>751.47</h3>
          </div>
        </div>
        <p style={{color:'black'}}>Last Update 03/12/2022 03:19:45</p>
      </div>
      <button className={classes.lottery}>Lottery</button>
      <button className={classes.description}>Color Description</button>
      <div className={classes.time}>
        <p>Morning()- <span style={{marginLeft:'50px'}}>[ဆ]</span></p>
        <p>Evening()- <span style={{marginLeft:'50px'}}>[ဆ]</span></p>
      </div>
      <div className={classes.last}>
        <div><p>2D Lists</p></div>
        <div style={{marginLeft:'5px'}}><p>2D Lucky Number</p></div>
      </div>
      </div>
    </div>
  )
}

export default TwoD