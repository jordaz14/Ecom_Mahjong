import TitleText from "../components/TitleText.jsx";
import PageCarousel from "../components/PageCarousel.jsx";

function LogIn() {
  return (
    <>
      <div className="h-screen snap-y snap-mandatory overflow-y-auto py-8">
        <PageCarousel className="md:w-2/3 mx-auto">
          <TitleText>This is a test </TitleText>
        </PageCarousel>
      </div>
    </>
  );
}

export default LogIn;
