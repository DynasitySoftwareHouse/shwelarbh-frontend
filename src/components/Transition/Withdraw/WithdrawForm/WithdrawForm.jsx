import React from "react";
import style from "./WithdrawForm.module.css";

function WithdrawForm() {
  return (
    <div className={style.mainContainer}>
      <img src="" alt="" className={`w-44 h-44 m-auto pt-10`} />
      <div className="mt-12">
        <form action="" className={`form-control`}>
          <input
            type="text"
            placeholder="Enter Amount"
            className={`w-11/12 p-2 bg-teal-100 rounded-lg m-auto my-5`}
          />
          <input
            type="text"
            placeholder="Enter Account Number"
            className={`w-11/12 p-2 bg-teal-100 rounded-lg m-auto my-5`}
          />
          <input
            type="text"
            placeholder="Enter Account Name"
            className={`w-11/12 p-2 bg-teal-100 rounded-lg m-auto my-5`}
          />
          <button className={`btn bg-teal-300 text-black w-10/12 m-auto mt-3`}>ငွေထုတ်မည်</button>
        </form>
      </div>
    </div>
  );
}

export default WithdrawForm;
