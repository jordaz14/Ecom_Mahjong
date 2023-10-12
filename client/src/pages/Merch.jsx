import CreateCarousel from "../components/CreateCarousel";
import PageCarousel from "../components/PageCarousel";
import TitleText from "../components/TitleText";

function Merch() {
    return (
        <>
        <CreateCarousel>
          <PageCarousel>
            <TitleText>Shop our merch below</TitleText>
          </PageCarousel>
        </CreateCarousel>
        </>
    );
  }

export default Merch;