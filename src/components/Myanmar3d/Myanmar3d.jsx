import React from "react";
import myanmar3d from "../../assets/icons/slide1.jpeg";
import style from "./Myanmar3d.module.css";

function Myanmar3d() {
  return (
    <div className={style.mainContainer}>
      <div className=" pt-24">
        <img
          src={myanmar3d}
          alt=""
          // style={{ width: "90%" }}
          className="md:w-7/12 sm:w-8/12 rounded-lg m-auto"
        />
      </div>
      <div className="flex justify-around">
        <a href="" className="btn bg-transparent mt-5 border-white rounded-full p-5">
          3D List(Record)
        </a>
        <a href="" className="btn bg-transparent mt-5 border-white rounded-full w-40 p-5">
          Lottery
        </a>
      </div>
      <div className="mt-10">
        <p className="text-center">3D Lucky Number</p>
        <div className="flex justify-center mt-10">
          <div
            className="flex flex-col justify-center items-center"
            style={{
              width: "100px",
              height: "100px",
              borderWidth: "1px",
              borderRadius: "20px",
              borderColor: "#fff",
            }}>
            <p className="text-center text-3xl font-bold">113</p>
            <p className="text-center">2022-06-28</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myanmar3d;
