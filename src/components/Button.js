import React from "react";

const Button = ({ isMainButton = false, value = "Submit" }) => {
  return (
    <button className={isMainButton ? "button-main" : "button-header"}>
      {value}
    </button>
  );
};

export default Button;