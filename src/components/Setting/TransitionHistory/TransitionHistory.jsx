import React, { useState, useEffect, useContext } from "react";
import style from "./TransitionHistory.module.css";
import axios from "axios";
import { UserContext } from "../../routes/Router";
import lToken from "../../../services/Token";

function TransitionHistory() {
  const { VITE_APP_DOMAIN } = import.meta.env;
  const userData = useContext(UserContext);
  const [transactionHistories, setTransactionHistories] = useState([]);
  useEffect(() => {
    axios
      .get(`${VITE_APP_DOMAIN}/api/wallet/transaction-histories?user_id=${userData?.user_id}`, {
        method: "GET",
        headers: {
          authorization: lToken,
          accept: "application/json",
        },
      })
      .then((response) => {
        setTransactionHistories(response.data.data);
        if (response.status === "success") {
          console.log("success");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [`${VITE_APP_DOMAIN}/api/wallet/transaction-histories?user_id=${userData?.user_id}`]);

  return (
    <div className={style.mainContainer}>
      <div className={style.tableContainer}>
        <table className={`${style.table} text-center table sm:w-96 md:w-11/12 m-auto`}>
          <thead className=" text-white">
            <tr className="bg-red-700">
              <td className="bg-red-700">Date</td>
              <td className="bg-red-700">Amount</td>
              <td className="bg-red-700">Type</td>
              <td className="bg-red-700">Description</td>
            </tr>
          </thead>
          <tbody>
            {transactionHistories ? (
              transactionHistories.map((item) => (
                <tr
                  key={item.id}
                  className={`${item.type === "increase" ? "text-lime-600" : "text-red-600"}`}>
                  <td>{new Date(item.created_at).toLocaleDateString()}</td>
                  <td>{item.amount}</td>
                  <td>{item.type}</td>
                  <td>{item.note}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="bg-white h-96">
                  <p className="text-center text-black">There is no data</p>
                </td>
              </tr>
            )}
            {/* <tr>
            <td colSpan="4" className="bg-white h-96">
              <p className="text-center text-black">There is no data</p>
            </td>
          </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransitionHistory;
