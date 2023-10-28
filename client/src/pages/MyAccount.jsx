import React from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

import CreateCarousel from "../components/CreateCarousel";
import PageCarousel from "../components/PageCarousel";
import TitleText from "../components/TitleText";
import Button from "../components/Button";

import User from "../assets/user.png";

function MyAccount() {
  const Logout = () => {
    cookies.remove("TOKEN");
    window.location.replace("/");
  };

  return (
    <>
      <CreateCarousel>
        <PageCarousel>
          <TitleText> My Account </TitleText>
          <img src={User} className="bg-green-100 rounded-full mx-auto h-[200px] mt-4"></img>
          <h1 className="text-white"> Welcome [user]! </h1>
          <p> Here you can change contact info, </p>
          <div className="mt-10 flex flex-col w-2/3 mx-auto h-[100px] justify-between">
          <Button className={"bg-white"}>Change my email</Button>
          <Button className={"bg-white"}>Change my password</Button>
          <Button onClick={Logout}>Log out</Button>
          </div>
        </PageCarousel>
      </CreateCarousel>
    </>
  );
}

export default MyAccount;
