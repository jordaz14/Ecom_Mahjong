import React, { useState } from "react";

import ContentCard from "../components/ContentCard";
import TitleText from "../components/TitleText";

import Insta from "../assets/InstaIcon.svg";
import LinkedIn from "../assets/Linkedin.png";
import Email from "../assets/EmailIcon.png";
import Icon from "../components/Icon";

function Contact() {

  // Disable form submission
  const HandleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <TitleText>Contact Us</TitleText>
      <ContentCard className="w-3/4 mx-auto py-2 px-4 h-2/3">
        <form
          className="flex flex-col h-full justify-around"
          onSubmit={HandleSubmit}
        >
          <label htmlFor="email" className="text-left md:text-2xl">
            Email
          </label>
          <input type="email" id="email" placeholder="user@email.com"></input>
          <label htmlFor="text" className="text-left md:text-2xl">
            Message
          </label>
          <textarea
            id="text"
            className="h-3/4"
            placeholder="Type message..."
          ></textarea>
          <button className="bg-green-100 hover:bg-green-300 font-bold drop-shadow-lg mt-2 md:text-2xl">
            Submit
          </button>
        </form>
      </ContentCard>
      <section className="flex justify-around items-center mt-4">
        <a href="https://www.instagram.com/">
          <Icon img={Insta} className="md:h-20 md:w-20" />
        </a>
        <a href="https://www.linkedin.com/feed/">
          <Icon img={LinkedIn} className="md:h-20 md:w-20" />
        </a>
        <a href="mailto:mahjongsocial@gmail.com">
          <Icon img={Email} className="md:h-20 md:w-20" />
        </a>
      </section>
    </>
  );
}

export default Contact;
