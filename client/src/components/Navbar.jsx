import Icon from "../components/Icon";

import Cart from "../assets/Cart.png";
import Menu from "../assets/Menu.png";
import Close from "../assets/CloseIcon.png";

import CreateCarousel from "../components/CreateCarousel.jsx";
import PageCarousel from "../components/PageCarousel.jsx";

import { useState } from "react";

function Navbar() {
  const [IsMenu, SetIsMenu] = useState("hidden");
  return (
    <>
      <section id="Nav1" className="hidden md:block">
        <nav className="flex items-center justify-around w-2/3 mx-auto mt-2">
          <div className="flex justify-around items-center w-full mx-auto bg-green-800 rounded-md border-solid border-2">
            <a href="/" className="text-white">
              HOME
            </a>
            <a href="/events" className="text-white">
              EVENTS
            </a>
            <a href="/merch" className="text-white">
              MERCH
            </a>
            <a href="/login" className="text-white">
              LOG-IN
            </a>
          </div>
          <div className="bg-green-100 hover:bg-green-300 rounded-full w-6 h-6 flex md:h-10 md:w-10 ml-4">
            <Icon img={Cart} />
          </div>
        </nav>
      </section>
      <section id="Nav2" className="block md:hidden">
        <div
          className={"bg-green-100 bg-opacity-100 w-screen h-screen " + IsMenu}
        >
          <Icon
            img={Close}
            className={"ml-1"}
            onClick={() => SetIsMenu("hidden")}
          />
          <CreateCarousel>
            <PageCarousel>
              <div className="flex flex-col justify-around items-center h-full -mt-8 font-bold text-3xl">
                <a href="/" className="text-black">
                  HOME
                </a>
                <a href="/events" className="text-black">
                  EVENTS
                </a>
                <a href="/merch" className="text-black">
                  MERCH
                </a>
                <a href="/login" className="text-black">
                  LOG-IN
                </a>
              </div>
            </PageCarousel>
          </CreateCarousel>
        </div>
        <nav className="flex justify-between mx-2 mt-2">
          <Icon img={Menu} onClick={() => SetIsMenu("block")} />
          <Icon img={Cart} />
        </nav>
      </section>
    </>
  );
}

export default Navbar;
