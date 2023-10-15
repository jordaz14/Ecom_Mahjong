import CreateCarousel from "../components/CreateCarousel";
import PageCarousel from "../components/PageCarousel";
import TitleText from "../components/TitleText";

function Checkout() {
    return (
        <>
        <CreateCarousel>
          <PageCarousel>
            <TitleText>Checkout below</TitleText>
          </PageCarousel>
        </CreateCarousel>
        </>
    );
  }

export default Checkout;