import React from 'react'
import style from './About.module.css'
import shwelarb from '../../assets/shwelarbh.png'

function About() {
  return (
    <div className={style.mainContainer}>
      <div className="">
        <img src={shwelarb} alt="" className="w-72 mx-auto pt-14" />
      </div>
      <div className="">
        <p href="" className="border-white p-5 rounded-3xl text-center mt-5 mx-auto border bg-transparent w-80">phone &#8212; +959 876 543 210</p>
        <p href="" className="border-white p-5 rounded-3xl text-center mt-5 mx-auto border bg-transparent w-80">email &#8212; example@demo.com</p>
        <p href="" className="border-white p-5 rounded-3xl text-center mt-5 mx-auto border bg-transparent w-80">viber &#8212; +959 876 543 210</p>
        <p href="" className="border-white p-5 rounded-3xl text-center mt-5 mx-auto border bg-transparent w-80">www.facebook.com/example</p>
      </div>
    </div>
  )
}

export default About
