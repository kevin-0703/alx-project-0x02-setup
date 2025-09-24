import { type ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({ label, size, shape }) => {
  return (
    <div>
      <button
        className={`btn ${size ? size : "medium"} ${
          shape ? shape : "rounded-md"
        }`}
      >
        {label}
      </button>
      <button
        className={`${size ? size : "small"} ${
          shape ? shape : "roundend-full"
        }`}
      >
        {label}
      </button>
      <button
        className={`${size ? size : "large"} ${shape ? shape : "rounded-sm"}`}
      >
        {label}
      </button>
    </div>
  );
};
export default Button;
