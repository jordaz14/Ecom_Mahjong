import React from "react";

function Button({ children, onClick, className, value }) {
  return (
    <>
      <button
        className={
          "bg-green-100 hover:bg-green-300 font-bold drop-shadow-lg md:text-2xl text-center " +
          className
        }
        onClick={onClick}
        value={value}
      >
        &nbsp;{children}&nbsp;
      </button>
    </>
  );
}

export default Button;
