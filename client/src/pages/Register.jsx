import PageCarousel from "../components/PageCarousel";
import ContentCard from "../components/ContentCard";
import TitleText from "../components/TitleText";

function Register() {
  return (
    <>
      <div className="h-screen snap-y snap-mandatory overflow-y-auto py-8">
        <PageCarousel className="md:w-2/3 mx-auto">
          <TitleText>Create an account</TitleText>
          <ContentCard className="w-3/4 mx-auto py-2 px-4">
            <form className="flex flex-col h-full">
              <label for="email" className="text-left md:text-2xl">
                Enter your email address:
              </label>
              <input
                type="email"
                id="email"
                placeholder="user@email.com"
              ></input>
              <label for="email" className="text-left md:text-2xl">
                Enter your password:
              </label>
              <input
                type="password"
                id="password"
                placeholder="password"
              ></input>
              <label for="email" className="text-left md:text-2xl">
                Confirm your password:
              </label>
              <input
                type="password"
                id="confirmpassword"
                placeholder="confirm password"
              ></input>
              <button className="bg-green-100 hover:bg-green-300 font-bold drop-shadow-lg mt-2 md:text-2xl">
                Register
              </button>
            </form>
            <p>
              Already have an account? <a href="/login">Log-In Here</a>
            </p>
          </ContentCard>
        </PageCarousel>
      </div>
    </>
  );
}

export default Register;
