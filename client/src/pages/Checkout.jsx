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
      const UserData = {
        Token: cookies.get("TOKEN"),
      };

      try {
        const request = await axios.post(
          "http://localhost:5000/get-cart",
          UserData
        );

        const RequestList = request.data;

        let CartTotal = 0;

        let CartList = RequestList.map((item, index) => {
          CartTotal = CartTotal + item.product_price * item.product_amount;
          return (
            <div className="flex justify-between">
              <p className="text-black">
                {item.product_name} x {item.product_amount}
              </p>
              <p className="text-black">
                ${item.product_price * item.product_amount}
              </p>
            </div>
          );
        });

        SetCartTotal(CartTotal);
        SetCartList(CartList);
      } catch (error) {
        console.error(error);
      }
    }

    GetFromCart();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <CreateCarousel>
        <PageCarousel>
          <TitleText>Your Items</TitleText>
          <ContentCard className="w-4/5 mx-auto">
            <div className="flex justify-between font-bold">
              <p>Product</p>
              <p>Amount</p>
            </div>
            <div>
              {CartList}
              <div className="flex justify-between font-bold">
                <p>Total</p>
                <p>${CartTotal}</p>
              </div>
            </div>
          </ContentCard>
        </PageCarousel>
        <PageCarousel>
          <TitleText>Your Info</TitleText>
          <ContentCard className="w-4/5 mx-auto h-fit">
            <form className="flex flex-col my-2">
              <h1 className="font-bold">Contact Information</h1>
              <input type="text" placeholder="Email" className="mb-2"></input>
              <h1 className="font-bold">Shipping Address</h1>
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
              <h1 className="font-bold">Payment Information</h1>
              <p className="mb-2"> To be implemented. </p>
              <Button onClick={handleSubmit}>Complete Order</Button>
            </form>
          </ContentCard>
        </PageCarousel>
      </CreateCarousel>
    </>
  );
}

export default Checkout;
