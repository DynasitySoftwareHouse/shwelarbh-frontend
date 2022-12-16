import React from "react";
import style from "./Transition.module.css";

function Transition() {
  return (
    <div className={style.mainContainer}>
      <div className="pt-20">
        <table className={style.table}>
          <tr>
            <td>Main Balance -</td>
            <td>0 Units</td>
          </tr>
        </table>
        <div className={`${style.list} flex justify-center items-center`}>
          <p>There is no list</p>
        </div>
        <div className="flex flex-col w-full items-center">
          <a href="/transition/deposit" className={`${style.button} btn bg-red-700 text-white`}>
            Deposit
          </a>
          <a href="/transition/withdraw" className={`${style.button} btn bg-red-700 text-white`}>
            Withdraw
          </a>
        </div>
      </div>
    </div>
  );
}

export default Transition;
