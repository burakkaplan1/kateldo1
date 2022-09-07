import Swipe from "react-easy-swipe";
import { useState } from "react";

const Carousel = (props) => {
  const [imgIndex, setImageIndex] = useState(0);
  const [after, setAfter] = useState(imgIndex + 1);
  const burak = props.ImageArray;
  function onSwipeStart(event) {
    // console.log("Start swiping...", event);
  }

  function onSwipeMove(position, event) {
    // console.log(`Moved ${position.x} pixels horizontally`, event);
    // console.log(`Moved ${position.y} pixels vertically`, event);
  }

  function onSwipeEnd(event) {
    // console.log("End swiping...", event);
  }
  function onSwipeLeft(position, event) {
    console.log("swipe left");
    if (imgIndex == burak.length - 1) {
      setImageIndex(0);
      set;
    } else {
      setImageIndex(imgIndex++);
    }
    console.log(imgIndex);
  }

  return (
    <div className="w-[100vw] h-[100vh]">
      <Swipe
        onSwipeStart={onSwipeStart}
        onSwipeMove={onSwipeMove}
        onSwipeEnd={onSwipeEnd}
        onSwipeLeft={onSwipeLeft}
        className="w-[100vw] h-[100vh] overflow-y-hidden overflow-x-auto overscroll-contain flex items-center space-x-[2vw]"
      >
        <img src={burak[imgIndex - 1]} />
        <img src={burak[imgIndex]} />
        <img src={burak[imgIndex + 1]} />
        <span className="hidden">{props.imageArrayLength}</span>
        <span className="hidden">{props.imageArray}</span>
      </Swipe>
    </div>
  );
};

export default Carousel;
