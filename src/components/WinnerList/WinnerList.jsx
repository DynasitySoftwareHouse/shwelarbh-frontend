import React from 'react'
import classes from './WinnerList.module.css'

const WinnerList = () => {
  return (
    <div className={classes.winnerContainer}>
      <div className={classes.container}>
      <h4>No.</h4>
        <h4>Name</h4>
        <h4>Lucky Number</h4>
        <h4>Date</h4>
      </div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',color:'black',height:'50vh'}}>
        <p>Record Empty</p>
      </div>
    </div>
  )
}

export default WinnerList