import React from "react";

function Icon({ img, className, onClick, onMouseEnter, onMouseLeave }) {
  return (
    <>
    <div className={'bg-green-100 hover:bg-green-300 rounded-full w-10 h-10 flex ' + className} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <img src={img} className="w-3/5 h-3/5 mx-auto my-auto" />
    </div>
    </>
  );
}

export default Icon;
