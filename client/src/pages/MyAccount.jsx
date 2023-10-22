import React from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

import CreateCarousel from "../components/CreateCarousel";
import PageCarousel from "../components/PageCarousel";

import TitleText from "../components/TitleText";
import Button from "../components/Button";

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
          <p className="text-white"> Account Info </p>
          <Button onClick={Logout}>Log out</Button>
        </PageCarousel>
      </CreateCarousel>
    </>
  );
}

export default MyAccount;
