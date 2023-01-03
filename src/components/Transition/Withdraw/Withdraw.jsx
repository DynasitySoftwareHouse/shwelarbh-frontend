import React, { useEffect, useState } from "react";
import style from "./Withdraw.module.css";
import axios from "axios";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
function Withdraw() {
  const { VITE_APP_DOMAIN } = import.meta.env;
  const [anchorEl, setAnchorEl] = useState(null);
  const [announcement, setAnnouncement] = useState('');
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount,setAmount] = useState('')
  const [payments,setPayments] = useState([])
  const [paymentData, setPaymentData] = useState({});
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const withdrawSubmitHandler = (e) => {
    e.preventDefault();
  };

  const accountNameHandler = (e) => {
    setAccountName(e.target.value);
  };

  const accountNumberHandler = (e) => {
    setAccountNumber(e.target.value);
  };

  const amountHandler = (e)=>{
    setAmount(e.target.value)
  }
  const lToken = localStorage.getItem("lToken");
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
        
        }
      });
  }, []);
  useEffect(()=>{
    axios.get(`${VITE_APP_DOMAIN}api/available-payment-providers`,{
      method:'GET',
      headers:{
        authorization:lToken,
        accept:"application/json"
      }
    })
    .then(res=>{
       
      setPayments(res.data.data)
      
    })
    .catch(err=>console.log(err))

  },[])
  const MySwal = withReactContent(Swal);
  return (
    <div className={style.mainContainer}>
      <div className={style.noticeSection}>
        <div className={style.noticeContainer}>
          <h1 className={style.titleNotice}>အကြံပြုချက်</h1>
          <p className={style.bodyNotice}>{announcement.payment_announcement_withdraw}</p>
        </div>
      </div>
      <div className={style.bankSection}>
        <div className={`flex flex-wrap`}>
          <div className={style.bankContainer}>
          
            {
              payments.map((payment)=>{
                return(
                  <div key={payment.id}>
                    <Button 
                     id="basic-button"
                     aria-controls={open ? "basic-menu" : undefined}
                     aria-haspopup="true"
                     aria-expanded={open ? "true" : undefined}
                     onClick ={(e)=>{
                      e.preventDefault()
                      setAnchorEl(event.currentTarget);
                      axios.request(`${VITE_APP_DOMAIN}api/generate-admin-payment-account/${payment.id}`,{
                        method:'GET',
                       headers:{
                       authorization:lToken,
                       accept:"application/json"
      }
                      })
                      .then((response) => {
                        setPaymentData(response);
                       
                        if (response?.data?.status === "success") {
                          console.log("success");
                        }
                      })
                      .catch((error) => {
                        console.log(error);
                      });

                     }}
                    >
                    <img src={payment.logo} className={`w-5/12`}></img>
                    <p>{payment.name}</p>
                    </Button>
                    <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}>
                    <img
                              src={paymentData?.data?.data?.logo}
                              className={style.depositFormImage}
                              alt=""
                            />
                            <p>{paymentData?.data?.data?.name}</p>
                    <form action="" className={`form-control`} onSubmit={withdrawSubmitHandler}>
                    <input
                        type="number"
                        autoComplete="off"
                        placeholder="Enter ‌amount"
                        className={`w-11/12 p-2 bg-teal-100 rounded-lg m-auto my-2`}
                        value={amount}
                        onChange={amountHandler}
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
                        type="text"
                        autoComplete="off"
                        placeholder="Enter Account Name"
                        className={`w-11/12 p-2 bg-teal-100 rounded-lg m-auto my-2`}
                        value={accountName}
                        onChange={accountNameHandler}
                      />
                    
                            <button
                                     onClick={() => {
                          axios
                            .post(
                              `${VITE_APP_DOMAIN}api/vegas-withdraw`,
                              {
                                amount: amount,
                                account_no: accountNumber,
                                account_name: accountName,
                                payment_provider_name:payment.name,
                                payment_provider_id:payment.id,
                            
                              },
                              {
                                method: "POST",
                                headers: {
                                  authorization:lToken,
                                  accept:'application/json'
                                },
                              }
                            )
                            .then((response) => {
                              console.log(response);
                              console.log(response.data.status)
                              if (response.data.status === "success") {
                                MySwal.fire({
                                  title: <p className="text-lime-600">Success</p>,
                                  text: "withdraw submit successful",
                                  icon: "success",
                                  confirmButtonText: "ok",
                                }); 
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
                         
                            });
                        }}
                        className={`btn bg-teal-300 text-black w-10/12 m-auto mt-2`}>
                        ငွေထုတ်မည်
                      </button>
                    </form>
                  </Menu>
                  </div>

                )
               
              })
            }
            
       
          </div>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;
