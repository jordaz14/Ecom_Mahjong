import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

import CreateCarousel from "../components/CreateCarousel";
import PageCarousel from "../components/PageCarousel";
import TitleText from "../components/TitleText";
import ContentCard from "../components/ContentCard";
import Button from "../components/Button";

function Checkout() {
  const [CartList, SetCartList] = useState(null);
  const [CartTotal, SetCartTotal] = useState(null);

  useEffect(() => {
    async function GetFromCart() {
      // Get UserData to submit to server
      const UserData = {
        Token: cookies.get("TOKEN"),
      };

      // Send UserData to server
      try {
        const request = await axios.post(
          "http://localhost:5000/get-cart",
          UserData
        );

        // Initialize requestList to list of data from request
        const requestList = request.data;

        // Intialize CartTotal to 0, servers as counter for Total
        let CartTotal = 0;

        // For every item in cart, output product name, amount, and subtotal
        let CartList = requestList.map((item, index) => {
          // Recalc cart total
          CartTotal = CartTotal + item.product_price * item.product_amount;
          return (
            <div className="flex justify-between my-4" key={index}>
              <p className="text-black md:text-2xl">
                {item.product_name} x {item.product_amount}
              </p>
              <p className="text-black md:text-2xl">
                ${(item.product_price * item.product_amount).toFixed(2)}
              </p>
            </div>
          );
        });

        SetCartTotal(CartTotal.toFixed(2));

        SetCartList(CartList);
      } catch (error) {
        //Return error if try fails
        console.error(error);
      }
    }

    GetFromCart();
  }, []);

  // Disable form submit for checkout form
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <CreateCarousel>
        <PageCarousel>
          <TitleText>Your Items</TitleText>
          <ContentCard className="w-4/5 mx-auto md:w-1/3">
            <div className="flex justify-between font-bold bg-green-100 mt-2 md:text-2xl">
              <p>Item</p>
              <p>Amount</p>
            </div>
            <div>{CartList}</div>
            <div className="flex justify-between font-bold bg-green-100 mb-2 md:text-2xl">
              <p>Total</p>
              <p>${CartTotal}</p>
            </div>
          </ContentCard>
        </PageCarousel>
        <PageCarousel>
          <TitleText>Your Info</TitleText>
          <ContentCard className="w-4/5 mx-auto h-fit md:w-1/3">
            <form className="flex flex-col my-2">
              <h1 className="font-bold md:text-2xl">Contact Information</h1>
              <input type="text" placeholder="Email" className="mb-2"></input>
              <h1 className="font-bold md:text-2xl">Shipping Address</h1>
              <input
                type="text"
                placeholder="First Name"
                className="mb-2"
              ></input>
              <input
                type="text"
                placeholder="Last Name"
                className="mb-2"
              ></input>
              <input type="text" placeholder="Address" className="mb-2"></input>
              <input
                type="text"
                placeholder="Apartment, Suite, etc."
                className="mb-2"
              ></input>
              <input type="text" placeholder="City" className="mb-2"></input>
              <input type="text" placeholder="Country" className="mb-2"></input>
              <input
                type="text"
                placeholder="Postal Code"
                className="mb-2"
              ></input>
              <h1 className="font-bold md:text-2xl">Payment Information</h1>
              <p className="mb-2 md:text-2xl"> To be implemented. </p>
              <Button onClick={handleSubmit}>Complete Order</Button>
            </form>
          </ContentCard>
        </PageCarousel>
      </CreateCarousel>
    </>
  );
}

export default Checkout;
