import React from "react";
import { useState } from "react";

import Plus from "../assets/plus.png";
import CloseIcon from "../assets/CloseIcon.png";

import Icon from "../components/Icon";
import ContentCard from "./ContentCard";
import Button from "./Button";

function EventRegister({ idNum }) {

  // Set state on toggle feature for event cards
  const [RegisterToggle, SetRegisterToggle] = useState({
    RegisterText: "",
    BgColor: "bg-gray-100",
    Desc: "hidden",
    OnClickToggle: false,
    Icon: Plus,
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
        Icon: Plus,
      });
    }
  };

  return (
    <>
      <div className="w-full md:w-2/3 mx-auto flex justify-around">
        <div className="w-3/4">
          <ContentCard
            className={`rounded-xl py-1 w-full -mr-6 md:h-14 justify-center md:text-2xl ${RegisterToggle.BgColor}`}
          >
            {`${RegisterToggle.RegisterText} Meetup # ${idNum}`}
          </ContentCard>
          <div className={`bg-gray-100 py-2 rounded-xl ${RegisterToggle.Desc}`}>
            <h2 className="font-bold md:text-2xl">{`Location ${idNum}`}</h2>
            <p className="md:text-2xl">{`Description ${idNum}`}</p>
            <a href="https://www.meetup.com/">
              <Button>RSVP</Button>
            </a>
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
