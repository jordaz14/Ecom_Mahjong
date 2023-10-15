import React from "react";

function Button({ children, onClick, className }) {
  return (
    <>
      <button
        className={
          "bg-green-100 hover:bg-green-300 font-bold drop-shadow-lg md:text-2xl text-center " +
          className
        }
        onClick={onClick}
      >
        &nbsp;{children}&nbsp;
      </button>
    </>
  );
}

export default Button;
