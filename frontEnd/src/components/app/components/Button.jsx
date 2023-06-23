import React from "react";

function Button({ children , type }) {
  return (
    <>
      <button
        type={type}
        className="w-full bg-primary text-white py-2 px-4 rounded-lg active:scale-95 transition-all duration-100"
      >
        {children}
      </button>
    </>
  );
}

export default Button;
