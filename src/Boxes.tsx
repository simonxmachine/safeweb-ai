import React from "react";
import { MouseEvent } from "react";

const handleClickEvent = (event: MouseEvent<HTMLDivElement>) => {
  alert(`Event type: ${event.type}`);
};

const Boxes = () => {
  return (
    <>
      <h1 className="mt-20">Hello World!</h1>

      <div
        onClick={handleClickEvent}
        className="container1 rotate-div mb-10 mt-10"
      >
        <h1>This is flexbox</h1>
        <h1>This is flexbox2</h1>
      </div>

      <div className="container2">
        <h1>This is grid fsafsafasfsaf </h1>
        <h1>This is grid faafsafsafasfs</h1>
      </div>
    </>
  );
};

export default Boxes;
