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
        <PageCarousel className="md:w-2/3 mx-auto">
          <Banner />
        </PageCarousel>
        <PageCarousel className="md:w-2/3 mx-auto">
          <About />
        </PageCarousel>
        <PageCarousel className="md:w-2/3 mx-auto">
          <Founders />
        </PageCarousel>
        <PageCarousel className="md:w-2/3 mx-auto">
          <Contact />
        </PageCarousel>
      </div>
    </>
  );
}

export default Home;
