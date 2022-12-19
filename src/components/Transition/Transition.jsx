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
      .get(`${VITE_APP_DOMAIN}/api/deposit-histories?sortColumn=id&sortDirection=desc&limit=20`, {
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
  }, []);

  return (
    <div className={style.mainContainer}>
      <div className="pt-10">
        <div className={`w-11/12 m-auto rounded-lg bg-slate-100 text-black text-xl px-10 py-5`}>
          <p>
            Main Balance -{" "}
            <span className={`text-2xl font-bold px-5`}>{userData?.wallet?.main_unit}</span> Units
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button className={`btn active bg-green-600 text-white m-3`}>Deposit histories</button>
          <button className={`btn bg-green-600 text-white m-3`}>Withdraw histories</button>
        </div>
        <div className={`${style.list} `}>
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
              {userTransaction ? (
                userTransaction?.data?.map((item) => (
                  <tr key={item.id}>
                    <td style={{ maxHeight: "50px" }}>{item.account_no}</td>
                    <td style={{ maxHeight: "50px" }}>{item.amount}</td>
                    <td style={{ maxHeight: "50px" }}>{item.payment_provider_name}</td>
                    <td style={{ maxHeight: "50px" }}>
                      {new Date(item?.created_at).toLocaleDateString()}
                    </td>
                    <td
                      style={{ maxHeight: "50px" }}
                      className={`${item.status === "approve" ? "text-lime-600" : "text-red-600"}`}>
                      {item.status}
                    </td>
                  </tr>
                ))
              ) : (
                <p>There is no list</p>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center w-full items-center">
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
