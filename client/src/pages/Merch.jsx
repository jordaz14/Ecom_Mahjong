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
            <PageCarousel key={index}>
              <>
                <ContentCard className="mt-2 h-3/4 w-4/5 mx-auto">
                  <p className="text-black font-bold">{products.product}</p>
                  <p className="text-black font-bold">${products.price}</p>
                  <img
                    src={`/products/${products.path}`}
                    className="h-30"
                  ></img>
                  <p className="text-black">{products.description}</p>
                  <Button onClick={AddToCart} value={products.product_id}>
                    Add to Cart
                  </Button>
                </ContentCard>
              </>
            </PageCarousel>
          );
        });

        SetProductList(ProductList);
      } catch (error) {
        console.error(error);
      }
    }
    FetchProducts();

    async function AddToCart(e) {
      console.log(e.target.value);

      const AddProduct = {
        ProdId: e.target.value,
      };

      try {
        const Response = await axios.post(
          "http://localhost:5000/add-to-cart",
          AddProduct
        );
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  return (
    <>
      <CreateCarousel>{ProductList}</CreateCarousel>
    </>
  );
}

export default Merch;
