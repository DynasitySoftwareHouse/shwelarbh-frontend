import React from 'react'
import styles from './TwoDLists.module.css'

const TwoDLists = () => {
  return (
    <div className='container h-screen text-center flex flex-col justify-center text-black'>
        <p>Record Empty</p>
        <div className={`absolute bottom-0 flex border rounded-lg border-5 border-b-slate-800  ${styles.total}`}>
            <p className='mr-7'>အရေအတွက်-0</p>
            <p>စုစုပေါင်း-0</p>
        </div>

    </div>
  )
}

export default TwoDLists