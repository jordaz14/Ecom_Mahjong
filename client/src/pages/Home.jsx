import React, { useState } from "react";

import PageCarousel from "../components/PageCarousel";
import ContentCard from "../components/ContentCard";
import TitleText from "../components/TitleText";
import Founders from "../section/Founders";

import Banner from "../section/Banner";
import About from "../section/About";

function Home() {
  return (
    <>
      <div className="h-screen snap-y snap-mandatory overflow-y-auto py-8">
        <PageCarousel>
          <Banner />
        </PageCarousel>
        <PageCarousel>
          <About />
        </PageCarousel>
        <PageCarousel>
          <Founders />
        </PageCarousel>
        <PageCarousel>
          <TitleText>Contact Us</TitleText>
          <ContentCard className="w-3/4 mx-auto">
            <>
            <input type="text"></input>
            <p>Test</p>
            <p>Test</p>
            <p>Test</p>
            <p>Test</p>
            </>
          </ContentCard>
        </PageCarousel>
      </div>
    </>
  );
}

export default Home;
