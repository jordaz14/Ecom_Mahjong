import React from "react";
import { useState } from "react";

import Register from "../assets/RegisterIcon.png";
import CloseIcon from "../assets/CloseIcon.png";

import Icon from "../components/Icon";
import ContentCard from "./ContentCard";
import Button from "./Button";

function EventRegister({ IDNum }) {
  const [RegisterToggle, SetRegisterToggle] = useState({
    RegisterText: "",
    BgColor: "bg-gray-100",
    Desc: "hidden",
    OnClickToggle: false,
    Icon: Register,
  });

  const CheckOnClickToggle = () => {
    if (RegisterToggle.OnClickToggle == false) {
      SetRegisterToggle({
        RegisterText: "Register @ ",
        BgColor: "bg-green-100",
        Desc: "block",
        OnClickToggle: true,
        Icon: CloseIcon,
      });
    } else {
      SetRegisterToggle({
        RegisterText: "",
        BgColor: "bg-gray-100",
        Desc: "hidden",
        OnClickToggle: false,
        Icon: Register,
      });
    }
  };

  return (
    <>
      <div className="w-full md:w-2/3 mx-auto flex justify-around">
        <div className="w-3/4">
          <ContentCard
            className={
              "rounded-xl py-1 w-full -mr-6 md:h-14 justify-center md:text-2xl " +
              RegisterToggle.BgColor
            }
          >
            {RegisterToggle.RegisterText + "Meetup #" + IDNum}
          </ContentCard>
          <div className={"bg-gray-100 py-2 rounded-xl " + RegisterToggle.Desc}>
            <h2 className="font-bold">{"Location " + IDNum}</h2>
            <p>{"Description " + IDNum}</p>
            <Button>Buy Ticket</Button>
          </div>
        </div>
        <Icon
          img={RegisterToggle.Icon}
          onClick={CheckOnClickToggle}
          className={"md:mr-10"}
        ></Icon>
      </div>
    </>
  );
}

export default EventRegister;
