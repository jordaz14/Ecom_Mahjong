import CreateCarousel from "../components/CreateCarousel";
import PageCarousel from "../components/PageCarousel";
import TitleText from "../components/TitleText";
import ContentCard from "../components/ContentCard";
import Icon from "../components/Icon";

import Register from "../assets/RegisterIcon.png";
import { useState } from "react";

function Events() {
  const [RegisterToggle, SetRegisterToggle] = useState({
    RegisterText: "Meetup #1",
    BgColor: "bg-gray-100",
    Desc: "hidden",
  });
  return (
    <>
      <CreateCarousel>
        <PageCarousel>
          <TitleText>October 2023</TitleText>
          <section className="flex flex-col h-3/4 justify-around">
            <div className="w-full md:w-2/3 mx-auto flex justify-around">
              <div className="w-3/4">
                <ContentCard
                  className={
                    "rounded-xl py-1 w-full -mr-6 " + RegisterToggle.BgColor
                  }
                >
                  {RegisterToggle.RegisterText}
                </ContentCard>
                <div
                  className={
                    "bg-gray-100 py-2 rounded-xl " + RegisterToggle.Desc
                  }
                >
                  <h2 className="font-bold"> 51 Astor Place</h2>
                  <p>
                  The energetic ambiance sets the stage for a delightful game of Mahjong, where the vibrant atmosphere and friendly camaraderie combine for a truly enjoyable experience.
                  </p>
                </div>
              </div>
              <Icon
                img={Register}
                onMouseEnter={() => {
                  SetRegisterToggle({
                    RegisterText: "Register?",
                    BgColor: "bg-green-100",
                    Desc: "block",
                  });
                }}
                onMouseLeave={() => {
                  SetRegisterToggle({
                    RegisterText: "Meetup #1",
                    BgColor: "bg-gray-100",
                    Desc: "hidden",
                  });
                }}
              ></Icon>
            </div>
            <div className="md:w-2/3 mx-auto flex justify-around items-center">
              <ContentCard className="rounded-lg py-1 w-3/4">
                Meetup #1
              </ContentCard>
              <Icon img={Register}></Icon>
            </div>
            <div className="md:w-2/3 mx-auto flex justify-around items-center">
              <ContentCard className="rounded-lg py-1 w-3/4">
                Meetup #1
              </ContentCard>
              <Icon img={Register}></Icon>
            </div>
            <div className="md:w-2/3 mx-auto flex justify-around items-center">
              <ContentCard className="rounded-lg py-1 w-3/4">
                Meetup #1
              </ContentCard>
              <Icon img={Register}></Icon>
            </div>
          </section>
        </PageCarousel>
      </CreateCarousel>
    </>
  );
}

export default Events;
