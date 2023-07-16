import React from "react";

//gif
import spinner from "../gif/spinner.gif";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
      }}
    >
      <img src={spinner} alt="spinner" />
    </div>
  );
};

export default Loader;
