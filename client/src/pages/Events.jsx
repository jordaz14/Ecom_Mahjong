import CreateCarousel from "../components/CreateCarousel";
import PageCarousel from "../components/PageCarousel";
import TitleText from "../components/TitleText";
import ContentCard from "../components/ContentCard";
import Icon from "../components/Icon";
import EventRegister from "../components/EventRegister";

import Plus from "../assets/plus.png";
function Events() {

  return (
    <>
      <CreateCarousel>
        <PageCarousel>
          <TitleText>October 2023</TitleText>
          <section className="flex flex-col h-3/4 justify-around mt-8">
           <EventRegister IDNum="1">
           </EventRegister>
           <EventRegister IDNum="2">
           </EventRegister>
           <EventRegister IDNum="3">
           </EventRegister>
           <EventRegister IDNum="4">
           </EventRegister>
          </section>
        </PageCarousel>
      </CreateCarousel>
    </>
  );
}

export default Events;
