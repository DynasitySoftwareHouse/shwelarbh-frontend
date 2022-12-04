import React from 'react'
import userImage from '../../../assets/icons/profile1.png'
import style from './Profile.module.css'

function Profile() {
  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <div className="flex flex-col items-center">
          {/* user image */}
          <div className="flex justify-center pt-3 pb-3">
            <img src={userImage} alt="" className="rounded-full border" style={{width: "100px"}} />
          </div>
          {/* user info */}
          <div className="card bg-white">
            <table className="text-black w-96">
              <tr>
                <td className={style.caption}>Name-</td>
                <td className={style.details}>User Name</td>
              </tr>
              <tr>
                <td className={style.caption}>Email-</td>
                <td className={style.details}>example@deom.com</td>
              </tr>
              <tr>
                <td className={style.caption}>Country-</td>
                <td className={style.details}>Myanmar</td>
              </tr>
              <tr>
                <td className={style.caption}>Balance-</td>
                <td className={style.details}>0 Units</td>
              </tr>
            </table>
          </div>
            {/* Button group */}
          <div className="">
            <div className="flex flex-wrap justify-center mt-10">
              <a href="" className="btn bg-white text-black m-2 border-white w-44 p-2">Bet Record</a>
              <a href="" className="btn bg-white text-black m-2 border-white w-44 p-2">Change Password</a>
              <a href="" className="btn bg-white text-black m-2 border-white w-44 p-2">Language</a>
              <a href="" className="btn bg-white text-black m-2 border-white w-44 p-2">Connect Agent</a>
              <a href="" className="btn bg-red-700 text-white m-3 w-80 p-2">Log Out</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
