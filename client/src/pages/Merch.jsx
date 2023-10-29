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

  useEffect(() => {
    // Gather items in cart to list on merch page
    async function FetchProducts() {
      try {
        const response = await axios.get(
          "http://localhost:5000/merch-products"
        );

        // Initialize responseList to list of data from response
        const responseList = response.data;

        // For every product in cart, return product name, path to photo file, description, and price
        let ProductList = responseList.map((products, index) => {
          return (
            <PageCarousel key={index}>
              <ContentCard className="mt-8 h-3/4 w-4/5 mx-auto md:w-1/3">
                <p className="text-black font-bold bg-green-300 my-2 md:text-3xl">
                  {products.product}
                </p>
                <div className="h-1/2 drop-shadow-md rounded-lg mx-auto md:h-3/5">
                  <img
                    src={`/products/${products.path}`}
                    className="object-cover h-full"
                  ></img>
                </div>
                <p className="text-black mt-2 md:text-2xl">
                  {products.description}
                </p>
                <div className="absolute inset-x-0 bottom-2">
                  <p className="text-black font-bold md:text-2xl">
                    ${products.price}
                  </p>
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
        // Return error if try fails
        console.error(error);
      }
    }

    FetchProducts();

    // Add item to cart once client clicks on 'Add to Cart' button
    async function AddToCart(e) {
      // If client not logged in, do nothing
      if (cookies.get("TOKEN") == undefined) {
        return;
      }

      // Create Cart info to submit to server
      const AddCartInfo = {
        ProdId: e.target.value,
        Token: cookies.get("TOKEN"),
      };

      // Submit cart info to add to cart
      try {
        const response = await axios.post(
          "http://localhost:5000/add-to-cart",
          AddCartInfo
        );
        console.log(response);
      } catch (error) {
        //Return error if try fails
        console.log(error);
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
