import React, { useEffect, useState } from "react";
import axios from "axios";

import CreateCarousel from "../components/CreateCarousel";
import PageCarousel from "../components/PageCarousel";

function Test() {
  const [Request, GetRequest] = useState("Awaiting input");

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get("http://localhost:5000/test");
        console.log(`Info about John: ${JSON.stringify(request.data.john)}`);
        GetRequest(JSON.stringify(request.data.john));
      } catch (error) {
        console.error(`ERROR: ${error}`);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <CreateCarousel>
        <PageCarousel>
          <p className="text-white">{Request}</p>
        </PageCarousel>
      </CreateCarousel>
    </>
  );
}

export default Test;
