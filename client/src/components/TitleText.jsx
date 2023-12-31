import React from "react";

function TitleText(props) {
  return (
    <>
      <h1 className={`text-green-100 text-2xl w-4/5 font-bold mx-auto my-2 md:text-4xl ${props.className}`}>
        {props.children}
      </h1>
    </>
  );
}

export default TitleText;
