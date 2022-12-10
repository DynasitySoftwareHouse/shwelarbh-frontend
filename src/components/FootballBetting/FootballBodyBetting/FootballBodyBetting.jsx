import React from "react";
import style from "./FootballBodyBetting.module.css";

function FootballBodyBetting() {
  return (
    <div className={style.mainContainer}>
      <div className="text-end p-2">
        <p>ဘော်ဒီ/ဂိုးပေါင်း</p>
      </div>
      <div className="flex justify-center items-center mt-72">
        <p className="text-red-800">No Match</p>
      </div>
      <div className=" fixed bottom-0 pb-2 bg-slate-800 w-full h-16 pt-2">
        <div className="form-group flex justify-around h-12">
          <p className="w-36">ထိုးမည့်ပမာဏကိုထည့်ပါ</p>
          <input
            type="text"
            className="form-control rounded-xl mr-1 sm:w-52 md:w-full bg-slate-200"
          />
          <button className="btn rounded-full border bg-red-600 text-white">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default FootballBodyBetting;
