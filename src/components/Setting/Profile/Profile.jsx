import React from "react";
import userImage from "../../../assets/icons/profile1.png";
import style from "./Profile.module.css";

function Profile() {
  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <div className="sm:flex sm:flex-col md:flex-row sm:items-center">
          {/* user image */}
          <div className="flex justify-center pt-3 pb-3">
            <img
              src={userImage}
              alt=""
              className="rounded-full sm: w-28 md:w-48 md:ml-5 border"
              // style={{ width: "100px" }}
            />
          </div>
          {/* user info */}
          <div className="card bg-white md:ml-5">
            <table className="text-black sm:w-96">
              <tr>
                <td className={style.caption}>Name -</td>
                <td className={style.details}>User Name</td>
              </tr>
              <tr>
                <td className={style.caption}>Email -</td>
                <td className={style.details}>example@deom.com</td>
              </tr>
              <tr>
                <td className={style.caption}>Country -</td>
                <td className={style.details}>Myanmar</td>
              </tr>
              <tr>
                <td className={style.caption}>Balance -</td>
                <td className={style.details}>0 Units</td>
              </tr>
            </table>
          </div>
          {/* Button group */}
          <div className="">
            <div className="sm:flex  md:flex-col sm:flex-wrap sm: items-center sm: justify-center mt-5 md:ml-5">
              <a href="" className="btn bg-white text-black m-2 md:w-80 border-white sm: w-44 p-2">
                Bet Record
              </a>
              <a href="" className="btn bg-white text-black m-2 md:w-80 border-white sm: w-44 p-2">
                Change Password
              </a>
              <a href="" className="btn bg-white text-black m-2 md:w-80 border-white sm: w-44 p-2">
                Language
              </a>
              <a href="" className="btn bg-white text-black m-2 md:w-80 border-white sm: w-44 p-2">
                Connect Agent
              </a>
              <a href="" className="btn  bg-red-700 text-white sm: m-8 w-80 p-2">
                Log Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
