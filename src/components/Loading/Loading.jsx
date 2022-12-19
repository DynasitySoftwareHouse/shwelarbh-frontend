import React from 'react'
import loading from '../../assets/i18n/load.gif'
import classes from './Loading.module.css'

const Loading = () => {
  return (
    <div className={classes.loading}>
     
        <img src={loading}></img>
    </div>
  )
}

export default Loading