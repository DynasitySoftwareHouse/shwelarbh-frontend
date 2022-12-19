import React, { useState, useEffect, useContext } from "react";
import style from "./Transition.module.css";
import axios from "axios";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { UserContext } from "../routes/Router";

import lToken from "../../services/Token";

function Transition() {
  const { VITE_APP_DOMAIN } = import.meta.env;

  const [userTransaction, setUserTransaction] = useState({});

  const userData = useContext(UserContext);

  // console.log(userData);
  useEffect(() => {
    axios
      .get(`${VITE_APP_DOMAIN}/api/wallet/transaction-histories?user_id=${userData?.user_id}`, {
        methods: "GET",
        headers: {
          authorization: lToken,
          accept: "application/json",
        },
      })
      .then((response) => {
        setUserTransaction(response.data);
        console.log(response);
        if (response.data.status === "success") {
          console.log(response.data.message);
          // console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [`${VITE_APP_DOMAIN}/api/wallet/transaction-histories?user_id=${userData?.user_id}`]);

  return (
    <div className={style.mainContainer}>
      <div className="pt-10">
        <div className={`w-11/12 m-auto rounded-lg bg-slate-100 text-black text-xl px-10 py-5`}>
          <p>
            Main Balance -{" "}
            <span className={`text-2xl font-bold px-5`}>{userData?.wallet?.main_unit}</span> Units
          </p>
        </div>
        <div className={`${style.list} flex justify-center `}>
          <table className={`w-full bg-slate-100 table text-white`}>
            <thead>
              <tr>
                <td>Phone</td>
                <td>Amount</td>
                <td>Payment</td>
                <td>Date</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              {userTransaction ? <h1 className={`text-black`}>Hello</h1> : <p>There is no list</p>}
            </tbody>
          </table>
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
