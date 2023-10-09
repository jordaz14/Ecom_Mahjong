import React from "react";

import ContentCard from "../components/ContentCard";
import TitleText from "../components/TitleText";

import Insta from "../assets/InstaIcon.svg";
import LinkedIn from "../assets/Linkedin.png";
import Email from "../assets/EmailIcon.png";

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
          <div className="bg-green-100 hover:bg-green-300 rounded-full w-12 h-12 flex md:h-20 md:w-20">
            <img src={Insta} className="w-3/5 h-3/5 mx-auto my-auto" />
          </div>
        </a>
        <a href="https://www.linkedin.com/feed/">
          <div className="bg-green-100 hover:bg-green-300 rounded-full w-12 h-12 flex md:h-20 md:w-20">
            <img src={LinkedIn} className=" w-3/5 h-3/5 mx-auto my-auto" />
          </div>
        </a>
        <a href="mailto:mahjongsocial@gmail.com">
          <div className="bg-green-100 hover:bg-green-300 rounded-full w-12 h-12 flex md:h-20 md:w-20">
            <img src={Email} className=" w-3/5 h-3/5 mx-auto my-auto" />
          </div>
        </a>
      </section>
    </>
  );
}

export default Contact;
