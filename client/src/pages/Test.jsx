import React from "react";

import CreateCarousel from "../components/CreateCarousel";
import PageCarousel from "../components/PageCarousel";

function Test() {
  return (
    <>
      <CreateCarousel>
        <PageCarousel>
          <p className="text-white">
            Welcome to test page.
          </p>
        </PageCarousel>
      </CreateCarousel>
    </>
  );
}

export default Test;
