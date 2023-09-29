
function PageCarousel(props) {
  return (
    <>
    <div className={'h-screen text-center overflow-hidden snap-start ' + props.className}>
      {props.children}
    </div>
    </>
  );
}

export default PageCarousel;
