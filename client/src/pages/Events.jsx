import CreateCarousel from "../components/CreateCarousel";
import PageCarousel from "../components/PageCarousel";
import TitleText from "../components/TitleText";
import EventRegister from "../components/EventRegister";

function Events() {

  return (
    <>
      <CreateCarousel>
        <PageCarousel>
          <TitleText>October 2023</TitleText>
          <section className="flex flex-col h-3/4 justify-around mt-8">
           <EventRegister idNum="1">
           </EventRegister>
           <EventRegister idNum="2">
           </EventRegister>
           <EventRegister idNum="3">
           </EventRegister>
           <EventRegister idNum="4">
           </EventRegister>
          </section>
        </PageCarousel>
      </CreateCarousel>
    </>
  );
}

export default Events;
