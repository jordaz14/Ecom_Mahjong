import Icon from "../components/Icon";

import Cart from "../assets/Cart.png";
import Menu from "../assets/Menu.png";
import Close from "../assets/CloseIcon.png";

import CreateCarousel from "../components/CreateCarousel.jsx";
import PageCarousel from "../components/PageCarousel.jsx";
import Button from "../components/Button";

import { useState } from "react";

function Navbar() {
  const [IsMenu, SetIsMenu] = useState("hidden");
  const [IsCart, SetIsCart] = useState("hidden");
  return (
    <>
      <section id="Cart">
        <div
          className={"bg-green-100 bg-opacity-100 w-screen h-screen " + IsCart}
        >
          <div className="flex justify-end">
            <Icon
              img={Close}
              className={"flex-right"}
              onClick={() => SetIsCart("hidden")}
            />
          </div>
          <CreateCarousel>
            <PageCarousel>
              <h1>Your Cart</h1>
              <div className="bg-white w-[95%] mx-auto">
                <div className="flex justify-around">
                  <div className="bg-slate-100">
                  <p>Photo</p>
                  </div>
                  <div>
                    <p>T-Shirt</p>
                    <p>$9.99</p>
                  </div>
                  <div>
                    <div className="flex justify-around">
                    <Button className={'bg-slate-100 hover:bg-slate-200 rounded-full'}>+</Button>
                    <p className="mx-2">Count</p>
                    <Button className={'bg-slate-100 hover:bg-slate-200 rounded-full'}>-</Button>
                    </div>
                    <Button className={'bg-red-100 hover:bg-red-200 w-full'}>Delete</Button>
                  </div>
                </div>
              </div>
              <a href="/checkout">
              <Button>Check Out</Button>
              </a>
            </PageCarousel>
          </CreateCarousel>
        </div>
      </section>
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
            <Icon img={Cart} onClick={() => SetIsCart("block")} />
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
          <Icon img={Cart} onClick={() => SetIsCart("block")} />
        </nav>
      </section>
    </>
  );
}

export default Navbar;
