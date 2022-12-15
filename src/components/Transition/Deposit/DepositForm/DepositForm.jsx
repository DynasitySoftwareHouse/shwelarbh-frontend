import React from "react";
import style from "./DepositForm.module.css";

function Deposit() {
  return (
    <div className={style.mainContainer}>
      <div className={`w-11/12`}>
        <div className={``}>
          <img src="" alt="" className={`w-44 h-44 m-auto pt-10`} />
          <div className={`flex mx-12 text-center`}>
            <div className="">
              <p className={`p-2 underline`}>Account Name</p>
              <p className={`p-2`}>Bank</p>
            </div>
            <div className="">
              <p className={`p-2 underline`}>Account Number</p>
              <p className={`p-2`}>12345678</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <form action="" className={`form-control`}>
          <input
            type="text"
            placeholder="Enter Account Name"
            className={`w-11/12 p-2 bg-teal-100 rounded-lg m-auto my-5`}
          />
          <input
            type="text"
            placeholder="Enter Account Number"
            className={`w-11/12 p-2 bg-teal-100 rounded-lg m-auto my-5`}
          />
          <input
            type="text"
            placeholder="Enter Transfer Amount"
            className={`w-11/12 p-2 bg-teal-100 rounded-lg m-auto my-5`}
          />
          <input
            type="text"
            placeholder="Enter Last 6 Digits"
            className={`w-11/12 p-2 bg-teal-100 rounded-lg m-auto my-5`}
          />
          <button className={`btn bg-teal-300 text-black w-10/12 m-auto mt-3`}>ငွေဖြည့်မည်</button>
        </form>
      </div>
    </div>
  );
}

export default Deposit;
