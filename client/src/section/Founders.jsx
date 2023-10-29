import React, { useState } from "react";

import ContentCard from "../components/ContentCard";
import Modal from "../components/Modal";
import TitleText from "../components/TitleText";

import Founder1 from "../assets/profiles/Founder1.jpg";
import Founder2 from "../assets/profiles/Founder2.jpg";
import Founder3 from "../assets/profiles/Founder3.jpg";
import Founder4 from "../assets/profiles/Founder4.jpg";

function Founders() {
  // Modal Toggle
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  // Lists for Founder (for better design, store as object)
  const FounderPhotoList = [Founder1, Founder2, Founder3, Founder4];
  const FounderNameList = [
    "Mark Davis",
    "Emil Robinson",
    "David Kim",
    "Alice Nguyen",
  ];
  const FounderDescList = [
    "Mark is an avid mahjong enthusiast, spending countless hours strategizing and enjoying the game with friends and family. When he's not arranging tiles, you'll often find him immersed in his other passions, like tending to his flourishing bonsai garden and exploring his culinary skills through gourmet cooking experiments.",
    "Emil has a deep appreciation for the game of Mahjong, finding both challenge and relaxation in its intricate gameplay. Beyond her love for Mahjong, she's a versatile individual with a range of hobbies that include painting vibrant canvases inspired by nature, practicing yoga for mindfulness and physical wellness, and volunteering at a local animal shelter to care for and find loving homes for rescue animals. Her diverse interests reflect her passion for personal growth, creativity, and compassion for others.",
    "David is an ardent Mahjong enthusiast, finding great pleasure in the strategic depth and social interaction the game offers. When he's not engrossed in Mahjong sessions with friends and family, you can often find him pursuing his other passions. He enjoys long hikes in the wilderness, capturing breathtaking landscapes through his photography, and dedicating time to his woodworking projects, crafting unique pieces of furniture and artistry that showcase his creativity and craftsmanship.",
    "Alice is a devoted fan of Mahjong, relishing the intellectual challenge and camaraderie the game provides. In addition to her passion for Mahjong, she indulges in various other hobbies that showcase her diverse interests. Alice is an avid gardener, nurturing a lush botanical haven in her backyard, a skilled baker known for whipping up delectable pastries, and an accomplished hiker who frequently explores the beauty of nature on long, picturesque trails.",
  ];

  // For every founder in the list, return a profile card containing founder
  let FounderList = FounderPhotoList.map((photo, index) => {
    return (
      <React.Fragment key={index}>
        <ContentCard className="justify-around">
          <img
            src={photo}
            className="object-cover object-center h-4/5 rounded-sm drop-shadow-lg"
          ></img>
          <button
            className="bg-green-100 hover:bg-green-300 font-bold drop-shadow-lg md:text-2xl"
            onClick={() => {
              setSelectedProfile({
                name: FounderNameList[index],
                photo: FounderPhotoList[index],
                desc: FounderDescList[index],
              });
              setIsOpen(true);
            }}
          >
            {FounderNameList[index]}
          </button>
        </ContentCard>
      </React.Fragment>
    );
  });

  return (
    <>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ContentCard className="md:w-3/5 mx-auto md:h-[700px]">
          {selectedProfile && (
            <>
              <img
                src={selectedProfile.photo}
                className="object-cover object-center h-4/5 rounded-sm drop-shadow-lg max-h-[600px] mt-2"
              ></img>
              <h2 className="text-black font-bold md:text-xl">
                {selectedProfile.name}
              </h2>
              <p className="text-black">{selectedProfile.desc}</p>
            </>
          )}
        </ContentCard>
      </Modal>
      <TitleText>Meet the Founders</TitleText>
      <div className="grid grid-cols-2 grid-rows-2 gap-6 h-5/6 mt-4 w-5/6 mx-auto">
        {FounderList}
      </div>
    </>
  );
}

export default Founders;
