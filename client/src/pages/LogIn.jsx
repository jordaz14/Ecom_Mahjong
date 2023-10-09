import TitleText from "../components/TitleText.jsx";
import PageCarousel from "../components/PageCarousel.jsx";
import ContentCard from "../components/ContentCard.jsx";

function LogIn() {
  return (
    <>
      <div className="h-screen snap-y snap-mandatory overflow-y-auto py-8">
        <PageCarousel className="md:w-2/3 mx-auto">
          <TitleText>Log in to your account</TitleText>
        <ContentCard className="w-3/4 mx-auto py-2 px-4">
        <form className="flex flex-col h-full">
          <label for="email" className="text-left md:text-2xl">
            Enter your email address:
          </label>
          <input type="email" id="Email" placeholder="user@email.com"></input>
          <label for="email" className="text-left md:text-2xl">
            Enter your password:
          </label>
          <input type="password" id="Password" placeholder="password"></input>
          <input type="checkbox" id="CheckPassword" className="mt-2"></input>
          <button className="bg-green-100 hover:bg-green-300 font-bold drop-shadow-lg mt-2 md:text-2xl">
            Log-In
          </button>
        </form>
        <p>Don't have an account? <a href=
        "/register">Register Here</a></p>
      </ContentCard>
        </PageCarousel>
      </div>
    </>
  );
}

export default LogIn;
