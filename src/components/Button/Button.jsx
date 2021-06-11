import React from "react";
import "../../styles/tailwind.css";

export const Button = ({
  children,
  primary = false,
  onClick,
  backgroundColor = "#D1D5DB",
  color = "#1F2937",
}) => {
  const buttonStyles = {
    fontWeight: 700,
    padding: "10px 20px",
    border: 0,
    cursor: "pointer",
    display: "inline-block",
    lineHeight: 1,
    backgroundColor: primary ? "#2563EB" : backgroundColor,
    color: primary ? "#ffffff" : color,
  };
  return (
    <button
      type="button"
      onClick={onClick}
      style={buttonStyles}
      className="mr-3 ml-6"
    >
      {children}
    </button>
  );
};
