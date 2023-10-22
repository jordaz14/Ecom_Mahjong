import React, { useState } from "react";
import axios from "axios";

import PageCarousel from "../components/PageCarousel";
import ContentCard from "../components/ContentCard";
import TitleText from "../components/TitleText";
import CreateCarousel from "../components/CreateCarousel";

function Register() {
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
        "http://localhost:5000/user-register",
        UserData
      );
      SetMessage(Response.data.Message);
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
          <TitleText>Create an account</TitleText>
          <ContentCard className="w-3/4 mx-auto py-2 px-4">
            <form onSubmit={handleSubmit} className="flex flex-col h-full">
              <label htmlFor="email" className="text-left md:text-2xl">
                Enter your email address:
              </label>
              <input
                type="email"
                id="email"
                value={Email}
                placeholder="user@email.com"
                onChange={(e) => SetEmail(e.target.value)}
              ></input>
              <label htmlFor="password" className="text-left md:text-2xl">
                Enter your password:
              </label>
              <input
                type={ShowPassword}
                id="password"
                value={Password}
                placeholder="password"
                onChange={(e) => SetPassword(e.target.value)}
              ></input>
              <div className="flex mt-2">
                <input
                  type="checkbox"
                  onClick={ShowPasswordToggle}
                  id="checkbox"
                ></input>
                <label
                  htmlFor="checkbox"
                  className="ml-2 text-left md:text-2xl"
                >
                  Show Password
                </label>
              </div>
              <button className="bg-green-100 hover:bg-green-300 font-bold drop-shadow-lg mt-2 md:text-2xl">
                Register
              </button>
            </form>
            <p>
              Already have an account?{" "}
              <a href="/login" className="font-bold">
                Log-In
              </a>
            </p>
          </ContentCard>
          <p className="text-white">{Message}</p>
        </PageCarousel>
      </CreateCarousel>
    </>
  );
}

export default Register;
