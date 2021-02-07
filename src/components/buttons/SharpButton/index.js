import React from "react";

const SharpButton = ({ onClick, text, isBig, isSuccess, isDanger }) => {
  return (
    <div
      className={`sharp-button ${isBig ? "sharp-button-block" : null} ${
        isDanger ? "is-danger" : "is-success"
      }`}
      onClick={onClick}
    >
      <h3>{text}</h3>
    </div>
  );
};

export default SharpButton;
