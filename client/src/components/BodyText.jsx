import React from "react";

function BodyText(props) {
  return (
    <p className={`text-gray-100 text-xl w-4/5 font-bold mx-auto my-auto md:w-full md:text-3xl lg:text-4xl ${props.className}`}>{props.children}</p>
  );
}

export default BodyText;
