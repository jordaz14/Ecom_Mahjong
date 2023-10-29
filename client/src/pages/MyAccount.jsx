import React from "react";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
const cookies = new Cookies();

import CreateCarousel from "../components/CreateCarousel";
import PageCarousel from "../components/PageCarousel";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
import Button from "../components/Button";

import User from "../assets/user.png";

function MyAccount() {
  // Gather token and decode contents
  const token = cookies.get("TOKEN");
  const decoded = jwtDecode(token);

  // Remove client token and redirect logged-out client to landing page
  const Logout = () => {
    cookies.remove("TOKEN");
    window.location.replace("/");
  };

  return (
    <>
      <CreateCarousel>
        <PageCarousel>
          <TitleText> My Account </TitleText>
          <img
            src={User}
            className="bg-green-100 rounded-full mx-auto h-[200px] mt-4"
          ></img>
          <div className="mt-4">
            <BodyText>{`Welcome ${decoded.UserId}!`}</BodyText>
            <BodyText> Manage your account settings below </BodyText>
          </div>
          <div className="mt-4 flex flex-col w-2/3 mx-auto h-[100px] justify-between md:w-1/3">
            <Button className={"bg-white rounded-md"}>Change my email</Button>
            <Button className={"bg-white rounded-md"}>Change my password</Button>
            <Button onClick={Logout} className={"rounded-md"}>Log out</Button>
          </div>
        </PageCarousel>
      </CreateCarousel>
    </>
  );
}

export default MyAccount;
