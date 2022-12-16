import React, { useEffect, useState } from "react";
import style from "./Deposit.module.css";
import axios from "axios";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Deposit() {
  // mui
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { VITE_APP_DOMAIN } = import.meta.env;
  const [announcement, setAnnouncement] = useState({});
  const lToken = localStorage.getItem("lToken");
  const [payments, setPayments] = useState([]);
  useEffect(() => {
    axios
      .get(`${VITE_APP_DOMAIN}/api/admin/configuration-setting`, {
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
      .get(`${VITE_APP_DOMAIN}/api/available-payment-providers`, {
        method: "GET",
        headers: {
          authorization: lToken,
          accept: "application/json",
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setPayments(response.data.data);
        if (response.status === "success") {
          console.log("success");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const paymentMap = payment?.map((payment, index) => (
  // <div className="" key={index}>
  // </div>
  // ))
  console.log(lToken);
  const myFun = () => {
    axios
      .get(`${VITE_APP_DOMAIN}/api/generate-payment-account/2?agent_level=agent`, {
        method: "GET",
        authorization: lToken,
        accept: "application/json",
      })
      .then((response) => {
        if (response.status === "success") {
          console.log("success");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    myFun();
  };
  const depositSubmitHandler = (e) => {
    e.preventDefault();
  };

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
              payments?.map((payment, index) => (
                // <a href="/transition/deposit/depositform" key={index}>
                //   <img src={payment.logo} alt="" className={`w-5/12`} />
                //   <p>{payment.name}</p>
                // </a>
                <div key={index}>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}>
                    <img src={payment.logo} alt="" className={`w-5/12`} />
                    <p>{payment.name}</p>
                  </Button>
                  <Menu
                    id="basic-menu"
                    sx={{ width: 300 }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}>
                    <form action="" className={`form-control`} onSubmit={depositSubmitHandler}>
                      <input
                        type="text"
                        placeholder="Enter Account Name"
                        className={`w-11/12 p-2 bg-teal-100 rounded-lg m-auto my-2`}
                      />
                      <input
                        type="text"
                        placeholder="Enter Account Number"
                        className={`w-11/12 p-2 bg-teal-100 rounded-lg m-auto my-2`}
                      />
                      <input
                        type="text"
                        placeholder="Enter Transfer Amount"
                        className={`w-11/12 p-2 bg-teal-100 rounded-lg m-auto my-2`}
                      />
                      <input
                        type="text"
                        placeholder="Enter Last 6 Digits"
                        className={`w-11/12 p-2 bg-teal-100 rounded-lg m-auto my-2`}
                      />
                      <button className={`btn bg-teal-300 text-black w-10/12 m-auto mt-2`}>
                        ငွေဖြည့်မည်
                      </button>
                    </form>
                  </Menu>
                </div>
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
