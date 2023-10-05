import React from "react";
import MahjongTile from "../assets/MahjongTile.png";
import TitleText from "../components/TitleText";

function About() {
  return (
    <>
      <img src={MahjongTile} className="h-[200px] mt-2 mx-auto"></img>
      <TitleText>Welcome to the Club</TitleText>
      <h1 className="text-gray-100 text-xl w-4/5 font-bold mx-auto my-auto">
        The Mahjong Social Club is a vibrant gathering place for enthusiasts of
        the ancient Chinese tile game. Here, players of all skill levels come
        together to enjoy friendly competitions, share strategies, and build
        lasting friendships. It's more than just a game; it's a tight-knit
        community where the rich cultural heritage of mahjong thrives.
      </h1>
    </>
  );
}

export default About;
