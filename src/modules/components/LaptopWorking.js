import React from "react";
import Lottie from "react-lottie-player";

import animationData from "./LaptopWorking.animation.json";

export const LaptopWorking = (props) => {

  return (
    <Lottie
        loop
        animationData={animationData}
        play
        className={props.className}
    />
  );
};

export default LaptopWorking;