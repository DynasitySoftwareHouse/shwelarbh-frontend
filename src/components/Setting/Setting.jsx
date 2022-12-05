import React, { useState } from "react";
import styles from "./Setting.module.css";

function Setting() {
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    setShowModal(showModal ? false : true);
    console.log(showModal);
  };

  return (
    <div className={styles.mainContainer}>
      <div className="flex justify-center">
        <div className="flex flex-col mt-56">
          {/* Profile */}
          <div>
            <a href="/setting/profile" className="btn bg-transparent m-5 w-72">
              Profile
            </a>
          </div>
          {/* Transition history */}
          <div>
            <a href="/setting/transition" className="btn bg-transparent m-5 w-72">
              Transition History
            </a>
          </div>
          {/* Language */}
          <div>
            <a onClick={modalHandler} className="btn bg-transparent m-5 w-72">
              Language
            </a>
          </div>
          {/* Color Description */}
          <div>
            <a href="" className="btn bg-transparent m-5 w-72">
              Color Description
            </a>
          </div>
        </div>
      </div>
      {showModal ? <Modal /> : <None />}
    </div>
  );
}

export default Setting;

function Modal() {
  return (
    <div>
      <div style={{ width: "100vw", height: "100vh" }}>
        <div
          style={{
            width: "250px",
            height: "auto",
            backgroundColor: "#ffffff80",
            borderRadius: "20px",
          }}>
          <form action="" className="p-5">
            <ul class="py-3 bg-gray-100 rounded-xl">
              <li>
                <span class="block px-5 py-1 text-xs text-gray-400 font-bold">Menu Title</span>
              </li>
              <li>
                <a class="block px-5 py-3 rounded-lg text-gray-900 hover:bg-gray-200 active:bg-indigo-600 active:text-white outline-none cursor-            pointer">
                  First Menu Item
                </a>
              </li>
              <li>
                <a class="block px-5 py-3 rounded-lg text-gray-900 hover:bg-gray-200 active:bg-indigo-600 active:text-white outline-none cursor-pointer">
                  Second Menu Item
                </a>
              </li>
              <li>
                <a class="block px-5 py-3 rounded-lg text-gray-900 hover:bg-gray-200 active:bg-indigo-600 active:text-white outline-none cursor-pointer">
                  Third Menu Item
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}
function None() {
  <></>;
}
