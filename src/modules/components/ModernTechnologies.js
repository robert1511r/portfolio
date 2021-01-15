import React from "react";
import Lottie from "react-lottie-player";

import animationData from "./ModernTechnologies.animation.json";

export const ModernTechnologies = () => {

  return (
    <Lottie
        loop
        animationData={animationData}
        play
    />
  );
};

export default ModernTechnologies;