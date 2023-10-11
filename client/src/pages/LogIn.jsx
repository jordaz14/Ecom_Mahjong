import React, { useState } from "react";

import CreateCarousel from "../components/CreateCarousel.jsx";
import TitleText from "../components/TitleText.jsx";
import PageCarousel from "../components/PageCarousel.jsx";
import ContentCard from "../components/ContentCard.jsx";

function LogIn() {
  const [ShowPassword, SetShowPassword] = useState("password");
  const ShowPasswordToggle = () => {
    if (ShowPassword == "password") {
      SetShowPassword("text");
    } else {
      SetShowPassword("password");
    }
  };
  return (
    <>
      <CreateCarousel>
        <PageCarousel className="md:w-2/3 mx-auto">
          <TitleText>Log in to your account</TitleText>
          <ContentCard className="w-3/4 mx-auto py-2 px-4">
            <form className="flex flex-col h-full">
              <label for="email" className="text-left md:text-2xl">
                Enter your email address:
              </label>
              <input
                type="email"
                id="Email"
                placeholder="user@email.com"
              ></input>
              <label for="email" className="text-left md:text-2xl">
                Enter your password:
              </label>
              <input
                type={ShowPassword}
                id="Password"
                placeholder="password"
              ></input>
              <div className="flex mt-2">
                <input
                  type="checkbox"
                  id="CheckPassword"
                  onClick={ShowPasswordToggle}
                ></input>
                <label for="checkbox" className="ml-2 text-left md:text-2xl">
                  Show Password
                </label>
              </div>
              <button className="bg-green-100 hover:bg-green-300 font-bold drop-shadow-lg mt-2 md:text-2xl">
                Log-In
              </button>
            </form>
            <p>
              Don't have an account?{" "}
              <a href="/register" className="font-bold">
                Register
              </a>
            </p>
          </ContentCard>
        </PageCarousel>
      </CreateCarousel>
    </>
  );
}

export default LogIn;
