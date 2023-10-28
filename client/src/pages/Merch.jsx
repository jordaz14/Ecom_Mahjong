import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

import CreateCarousel from "../components/CreateCarousel";
import PageCarousel from "../components/PageCarousel";
import ContentCard from "../components/ContentCard";
import Button from "../components/Button";

function Merch() {
  const [ProductList, SetProductList] = useState(undefined);
  const [Message, SetMessage] = useState(undefined);

  useEffect(() => {
    async function FetchProducts() {
      try {
        const request = await axios.get("http://localhost:5000/merch-products");
        const RequestList = request.data;

        let ProductList = RequestList.map((products, index) => {
          return (
            <PageCarousel key={index}>
              <ContentCard className="mt-8 h-3/4 w-4/5 mx-auto">
                <p className="text-black font-bold bg-green-300 my-2">
                  {products.product}
                </p>
                <div className="h-1/2 drop-shadow-md rounded-lg mx-auto">
                  <img
                    src={`/products/${products.path}`}
                    className="object-cover h-full"
                  ></img>
                </div>
                <p className="text-black mt-2">{products.description}</p>
                <div className="absolute inset-x-0 bottom-2">
                  <p className="text-black font-bold">${products.price}</p>
                  <Button onClick={AddToCart} value={products.product_id}>
                    Add to Cart
                  </Button>
                </div>
              </ContentCard>
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
      if (cookies.get("TOKEN") == undefined) {
        return;
      }

      const AddCartInfo = {
        ProdId: e.target.value,
        Token: cookies.get("TOKEN"),
      };

      try {
        const Response = await axios.post(
          "http://localhost:5000/add-to-cart",
          AddCartInfo
        );
        console.log(Response);
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
