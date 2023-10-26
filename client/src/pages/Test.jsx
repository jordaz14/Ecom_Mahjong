import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

import CreateCarousel from "../components/CreateCarousel";
import PageCarousel from "../components/PageCarousel";

function Test() {
  const Token = cookies.get("TOKEN");

  const [Request, GetRequest] = useState("Awaiting input");

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get("http://localhost:5000/test", {
          headers: {
            authorization: Token,
          },
        });
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
