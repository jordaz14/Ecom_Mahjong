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
      cookies.set("TOKEN", Response.data.Token, { path: "/" });
      if (Response.data.Message == "Login successful" ){
        window.location.replace("/");
      }
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
        <PageCarousel className="md:w-2/5 mx-auto">
          <TitleText>Log in to your account</TitleText>
          <ContentCard className="w-3/4 mx-auto py-2 px-4">
            <form onSubmit={handleSubmit} className="flex flex-col h-full">
              <label htmlFor="email" className="text-left md:text-2xl">
                Email
              </label>
              <input
                type="email"
                id="Email"
                value={Email}
                placeholder="user@email.com"
                onChange={(e) => SetEmail(e.target.value)}
              ></input>
              <label htmlFor="email" className="text-left md:text-2xl">
                Password
              </label>
              <input
                type={ShowPassword}
                id="Password"
                value={Password}
                placeholder="Type here..."
                onChange={(e) => SetPassword(e.target.value)}
              ></input>
              <div className="flex mt-2">
                <input
                  type="checkbox"
                  id="CheckPassword"
                  onClick={ShowPasswordToggle}
                ></input>
                <label htmlFor="checkbox" className="ml-2 text-left md:text-2xl">
                  Show Password
                </label>
              </div>
              <button className="bg-green-100 hover:bg-green-300 font-bold drop-shadow-lg mt-2 md:text-2xl">
                Log-In
              </button>
            </form>
            <p className="md:text-2xl mt-2">
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
