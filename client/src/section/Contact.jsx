import React from "react";

import ContentCard from "../components/ContentCard";
import TitleText from "../components/TitleText";

import Insta from "../assets/InstaIcon.svg";
import LinkedIn from "../assets/Linkedin.png";
import Email from "../assets/EmailIcon.png";
import Icon from "../components/Icon";

function Contact() {
  return (
    <>
      <TitleText>Contact Us</TitleText>
      <ContentCard className="w-3/4 mx-auto py-2 px-4 h-2/3">
        <form className="flex flex-col h-full justify-around">
          <label for="email" className="text-left md:text-2xl">
            Enter your email address:
          </label>
          <input type="email" id="email" placeholder="user@email.com"></input>
          <label for="text" className="text-left md:text-2xl">
            Enter your message:
          </label>
          <textarea
            id="text"
            className="h-3/4"
            placeholder="We'll be sure to get back to you!"
          ></textarea>
          <button className="bg-green-100 hover:bg-green-300 font-bold drop-shadow-lg mt-2 md:text-2xl">
            Submit
          </button>
        </form>
      </ContentCard>
      <section className="flex justify-around items-center mt-8">
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
