import React from "react";

import PageCarousel from "../components/PageCarousel";

import Founders from "../section/Founders";
import Banner from "../section/Banner";
import About from "../section/About";
import Contact from "../section/Contact";

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
          <Contact />
        </PageCarousel>
      </div>
    </>
  );
}

export default Home;
