import React from "react";

const ColorDescription = () => {
  return (
    <div className="h-screen container bg-white text-black">
      <h1 className="text-center font-bold text-2xl">ColorDescription</h1>
      <div className="flex items-center px-5">
        <div className="w-20 h-20 bg-slate-500 rounded-full"></div>
        <p className="font-bold ml-7 text-xl">0%-25%</p>
      </div>
      <div className="flex items-center px-5 mt-3">
        <div className="w-20 h-20 bg-yellow-300 rounded-full"></div>
        <p className="font-bold ml-7 text-xl">25%-50%</p>
      </div>
      <div className="flex items-center px-5 mt-3">
        <div className="w-20 h-20 bg-lime-700 rounded-full"></div>
        <p className="font-bold ml-7 text-xl">50%-75%</p>
      </div>
      <div className="flex items-center px-5 mt-3">
        <div className="w-20 h-20 bg-blue-500 rounded-full"></div>
        <p className="font-bold ml-7 text-xl">75%-100%</p>
      </div>

      <div className="flex items-center px-5 mt-3">
        <div className="w-20 h-20 bg-red-600 rounded-full"></div>
        <p className="font-bold ml-7 text-xl">100%</p>
      </div>
      <div className="flex items-center px-5 mt-3">
        <div className="w-20 h-20 bg-cyan-300 rounded-full"></div>
        <p className="font-bold ml-7 text-xl">ဆတူ R</p>
      </div>
    </div>
  );
};

export default ColorDescription;
