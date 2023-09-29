import PageCarousel from "../components/PageCarousel";
import MahjongTile from "../assets/MahjongTile.png";
import Founder1 from "../assets/Founder1.jpg";
import Founder2 from "../assets/Founder2.jpg";
import Founder3 from "../assets/Founder3.jpg";
import Founder4 from "../assets/Founder4.jpg";

function Home() {
  return (
    <>
      <div className="h-screen snap-y snap-mandatory overflow-y-auto py-8">
        <PageCarousel>
          <h1 className="text-green-700 -mt-3 leading-[150px] font-bold text-[170px] drop-shadow-[0_3px_1px_rgba(255,255,255,0.8)]">
            MAH<br></br>JONG
          </h1>
          <h1 className="text-gray-100 font-bold leading-[150px] text-[170px] drop-shadow-[0_3px_1px_rgba(0,0,0,0.8)]">
            SOC<br></br>IAL
          </h1>
        </PageCarousel>
        <PageCarousel>
          <img src={MahjongTile} className="h-[200px] mt-2 mx-auto"></img>
          <h1 className="text-green-100 text-2xl w-4/5 font-bold mx-auto my-2">
            Welcome to the Club
          </h1>
          <h1 className="text-gray-100 text-xl w-4/5 font-bold mx-auto my-auto">
            The Mahjong Social Club is a vibrant gathering place for enthusiasts
            of the ancient Chinese tile game. Here, players of all skill levels
            come together to enjoy friendly competitions, share strategies, and
            build lasting friendships. It's more than just a game; it's a
            tight-knit community where the rich cultural heritage of mahjong
            thrives.
          </h1>
        </PageCarousel>
        <PageCarousel>
          <div className="grid grid-cols-2 grid-rows-2 gap-6 h-5/6 mt-8 w-5/6 mx-auto">
            <div className="bg-white rounded-sm">
              <img src={Founder1} className="object-cover h-full"></img>
            </div>
            <div className="bg-white rounded-sm">
              <img src={Founder2} className="object-cover h-full"></img>
            </div>
            <div className="bg-white rounded-sm">
              <img src={Founder3} className="object-cover h-full"></img>
            </div>
            <div className="bg-white rounded-sm">
              <img src={Founder4} className="object-cover h-full"></img>
            </div>
          </div>
        </PageCarousel>
      </div>
    </>
  );
}

export default Home;
