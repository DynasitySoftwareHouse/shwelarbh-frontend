import React from "react";
import style from "./TransitionHistory.module.css";

function TransitionHistory() {
  return (
    <div className={style.mainContainer}>
      <table className="table w-96 m-auto">
        <thead className=" text-white">
          <tr className="bg-red-700">
            <td className="bg-red-700">Date</td>
            <td className="bg-red-700">Amount</td>
            <td className="bg-red-700">Type</td>
            <td className="bg-red-700">Description</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4" className="bg-white h-96">
              <p className="text-center text-black">There is no data</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TransitionHistory;
