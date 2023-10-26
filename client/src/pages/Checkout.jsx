import CreateCarousel from "../components/CreateCarousel";
import PageCarousel from "../components/PageCarousel";
import TitleText from "../components/TitleText";
import ContentCard from "../components/ContentCard";
import Button from "../components/Button";
import { useState } from "react";

function Checkout() {

const [Message, SetMessage] = useState(null);

const handleSubmit = (e) => {
  e.preventDefault();
  SetMessage("Thanks, your order has been submitted.")
}

  return (
    <>
      <CreateCarousel>
        <PageCarousel>
          <TitleText>Your Items</TitleText>
        </PageCarousel>
        <PageCarousel>
          <TitleText>Your Info</TitleText>
          <ContentCard className="w-3/4 mx-auto h-fit">
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
          <p className="text-white">{Message}</p>
        </PageCarousel>
      </CreateCarousel>
    </>
  );
}

export default Checkout;
