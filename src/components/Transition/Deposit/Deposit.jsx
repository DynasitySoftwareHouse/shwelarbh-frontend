import React, { useEffect, useState } from "react";
import style from "./Deposit.module.css";
import axios from "axios";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
function Deposit() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { VITE_APP_DOMAIN } = import.meta.env;
  const [announcement, setAnnouncement] = useState({});
  const lToken = localStorage.getItem("lToken");
  const [payments, setPayments] = useState([]);
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [sixDigits, setSixDigits] = useState("");
  const [paymentData, setPaymentData] = useState({});
  useEffect(() => {
    axios
      .get(`${VITE_APP_DOMAIN}api/admin/configuration-setting`, {
        method: "GET",
        headers: {
          authorization: lToken,
          accept: "application/json",
        },
      })
      .then((response) => {
        setAnnouncement(response.data.data);
        if (response.status === "success") {
          console.log("success");
        }
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${VITE_APP_DOMAIN}api/available-payment-providers`, {
        method: "GET",
        headers: {
          authorization: lToken,
          accept: "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        setPayments(response.data.data);
        if (response.status === "success") {
          console.log("success");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const depositSubmitHandler = (e) => {
    e.preventDefault();
  };

  const accountNameHandler = (e) => {
    setAccountName(e.target.value);
  };

  const accountNumberHandler = (e) => {
    setAccountNumber(e.target.value);
  };

  const transferAmountHandler = (e) => {
    setTransferAmount(e.target.value);
  };

  const sixDigitsHandler = (e) => {
    setSixDigits(e.target.value);
  };

  const author = {
    Authorization: lToken,
    Accept: "application/json",
  };

  const MySwal = withReactContent(Swal);
  return (
    <div className={style.mainContainer}>
      <div className={style.noticeSection}>
        <div className={style.noticeContainer}>
          <h1 className={style.titleNotice}>အကြံပြုချက်</h1>
          <p className={style.bodyNotice}>{announcement.payment_announcement_deposit}</p>
        </div>
      </div>
      <div className={style.bankSection}>
        <div className={`flex flex-wrap`}>
          <div className={style.bankContainer}>
            {payments ? (
              payments?.map((payment) => (
                // <a href="/transition/deposit/depositform" key={index}>
                //   <img src={payment.logo} alt="" className={`w-5/12`} />
                //   <p>{payment.name}</p>
                // </a>
                <button key={payment.id}>
                  <Button
                    style={{
                      width: "150px",
                      height: "150px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={(e, id) => {
                      setAnchorEl(event.currentTarget);

                      e.preventDefault();
                      axios
                        .request(
                          `${VITE_APP_DOMAIN}api/generate-admin-payment-account/${payment.id}`,
                          {
                            method: "GET",
                            headers: author,
                          }
                        )
                        .then((response) => {
                          setPaymentData(response);
                          console.log(paymentData);
                          if (response?.data?.status === "success") {
                            console.log("success");
                          }
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                    }}>
                    <img
                      src={payment.logo}
                      alt=""
                      className={`w-5/12`}
                      style={{ borderRadius: "10px" }}
                    />
                    <p style={{ textAlign: "center", marginTop: "10px" }}>{payment.name}</p>
                  </Button>

                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}>
                    {
                      <table className={`${style.depositForm}`}>
                        <thead>
                          <td colSpan="4">
                            <img
                              src={paymentData?.data?.data?.logo}
                              className={style.depositFormImage}
                              alt=""
                            />
                          </td>
                          <tr>
                            <td>Account Name</td>
                            <td>Account Number</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{paymentData?.data?.data?.name}</td>
                            <td>{paymentData?.data?.data?.account_no}</td>
                          </tr>
                        </tbody>
                      </table>
                    }
                    <form action="" className={`form-control`} onSubmit={depositSubmitHandler}>
                      <input
                        type="text"
                        autoComplete="off"
                        placeholder="Enter Account Name"
                        className={`w-11/12 p-2 bg-teal-100 rounded-lg m-auto my-2`}
                        value={accountName}
                        onChange={accountNameHandler}
                      />
                      <input
                        type="number"
                        autoComplete="off"
                        placeholder="Enter Account Number"
                        className={`w-11/12 p-2 bg-teal-100 rounded-lg m-auto my-2`}
                        value={accountNumber}
                        onChange={accountNumberHandler}
                      />
                      <input
                        type="number"
                        autoComplete="off"
                        placeholder="Enter Transfer Amount"
                        className={`w-11/12 p-2 bg-teal-100 rounded-lg m-auto my-2`}
                        value={transferAmount}
                        onChange={transferAmountHandler}
                      />
                      <input
                        type="text"
                        autoComplete="off"
                        placeholder="Enter Last 6 Digits"
                        className={`w-11/12 p-2 bg-teal-100 rounded-lg m-auto my-2`}
                        value={sixDigits}
                        onChange={sixDigitsHandler}
                      />

                      <button
                        onClick={() => {
                          axios
                            .post(
                              `${VITE_APP_DOMAIN}api/deposit`,
                              {
                                amount: Number(transferAmount),
                                account_no: accountNumber,
                                account_name: accountName,
                                transaction_no: sixDigits,
                                payment_account_id: paymentData?.data?.data?.id,
                                currency_code: "MMK",
                                is_crypto: 0,
                                remark: "hello",
                              },
                              {
                                method: "POST",
                                headers: author,
                              }
                            )
                            .then((response) => {
                              if (response.status === "success") {
                                MySwal.fire({
                                  title: <p className="text-lime-600">Success</p>,
                                  text: "Deposit Success Please Wait Confirmation",
                                  icon: "success",
                                  confirmButtonText: "ok",
                                });
                                console.log("success");
                              }
                            })
                            .catch((error) => {
                              MySwal.fire({
                                title: <p className="text-red-600">Error</p>,
                                text: error?.response?.data?.message,
                                icon: "error",
                                confirmButtonText: "ok",
                              });
                              handleClose();
                              console.log(error?.response?.data?.message);
                            });
                        }}
                        className={`btn bg-teal-300 text-black w-10/12 m-auto mt-2`}>
                        ငွေဖြည့်မည်
                      </button>
                    </form>
                  </Menu>
                </button>
              ))
            ) : (
              <div>
                <p>There is no data</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deposit;
