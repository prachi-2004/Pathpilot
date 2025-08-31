import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow-md hover:bg-indigo-500 transition"
    >
      {children}
    </button>
  );
};

export default Button;
