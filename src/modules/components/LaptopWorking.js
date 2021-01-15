import React from "react";
import Lottie from "react-lottie-player";

import animationData from "./LaptopWorking.animation.json";

export const LaptopWorking = () => {

  return (
    <Lottie
        loop
        animationData={animationData}
        play
    />
  );
};

export default LaptopWorking;