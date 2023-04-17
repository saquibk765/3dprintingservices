import React from "react";

const Button = ({ styles, handleClick }) => (
  <button type="button" onClick={handleClick} className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
);

export default Button;
