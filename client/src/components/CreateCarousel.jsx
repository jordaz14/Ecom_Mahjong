import React from "react";

function CreateCarousel(props) {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-auto py-8">
        {props.children}
    </div>
  );
}

export default CreateCarousel;
