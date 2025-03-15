import React from "react";

const Button = ({ bgColor, textColor, border, icon: Icon, copy }) => {
  return (
    <button
      className={`gap-4 inline-flex items-center text-sm px-6 py-3 rounded-md font-semibold 
        ${bgColor} ${textColor} ${border ? `border-[1px] ${border}` : ""}`}
    >
      {copy}
      {Icon && <Icon className="w-4 h-4" />}
    </button>
  );
};

export default Button;
