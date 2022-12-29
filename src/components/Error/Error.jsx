import React from "react";
import error from "../../assets/404error.jpg";

function Error() {
  return (
    <div
      style={{
        height: "100vh",

        display: "flex",
        justifyContent: "center",
        alignItem: "center",
      }}>
      <img src={error} alt="" style={{ width: "100vw", height: "100%" }} />
    </div>
  );
}

export default Error;
