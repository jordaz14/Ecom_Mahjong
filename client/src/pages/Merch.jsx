import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import CreateCarousel from "../components/CreateCarousel";
import PageCarousel from "../components/PageCarousel";
import TitleText from "../components/TitleText";
import ContentCard from "../components/ContentCard";
import Button from "../components/Button";

function Merch() {
  const [ProductList, SetProductList] = useState(null);

  useEffect(() => {
    async function FetchProducts() {
      try {
        const request = await axios.get("http://localhost:5000/merch-products");
        const RequestList = request.data;

        let ProductList = RequestList.map((products, index) => {
          return (
            <PageCarousel>
              <React.Fragment key={index}>
                <ContentCard className="mt-2 h-2/3 w-4/5 mx-auto">
                  <p className="text-black">{products.product}</p>
                  <p className="text-black">{products.description}</p>
                  <p className="text-black">${products.price}</p>
                  <Button>Add to Cart</Button>
                </ContentCard>
              </React.Fragment>
            </PageCarousel>
          );
        });

        SetProductList(ProductList);
      } catch (error) {
        console.error(error);
      }
    }
    FetchProducts();
  }, []);

  return (
    <>
      <CreateCarousel>{ProductList}</CreateCarousel>
    </>
  );
}

export default Merch;
