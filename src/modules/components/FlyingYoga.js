import React from "react";
import Lottie from "react-lottie-player";

import animationData from "./FlyingYoga.animation.json";

export const FlyingYoga = () => {

  return (
    <Lottie
        loop
        animationData={animationData}
        play
    />
  );
};

export default FlyingYoga;