import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

import CreateCarousel from "../components/CreateCarousel.jsx";
import TitleText from "../components/TitleText.jsx";
import PageCarousel from "../components/PageCarousel.jsx";
import ContentCard from "../components/ContentCard.jsx";

function LogIn() {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [Message, SetMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    SetMessage(null);

    const UserData = {
      email: Email,
      password: Password,
    };
    try {
      const Response = await axios.post(
        "http://localhost:5000/user-login",
        UserData
      );
      console.log(Response.data);
      SetMessage(Response.data.Message);
      cookies.set("TOKEN", Response.data.Token, { path: "/" });
      /// window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

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
            <form onSubmit={handleSubmit} className="flex flex-col h-full">
              <label for="email" className="text-left md:text-2xl">
                Enter your email address:
              </label>
              <input
                type="email"
                id="Email"
                value={Email}
                placeholder="user@email.com"
                onChange={(e) => SetEmail(e.target.value)}
              ></input>
              <label for="email" className="text-left md:text-2xl">
                Enter your password:
              </label>
              <input
                type={ShowPassword}
                id="Password"
                value={Password}
                placeholder="password"
                onChange={(e) => SetPassword(e.target.value)}
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
          <p className="text-white">{Message}</p>
        </PageCarousel>
      </CreateCarousel>
    </>
  );
}

export default LogIn;
