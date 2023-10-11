import React from "react";
import MahjongTile from "../assets/MahjongTile.png";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";

function About() {
  return (
    <>
      <section className="md:mt-[110px] lg:mt-[125px]">
        <img
          src={MahjongTile}
          className="h-[200px] my-4 mx-auto md:h-[250px] lg:h-[350px]"
        ></img>
        <TitleText>Welcome to the Club</TitleText>
        <BodyText>
          The Mahjong Social Club is a vibrant gathering place for enthusiasts
          of the ancient Chinese tile game. Here, players of all skill levels
          come together to enjoy friendly competitions, share strategies, and
          build lasting friendships. It's more than just a game; it's a
          tight-knit community where the rich cultural heritage of mahjong
          thrives.
        </BodyText>
      </section>
    </>
  );
}

export default About;
