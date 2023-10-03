import React, { useState } from "react";

import PageCarousel from "../components/PageCarousel";
import ContentCard from "../components/ContentCard";
import MahjongTile from "../assets/MahjongTile.png";
import Modal from "../components/Modal";
import TitleText from "../components/TitleText";

import Founder1 from "../assets/Founder1.jpg";
import Founder2 from "../assets/Founder2.jpg";
import Founder3 from "../assets/Founder3.jpg";
import Founder4 from "../assets/Founder4.jpg";

function Home() {
  // Modal Toggle
  const [isOpen, setIsOpen] = useState(false);

  // List of Founders
  const FounderPhotoList = [Founder1, Founder2, Founder3, Founder4];
  const FounderNameList = ["Mark Davis", "Emil Robinson", "David Kim", "Alice Nguyen"]

  let FounderList = FounderPhotoList.map((photo, index) => {
    return (
      <>
        <ContentCard>
          <img
            src={photo}
            className="object-cover object-center h-4/5 rounded-sm drop-shadow-lg"
          ></img>
          <btn
            className="bg-green-100 hover:bg-green-300 font-bold drop-shadow-lg"
            onClick={() => setIsOpen(true)}
          >
            {FounderNameList[index]}
          </btn>
        </ContentCard>
      </>
    );
  });

  return (
    <>
      <div className="h-screen snap-y snap-mandatory overflow-y-auto py-8">
        <PageCarousel>
          <h1 className="text-green-600 -mt-3 leading-[150px] font-bold text-[170px] drop-shadow-[0_3px_1px_rgba(255,255,255,0.8)]">
            MAH<br></br>JONG
          </h1>
          <h1 className="text-gray-100 font-bold leading-[150px] text-[170px] drop-shadow-[0_3px_1px_rgba(0,0,0,0.8)]">
            SOC<br></br>IAL
          </h1>
        </PageCarousel>
        <PageCarousel>
          <img src={MahjongTile} className="h-[200px] mt-2 mx-auto"></img>
          <TitleText>Welcome to the Club</TitleText>
          <h1 className="text-gray-100 text-xl w-4/5 font-bold mx-auto my-auto">
            The Mahjong Social Club is a vibrant gathering place for enthusiasts
            of the ancient Chinese tile game. Here, players of all skill levels
            come together to enjoy friendly competitions, share strategies, and
            build lasting friendships. It's more than just a game; it's a
            tight-knit community where the rich cultural heritage of mahjong
            thrives.
          </h1>
        </PageCarousel>
        <PageCarousel>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <ContentCard>
              <img
                src={Founder1}
                className="object-cover object-center h-4/5 rounded-sm drop-shadow-lg"
              ></img>
            </ContentCard>
          </Modal>
          <TitleText>Meet the Founders</TitleText>
          <div className="grid grid-cols-2 grid-rows-2 gap-6 h-5/6 mt-4 w-5/6 mx-auto">
            {FounderList}
          </div>
        </PageCarousel>
        <PageCarousel>
          <TitleText>As featured in...</TitleText>
        </PageCarousel>
      </div>
    </>
  );
}

export default Home;
